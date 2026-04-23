import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-24">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Skills & Expertise
        </h2>
        <p className="text-slate-400 mt-3 max-w-xl">
          A strong foundation across frontend, backend, and modern development tools
          focused on building scalable and production-ready applications.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur p-6 hover:border-sky-400/40 transition-all"
          >
            {/* CATEGORY TITLE */}
            <h3 className="capitalize text-sm font-semibold text-sky-300 mb-4 tracking-wide">
              {category.replace("-", " ")}
            </h3>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3">
              {items.map((s, i) => {
                const isString = typeof s === "string";
                const name = isString ? s : s.name;
                const icon = !isString && s.icon;

                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/70 border border-white/10 text-sm text-slate-300 hover:bg-slate-800/80 hover:text-white transition-all cursor-default"
                  >
                    {icon && (
                      <img
                        src={icon}
                        alt={name}
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    {name}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}