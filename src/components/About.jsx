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
            Frontend Developer Specialist with almost 4 years of experience
            building secure, scalable, and high-performance web applications in
            the banking domain. Skilled in React.js, TypeScript, JavaScript
            (ES6+), HTML5, CSS3, and modern UI frameworks.
          </p>

          <p>
            I focus on creating modular, reusable UI components and seamless
            user journeys with a strong emphasis on API integration,
            authentication flows, accessibility (WCAG 2.1), performance
            optimization, and CI/CD pipelines. I enjoy translating complex
            requirements into simple, usable experiences while collaborating
            closely with designers, backend engineers, and stakeholders.
          </p>

          <p>
            I am comfortable working in Agile environments, using cloud and
            DevOps tools, and writing scalable, testable code. Currently, I am
            improving my problem-solving skills through Data Structures and
            Algorithms (DSA) in Java and strengthening my Core Java knowledge.
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
            <div>
              <span className="font-semibold text-sky-300">Experience: </span>
              Almost 4 years
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
