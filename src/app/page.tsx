"use client";

import { HeroSection } from "@/components/hero-section";
import {
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  AchievementsSection,
  CertificatesSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100">
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificatesSection />

      <footer className="text-center py-10 border-t border-slate-100 dark:border-white/5 text-sm font-mono text-slate-400">
        Kavan Trivedi &copy; {new Date().getFullYear()}
      </footer>
    </main>
  );
}
