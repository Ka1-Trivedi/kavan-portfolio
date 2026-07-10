"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Background Ambient Glows for Glassmorphism contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-400/20 dark:bg-cyan-600/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
        
        {/* Massive Background Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none overflow-hidden"
        >
          <h1 className="text-[28vw] md:text-[18vw] font-bold leading-[0.8] tracking-tighter font-serif italic flex flex-col w-full items-center justify-center">
            <span className="text-slate-300 dark:text-slate-800 md:-ml-[25%]">Kavan</span>
            <span className="text-transparent [-webkit-text-stroke:2px_#cbd5e1] dark:[-webkit-text-stroke:2px_#1e293b] md:ml-[25%]">Trivedi</span>
          </h1>
        </motion.div>

        {/* Central Photo with Appearing/Disappearing Animation and Mask */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ 
            opacity: [0, 1, 1], 
            scale: [0.8, 1.05, 1],
            y: [50, -10, 0] 
          }}
          transition={{ duration: 2, times: [0, 0.6, 1], ease: "easeOut" }}
          className="relative z-20 w-[300px] h-[400px] md:w-[450px] md:h-[600px] flex items-center justify-center mt-12 md:mt-24"
        >
          <div className="relative w-full h-full">
            <Image
              src="/ChatGPT Image Jul 9, 2026, 11_27_54 PM-Photoroom.png"
              alt="Kavan Trivedi"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </motion.div>

        {/* Ultra Realistic Glassmorphism Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 md:bottom-20 z-30 flex flex-col items-center"
        >
          {/* The Glass Panel */}
          <div className="relative group overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            {/* Animated border gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-300 to-emerald-400 opacity-70 group-hover:opacity-100 animate-[spin_3s_linear_infinite]" style={{ borderRadius: 'inherit' }} />
            
            <div className="relative flex items-center gap-4 px-6 py-3 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="text-sm font-semibold tracking-widest uppercase text-slate-800 dark:text-slate-200">
                Software Development Engineer
              </span>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
              <a href="#work" className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">
                View Work <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
