"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ConstellationDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const size = 400;
    canvas.width = size;
    canvas.height = size;

    // 16-QAM constellation points
    const points: { x: number; y: number }[] = [];
    for (let i = -3; i <= 3; i += 2) {
      for (let j = -3; j <= 3; j += 2) {
        points.push({ x: i, y: j });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const scale = 40;

      // Grid lines
      ctx.strokeStyle = "rgba(0, 212, 255, 0.08)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, size);
      ctx.moveTo(0, cy);
      ctx.lineTo(size, cy);
      ctx.stroke();

      // Draw constellation points
      points.forEach((p, i) => {
        const noise = Math.sin(time * 2 + i * 0.7) * 3;
        const noiseY = Math.cos(time * 1.5 + i * 1.1) * 3;
        const px = cx + p.x * scale + noise;
        const py = cy + p.y * scale + noiseY;

        // Glow
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 12);
        gradient.addColorStop(0, "rgba(0, 212, 255, 0.6)");
        gradient.addColorStop(1, "rgba(0, 212, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(px, py, 12, 0, Math.PI * 2);
        ctx.fill();

        // Point
        ctx.fillStyle = "#00d4ff";
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Circle boundary
      ctx.strokeStyle = "rgba(0, 212, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5 * scale, 0, Math.PI * 2);
      ctx.stroke();

      time += 0.016;
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[400px] aspect-square opacity-80"
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-cyan text-sm font-[family-name:var(--font-heading)] tracking-widest uppercase"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight"
          >
            Глеб{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">
              Радаев
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted font-[family-name:var(--font-heading)]"
          >
            Software Engineer | AI-augmented Development
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-foreground/70 max-w-lg leading-relaxed"
          >
            Классическая инженерная база + глубокое владение Claude Code,
            LLM-агентами и RAG. Проектирую и строю fullstack-системы
            от архитектуры до продакшена.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 mt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan to-violet text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Проекты
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-card-border text-foreground hover:border-cyan/50 transition-colors text-sm"
            >
              Связаться
            </a>
          </motion.div>
        </motion.div>

        {/* Right — constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          <ConstellationDiagram />
        </motion.div>
      </div>
    </section>
  );
}
