"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

// Concept UI: Huge typography, stark contrast, grid lines, minimalist

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center border-b border-black/10 dark:border-white/10 pb-20 pt-32 px-6 lg:px-12 relative overflow-hidden">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-6xl mx-auto w-full z-10">
        <h1 className="text-[12vw] leading-[0.9] font-black tracking-tighter text-slate-900 dark:text-white mb-8">
          KAVAN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800 dark:from-slate-400 dark:to-slate-100">TRIVEDI</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-16 border-t border-black/10 dark:border-white/10 pt-8">
          <div className="flex flex-col gap-2 font-mono text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Gandhinagar, Gujarat</span>
            <a href="tel:+919054427757" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"><Phone className="w-4 h-4"/> +91 90544 27757</a>
          </div>
          
          <div className="flex gap-6">
            <a href="mailto:kavanmtrivedicomp@gmail.com" className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-blue-500 transition-colors">
              <Mail className="w-5 h-5" /> Email
            </a>
            <a href="https://linkedin.com/in/ka1-trivedi-17025k" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-blue-500 transition-colors">
              <LinkedinIcon className="w-5 h-5" /> LinkedIn
            </a>
            <a href="https://github.com/Ka1-Trivedi" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-blue-500 transition-colors">
              <GithubIcon className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}

export function Education() {
  return (
    <section className="py-24 px-6 lg:px-12 border-b border-black/10 dark:border-white/10 max-w-7xl mx-auto w-full">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-12">01 / Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
          <div className="md:col-span-8">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 group-hover:translate-x-4 transition-transform duration-500">Pandit Deendayal Energy University</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="text-sm font-mono text-slate-500 mt-4">CPI: 9.16 (Till 6th Semester)</p>
          </div>
          <div className="md:col-span-4 md:text-right font-mono text-sm text-slate-500 flex flex-col justify-between h-full">
            <span>July 2023 - July 2027</span>
            <span className="mt-2 md:mt-0">Gandhinagar, Gujarat</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="py-24 px-6 lg:px-12 border-b border-black/10 dark:border-white/10 max-w-7xl mx-auto w-full">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-12">02 / Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 font-mono text-sm text-slate-500 mb-4 md:mb-0">
            <span>15/05/26 - Ongoing</span>
            <span className="block mt-2">Gandhinagar, Gujarat</span>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div>
              <a href="https://drive.google.com/file/d/1e9ok69VMoMIKUSvYCnDMjfSF240SRKRy/view" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4">
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">iNavLabs Pvt. Ltd.</h3>
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </a>
              <p className="text-xl text-slate-600 dark:text-slate-400 mt-2 font-light">Software Development Intern</p>
            </div>
            
            <ul className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed list-none">
              <li className="relative pl-6">
                <span className="absolute left-0 top-3 w-2 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
                Delivered 2 client applications end-to-end as a Forward Deployment Engineer -- an ERP system and a vending-machine distributor/operator platform -- owning each client relationship from requirements through deployment.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-3 w-2 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
                Built several forward-deployment demo projects using the company's core product API to pitch to prospective leads and clients, including 2 proposals presented to PDEU; fixed critical bugs such as a cascading-delete error and an infinite-loop bug that risked burning through a large volume of API tokens.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-3 w-2 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
                <strong className="text-slate-900 dark:text-white font-semibold">AI Interview Platform:</strong> Built a fully customizable full-stack voice-based mock-interview platform (Next.js, Supabase) supporting any interview subject, adjustable difficulty, and 4 selectable interviewer personas; powered by a custom voice API achieving ~400ms latency, 68% faster than the ~1250ms industry standard, with automated grading.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-3 w-2 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
                <strong className="text-slate-900 dark:text-white font-semibold">Maa ERP:</strong> Delivered a fully customized, role-based ERP (Next.js, Supabase) for a mining & logistics client, digitizing their entire paper-based billing system with automated invoice generation, OCR-based challan auto-cropping, and centralized ledger management.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Projects() {
  const projects = [
    {
      title: "AlgoRank",
      desc: "Competitive Programming Analytics Platform",
      status: "Live Project",
      tech: "Next.js, Tailwind CSS, Appwrite, Recharts, SheetJS",
      year: "2026",
      link: "https://algo-rank.netlify.app/",
      bullets: [
        "Built a unified coding analytics dashboard aggregating LeetCode and Codeforces data with a custom AlgoScore, sortable leaderboards, and advanced filters.",
        "Implemented OAuth with invite onboarding, optimized API sync via caching, and developed Recharts-powered performance analytics with Excel export support."
      ]
    },
    {
      title: "Attendease",
      desc: "Full-Stack Attendance & IA Management System",
      status: "",
      tech: "Flask, SQLite, HTML, CSS, JavaScript, Jinja",
      year: "2024",
      link: "https://www.linkedin.com/posts/ka1-trivedi-17025k_attendease-flask-fullstackdevelopment-activity-7314213905247944704-G1WB",
      bullets: [
        "Built a role-based academic management platform for attendance and internal assessments.",
        "Implemented anti-cheating tools, flexible attendance marking, CSV export, and a responsive UI."
      ]
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 border-b border-black/10 dark:border-white/10 max-w-7xl mx-auto w-full">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-12">03 / Projects</h2>
        
        <div className="space-y-20">
          {projects.map((proj, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
              <div className="md:col-span-4 font-mono text-sm text-slate-500 mb-4 md:mb-0 flex flex-col gap-2">
                <span className="text-2xl text-slate-900 dark:text-white font-black">{proj.year}</span>
                <span className="uppercase text-xs tracking-wider">{proj.tech}</span>
              </div>
              
              <div className="md:col-span-8">
                <a href={proj.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 mb-4 group-hover:translate-x-4 transition-transform duration-500">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                  <div className="p-2 rounded-full border border-black/10 dark:border-white/10 group-hover:bg-blue-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </a>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 font-light">
                  {proj.desc} {proj.status && <span className="ml-2 text-sm font-mono bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded">{proj.status}</span>}
                </p>
                
                <ul className="space-y-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed list-none">
                  {proj.bullets.map((b, i) => (
                    <li key={i} className="relative pl-6">
                      <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-sm" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Skills() {
  const categories = [
    { name: "Programming Languages", skills: "C, C++, Java, Python, JavaScript, Node, JSP, Spring MVC" },
    { name: "Developer Tools", skills: "GitHub, VS Code, Jupyter Notebook, Postman, pgAdmin, MySQL Workbench" },
    { name: "Frameworks", skills: "Flask, Express.js, React.js" },
    { name: "Cloud/Databases", skills: "PostgreSQL, MySQL, SQLite" },
    { name: "Soft Skills", skills: "Problem Solving, Adaptability, Teamwork, Continuous Learning, Leadership, Communication" },
    { name: "Core Fundamentals", skills: "DSA, OOPs, DBMS, Software Engineering, Web Development, Advance JAVA, Cloud Computing, Big Data Analysis" }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 border-b border-black/10 dark:border-white/10 max-w-7xl mx-auto w-full">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-12">04 / Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="border-t border-black/10 dark:border-white/10 pt-4 group">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide group-hover:text-blue-500 transition-colors">{cat.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{cat.skills}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Achievements() {
  const items = [
    { text: "Team Leader -- Smart India Hackathon (SIH), Nodal Round Qualifier (2025). Led a team to develop a Data Sanitization Platform for E-Waste Circular Economy (PS 25070), focusing on secure data removal from discarded electronic devices to enable safe reuse and recycling." },
    { text: "NPTEL Ethical Hacking -- Elite + Gold (2025).", link: "https://drive.google.com/file/d/1Qjf75Fcthmi9VQkdza4sUjYOCdUom3ed/view" },
    { text: "2nd Place -- ACM Hackathon, PDEU (2024).", link: "https://drive.google.com/file/d/1vOIwjYWQbSy5SpVLCtWsS6HwPl3g0aD8/view" },
    { text: "LeetCode -- Solved 200+ DSA problems with a current rating of 1600+.", link: "https://leetcode.com/u/Ka1_trivedi/" }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 border-b border-black/10 dark:border-white/10 max-w-7xl mx-auto w-full">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-12">05 / Achievements & Leadership</h2>
        
        <ul className="space-y-6">
          {items.map((item, idx) => (
            <li key={idx} className="text-xl md:text-2xl font-light text-slate-800 dark:text-slate-200">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blue-500 transition-colors group">
                  {item.text} <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export function Certificates() {
  const certs = [
    { text: "AWS Skill Builder: AWS ML Engineer -- Associate Learning Plan (2026)", link: "https://drive.google.com/file/d/1gXBspwH5qbd6FU0ZDYdi7VJddE1sSS4P/view" },
    { text: "NPTEL: Ethical Hacking (2025)", link: "https://drive.google.com/file/d/1Qjf75Fcthmi9VQkdza4sUjYOCdUom3ed/view" },
    { text: "Harvard CS50's Introduction to Programming with Python (2022)", link: "https://drive.google.com/file/d/1RscR1ninPkTrW7MRkT8O_OexrqDSKT1w/view" }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full mb-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-12">06 / Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert, idx) => (
            <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="group block p-8 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-6 h-6 text-slate-900 dark:text-white" />
              </div>
              <p className="text-xl font-medium text-slate-900 dark:text-white mt-8">{cert.text}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
