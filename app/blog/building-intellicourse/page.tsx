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

export default function BuildingIntelliCourse() {
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
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-100/40 blur-[120px] rounded-full mix-blend-multiply opacity-60" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 blur-[100px] rounded-full mix-blend-multiply opacity-50" />
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
            Building IntelliCourse
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
            className="flex items-center gap-4 text-sm font-light tracking-wide text-gray-500"
          >
            <span>August 08, 2025</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>AI Engineering</span>
          </motion.div>
        </motion.header>

        <main className="space-y-20 md:space-y-32">

          {/* Intro */}
          <Section className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
              Over the past year, I’ve been working on something that has challenged me as both a designer and a developer. It began as a simple question: <span className="text-black font-normal">What if creating a complete, personalized course could be as easy as telling an AI what you want to learn?</span>
            </p>
            <div className="mt-8 flex gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent" />
            </div>
          </Section>

          {/* The Core Concept */}
          <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <div className="pt-2">
              <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">The Core</h2>
            </div>
            <div className="space-y-6">
              <p className="leading-loose">
                IntelliCourse is an AI-powered platform that creates courses, assignments, and grading in one place. It acts like a personal tutor who not only knows your goals but adapts to your pace and style of learning. No endless searches, no patchwork of videos just a structured path.
              </p>
            </div>
          </Section>

          {/* From Idea to Prototype */}
          <Section className="relative p-8 md:p-12 rounded-2xl bg-background border border-black/[0.03] shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full opacity-50" />

            <h2 className="relative text-2xl font-medium text-gray-900 mb-6">From idea to prototype</h2>
            <div className="relative space-y-6 text-gray-600 leading-relaxed">
              <p>
                At first, the vision felt ambitious. Could AI reliably generate high-quality learning material? We started with a simple, clean interface that would feel inviting.
              </p>
              <p>
                We built the course generator with the <span className="text-gray-900 border-b border-black/10 pb-0.5">ChatGPT API</span>, then connected the <span className="text-gray-900 border-b border-black/10 pb-0.5">YouTube API</span> to pull in relevant videos. The result was seamless: ask for a course on “Python for data analysis” and, within seconds, IntelliCourse would return modules with reading material, videos, and assignments.
              </p>
            </div>
          </Section>

          {/* Offline Mode - Technical Highlight */}
          <Section className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-2xl font-medium text-gray-900">Designing for real people</h2>
              <p className="leading-loose">
                A big focus was making IntelliCourse work in low-connectivity environments. We built offline-ready modules and <span className="text-black font-medium">CDOM (Course Data Offline Mode)</span> so users could download lessons and sync later. For many students, this wasn’t optional it was the only way they could fully use the platform.
              </p>
            </div>
            <div className="order-1 md:order-2 flex items-center justify-center p-8 rounded-full bg-background border border-black/[0.05] aspect-square md:aspect-auto shadow-sm">
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-gray-900">CDOM</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">Offline Architecture</div>
              </div>
            </div>
          </Section>

          {/* Quote Block */}
          <Section>
            <div className="relative pl-8 md:pl-16 py-4">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent" />
              <p className="text-xl md:text-2xl font-light text-gray-800 italic leading-relaxed">
                “Instead of generic results, IntelliCourse could explain why an answer was wrong, suggest resources, and adjust the next lesson accordingly.”
              </p>
            </div>
          </Section>

          {/* Why it Matters & Future */}
          <Section className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-900">Why this mattered</h2>
              <p className="leading-loose max-w-3xl">
                The highlight came during the <span className="text-black font-medium">Global AI Summit in Kigali</span>. Feedback from students and educators reinforced that education is about delivering quality learning experiences. InteliCourse wasn’t just a project it was proof that you can take an ambitious idea and turn it into something real.
              </p>
            </div>

            <div className="pt-12 border-t border-black/5 flex justify-between items-end">
              <div>
                <h3 className="text-sm font-medium text-black uppercase tracking-widest mb-2">Status</h3>
                <p className="text-sm text-gray-500">Evolving • Beta Testing</p>
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
