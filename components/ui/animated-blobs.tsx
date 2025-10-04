"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedBlobsProps {
  className?: string;
}

interface Blob {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  animationDelay: number;
  rotationSpeed: number;
}

export function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth following
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Generate deterministic blobs inspired by the shader patterns
  const blobs: Blob[] = [
    {
      id: 1,
      x: 20,
      y: 15,
      size: 300,
      color: "rgba(99, 102, 241, 0.15)", // Indigo - Flowing Waves
      animationDelay: 0,
      rotationSpeed: 20,
    },
    {
      id: 2,
      x: 70,
      y: 25,
      size: 250,
      color: "rgba(139, 92, 246, 0.12)", // Purple - Ether
      animationDelay: 2,
      rotationSpeed: -15,
    },
    {
      id: 3,
      x: 15,
      y: 70,
      size: 200,
      color: "rgba(236, 72, 153, 0.1)", // Pink - Shooting Stars
      animationDelay: 4,
      rotationSpeed: 25,
    },
    {
      id: 4,
      x: 80,
      y: 75,
      size: 180,
      color: "rgba(16, 185, 129, 0.08)", // Emerald - Wavy Lines
      animationDelay: 1,
      rotationSpeed: -20,
    },
    {
      id: 5,
      x: 50,
      y: 50,
      size: 320,
      color: "rgba(255, 255, 255, 0.03)", // White center blob
      animationDelay: 3,
      rotationSpeed: 10,
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        mouseX.set(x * 100);
        mouseY.set(y * 100);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Transform mouse position for blob interaction
  const mouseInfluenceX = useTransform(springX, (value) => (value - 50) * 0.3);
  const mouseInfluenceY = useTransform(springY, (value) => (value - 50) * 0.3);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            // Organic blob morphing animation
            borderRadius: [
              "60% 40% 65% 35% / 60% 35% 65% 40%",
              "40% 60% 35% 65% / 35% 60% 40% 65%",
              "55% 45% 40% 60% / 45% 55% 60% 40%",
              "60% 40% 65% 35% / 60% 35% 65% 40%",
            ],
            // Subtle floating animation
            x: [0, 10, -5, 0],
            y: [0, -8, 12, 0],
            // Rotation animation
            rotate: [0, blob.rotationSpeed, blob.rotationSpeed * 2, blob.rotationSpeed * 3, blob.rotationSpeed * 4],
            // Scale pulsing
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 15 + blob.animationDelay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.animationDelay,
          }}
        >
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-4 rounded-full"
            style={{
              background: `radial-gradient(circle, ${blob.color.replace('0.15', '0.25').replace('0.12', '0.2').replace('0.1', '0.15').replace('0.08', '0.12').replace('0.03', '0.06')} 0%, transparent 60%)`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
              scale: [0.8, 1.2, 0.9, 1.1, 0.8],
            }}
            transition={{
              duration: 8 + blob.animationDelay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: blob.animationDelay * 0.5,
            }}
          />
          
          {/* Mouse interaction layer */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${blob.color.replace('0.15', '0.3').replace('0.12', '0.25').replace('0.1', '0.2').replace('0.08', '0.15').replace('0.03', '0.1')} 0%, transparent 50%)`,
              x: mouseInfluenceX,
              y: mouseInfluenceY,
            }}
            animate={{
              opacity: isHovered ? 0.8 : 0,
              scale: isHovered ? 1.3 : 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}

      {/* Floating particles inspired by shader effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-white/20"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            x: [0, Math.sin(i) * 50, Math.cos(i) * 30, 0],
            y: [0, Math.cos(i) * 40, Math.sin(i) * 25, 0],
            opacity: [0.2, 0.8, 0.3, 0.6, 0.2],
            scale: [0.5, 1.2, 0.8, 1, 0.5],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Subtle overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent pointer-events-none" />
    </div>
  );
}
