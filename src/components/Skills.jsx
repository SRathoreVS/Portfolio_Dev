import React from "react";
import Badge from "./Badge";
import { skills } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight gradient-text">
          Skills & tools
        </h2>
        <p className="text-xs text-slate-400 hidden sm:block">
          Frontend-focused engineer with modern JS, React and tooling.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur p-5 hover:border-sky-500/50 transition-colors"
          >
            <h3 className="capitalize text-sm font-semibold text-slate-200 mb-3">
              {category.replace("-", " ")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s, i) => {
                const isString = typeof s === "string";
                const name = isString ? s : s.name;
                const icon = !isString && s.icon;

                return (
                  <Badge key={i}>
                    {icon && (
                      <img
                        src={icon}
                        alt={name}
                        className="w-4 h-4 mr-2 object-contain"
                      />
                    )}
                    {name}
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
