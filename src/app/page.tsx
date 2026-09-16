"use client";

import { HeroSection } from "@/components/hero-section";
import {
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  AchievementsSection,
  CertificatesSection,
  AboutSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <CertificatesSection />

      <footer className="py-14 border-t border-slate-100 dark:border-white/5 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 dark:text-slate-400 font-mono">
          <div>
            <p className="font-bold text-slate-900 dark:text-white">Kavan Trivedi</p>
            <p className="text-xs text-slate-400 mt-1">Gandhinagar, Gujarat, India</p>
          </div>
          <div className="flex items-center gap-6 text-xs tracking-wider uppercase">
            <a href="mailto:kavanmtrivedicomp@gmail.com" className="hover:text-violet-500 transition-colors">Email</a>
            <a href="https://github.com/Ka1-Trivedi" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ka1-trivedi-17025k/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/u/Ka1_trivedi/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">LeetCode</a>
          </div>
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} Kavan Trivedi</p>
        </div>
      </footer>
    </main>
  );
}
