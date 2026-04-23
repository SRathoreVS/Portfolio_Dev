import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resumeData";

export default function HeroMui() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-20 w-[420px] h-[420px] bg-sky-500/25 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-7">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs text-sky-200 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Frontend / Full-Stack roles
          </motion.div>

          {/* HEADLINE */}
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
              Building Scalable Frontend Systems with React & Java
            </span>
          </motion.h1>

          {/* VALUE PROPOSITION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 max-w-xl text-sm md:text-base leading-relaxed"
          >
            I design and develop high-performance web applications with clean
            architecture and production-ready code. Specializing in React,
            Java, and scalable backend systems, I focus on delivering fast,
            accessible, and maintainable solutions used in real-world
            enterprise environments.
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

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-slate-900 to-cyan-500/20 p-[2px] shadow-2xl hover:scale-105 transition-transform duration-300">

            <div className="w-full h-full rounded-[1.9rem] bg-slate-950/90 overflow-hidden">
              <img
                src="/profile.png"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-6 rounded-xl bg-slate-900/90 border border-white/10 px-4 py-2 text-xs text-slate-200 flex items-center gap-2 shadow-lg backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to React / UI roles
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------
   Small Reusable Stat
--------------------------- */
function Stat({ value, label }) {
  return (
    <div>
      <div className="text-lg font-semibold text-sky-300">{value}</div>
      <div className="text-slate-400 text-xs">{label}</div>
    </div>
  );
}