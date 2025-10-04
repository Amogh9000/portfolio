"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatedBlobs } from "./animated-blobs";

type Particle = { id: number; x: number; y: number; size: number; speed: number };

export function FluidBackground() {
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { scrollYProgress } = useScroll();
  const rotateA = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scaleA = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const scaleB = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (prefersReducedMotion) return;
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReducedMotion]);

  // center kept previously for readability; removed unused variable per lint
  const parallax = (depth: number) => {
    if (typeof window === "undefined") return "translate3d(0,0,0)";
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (mouse.x - cx) / Math.max(window.innerWidth, 1);
    const dy = (mouse.y - cy) / Math.max(window.innerHeight, 1);
    return `translate3d(${dx * depth * 50}px, ${dy * depth * 50}px, 0)`;
  };

  const particlesRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    const count = 28;
    const created = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.6 + 0.2,
    }));
    setParticles(created);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let raf = 0;
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: (p.y + p.speed * 0.2) % 100,
        }))
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [prefersReducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

      <motion.div
        aria-hidden
        className="absolute -left-24 -top-24 w-[36rem] h-[36rem] rounded-full bg-white/10 blur-3xl will-transform"
        style={{ rotate: rotateA, scale: scaleA, transform: prefersReducedMotion ? undefined : parallax(1.2) }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-16 top-1/4 w-[28rem] h-[28rem] rounded-full bg-gray-400/10 blur-3xl will-transform"
        style={{ rotate: rotateB, scale: scaleB, transform: prefersReducedMotion ? undefined : parallax(-0.8) }}
      />

      {/* Morphing blob with anime.js-generated path (fallback to CSS if disabled) */}
      <div className="absolute left-1/3 top-1/3 w-[20rem] h-[20rem] opacity-[0.08]">
        <div className="w-full h-full rounded-[60%_40%_65%_35%_/_60%_35%_65%_40%] bg-white blur-2xl animate-[blob_12s_ease-in-out_infinite]" />
      </div>

      {/* Animated blobs inspired by shader effects */}
      <AnimatedBlobs className="absolute inset-0" />

      {/* Film grain overlay */}
      <div className="noise-overlay" />

      <div ref={particlesRef} className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              filter: "blur(0.5px)",
              transition: "transform 0.2s linear",
              transform: prefersReducedMotion ? undefined : parallax(0.2),
            }}
          />)
        )}
      </div>
    </div>
  );
}


