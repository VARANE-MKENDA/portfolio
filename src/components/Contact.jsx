import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { profile, contactPlatforms } from "../data/content";

const icons = { MessageCircle, Mail, Github: GithubIcon };

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) {
    errors.message = "Please write a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStatus("sent");
      setValues(initialForm);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-lg bg-bg-alt border px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-accent transition-colors ${
      errors[field] ? "border-red" : "border-border"
    }`;

  return (
    <section id="contact" className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <p className="eyebrow mb-3">Connect with me</p>
        <h2 className="text-2xl md:text-3xl font-bold text-heading">
          Let's work with data to create better decisions.
        </h2>
        <p className="text-muted text-sm mt-2">{profile.location}</p>
      </motion.div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-3 gap-4 mb-10"
      >
        {contactPlatforms.map((p) => {
          const Icon = icons[p.icon];
          return (
            <a
              key={p.title}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-border bg-surface p-6 text-center hover:border-accent/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="text-heading font-semibold text-sm mb-1">{p.title}</h3>
              <p className="text-muted text-xs mb-3">{p.description}</p>
              <span className="text-accent text-xs font-medium">{p.action}</span>
            </a>
          );
        })}
      </motion.div>

      <motion.form
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={handleSubmit}
        noValidate
        className="max-w-xl mx-auto rounded-2xl border border-border bg-surface p-6 md:p-8 space-y-4"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            className={inputClass("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-red text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className={inputClass("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-red text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={values.subject}
            onChange={handleChange}
            className={inputClass("subject")}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && <p id="subject-error" className="text-red text-xs mt-1">{errors.subject}</p>}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            className={inputClass("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && <p id="message-error" className="text-red text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          <Send size={16} />
          Send Message
        </button>

        {status === "sent" && (
          <p role="status" className="text-emerald-400 text-sm text-center pt-1">
            Message sent. I'll get back to you shortly.
          </p>
        )}
      </motion.form>
    </section>
  );
}
