import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resumeData";
import emailjs from "@emailjs/browser";

export default function Contact({ onMessageSent }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = "service_7d3mkf9";
  const TEMPLATE_ID = "template_gx3c0dm";
  const PUBLIC_KEY = "SAqxCqiMlUDgWe0r8";

  // 🎉 Confetti Animation
  const fireConfetti = () => {
    const duration = 2500;
    const end = Date.now() + duration;

    const colors = ["#38bdf8", "#0ea5e9", "#22c55e"];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

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

            <p className="text-slate-300 flex items-center gap-2">
              <span className="text-sky-300 font-medium">WhatsApp:</span>

              <a
                href="https://wa.me/916394614898"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
              >
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.4c2.3 1.2 4.9 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-4.9 1.4 1.4-4.8-.3-.5C4 20.7 3.4 18.4 3.4 16 3.4 9.6 9.6 3.4 16 3.4S28.6 9.6 28.6 16 22.4 28.8 16 28.8z" />
                </svg>

                6394614898
              </a>
            </p>

            <p className="text-slate-300">
              <span className="text-sky-300 font-medium">Location:</span>{" "}
              {profile.location}
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
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

            <div>
              <label className="text-sm text-slate-400">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-white/10 bg-slate-900 text-white focus:border-sky-400 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-slate-400">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-white/10 bg-slate-900 text-white focus:border-sky-400 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-slate-400">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-white/10 bg-slate-900 text-white focus:border-sky-400 outline-none transition resize-none"
              />
            </div>

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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mt-5 text-sm px-4 py-3 rounded-xl border flex items-center gap-2 ${
                status.type === "success"
                ? "bg-emerald-500/10 text-emerald-300 border-emerald-400/30"
                : "bg-red-500/10 text-red-300 border-red-400/30"
              }`}
            >
              {status.type === "success" ? "🎉" : "⚠️"}
              <span>{status.message}</span>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}