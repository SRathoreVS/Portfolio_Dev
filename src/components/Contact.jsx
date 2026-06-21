import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resumeData";
import emailjs from "@emailjs/browser";

const SERVICE_ID   = "service_7d3mkf9";
const TEMPLATE_ID  = "template_gx3c0dm";
const PUBLIC_KEY   = "SAqxCqiMlUDgWe0r8";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "satyam-rathore",
    href: profile.linkedin,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+91 6394 614 898",
    href: "https://wa.me/916394614898",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "SRathoreVS",
    href: "https://github.com/SRathoreVS",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

export default function Contact({ onMessageSent }) {
  const formRef = useRef(null);
  const [status, setStatus]   = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatus({ type: "success", message: "Message sent! I'll reply within 24 hours 🚀" });
        formRef.current.reset();
        if (onMessageSent) onMessageSent();
      })
      .catch(() => {
        setLoading(false);
        setStatus({ type: "error", message: "Something went wrong. Try emailing directly." });
      });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="section-eyebrow mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
          Let's Build Something <span className="gradient-text">Great</span>
        </h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
          Looking for a Full-Stack Developer who ships clean, performant, production-ready solutions?
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="space-y-4">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 group transition-all hover:-translate-y-0.5 hover:shadow-glow-sm"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-violet-300 flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}>
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500">{link.label}</div>
                  <div className="text-sm text-slate-200 group-hover:text-violet-300 transition-colors truncate">{link.value}</div>
                </div>
                <svg className="w-4 h-4 text-slate-600 group-hover:text-violet-400 ml-auto flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Availability card */}
          <div className="glass-strong rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-300">Available Now</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open to full-time, contract, and remote Full-Stack roles. 
              Based in Mumbai — open to relocation & remote globally.
            </p>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-semibold text-slate-100 mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-medium">Your Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-medium">Your Email *</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@company.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Job opportunity / Project collaboration"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5 font-medium">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about the role or project..."
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed py-3"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Status message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm px-4 py-3 rounded-xl border flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-emerald-500/10 text-emerald-300 border-emerald-400/25"
                    : "bg-red-500/10 text-red-300 border-red-400/25"
                }`}
              >
                <span>{status.type === "success" ? "✅" : "⚠️"}</span>
                {status.message}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}