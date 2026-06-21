import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/resumeData";

const COMPANY_COLORS = {
  "Infosys Limited": { dot: "#a78bfa", badge: "bg-violet-500/10 text-violet-300 border-violet-500/25" },
  "Accenture":       { dot: "#67e8f9", badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25" },
  "Tata Consultancy Services (TCS)": { dot: "#4ade80", badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25" },
};

function getColor(company) {
  return COMPANY_COLORS[company] || { dot: "#a78bfa", badge: "bg-violet-500/10 text-violet-300 border-violet-500/25" };
}

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="section-eyebrow mb-3">Career</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
          4.5+ years across Infosys, Accenture & TCS — banking, fintech & internal tools.
        </p>
      </motion.div>

      {/* Accordion layout */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {experience.map((exp, i) => {
          const color = getColor(exp.company);
          const isOpen = expanded === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                isOpen ? "border-violet-500/30 shadow-glow-sm" : "hover:border-violet-500/20"
              }`}
              onClick={() => setExpanded(isOpen ? -1 : i)}
            >
              {/* Row header */}
              <div className="flex items-center gap-4 p-5 sm:p-6">
                {/* Timeline dot */}
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0 timeline-dot"
                  style={{ background: color.dot }}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${color.badge}`}>
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs text-slate-500 whitespace-nowrap">{exp.period}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 border-t border-violet-500/10 pt-4 ml-7">
                      <ul className="space-y-2.5">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: color.dot }}
                            />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="mt-8 max-w-4xl mx-auto glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4"
      >
        <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl bg-violet-500/10 border border-violet-500/20">
          🎓
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-slate-100">KIIT University</h4>
          <p className="text-xs text-slate-400 mt-0.5">B.Tech · Computer Science · 2016–2020 · <span className="text-violet-300 font-semibold">8.1 CGPA</span></p>
        </div>
        <span className="text-xs text-slate-500">Bhubaneswar, India</span>
      </motion.div>
    </section>
  );
}