"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const organicEase = [0.4, 0, 0.2, 1];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: organicEase }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function MyPomodoroJourneyCreatingPomora() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-gray-600 selection:bg-black/5 selection:text-black font-sans antialiased overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-100/40 blur-[120px] rounded-full mix-blend-multiply opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-100/40 blur-[100px] rounded-full mix-blend-multiply opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <Link href="/blog" className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-300">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-light tracking-wide">Return to origin</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.header
          style={{ opacity, scale }}
          className="mb-24 md:mb-32 pl-4 border-l border-black/5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: organicEase }}
            className="text-4xl md:text-6xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            My Pomodoro Journey: Creating Pomora
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
            className="flex items-center gap-4 text-sm font-light tracking-wide text-gray-500"
          >
            <span>July 15, 2024</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Productivity</span>
          </motion.div>
        </motion.header>

        <main className="space-y-20 md:space-y-32">

          {/* Intro */}
          <Section className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
              I've always been fascinated by productivity systems and how they can transform our work habits. When I first encountered the Pomodoro Technique, I was intrigued by its simplicity and effectiveness. But as I used existing tools, I found myself wanting something more tailored to my workflow. That's when I decided to build <span className="text-black font-medium">Pomora</span>.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent" />
            </div>
          </Section>

          {/* The Initial Concept */}
          <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <div className="pt-2">
              <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">The Idea</h2>
            </div>
            <div className="space-y-6">
              <p className="leading-loose">
                The idea for Pomora came during a particularly intense work session. I was juggling multiple projects and deadlines, and the existing Pomodoro apps I was using felt too rigid for my needs. I wanted something that could adapt to different types of work, track progress more intelligently, and integrate seamlessly with my existing tools. So I started sketching out what that might look like.
              </p>
            </div>
          </Section>

          {/* Development Challenges */}
          <Section className="relative p-8 md:p-12 rounded-2xl bg-background border border-black/[0.03] shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full opacity-50" />

            <h2 className="relative text-2xl font-medium text-gray-900 mb-6">Building it right</h2>
            <div className="relative space-y-6 text-gray-600 leading-relaxed">
              <p>
                Building Pomora presented some interesting technical challenges. Time zone handling, cross-platform compatibility, and state management across different devices required careful consideration. There were moments of frustration, but each solved problem brought the vision closer to reality. The debugging process, while sometimes tedious, taught me valuable lessons about building robust applications.
              </p>
            </div>
          </Section>

          {/* User Adoption */}
          <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <div className="pt-2">
              <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">Impact</h2>
            </div>
            <div className="space-y-6">
              <p className="leading-loose">
                The most rewarding aspect has been seeing how Pomora has helped others improve their productivity. Users have shared stories about completing projects they'd been putting off, developing better work habits, and finding a sustainable rhythm for their tasks. The feedback has been invaluable for shaping the product's direction and identifying areas for improvement.
              </p>
            </div>
          </Section>

          {/* Future Vision */}
          <Section className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-900">Future Vision</h2>
              <p className="leading-loose max-w-3xl">
                Looking ahead, I'm excited about the possibilities for Pomora. There's potential for AI-driven insights that could help users optimize their work patterns, deeper integrations with project management tools, and features that adapt to individual productivity styles. The goal is to make Pomora not just a timer, but a comprehensive productivity companion.
              </p>
              <p className="leading-loose max-w-3xl">
                Building Pomora has been a journey of learning, problem-solving, and connecting with users who share a passion for productivity. It's shown me how a simple concept can evolve into something that genuinely helps people work better.
              </p>
            </div>

            <div className="pt-12 border-t border-black/5 flex justify-between items-end">
              <div>
                <h3 className="text-sm font-medium text-black uppercase tracking-widest mb-2">Category</h3>
                <p className="text-sm text-gray-500">Productivity</p>
              </div>
              <div className="text-right">
                <Link href="/blog" className="text-sm text-black hover:text-black/60 transition-colors">
                  Next Article &rarr;
                </Link>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}