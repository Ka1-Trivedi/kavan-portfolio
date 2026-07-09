"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const { scrollY } = useScroll();

  // Shrink the width slightly on scroll, increase backdrop blur
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "500px"]);
  const navY = useTransform(scrollY, [0, 100], [0, 16]);

  return (
    <motion.header
      style={{ width: navWidth, y: navY }}
      className="fixed top-6 left-0 right-0 mx-auto z-50 flex items-center justify-between px-2 py-2 rounded-[2rem] bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300"
    >
      <div className="flex items-center gap-4 pl-2">
        {/* Placeholder for small avatar/logo */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center overflow-hidden shadow-inner">
           <span className="text-white font-serif italic font-bold text-sm">K</span>
        </div>
      </div>

      <nav className="flex items-center gap-6 md:gap-8 text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">
        <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
        <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
        <a href="#resume" className="hover:text-black dark:hover:text-white transition-colors">Resume</a>
      </nav>

      <div className="flex items-center pr-1">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
