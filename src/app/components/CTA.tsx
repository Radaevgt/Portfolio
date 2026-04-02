"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Свидетельство РИД №2025685533",
    description: "Программа тестирования и отладки СФ демодулятора QAM-сигналов",
    href: "https://drive.google.com/file/d/1546k9lydt_l9h14xiV8j4XC5AUQ49PmP/view",
  },
  {
    title: "Свидетельство РИД №2025686644",
    description: "Государственная регистрация программы для ЭВМ",
    href: "https://drive.google.com/file/d/1_NGDMxcfODOf7_zmAOAKK3pjCy7nHKH4/view",
  },
  {
    title: "Сертификат Anthropic",
    description: "Курс по Claude от Anthropic",
    href: "https://drive.google.com/file/d/1Fo9ue-sy0GpySnxfrlgOkcmvIpouhY7G/view?usp=sharing",
  },
  {
    title: "Диплом хакатона Альфа-Банка",
    description: "Участие в хакатоне Альфа-Банка 2025",
    href: "https://drive.google.com/file/d/1gs8174rRFHGA3UlwHaAvFgui7jYnbkR4/view?usp=sharing",
  },
];

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-6">
            Открыт для{" "}
            <span className="text-cyan">сотрудничества</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Берусь за проекты любой сложности — от MVP и прототипов до
            production-ready AI-систем. RAG, AI-агенты, автоматизация с Claude Code,
            fullstack-разработка. Если у вас есть идея — напишите, обсудим.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-[family-name:var(--font-heading)] text-cyan mb-6 tracking-wider uppercase text-center">
            Сертификаты и документы
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert) => (
              <a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border border-card-border bg-card hover:border-cyan/30 transition-colors flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold font-[family-name:var(--font-heading)] group-hover:text-cyan transition-colors">
                    {cert.title}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-cyan transition-colors shrink-0" />
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {cert.description}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
