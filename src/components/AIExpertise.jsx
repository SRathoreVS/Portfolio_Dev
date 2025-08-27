import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import CloudIcon from "@mui/icons-material/Cloud";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CodeIcon from "@mui/icons-material/Code";

export default function AIExpertise() {
  return (
    <section id="aiexpertise" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold gradient-text">
        I am well-versed in working with AIs
      </h2>
      <div className="mt-6 grid gap-4">
        <article className="rounded-2xl border border-white/10 p-5 bg-white/5 card-hover">
          <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-sky-300">
            <li className="flex items-center gap-3 text-slate-400 dark:text-slate-300">
              <ChatIcon
                fontSize="small"
                className="text-green-500 animate-bounce"
              />
              <span>
                Worked with <strong>ChatGPT</strong> for problem-solving,
                prototyping, and content generation.
              </span>
            </li>

            <li className="flex items-center gap-3 text-slate-400 dark:text-slate-300">
              <SmartToyIcon
                fontSize="small"
                className="text-purple-500 animate-pulse"
              />
              <span>
                Explored <strong>Perplexity AI</strong> for research-driven
                insights and quick knowledge discovery.
              </span>
            </li>

            <li className="flex items-center gap-3 text-slate-400 dark:text-slate-300">
              <CodeIcon
                fontSize="small"
                className="text-indigo-500 animate-spin-slow"
              />
              <span>
                Integrated <strong>GitHub Copilot</strong> with VS Code for
                AI-assisted coding and productivity boosts.
              </span>
            </li>

            <li className="flex items-center gap-3 text-slate-400 dark:text-slate-300">
              <CloudIcon
                fontSize="small"
                className="text-blue-400 animate-pulse"
              />
              <span>
                Hands-on experience with <strong>Claude AI</strong> services to
                build scalable and intelligent applications.
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
