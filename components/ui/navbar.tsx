"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <div className="pointer-events-none fixed top-3 left-0 right-0 z-50 flex justify-center">
      <nav
        aria-label="Primary"
        className="pointer-events-auto glass rounded-full border border-white/10 px-3 py-2 shadow-glow backdrop-saturate-150"
      >
        <div className="flex items-center gap-2">
          <Link href="#" className="px-3 py-1 text-sm font-medium text-white/90 rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
            ◦ Amogh
          </Link>
          <div className="h-5 w-px bg-white/10 mx-1" />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              {item.label}
            </Link>
          ))}
          <div className="h-5 w-px bg-white/10 mx-1" />
          <motion.a
            href="mailto:amoghmanjunath2019@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white border border-white/15 hover:bg-white/20"
          >
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>
        </div>
      </nav>
    </div>
  );
}


