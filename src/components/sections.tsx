"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const sectionHeader = (num: string, title: string) => (
  <div className="flex items-center gap-4 mb-14">
    <span className="font-mono text-xs text-violet-500 dark:text-violet-400 uppercase tracking-[0.3em]">{num}</span>
    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white">{title}</h2>
    <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
  </div>
);

/* ─── EDUCATION ──────────────────────────────────────────── */
export function EducationSection() {
  const schools = [
    { inst: "Pandit Deendayal Energy University", degree: "B.Tech — Computer Science & Engineering", score: "CGPA: 9.16", year: "2023 – 2027", color: "#8B5CF6" },
    { inst: "Aradhana Vidya Vihar", degree: "Gujarat Board of Higher Secondary Education", score: "75.39 %", year: "2023", color: "#06B6D4" },
    { inst: "St. Xavier's High School", degree: "Gujarat Board of Secondary Education", score: "91.00 %", year: "2021", color: "#10B981" },
  ];

  return (
    <section className="py-28 px-6 lg:px-20 max-w-7xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
        {sectionHeader("01", "Education")}
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 pl-10 space-y-14">
          {schools.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }}
              className="group relative"
            >
              {/* dot */}
              <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-[#050505] shadow-lg transition-transform group-hover:scale-125"
                style={{ background: s.color, boxShadow: `0 0 12px ${s.color}88` }} />

              <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-violet-400/40 transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{s.inst}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">{s.degree}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-sm text-slate-500">{s.year}</span>
                    <p className="font-bold mt-1" style={{ color: s.color }}>{s.score}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── EXPERIENCE ─────────────────────────────────────────── */
export function ExperienceSection() {
  const bullets = [
    "Delivered 2 client applications end-to-end as a Forward Deployment Engineer — an ERP system and a vending-machine platform — owning each client relationship from requirements through deployment.",
    "Built several forward-deployment demo projects using the company's core product API to pitch to prospective leads including 2 proposals for PDEU; fixed critical cascading-delete and infinite-loop bugs.",
    "AI Interview Platform — Built a full-stack voice-based mock-interview platform (Next.js, Supabase) with 4 selectable interviewer personas and ~400ms latency, 68% faster than the ~1250ms industry standard.",
    "Maa ERP — Delivered a role-based ERP (Next.js, Supabase) for a mining & logistics client, digitizing paper-based billing with automated invoice generation, OCR challan auto-cropping, and ledger management.",
  ];

  return (
    <section className="py-28 px-6 lg:px-20 max-w-7xl mx-auto border-t border-slate-100 dark:border-white/5">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
        {sectionHeader("02", "Experience")}

        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div className="space-y-2 font-mono text-sm text-slate-500">
            <p className="text-base font-bold text-slate-900 dark:text-white">15/05/26 – Ongoing</p>
            <p>Gandhinagar, Gujarat</p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 border border-slate-200 dark:border-white/[0.08] hover:border-violet-400/40 transition-all duration-300">
            <div className="flex justify-between items-start mb-6 flex-wrap gap-3">
              <div>
                <a href="https://drive.google.com/file/d/1e9ok69VMoMIKUSvYCnDMjfSF240SRKRy/view" target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 group/link">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover/link:text-violet-500 transition-colors">iNavLabs Pvt. Ltd.</h3>
                  <div className="p-2 rounded-full bg-slate-100 dark:bg-white/5 group-hover/link:bg-violet-500 group-hover/link:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
                <p className="text-slate-600 dark:text-slate-400 mt-1 font-light">Software Development Intern</p>
              </div>
            </div>

            <ul className="space-y-5">
              {bullets.map((b, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                  className="relative pl-5 text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── PROJECTS ───────────────────────────────────────────── */
export function ProjectsSection() {
  const projects = [
    {
      title: "AlgoRank",
      sub: "Competitive Programming Analytics Platform",
      year: "2026",
      status: "Live",
      link: "https://algo-rank.netlify.app/",
      tech: ["Next.js", "Tailwind CSS", "Appwrite", "Recharts", "SheetJS"],
      bullets: [
        "Built a unified coding analytics dashboard aggregating LeetCode and Codeforces data with a custom AlgoScore, sortable leaderboards, and advanced filters.",
        "Implemented OAuth with invite onboarding, optimized API sync via caching, and Recharts-powered analytics with Excel export.",
      ],
      gradient: "from-violet-500/10 to-pink-500/10",
      accent: "#8B5CF6",
    },
    {
      title: "Attendease",
      sub: "Full-Stack Attendance & IA Management System",
      year: "2024",
      status: "",
      link: "https://www.linkedin.com/posts/ka1-trivedi-17025k_attendease-flask-fullstackdevelopment-activity-7314213905247944704-G1WB",
      tech: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Jinja"],
      bullets: [
        "Built a role-based academic management platform for attendance and internal assessments.",
        "Implemented anti-cheating tools, flexible attendance marking, CSV export, and a responsive UI.",
      ],
      gradient: "from-cyan-500/10 to-blue-500/10",
      accent: "#06B6D4",
    },
  ];

  return (
    <section id="work" className="py-28 px-6 lg:px-20 max-w-7xl mx-auto border-t border-slate-100 dark:border-white/5">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
        {sectionHeader("03", "Projects")}

        <div className="space-y-32 mt-16">
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }}
                className={`flex flex-col lg:flex-row items-center gap-16 group ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Project Image Placeholder */}
                <a href={p.link} target="_blank" rel="noreferrer" className={`w-full lg:w-1/2 aspect-[4/3] rounded-3xl bg-gradient-to-br ${p.gradient} border border-slate-200 dark:border-white/[0.08] shadow-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center`} style={{ borderColor: `${p.accent}30` } as React.CSSProperties}>
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] dark:opacity-10 mix-blend-overlay" />
                  <span className="font-bold text-4xl opacity-10" style={{ color: p.accent }}>{p.title}</span>
                </a>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">{p.title}</h3>
                    {p.status && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">{p.status}</span>
                    )}
                  </div>
                  
                  <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">{p.sub}</p>
                  
                  <ul className="space-y-4">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="relative pl-6 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        <span className="absolute left-0 top-3 w-2 h-2 rounded-full" style={{ background: p.accent }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {p.tech.map(t => (
                      <span key={t} className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────── */
import { SkillsOrbit } from "./ui/skills-orbit";

import Image from "next/image";

export function SkillsSection() {
  const Icon = ({ src, alt }: { src: string, alt: string }) => (
    <Image src={src} alt={alt} width={24} height={24} className="object-contain" />
  );

  const languageItems = [
    { name: "C", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />, color: "#00599C" },
    { name: "C++", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />, color: "#00427f" },
    { name: "Java", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />, color: "#f89820" },
    { name: "Python", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />, color: "#3776AB" },
    { name: "JavaScript", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />, color: "#F7DF1E" },
    { name: "Node.js", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" />, color: "#339933" },
    { name: "JSP", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="JSP" />, color: "#c00" },
    { name: "Spring", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />, color: "#6DB33F" },
  ];

  const frameworkItems = [
    { name: "React.js", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />, color: "#61DAFB" },
    { name: "Next.js", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />, color: "#000000" },
    { name: "Express.js", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />, color: "#888888" },
    { name: "Flask", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />, color: "#000000" },
  ];

  const dbCloudItems = [
    { name: "PostgreSQL", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />, color: "#336791" },
    { name: "MySQL", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />, color: "#4479A1" },
    { name: "SQLite", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" />, color: "#003B57" },
  ];

  const toolItems = [
    { name: "GitHub", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />, color: "#181717" },
    { name: "VS Code", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />, color: "#007ACC" },
    { name: "Jupyter", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" />, color: "#F37626" },
    { name: "Postman", icon: <span className="text-xl">🚀</span>, color: "#FF6C37" },
    { name: "pgAdmin", icon: <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="pgAdmin" />, color: "#336791" },
  ];

  const coreItems = [
    { name: "DSA", icon: <span className="text-xl">🧠</span>, color: "#EF4444" },
    { name: "OOPs", icon: <span className="text-xl">📦</span>, color: "#F59E0B" },
    { name: "DBMS", icon: <span className="text-xl">🗄️</span>, color: "#10B981" },
    { name: "Cloud", icon: <span className="text-xl">☁️</span>, color: "#3B82F6" },
  ];

  return (
    <section className="py-28 px-6 lg:px-20 max-w-7xl mx-auto border-t border-slate-100 dark:border-white/5 overflow-hidden">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
        {sectionHeader("04", "Technical Skills")}

        <div className="grid md:grid-cols-2 gap-y-16 gap-x-8">
          <SkillsOrbit category="Languages" items={languageItems} rx={160} ry={50} duration={20} />
          <SkillsOrbit category="Frameworks" items={frameworkItems} rx={140} ry={45} duration={15} />
          <SkillsOrbit category="DB & Cloud" items={dbCloudItems} rx={120} ry={40} duration={12} />
          <SkillsOrbit category="Tools" items={toolItems} rx={150} ry={45} duration={18} />
          <SkillsOrbit category="Core CS" items={coreItems} rx={130} ry={40} duration={14} />
        </div>
      </motion.div>
    </section>
  );
}

/* ─── ACHIEVEMENTS ───────────────────────────────────────── */
export function AchievementsSection() {
  const items = [
    { icon: "🏆", text: "Team Leader — Smart India Hackathon (SIH), Nodal Round Qualifier (2025). Led a team to develop a Data Sanitization Platform for E-Waste Circular Economy (PS 25070).", link: null },
    { icon: "🛡️", text: "NPTEL Ethical Hacking — Elite + Gold (2025).", link: "https://drive.google.com/file/d/1Qjf75Fcthmi9VQkdza4sUjYOCdUom3ed/view" },
    { icon: "🥈", text: "2nd Place — ACM Hackathon, PDEU (2024).", link: "https://drive.google.com/file/d/1vOIwjYWQbSy5SpVLCtWsS6HwPl3g0aD8/view" },
    { icon: "💻", text: "LeetCode — Solved 200+ DSA problems with a current rating of 1600+.", link: "https://leetcode.com/u/Ka1_trivedi/" },
  ];

  return (
    <section className="py-28 px-6 lg:px-20 max-w-7xl mx-auto border-t border-slate-100 dark:border-white/5">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
        {sectionHeader("05", "Achievements & Leadership")}

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-4 items-start">
                <div className="text-3xl mt-1 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="flex-1">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer"
                      className="text-slate-800 dark:text-slate-200 leading-relaxed hover:text-violet-500 dark:hover:text-violet-400 transition-colors flex items-start gap-2 group/link">
                      <span>{item.text}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">{item.text}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── CERTIFICATES ───────────────────────────────────────── */
export function CertificatesSection() {
  const certs = [
    { title: "AWS ML Engineer — Associate Learning Plan", year: "2026", issuer: "AWS Skill Builder", link: "https://drive.google.com/file/d/1gXBspwH5qbd6FU0ZDYdi7VJddE1sSS4P/view", color: "#F59E0B" },
    { title: "Ethical Hacking (Elite + Gold)", year: "2025", issuer: "NPTEL", link: "https://drive.google.com/file/d/1Qjf75Fcthmi9VQkdza4sUjYOCdUom3ed/view", color: "#EF4444" },
    { title: "CS50's Introduction to Programming with Python", year: "2022", issuer: "Harvard University", link: "https://drive.google.com/file/d/1RscR1ninPkTrW7MRkT8O_OexrqDSKT1w/view", color: "#8B5CF6" },
  ];

  return (
    <section className="py-28 px-6 lg:px-20 max-w-7xl mx-auto border-t border-slate-100 dark:border-white/5">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
        {sectionHeader("06", "Certificates")}

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.a key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group block p-7 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] transition-all duration-300 relative overflow-hidden"
              style={{ borderColor: `${cert.color}30` } as React.CSSProperties}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: cert.color, transform: "translate(30%, -30%)" }} />

              <div className="flex justify-between items-start mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{ background: cert.color + "20", color: cert.color }}>
                  ✦
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="font-bold text-slate-900 dark:text-white mb-2 leading-snug">{cert.title}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
              <p className="font-mono text-xs mt-3" style={{ color: cert.color }}>{cert.year}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
