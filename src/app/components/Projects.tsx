"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "QAM Демодулятор для LTE/5G NR",
    description:
      "СФ-блок модулятора и демодулятора радиосигнала для базовой станции. Низкосложностный алгоритм демодуляции M-QAM без операций умножения. Поддержка BPSK, QPSK, 16/64/256-QAM.",
    tags: ["SystemVerilog", "DSP", "5G NR", "FPGA", "Python"],
  },
  {
    title: "RAG-система для телеком-документации",
    description:
      "Интеллектуальный поиск информации в технической документации телекома с использованием RAG-подхода и LLM.",
    tags: ["RAG", "LangChain", "NLP", "FastAPI", "Docker"],
  },
  {
    title: "Telegram-бот автоматизации бухучёта",
    description:
      "Бот для автоматического распознавания и классификации бухгалтерских документов с помощью OCR и LLM.",
    tags: ["OCR", "Groq", "Telegram", "Python", "AI"],
  },
  {
    title: "RAG-система — Хакатон Альфа-Банка",
    description:
      "Интеллектуальный поиск и обработка запросов клиентов банка. Роль: тимлид проектной команды.",
    tags: ["RAG", "Hackathon", "Team Lead", "NLP"],
  },
  {
    title: "OFDM-симулятор на Python",
    description:
      "Полная модель системы OFDM: генерация → QAM-модуляция → OFDM → канал AWGN → демодуляция и анализ BER.",
    tags: ["Python", "DSP", "OFDM", "Simulation"],
  },
  {
    title: "Приложение подсчёта КБЖУ",
    description:
      "Приложение для расчёта калорий и нутриентов с интеграцией в CRM-системы ресторанов.",
    tags: ["FastAPI", "CRM", "Python", "API"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-16 text-center"
        >
          Мои{" "}
          <span className="text-cyan">проекты</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
