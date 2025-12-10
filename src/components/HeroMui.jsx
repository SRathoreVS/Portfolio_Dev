import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resumeData";

export default function HeroMui() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* Gradient blob background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-16 w-80 h-80 bg-sky-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-sky-200"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Frontend / React roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            <span className="block text-slate-100">
              {profile.name || "Satyam Rathore"}
            </span>
            <span className="mt-2 block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Frontend Developer • React & UI Engineering
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 max-w-xl text-sm md:text-base"
          >
            I craft fast, accessible, and visually polished interfaces using
            React, JavaScript, and modern UI systems. From landing pages to full
            dashboards, I focus on clean UX, smooth animations, and production-
            ready code.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3 items-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-semibold text-sm px-5 py-2.5 shadow-lg hover:shadow-sky-500/30 transition-shadow"
            >
              View my work
              <span className="ml-2 text-lg">↗</span>
            </a>

            <a
              href="/SatyamRathore_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/20 text-slate-100 text-sm px-5 py-2.5 hover:bg-white/5 transition-colors"
            >
              Download résumé
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-xs text-slate-400 hover:text-sky-300"
            >
              LinkedIn profile →
            </a>
          </motion.div>

          {/* Quick stats row (can sync with LiveStats later if you want) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 grid grid-cols-3 max-w-md gap-3 text-xs text-slate-300"
          >
            <div>
              <div className="text-lg font-semibold text-sky-300">3+</div>
              <div>Years of experience</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-cyan-300">10+</div>
              <div>Projects shipped</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-emerald-300">100%</div>
              <div>Frontend focused</div>
            </div>
          </motion.div>
        </div>

        {/* Right: avatar / card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-slate-900 to-cyan-500/20 p-[2px] shadow-2xl">
            <div className="w-full h-full rounded-[1.9rem] bg-slate-950/90 flex items-center justify-center overflow-hidden">
              <img
                src="/profile.png"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-6 rounded-2xl bg-slate-900/90 border border-white/10 px-4 py-2 text-xs text-slate-200 flex items-center gap-2 shadow-lg">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to React / UI roles</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
