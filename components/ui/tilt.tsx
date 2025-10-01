"use client";

import { useMotionValue, useSpring, motion } from "framer-motion";
import { useRef } from "react";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  max?: number; // max tilt degrees
};

export function Tilt({ children, className, max = 12 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max;
    const ry = (px - 0.5) * max;
    rotateX.set(rx);
    rotateY.set(ry);
    scale.set(1.02);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}


