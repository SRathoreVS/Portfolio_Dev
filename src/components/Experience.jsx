import { experience } from "../data/resumeData";
import { useMemo, useState } from "react";

export default function Experience() {
  const [query, setQuery] = useState("");
  const items = useMemo(() => {
    if (!query) return experience;
    const q = query.toLowerCase();
    return experience.filter(
      (e) =>
        e.company.toLowerCase().includes(q) || e.title.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold gradient-text">Experience</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by company or title…"
          className=" p-2 rounded-md border border-gray-300 
             text-slate-800 dark:text-slate-200 
             bg-white dark:bg-gray-800"
          aria-label="Filter experience"
        />
      </div>
      <div className="mt-6 grid gap-4">
        {items.map((item, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-white/10 p-5 bg-white/5 card-hover"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {item.title} • {item.company}
              </h3>
              <div className="text-sm text-slate-400">{item.period}</div>
            </div>
            <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-sky-300">
              {item.points.map((p, i) => (
                <li key={i} className="text-slate-400dark:text-slate-300">
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
