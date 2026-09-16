"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Languages, User } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Navigation & Header */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-16">
          
          {/* Header Banners */}
          <div className="flex flex-col items-center gap-6">
            <a href="https://github.com/Ka1-Trivedi" target="_blank" rel="noopener noreferrer" className="w-full max-w-2xl hover:opacity-90 transition-opacity">
              <img src="https://capsule-render.vercel.app/api?type=transparent&fontColor=2ea043&fontSize=54&height=90&width=602&text=Hello!%20I'm%20Kavan" alt="Hello! I'm Kavan" className="w-full" />
            </a>
            <img src="https://readme-typing-svg.demolab.com?font=Caveat&weight=600&size=26&pause=1000&color=a371f7&center=true&vCenter=true&width=760&height=44&lines=Code.%20Learn.%20Improve.%20Repeat.;Learning%20never%20stops%2C%20and%20neither%20does%20the%20code." alt="Typing headlines" className="w-full max-w-2xl" />
          </div>

          {/* Text Description */}
          <div className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-center max-w-3xl mx-auto">
            Software engineer driven by curiosity. I enjoy building products, exploring AI and systems, and learning something new with every project.
          </div>

          {/* Connect With Me */}
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white text-center mb-8">🔗 Connect With Me</h3>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/ka1-trivedi-17025k/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" className="h-10" />
              </a>
              <a href="https://ka1-trivedi.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="https://img.shields.io/badge/Portfolio-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" className="h-10" />
              </a>
              <a href="mailto:kavanmtrivedicomp@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" className="h-10" />
              </a>
              <a href="https://github.com/Ka1-Trivedi" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" className="h-10" />
              </a>
            </div>
          </div>

          {/* Competitive Programming */}
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white text-center mb-8">🏆 Competitive Programming</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://leetcode.com/u/Ka1_trivedi/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" className="h-10" />
              </a>
              <a href="https://www.codechef.com/users/ka1_trivedi" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="https://img.shields.io/badge/CodeChef-5B4638?style=for-the-badge&logo=codechef&logoColor=white" alt="CodeChef" className="h-10" />
              </a>
              <a href="https://codeforces.com/profile/ka1_trivedi" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white" alt="Codeforces" className="h-10" />
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white text-center mb-8">🛠️ Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black" alt="C" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" alt="Keras" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=black" alt="Supabase" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white" alt="AWS" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=vscodium&logoColor=white" alt="VS Code" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" className="h-8 hover:scale-105 transition-transform" />
              <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" className="h-8 hover:scale-105 transition-transform" />
            </div>
          </div>

          {/* Personal & Contact Details */}
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white text-center mb-8">👤 Profile & Contact</h3>
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Primary Email</p>
                  <a href="mailto:kavanmtrivedicomp@gmail.com" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-violet-500 transition-colors truncate block">
                    kavanmtrivedicomp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Academic Email (PDPU)</p>
                  <a href="mailto:23bcp149@sot.pdpu.ac.in" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors truncate block">
                    23bcp149@sot.pdpu.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Phone</p>
                  <a href="tel:+919054427757" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors">
                    +91 90544 27757
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Plot No. 610/1, Sector 3-C, Gandhinagar, Gujarat, India - 382006
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Date of Birth</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    17 Dec, 2005
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Known Languages</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    English
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="flex flex-col items-center pb-20">
            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white text-center mb-8">📈 GitHub Activity</h3>
            <a href="https://github.com/Ka1-Trivedi" target="_blank" rel="noopener noreferrer" className="w-full max-w-4xl">
              <img className="w-full rounded-2xl shadow-xl hover:opacity-90 transition-opacity dark:bg-white/5" src="https://github-readme-activity-graph.vercel.app/graph?username=Ka1-Trivedi&bg_color=00000000&color=2ea043&line=2ea043&point=c9d1d9&area=true&hide_border=true" alt="activity graph" />
            </a>
            <p className="text-center mt-6 text-slate-500 italic">
              ⭐️ From <a href="https://github.com/Ka1-Trivedi" className="text-violet-500 hover:underline font-semibold">Ka1-Trivedi</a>
            </p>
          </div>

        </motion.div>
      </div>
    </main>
  );
}
