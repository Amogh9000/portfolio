"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-gradient text-3xl sm:text-4xl font-semibold">Excited to collaborate on AI, Data, and beyond. Let's Connect</h2>
        <motion.a
          href="mailto:amoghmanjunath2019@gmail.com"
          className="mt-8 inline-flex items-center gap-2 glass rounded-full px-5 py-3 border border-white/10 will-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Email Amogh"
        >
          <Mail className="h-4 w-4" /> amoghmanjunath2019@gmail.com
        </motion.a>
      </div>
    </section>
  );
}


