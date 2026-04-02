"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    year: "2025",
    title: "Участие в международном проекте",
    description: "Разработка маркетплейса для ботов с нуля — архитектура, fullstack-реализация, интеграция в сторонние системы.",
  },
  {
    year: "2025",
    title: "АНО «Горький Тех»",
    description: "Разработка AI-проектов, RAG-систем и интеллектуальных решений на базе LLM.",
  },
  {
    year: "2025",
    title: "Хакатон Альфа-Банка",
    description: "Тимлид проектной команды. RAG-система для интеллектуального поиска и обработки запросов клиентов.",
  },
  {
    year: "2025",
    title: "Грант «УМНИК — Электроника»",
    description: "Фонд содействия инновациям. Проект «Разработка СФ-блока для модуляции и демодуляции радиосигнала LTE/5G NR».",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-16 text-center"
        >
          Опыт и{" "}
          <span className="text-cyan">достижения</span>
        </motion.h2>

        <div ref={containerRef} className="relative">
          {/* Animated line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan to-violet origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {events.map((event, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-4 md:gap-8 items-center ${
                  i % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-cyan border-2 border-background -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

                {/* Year (left on desktop) */}
                <div
                  className={`pl-14 md:pl-0 ${
                    i % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:text-left md:pl-12 md:col-start-2"
                  }`}
                >
                  <span className="font-[family-name:var(--font-heading)] text-cyan text-sm">
                    {event.year}
                  </span>
                </div>

                {/* Content (right on desktop) */}
                <div
                  className={`pl-14 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pl-12"
                      : "md:pr-12 md:text-right md:col-start-1 md:row-start-1"
                  }`}
                >
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
