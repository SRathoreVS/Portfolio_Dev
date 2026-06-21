import React from "react";
import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="border-t border-violet-500/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} <span className="text-slate-300 font-medium">Satyam Rathore</span>. Built with React + Vite + Tailwind.
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <a href={`mailto:${profile.email}`} className="hover:text-violet-300 transition-colors">Email</a>
          <span>·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors">LinkedIn</a>
          <span>·</span>
          <a href="https://github.com/SRathoreVS" target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}