import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "../data/resumeData";

export default function Contact() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // ✅ Force Gmail web compose
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${
      profile.email
    }&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank");

    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16 relative">
      <h2 className="text-2xl font-semibold mb-4 gradient-text">
        {t("nav.contact")}
      </h2>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Open to frontend roles, React-heavy projects, and UI engineering.
      </p>

      <div className="mt-4 flex gap-4 items-center">
        <button
          onClick={toggleForm}
          className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
        >
          {t("contact.email")}
        </button>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-800"
        >
          LinkedIn
        </a>
      </div>

      {/* Feedback Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-lg"
        >
          <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 px-3 py-2 rounded-lg border border-slate-300 
                       dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />

          <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 px-3 py-2 rounded-lg border border-slate-300 
                       dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />

          <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-4 px-3 py-2 rounded-lg border border-slate-300 
                       dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700"
          >
            Send via Gmail
          </button>
        </form>
      )}

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="absolute top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
          <span className="text-2xl">✅</span>
          <span>Email sent successfully!</span>
        </div>
      )}
    </section>
  );
}
