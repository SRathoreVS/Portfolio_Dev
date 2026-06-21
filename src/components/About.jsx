import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resumeData";

const HIGHLIGHTS = [
  { icon: "🏦", label: "Domain", value: "Fintech & Banking" },
  { icon: "🎓", label: "Education", value: "B.Tech · KIIT · 8.1 CGPA" },
  { icon: "📍", label: "Based In", value: "Mumbai, India" },
  { icon: "✉️", label: "Email", value: profile.email, link: `mailto:${profile.email}` },
];

const CORE_VALUES = [
  { title: "Performance First", desc: "35–50% perf gains through memoization, lazy loading & code splitting." },
  { title: "Test Coverage", desc: "85%+ unit/integration coverage with Jest, Vitest & Playwright." },
  { title: "Clean Architecture", desc: "Micro-frontend, Module Federation & domain-driven design patterns." },
  { title: "WCAG Compliant", desc: "Accessibility-first approach across all projects." },
];

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="section-eyebrow mb-3">About Me</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
          Crafting scalable products{" "}
          <span className="gradient-text">with purpose</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

        {/* Bio — 3 cols */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="lg:col-span-3 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          <p>
            Full-Stack Developer with <strong className="text-violet-300">4.5+ years</strong> of experience 
            delivering production-grade web applications across fintech & banking 
            for industry leaders including <strong className="text-slate-100">Infosys (UBS)</strong>, 
            <strong className="text-slate-100"> Accenture (OP Bank)</strong>, and 
            <strong className="text-slate-100"> TCS (Nordea Bank)</strong>.
          </p>
          <p>
            I specialize in React.js micro-frontend architecture, GraphQL + REST APIs, NestJS backends, 
            and automated CI/CD pipelines. My approach blends strong engineering fundamentals with an 
            eye for UX — turning complex requirements into clean, accessible, and maintainable experiences.
          </p>
          <p>
            Currently at Infosys, I led a migration from a monolithic UBS banking platform to a modular 
            React + Module Federation architecture, reducing feature delivery time by <strong className="text-violet-300">40%</strong> 
            and improving app performance by up to <strong className="text-violet-300">50%</strong>.
          </p>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {CORE_VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-4"
              >
                <h4 className="text-sm font-semibold text-violet-300 mb-1">{v.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info card — 2 cols */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="glass-strong rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-semibold text-slate-100 mb-4">Quick Details</h3>
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex items-start gap-3 text-sm">
                <span className="text-lg mt-0.5">{h.icon}</span>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{h.label}</div>
                  {h.link ? (
                    <a href={h.link} className="text-slate-200 hover:text-violet-300 transition-colors break-all">
                      {h.value}
                    </a>
                  ) : (
                    <div className="text-slate-200">{h.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="border-t border-violet-500/10 pt-4 mt-2">
              <a
                href={profile.linkedin}
                target="_blank" rel="noreferrer"
                className="btn-primary w-full text-center block"
              >
                Connect on LinkedIn →
              </a>
            </div>

            <a
              href="/SatyamRathore_Resume.pdf"
              download
              className="btn-outline w-full text-center block"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}