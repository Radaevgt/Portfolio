"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BASE_PATH = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

const interests = [
  "Claude Code / AI Agents",
  "RAG-системы",
  "Fullstack-разработка",
  "DSP & FPGA",
  "AI-Native 6G",
  "Semantic Communication",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-16 text-center"
        >
          Обо{" "}
          <span className="text-cyan">мне</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-cyan to-violet p-[2px]">
              <Image
                src={`${BASE_PATH}/photo.png`}
                alt="Глеб Радаев"
                width={320}
                height={320}
                className="w-full h-full rounded-2xl object-cover object-[center_20%]"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Кто я */}
            <div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] text-cyan mb-2 tracking-wider uppercase">
                Кто я
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Инженер-разработчик с классической технической базой
                и глубоким владением современным AI-стеком. Claude Code,
                LLM-агенты и RAG — мультипликатор продуктивности,
                а не замена инженерного мышления.
              </p>
            </div>

            {/* Чем занимаюсь */}
            <div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] text-cyan mb-2 tracking-wider uppercase">
                Чем занимаюсь
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Fullstack-разработка, проектирование RAG-систем и AI-агентов,
                автоматизация бизнес-процессов. Бэкграунд в DSP и FPGA
                даёт системное мышление и умение работать на низком уровне.
              </p>
            </div>

            {/* Образование */}
            <div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] text-cyan mb-2 tracking-wider uppercase">
                Образование
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                ННГУ им. Лобачевского — «Фундаментальная информатика
                и информационные технологии». Работаю в АНО «Горький Тех».
              </p>
            </div>

            {/* Интересы */}
            <div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] text-cyan mb-2 tracking-wider uppercase">
                Фокус и интересы
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full border border-card-border text-muted hover:border-cyan/40 hover:text-cyan transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
