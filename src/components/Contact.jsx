import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resumeData";
import emailjs from "@emailjs/browser";

export default function Contact({ onMessageSent }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const PUBLIC_KEY = "your_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Message sent successfully 🚀",
        });

        formRef.current.reset();
        if (onMessageSent) onMessageSent();
      },
      () => {
        setLoading(false);
        setStatus({
          type: "error",
          message: "Something went wrong. Try again.",
        });
      }
    );
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let’s Build Something Great Together
          </h2>

          <p className="text-slate-300 leading-relaxed">
            I specialize in building scalable frontend systems and full-stack
            applications using React and Java. If you’re looking for someone who
            can deliver clean, performant, and production-ready solutions —
            let’s connect.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-3 text-sm">
            <p className="text-slate-300">
              <span className="text-sky-300 font-medium">Email:</span>{" "}
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-sky-200 transition"
              >
                {profile.email}
              </a>
            </p>

            <p className="text-slate-300">
              <span className="text-sky-300 font-medium">LinkedIn:</span>{" "}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-200 transition"
              >
                View Profile →
              </a>
            </p>

            <p className="text-slate-300">
              <span className="text-sky-300 font-medium">Location:</span>{" "}
              {profile.location}
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur p-8 shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-6 text-white">
            Send a Message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-slate-400">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-white/10 bg-slate-900 text-white focus:border-sky-400 outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-slate-400">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-white/10 bg-slate-900 text-white focus:border-sky-400 outline-none transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-slate-400">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-white/10 bg-slate-900 text-white focus:border-sky-400 outline-none transition resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold py-3 hover:shadow-lg hover:shadow-sky-500/30 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* STATUS */}
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-5 text-sm px-4 py-2 rounded-lg ${
                status.type === "success"
                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-400/30"
                  : "bg-red-500/10 text-red-300 border border-red-400/30"
              }`}
            >
              {status.message}
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}