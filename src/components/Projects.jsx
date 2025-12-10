import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight gradient-text">
          Selected projects
        </h2>
        <p className="text-xs text-slate-400 hidden sm:block">
          Real-world work showcasing React, UI engineering, and clean code.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => {
          const live = p.live || p.link; // backward compatible
          const github = p.github;
          const tech = p.tech || p.tags || [];
          const image = p.image;

          return (
            <motion.article
              key={i}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur p-4 flex flex-col overflow-hidden"
            >
              {/* Image / thumbnail */}
              {image && (
                <div className="relative mb-3 rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={p.name}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {live && (
                    <span className="absolute bottom-2 right-2 rounded-full bg-slate-950/80 text-[10px] px-2 py-1 text-sky-200 border border-white/10">
                      Live project
                    </span>
                  )}
                </div>
              )}

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-50">
                  {p.name}
                </h3>
                {Array.isArray(tech) && tech.length > 0 && (
                  <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
                    {tech.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full bg-slate-900/80 border border-white/10 text-[10px] px-2 py-0.5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {tech.length > 3 && (
                      <span className="rounded-full bg-slate-900/80 border border-dashed border-white/15 text-[10px] px-2 py-0.5 text-slate-400">
                        +{tech.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <p className="mt-2 text-sm text-slate-300 flex-1">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-3 items-center">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500/90 text-slate-950 text-xs font-semibold px-4 py-1.5 hover:bg-sky-400 transition-colors"
                  >
                    Live demo
                    <span className="ml-1 text-sm">↗</span>
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 text-slate-100 text-xs px-4 py-1.5 hover:bg-white/5 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
