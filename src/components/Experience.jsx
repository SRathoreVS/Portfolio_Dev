import { experience } from "../data/resumeData";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 py-24">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Professional Experience
        </h2>
        <p className="text-slate-400 mt-3">
          Building scalable systems across frontend and backend.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-sky-500 via-cyan-400 to-transparent" />

        <div className="space-y-16">
          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-sky-400 shadow-lg shadow-sky-500/40" />

                {/* Card */}
                <div
                  className={`mt-6 md:mt-0 w-full md:w-[45%] ${
                    isLeft ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="group rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur p-6 hover:border-sky-400/40 transition-all">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h3>

                      <span className="text-xs text-slate-400">
                        {exp.period}
                      </span>
                    </div>

                    {/* Company */}
                    <p className="text-sm text-sky-300 mt-1">
                      {exp.company}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-white/10 my-4" />

                    {/* Points */}
                    <ul className="space-y-2 text-sm text-slate-300">
                      {exp.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span className="leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}