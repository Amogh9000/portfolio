"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

interface LightStreamProps {
  className?: string;
}

interface Particle {
  id: number;
  delay: number;
  size: number;
  opacity: number;
}

export function LightStream({ className = "" }: LightStreamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth following
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });
  
  // Transform values for light stream positioning
  const streamX = useTransform(springX, (value) => value);
  const streamY = useTransform(springY, (value) => value);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Generate light particles with consistent values
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: i * 0.1,
      size: (Math.sin(i * 0.5) + 1) * 2 + 2, // Deterministic size based on index
      opacity: (Math.cos(i * 0.3) + 1) * 0.4 + 0.2, // Deterministic opacity
    })), []
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main light stream */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: streamX,
          y: streamY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Core light */}
        <div className="relative light-stream-glow">
          <motion.div
            className="w-6 h-6 rounded-full bg-white/90 blur-sm"
            animate={{
              boxShadow: [
                "0 0 20px 5px rgba(255,255,255,0.6), 0 0 40px 10px rgba(255,255,255,0.3), 0 0 80px 20px rgba(255,255,255,0.1)",
                "0 0 30px 8px rgba(255,255,255,0.8), 0 0 60px 15px rgba(255,255,255,0.4), 0 0 120px 30px rgba(255,255,255,0.2)",
                "0 0 20px 5px rgba(255,255,255,0.6), 0 0 40px 10px rgba(255,255,255,0.3), 0 0 80px 20px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Inner core */}
          <div className="absolute inset-0 w-3 h-3 translate-x-1/2 translate-y-1/2 rounded-full bg-white blur-none" />
          
          {/* Outer glow rings */}
          <motion.div
            className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Light trail effect */}
          <motion.div
            className="absolute w-20 h-1 -translate-y-1/2 light-trail"
            style={{ left: "-80px", top: "50%" }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Trailing particles */}
        {particles.map((particle: Particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/60"
            style={{
              width: particle.size,
              height: particle.size,
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, -(particle.id * 5 + 50)], // Deterministic x movement
              y: [0, Math.sin(particle.id) * 30], // Deterministic y movement
              opacity: [particle.opacity, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Control panel that appears on hover */}
      <motion.div
        className="absolute top-4 right-4 pointer-events-auto"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="glass rounded-lg px-3 py-2 border border-white/20">
          <div className="flex items-center gap-2 text-xs text-white/80">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Light Stream Active</span>
          </div>
          <div className="mt-1 text-xs text-white/60">
            Move cursor to control
          </div>
        </div>
      </motion.div>

      {/* Ambient lighting effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03) 0%, transparent 50%)`
            : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
