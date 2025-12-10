import React, { useRef, useState } from "react";
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

    // TODO: replace with your actual EmailJS IDs
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const PUBLIC_KEY = "your_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Your message has been sent. I’ll get back to you soon!",
        });

        formRef.current.reset();
        if (onMessageSent) onMessageSent();
      },
      () => {
        setLoading(false);
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again in a moment.",
        });
      }
    );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: text / info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold gradient-text">
            Let&apos;s work together
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            Open to frontend-heavy roles, React projects, and UI engineering
            work. If you have an idea, a product, or a team that needs a
            frontend specialist, feel free to reach out.
          </p>

          <div className="space-y-2 text-sm text-slate-300">
            <div>
              <span className="font-semibold text-sky-300">Email: </span>
              <a
                href={`mailto:${profile.email}`}
                className="underline hover:text-sky-200"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <span className="font-semibold text-sky-300">LinkedIn: </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-sky-200"
              >
                View profile
              </a>
            </div>
            <div>
              <span className="font-semibold text-sky-300">Location: </span>
              {profile.location}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="glass-card rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Send me a message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-slate-900/80 text-sm text-white outline-none focus:border-sky-400"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-slate-900/80 text-sm text-white outline-none focus:border-sky-400"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-slate-900/80 text-sm text-white outline-none focus:border-sky-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-sm font-semibold px-4 py-2.5 hover:shadow-lg hover:shadow-sky-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status.message && (
            <div
              className={`mt-4 text-sm rounded-lg px-3 py-2 ${
                status.type === "success"
                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                  : "bg-red-500/10 text-red-300 border border-red-500/40"
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
