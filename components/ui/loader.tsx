"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  const [t, setT] = useState(0); // elapsed seconds (0..1 normalized)
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Minimum show time ~5.5s
    const MIN_MS = prefersReduced ? 500 : 5500;

    const onLoad = () => {
      setTimeout(() => setDone(true), MIN_MS);
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    // Drive a simple timeline 0..1 for glow dynamics
    let raf = 0;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const normalized = Math.min(1, elapsed / MIN_MS);
      setT(normalized);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          role="status"
          aria-live="polite"
        >
          <div className="relative w-40 h-40">
            {/* Outer enhanced glow */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute inset-0 rounded-full" style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.0) 65%)"
            }} />
            {/* Arc reactor rings (simple) */}
            <motion.div
              className="absolute inset-0 rounded-full border-t border-white/25"
              style={{ maskImage: "radial-gradient(circle at center, transparent 42%, black 43%, black 57%, transparent 58%)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border-b border-white/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Core pulse */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/30"
              animate={{ boxShadow: ["0 0 40px 8px rgba(255,255,255,0.08)", "0 0 90px 18px rgba(255,255,255,0.16)", "0 0 40px 8px rgba(255,255,255,0.08)"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-20 text-sm text-white/70 tracking-widest"
          >
            Booting reactor…
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


