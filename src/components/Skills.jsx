import React, { useState } from "react";
import { motion } from "framer-motion";

// Updated skills matching resume
const SKILL_SECTIONS = [
  {
    category: "Frontend",
    icon: "⚛️",
    color: "violet",
    items: ["React.js", "TypeScript", "Redux Toolkit", "React Query", "Next.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "StyledComponents", "Framer Motion"],
  },
  {
    category: "Backend & APIs",
    icon: "🔧",
    color: "cyan",
    items: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "JWT", "OAuth2", "SSO", "Microservices"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "emerald",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQL Queries", "Schema Design"],
  },
  {
    category: "Testing",
    icon: "🧪",
    color: "pink",
    items: ["Jest", "Vitest", "Playwright", "Cypress", "React Testing Library"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    color: "amber",
    items: ["GitHub Actions", "Jenkins CI/CD", "Docker", "Kubernetes", "AWS (S3, EC2)", "Azure DevOps", "SonarQube"],
  },
  {
    category: "Architecture & Other",
    icon: "🏗️",
    color: "violet",
    items: ["Module Federation", "Micro Frontends", "PWA", "WCAG 2.1 A11y", "i18n", "Highcharts", "Figma", "Storybook"],
  },
];

const COLOR_MAP = {
  violet: "border-violet-500/20 hover:border-violet-500/50 bg-violet-500/5 text-violet-300",
  cyan:   "border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5 text-cyan-300",
  emerald:"border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/5 text-emerald-300",
  pink:   "border-pink-500/20 hover:border-pink-500/50 bg-pink-500/5 text-pink-300",
  amber:  "border-amber-500/20 hover:border-amber-500/50 bg-amber-500/5 text-amber-300",
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="section-eyebrow mb-3">Toolkit</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
          Full-stack capabilities across modern frontend, backend, testing, and cloud infrastructure.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_SECTIONS.map((section, i) => {
          const pillColor = COLOR_MAP[section.color] || COLOR_MAP.violet;

          return (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-5 hover:shadow-glow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-sm font-semibold text-slate-200">{section.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all cursor-default ${pillColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Proficiency bar row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="mt-8 glass rounded-2xl p-6"
      >
        <h3 className="text-sm font-semibold text-slate-300 mb-5">Core Proficiency</h3>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
          {[
            { label: "React / TypeScript", pct: 95 },
            { label: "Node.js / NestJS", pct: 85 },
            { label: "GraphQL / REST APIs", pct: 88 },
            { label: "Testing (Jest / Playwright)", pct: 85 },
            { label: "CI/CD / Docker / K8s", pct: 78 },
            { label: "PostgreSQL / Redis", pct: 80 },
          ].map(({ label, pct }) => (
            <div key={label}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-400">{label}</span>
                <span className="text-violet-300 font-medium">{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #7c3aed, #c084fc)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}