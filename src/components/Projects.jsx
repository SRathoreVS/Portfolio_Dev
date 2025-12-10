import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/resumeData";

export default function Projects() {
  const featured = projects.find((p) => p.type === "featured");
  const landingProjects = projects.filter((p) => p.type === "landing");
  const gameProjects = projects.filter((p) => p.type === "game");
  const fullstackProjects = projects.filter((p) => p.type === "fullstack"); // currently none

  const [open, setOpen] = useState({
    landing: true,
    games: false,
    fullstack: false,
  });

  const toggle = (key) =>
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  const renderProjectCard = (p, idx) => {
    const live = p.live || p.link;
    const github = p.github;
    const tech = p.tech || p.tags || [];
    const image = p.image;

    return (
      <motion.article
        key={idx}
        whileHover={{ y: -4 }}
        className="group rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur p-4 flex flex-col overflow-hidden"
      >
        {/* Optional image */}
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
          <h3 className="text-lg font-semibold text-slate-50">{p.name}</h3>
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

        <p className="mt-2 text-sm text-slate-300 flex-1">{p.description}</p>

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
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight gradient-text">
          Projects
        </h2>
        <p className="text-xs text-slate-400 hidden sm:block">
          A mix of portfolio, landing pages, games, and upcoming full-stack
          apps.
        </p>
      </div>

      {/* Featured portfolio project */}
      {featured && (
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">
            Featured
          </h3>
          {renderProjectCard(featured, "featured")}
        </div>
      )}

      {/* Dropdown categories */}
      <div className="space-y-4">
        {/* Landing UIs */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur">
          <button
            type="button"
            onClick={() => toggle("landing")}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-100"
          >
            <span>Landing UIs</span>
            <span className="text-xs text-slate-400">
              {open.landing ? "Hide" : "Show"}
            </span>
          </button>
          {open.landing && (
            <div className="border-t border-white/10 px-4 py-4 grid md:grid-cols-2 gap-4">
              {landingProjects.map((p, idx) =>
                renderProjectCard(p, `land-${idx}`)
              )}
            </div>
          )}
        </div>

        {/* Games */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur">
          <button
            type="button"
            onClick={() => toggle("games")}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-100"
          >
            <span>Games</span>
            <span className="text-xs text-slate-400">
              {open.games ? "Hide" : "Show"}
            </span>
          </button>
          {open.games && (
            <div className="border-t border-white/10 px-4 py-4 grid md:grid-cols-2 gap-4">
              {gameProjects.map((p, idx) =>
                renderProjectCard(p, `game-${idx}`)
              )}
            </div>
          )}
        </div>

        {/* Full-Stack (empty for now) */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur">
          <button
            type="button"
            onClick={() => toggle("fullstack")}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-100"
          >
            <span>Full-Stack Apps</span>
            <span className="text-xs text-slate-400">
              {open.fullstack ? "Hide" : "Show"}
            </span>
          </button>
          {open.fullstack && (
            <div className="border-t border-white/10 px-4 py-4">
              {fullstackProjects.length === 0 ? (
                <p className="text-sm text-slate-300">
                  Full-stack projects are in progress — currently working on
                  Node.js/Express/MongoDB and integration-heavy apps. This
                  section will be updated soon.
                </p>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {fullstackProjects.map((p, idx) =>
                    renderProjectCard(p, `fs-${idx}`)
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
