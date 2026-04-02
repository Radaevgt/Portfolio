"use client";

import { motion } from "framer-motion";
import { Mail, Send, MessageCircle } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import { useState, type FormEvent } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: <GithubIcon className="w-5 h-5" />,
  },
  {
    label: "Написать в Telegram",
    href: "https://t.me/glebradaev",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    label: "Email",
    href: "mailto:radaevgt111@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      nickname: (form.elements.namedItem("nickname") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const BOT_TOKEN = "8754380469:AAGWBKZK2NeY9agFgO8qIBUQc8tiSH6ndVo";
    const CHAT_ID = "750518960";
    const nickLine = data.nickname ? `\nНикнейм: ${data.nickname}` : "";
    const text = `📩 Новое сообщение с портфолио\n\nИмя: ${data.name}${nickLine}\nEmail: ${data.email}\n\n${data.message}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text }),
        }
      );
      if (!res.ok) throw new Error("Send failed");
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError("Ошибка отправки. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-16 text-center"
        >
          Связаться{" "}
          <span className="text-cyan">со мной</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 p-6 rounded-xl border border-card-border bg-[rgba(255,255,255,0.03)] backdrop-blur-sm flex flex-col gap-5"
          >
            <div>
              <label className="block text-sm text-muted mb-2">Имя</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-[rgba(255,255,255,0.05)] border border-card-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-cyan/50 transition-colors"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label className="block text-sm text-muted mb-2">Никнейм (Telegram / GitHub)</label>
              <input
                type="text"
                name="nickname"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-card-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-cyan/50 transition-colors"
                placeholder="@username"
              />
            </div>
            <div>
              <label className="block text-sm text-muted mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[rgba(255,255,255,0.05)] border border-card-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-cyan/50 transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-muted mb-2">
                Сообщение
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-card-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-cyan/50 transition-colors resize-none"
                placeholder="Ваше сообщение..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan to-violet text-background font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitted ? (
                "Отправлено!"
              ) : sending ? (
                "Отправка..."
              ) : (
                <>
                  Отправить <Send className="w-4 h-4" />
                </>
              )}
            </button>
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex flex-col gap-4 justify-center"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card hover:border-cyan/30 transition-colors group"
              >
                <span className="text-muted group-hover:text-cyan transition-colors">
                  {s.icon}
                </span>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  {s.label}
                </span>
              </a>
            ))}

            <div className="mt-4 p-4 rounded-xl border border-card-border bg-card">
              <p className="text-xs text-muted mb-1">Email</p>
              <p className="text-sm text-foreground/80">radaevgt111@gmail.com</p>
              <p className="text-xs text-muted mt-3 mb-1">Телефон</p>
              <p className="text-sm text-foreground/80">+7 (950) 353-70-90</p>
              <p className="text-xs text-muted mt-3 mb-1">Локация</p>
              <p className="text-sm text-foreground/80">
                Нижний Новгород, Россия
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
