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
            🚀 Full-Stack Web Developer | React.js & Java | with 4.5 years of experience building and maintaining scalable web applications using Java, Spring Boot, React.js, and RESTful APIs. Hands-on in developing secure and high-performing systems across both frontend and backend layers. Experienced in microservices, JWT authentication, and CI/CD pipelines. Skilled in Java-based backend development, API integration, and frontend architecture with React.js and TypeScript. Adept at Agile collaboration and currently enhancing expertise in Java and backend frameworks.
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
               4.5+ years
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
