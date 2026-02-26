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

export default function NavigatingTheDigitalFutures() {
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
            className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            Navigating the Digital Futures
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
            className="flex items-center gap-4 text-sm font-light tracking-wide text-gray-500"
          >
            <span>November 19, 2023</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Digital Futures</span>
          </motion.div>
        </motion.header>

        <main className="space-y-20 md:space-y-32">

          {/* Intro */}
          <Section className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
              When I first joined <span className="text-black font-medium">OCAD University’s Digital Futures</span> program, I was drawn in by its promise of blending creativity, design, and emerging technologies. It felt like the perfect fit for someone like me who wanted to push boundaries and explore new digital landscapes. The courses were filled with exciting ideas, from interactive media to forward-thinking design concepts. But amidst all this creativity, I hit a major roadblock: coding and web/app design.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent" />
            </div>
          </Section>

          {/* The Challenge */}
          <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <div className="pt-2">
              <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">The Challenge</h2>
            </div>
            <div className="space-y-6">
              <p className="leading-loose">
                As much as I loved the innovation-driven atmosphere, coding was something I just couldn’t wrap my head around. It seemed like a foreign language, and the structured logic behind it felt far removed from the more intuitive, artistic aspects of the program. I quickly realized that if I wanted to create digital products and applications, I needed to understand not just how they looked, but how they worked. Yet, despite my best efforts during the program, I found myself struggling to make progress in coding and web/app development.
              </p>
            </div>
          </Section>

          {/* A Turning Point */}
          <Section className="relative p-8 md:p-12 rounded-2xl bg-background border border-black/[0.03] shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full opacity-50" />

            <h2 className="relative text-2xl font-medium text-gray-900 mb-6">Taking Control</h2>
            <div className="relative space-y-6 text-gray-600 leading-relaxed">
              <p>
                I soon recognized that if I wanted to improve, I’d have to take a different approach. The university provided a solid foundation, but the hands-on technical skills I needed weren’t fully clicking in the classroom setting. That’s when I decided to take control of my own learning journey.
              </p>
              <p>
                I turned to online resources, coding tutorials, and personal projects to bridge the gap in my skills. Whether it was late-night YouTube tutorials or meticulously working through coding exercises, I started teaching myself step by step.
              </p>
            </div>
          </Section>

          {/* Building Skills */}
          <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <div className="pt-2">
              <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">Growth</h2>
            </div>
            <div className="space-y-6">
              <p className="leading-loose">
                It wasn’t easy. Debugging code for hours or facing errors that seemed impossible to solve became regular challenges. But the more I practiced, the more things started to make sense. My understanding of web and app development grew through self-guided projects, where I applied what I learned in real-world scenarios. These projects allowed me to explore ideas that went beyond just theory combining design with functionality and creating intuitive digital experiences that I was proud of.
              </p>
            </div>
          </Section>

          {/* A Creative & Technical Blend */}
          <Section className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-900">A Creative & Technical Blend</h2>
              <p className="leading-loose max-w-3xl">
                Once I gained confidence in coding, I began to see how it could elevate my design work. What started as frustrating and tedious became a powerful tool for bringing my ideas to life. I could now design and build apps that weren’t just visually appealing, but also highly functional. The ability to blend creativity with technical skills opened up a new world of possibilities, and I became more independent and driven in my projects.
              </p>
            </div>

            <div className="pt-12 border-t border-black/5 flex justify-between items-end">
              <div>
                <h3 className="text-sm font-medium text-black uppercase tracking-widest mb-2">Category</h3>
                <p className="text-sm text-gray-500">Learning Journey</p>
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
