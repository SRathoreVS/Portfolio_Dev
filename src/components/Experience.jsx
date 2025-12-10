import { experience } from "../data/resumeData";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold gradient-text mb-10 text-center"
      >
        Experience Timeline
      </motion.h2>

      <div className="relative pl-6 md:pl-12">
        {/* Vertical Line */}
        <div className="absolute top-0 left-3 md:left-6 w-1 h-full bg-gradient-to-b from-sky-500 to-cyan-500 rounded-full"></div>

        <div className="space-y-16">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Bullet */}
              <div className="absolute -left-[11px] md:-left-[14px] w-6 h-6 rounded-full bg-sky-500 border-2 border-slate-950"></div>

              <div className="glass-card p-6 rounded-2xl hover:border-sky-400/50 transition-colors">
                <div className="flex justify-between items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.title} • {exp.company}
                  </h3>
                  <span className="text-xs text-slate-400">{exp.period}</span>
                </div>

                <ul className="mt-3 space-y-1 marker:text-sky-400 list-disc pl-5 text-sm text-slate-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
