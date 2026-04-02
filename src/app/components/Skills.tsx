"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "DSP & Telecom",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      "FFT/IFFT",
      "OFDM",
      "QAM (BPSK–256-QAM)",
      "LTE/5G NR",
      "3GPP",
      "Канальное кодирование",
      "BER/EVM/SNR",
    ],
  },
  {
    title: "FPGA & Hardware",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      "SystemVerilog RTL",
      "ModelSim",
      "Fixed-point оптимизация",
      "IP-core проектирование",
    ],
  },
  {
    title: "Programming",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["Python", "NumPy", "MATLAB", "FastAPI", "Docker", "Git"],
  },
  {
    title: "AI / ML",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: [
      "RAG",
      "LangChain",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "Computer Vision",
      "Hugging Face",
      "LLM",
      "Prompt Engineering",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-16 text-center"
        >
          Навыки и{" "}
          <span className="text-cyan">технологии</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="group p-6 rounded-xl border border-card-border bg-card hover:border-cyan/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-cyan">{cat.icon}</span>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] group-hover:text-cyan transition-colors">
                  {cat.title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    className="text-xs px-3 py-1.5 rounded-full border border-card-border text-muted hover:text-cyan hover:border-cyan/40 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
