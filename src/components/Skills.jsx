import Badge from "./Badge";
import { skills } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold gradient-text">Skills</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([k, arr]) => (
          <div
            key={k}
            className="rounded-2xl border border-white/10 p-5 bg-white/5"
          >
            <h3 className="capitalize text-slate-300 mb-3">
              {k.replace("-", " ")}
            </h3>
            <div className="flex flex-wrap gap-2 ">
              {arr.map((s, i) => (
                <Badge key={i}>{s}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
