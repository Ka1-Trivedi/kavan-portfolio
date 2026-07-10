"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const smoothTransition = {
  type: "spring",
  stiffness: 150,
  damping: 20,
  mass: 0.8,
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${isScrolled ? "pt-6 pointer-events-none" : "pt-6 md:pt-8 pointer-events-none"}`}>
      <motion.header
        layout
        transition={smoothTransition}
        className={`flex items-center justify-between pointer-events-auto transition-colors duration-500 ${
          isScrolled
            ? "px-2 py-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] w-max min-w-[300px] md:min-w-[400px]"
            : "px-6 md:px-12 py-4 rounded-none bg-transparent border-transparent shadow-none w-full max-w-7xl"
        }`}
      >
        <motion.div layout transition={smoothTransition} className={`flex items-center ${isScrolled ? "pl-2 gap-0" : "flex-1 gap-4"}`}>
          <motion.div layout transition={smoothTransition} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center overflow-hidden shadow-inner shrink-0">
             <span className="text-white font-serif italic font-bold text-lg">K</span>
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              width: isScrolled ? 0 : "auto",
              opacity: isScrolled ? 0 : 1,
              filter: isScrolled ? "blur(4px)" : "blur(0px)",
              scale: isScrolled ? 0.95 : 1,
            }}
            transition={smoothTransition}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            className="flex items-center"
          >
            <span className="font-serif italic font-bold text-xl hidden md:block dark:text-white">
              Kavan Trivedi
            </span>
          </motion.div>
        </motion.div>

        <motion.nav layout transition={smoothTransition} className={`flex items-center gap-6 md:gap-10 text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 ${isScrolled ? "px-6" : "justify-center"}`}>
          <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#resume" className="hover:text-black dark:hover:text-white transition-colors">Resume</a>
        </motion.nav>

        <motion.div layout transition={smoothTransition} className={`flex items-center gap-3 shrink-0 ${isScrolled ? "pr-1" : "flex-1 justify-end"}`}>
          <a 
            href="mailto:kavantrivedi@example.com" 
            className="group flex items-center bg-[#1a1a1a] dark:bg-white rounded-full p-1 overflow-hidden transition-all duration-300 w-[40px] hover:w-[125px] cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0 relative">
              <Image src="/ChatGPT Image Jul 9, 2026, 11_27_54 PM-Photoroom.png" alt="Avatar" fill className="object-cover scale-150 translate-y-1" />
            </div>
            <span className="text-white dark:text-black text-sm font-semibold whitespace-nowrap pl-2 pr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              Let's Talk
            </span>
          </a>
          <ThemeToggle />
        </motion.div>
      </motion.header>
    </div>
  );
}
