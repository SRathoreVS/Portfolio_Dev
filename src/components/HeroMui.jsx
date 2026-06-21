import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resumeData";
import LiveStats, { usePageViews } from "./LiveStats";

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/SRathoreVS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

const BADGE_VARIANTS = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroMui() {
  const views = usePageViews();

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Extra glow under hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] -z-10 blur-3xl opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* ── LEFT ── */}
        <div className="flex-1 min-w-0 space-y-6 text-center lg:text-left">

          {/* Availability badge */}
          <motion.div
            variants={BADGE_VARIANTS} initial="initial" animate="animate"
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-violet-300 border border-violet-500/25 bg-violet-500/10 backdrop-blur"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Full-Stack opportunities · Mumbai, India
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            <span className="block text-slate-100">Satyam</span>
            <span className="block gradient-text">Rathore</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base font-medium tracking-wide"
          >
            Full-Stack Developer · React · Node.js · TypeScript
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Building scalable, high-performance web applications across fintech & banking. 
            Specialized in micro-frontend architecture, GraphQL APIs, and CI/CD pipelines 
            with 85%+ test coverage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary inline-flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/SatyamRathore_Resume.pdf" download className="btn-outline inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>

            {/* Social */}
            <div className="flex items-center gap-2 ml-1">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-violet-500/20 text-slate-400 hover:text-violet-300 hover:border-violet-500/50 transition-all bg-white/[0.03]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Live Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <LiveStats views={views} />
          </motion.div>
        </div>

        {/* ── RIGHT — Profile visual ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative float-slow">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-4 rounded-full blur-2xl opacity-40"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
            />
            {/* Gradient border ring */}
            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-[3px]"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #c084fc, #ec4899)' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#07080f]">
                <img
                  src="/profile.jpeg"
                  alt="Satyam Rathore"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badge — company */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 shadow-glow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-200">Infosys · UBS</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Senior Associate Consultant</div>
            </motion.div>

            {/* Floating badge — KIIT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -top-4 -left-4 glass rounded-2xl px-3 py-2"
            >
              <div className="text-[10px] text-slate-400">B.Tech · KIIT</div>
              <div className="text-xs font-bold text-violet-300">8.1 CGPA</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}