import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold gradient-text">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={i}
            className="rounded-2xl border border-white/10 p-5 bg-white/5 card-hover"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="text-xs opacity-70">{p.tags.join(" • ")}</div>
            </div>
            <p className="text-slate-300 mt-2">{p.description}</p>
            {p.link && (
              <a
                className="inline-block mt-3 text-sky-300 hover:underline"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                Explore
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
