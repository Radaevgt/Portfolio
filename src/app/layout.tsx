import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Глеб Радаев — Software Engineer",
  description:
    "Инженер-разработчик. Fullstack, RAG-системы, AI-агенты, Claude Code. Ручной код + AI-инструменты.",
  keywords: [
    "AI Developer",
    "Claude Code",
    "LLM",
    "RAG",
    "AI Agents",
    "DSP",
    "FPGA",
    "Python",
  ],
  authors: [{ name: "Глеб Радаев" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${jetbrainsMono.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
