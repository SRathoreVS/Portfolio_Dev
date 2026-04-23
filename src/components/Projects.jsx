import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/resumeData";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-24">

      {/* HEADER */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Selected Work
        </h2>
        <p className="text-slate-400 mt-3 max-w-xl">
          A collection of real-world projects focused on performance, scalability,
          and production-ready architecture.
        </p>
      </div>

      {/* FEATURED PROJECT */}
      {featured.length > 0 && (
        <div className="mb-16 space-y-10">
          {featured.map((project, i) => (
            <ProjectCaseStudy key={i} project={project} featured />
          ))}
        </div>
      )}

      {/* OTHER PROJECTS */}
      <div className="grid md:grid-cols-2 gap-8">
        {rest.map((project, i) => (
          <ProjectCaseStudy key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

/* --------------------------
   Case Study Card
--------------------------- */
function ProjectCaseStudy({ project, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`group rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur p-6 ${
        featured ? "md:p-10" : ""
      }`}
    >
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-white">
        {project.name}
      </h3>

      {/* Tagline */}
      {project.tagline && (
        <p className="text-sky-300 mt-1 text-sm">{project.tagline}</p>
      )}

      {/* Image */}
      {project.image && (
        <div className="mt-4 rounded-xl overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Problem */}
      {project.problem && (
        <div className="mt-5">
          <h4 className="text-sm font-semibold text-slate-400">Problem</h4>
          <p className="text-slate-300 text-sm mt-1">
            {project.problem}
          </p>
        </div>
      )}

      {/* Solution */}
      {project.solution && (
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-slate-400">Solution</h4>
          <p className="text-slate-300 text-sm mt-1">
            {project.solution}
          </p>
        </div>
      )}

      {/* Impact */}
      {project.impact && project.impact.length > 0 && (
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-slate-400">Impact</h4>
          <ul className="text-sm text-emerald-300 mt-1 space-y-1">
            {project.impact.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      {project.tech && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-6 flex gap-4 flex-wrap">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 text-sm rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition"
          >
            Live Demo →
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 text-sm rounded-full border border-white/20 text-white hover:bg-white/5 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}