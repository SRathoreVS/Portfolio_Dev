import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/resumeData";

const ALL_TAGS = ["All", "React", "TypeScript", "Node.js", "Next.js", "JavaScript", "Tailwind CSS"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.tech?.includes(activeTag));

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <p className="section-eyebrow mb-3">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
          Selected <span className="gradient-text">Work</span>
        </h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
          Real-world projects focused on performance, scalability, and production-ready architecture.
        </p>
      </motion.div>

      {/* Filter pills */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="flex flex-wrap gap-2 justify-center mb-10"
      >
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs px-4 py-2 rounded-full border font-medium transition-all ${
              activeTag === tag
                ? "bg-violet-600 border-violet-500 text-white shadow-glow-sm"
                : "border-violet-500/20 text-slate-400 hover:border-violet-500/40 hover:text-slate-200 bg-transparent"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Project grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass rounded-2xl overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44 sm:h-48 bg-slate-900/50 flex-shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-20">🖥️</span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          style={{ background: 'linear-gradient(to top, rgba(7,8,15,0.9) 0%, transparent 60%)' }}
        />
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #c084fc)', color: 'white' }}>
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-100 leading-snug">{project.name}</h3>
          {project.tagline && (
            <p className="text-xs text-violet-400 mt-0.5">{project.tagline}</p>
          )}
        </div>

        {project.solution && (
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{project.solution}</p>
        )}

        {/* Impact bullets */}
        {project.impact && project.impact.length > 0 && (
          <ul className="space-y-1">
            {project.impact.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-emerald-400">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        {project.tech && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
            {project.tech.length > 4 && (
              <span className="tech-pill">+{project.tech.length - 4}</span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-2 border-t border-violet-500/10">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center btn-primary text-xs py-2 px-3"
            >
              Live Demo →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center btn-outline text-xs py-2 px-3"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}