import { profile } from "../data/resumeData";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold gradient-text mb-12 text-center"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Main bio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-4 text-slate-300 text-sm md:text-base"
        >
          <p>
            {profile.summary ||
              "Frontend Developer dedicated to building performant, accessible and visually polished web interfaces using React and modern JavaScript."}
          </p>

          <p>
            I enjoy translating complex requirements into simple, usable
            experiences and collaborating closely with designers, backend
            engineers, and stakeholders. My focus is on clean architecture,
            reusable components, and a smooth end-user experience.
          </p>

          <p>
            Outside of work, I keep improving my skills with DSA in JavaScript
            and deep-diving into advanced React patterns to stay ahead with
            modern frontend practices.
          </p>
        </motion.div>

        {/* Compact info column (no CTA buttons here) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 rounded-2xl flex flex-col gap-3 text-sm text-slate-200"
        >
          <h3 className="text-lg font-semibold mb-1">Quick details</h3>
          <div className="space-y-2">
            <div>
              <span className="font-semibold text-sky-300">Name: </span>
              {profile.name}
            </div>
            <div>
              <span className="font-semibold text-sky-300">Role: </span>
              {profile.role}
            </div>
            {/* You said you’ll change the experience text yourself, so keep this easy to edit */}
            <div>
              <span className="font-semibold text-sky-300">Experience: </span>
              3.8+ years (update as needed)
            </div>
            <div>
              <span className="font-semibold text-sky-300">Location: </span>
              {profile.location}
            </div>
            <div>
              <span className="font-semibold text-sky-300">Phone: </span>
              {profile.phone}
            </div>
            <div>
              <span className="font-semibold text-sky-300">Email: </span>
              <a
                href={`mailto:${profile.email}`}
                className="underline hover:text-sky-200"
              >
                {profile.email}
              </a>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            For opportunities and collaborations, you can use the contact form
            or reach out on LinkedIn from the hero section.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
