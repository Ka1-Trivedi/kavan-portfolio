"use client";

import { Hero, Education, Experience, Projects, Skills, Achievements, Certificates } from "@/components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Certificates />
      
      <footer className="text-center py-12 text-slate-500 font-mono text-sm border-t border-black/10 dark:border-white/10">
        <p>Kavan Trivedi &copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
