import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data/resumeData";

export default function HeroMui() {
  const { scrollY } = useScroll();

  // subtle scroll motion (Replit-like feel)
  const y = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* 🔥 Glow Background (depth effect) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-sky-500/20 blur-[140px] rounded-full top-[-120px] left-[20%]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full bottom-[-100px] right-[10%]" />
      </div>

      <motion.div
        style={{ y }}
        className="max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-16 w-full"
      >
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-7">

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs text-sky-200 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Frontend / Full-Stack roles
          </motion.div>

          {/* NAME + ROLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            <span className="block text-slate-100">
              {profile.name || "Satyam Rathore"}
            </span>

            <span className="mt-3 block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Full Stack Developer • React • Node.js • Core Java
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 max-w-xl text-sm md:text-base leading-relaxed"
          >
            I build scalable, high-performance web applications with modern
            frontend systems and robust backend architecture. Focused on clean
            code, performance optimization, and production-ready solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-semibold text-sm px-6 py-3 shadow-lg hover:shadow-sky-500/40 transition-all"
            >
              View Projects
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/SatyamRathore_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/20 text-slate-100 text-sm px-6 py-3 hover:bg-white/5 transition-all"
            >
              Download Resume
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 hover:text-sky-300 transition-colors"
            >
              LinkedIn →
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 max-w-md gap-6 text-sm pt-4"
          >
            <Stat value="4.5+" label="Years Experience" />
            <Stat value="10+" label="Projects Built" />
            <Stat value="100%" label="Production Focus" />
          </motion.div>
        </div>

        {/* RIGHT SIDE (3D SCENE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="rounded w-[200px] h-[200px] md:w-[420px] md:h-[420px] rounded-2xl">
            <img src="/profile.jpeg" alt="profile" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Stat Component */
function Stat({ value, label }) {
  return (
    <div>
      <div className="text-lg font-semibold text-sky-300">{value}</div>
      <div className="text-slate-400 text-xs">{label}</div>
    </div>
  );
}