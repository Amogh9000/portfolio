"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, Cpu } from "lucide-react";

const stagger: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-[80svh] w-full flex items-center justify-center text-center">
      {/* Arc-reactor style glow behind the name */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="relative w-[28rem] h-[28rem] sm:w-[34rem] sm:h-[34rem]">
          {/* Core glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-white/5 blur-3xl" />
          {/* Inner pulse */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full border border-white/20"
            animate={{ boxShadow: ["0 0 60px 10px rgba(255,255,255,0.06)", "0 0 120px 20px rgba(255,255,255,0.12)", "0 0 60px 10px rgba(255,255,255,0.06)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
          />
          {/* Rotating rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-t border-white/25"
            style={{ maskImage: "radial-gradient(circle at center, transparent 42%, black 43%, black 57%, transparent 58%)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-6 rounded-full border-b border-white/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 liquid-hover">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
          <Cpu className="h-4 w-4 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-muted">AI / DS Student</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glow-text text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">
          <span className="liquid-text" data-text="Amogh Manjunath">Amogh Manjunath</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-base sm:text-lg text-muted">
          Designing intelligent systems and fluid digital experiences.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-3">
          {[
            { href: "https://github.com/Amogh9000", Icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/amogh-m-866323355/", Icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:amoghmanjunath2019@gmail.com", Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }, i) => (
            <motion.a
              key={label}
              custom={i}
              variants={stagger}
              initial="hidden"
              animate="visible"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group glass rounded-full px-4 py-2 inline-flex items-center gap-2 border border-white/10 hover:border-white/20 transition-transform will-transform"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm">{label}</span>
            </motion.a>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute left-1/2 -translate-x-1/2 bottom-6 text-muted text-xs flex flex-col items-center gap-2">
          <span>Scroll down</span>
          <span className="block h-5 w-px bg-white/30 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}


