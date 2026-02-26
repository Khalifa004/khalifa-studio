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

export default function NewMilestone() {
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
            <span className="font-light tracking-wide">Back to writing</span>
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
            A New Milestone in My Career
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
            className="flex items-center gap-4 text-sm font-light tracking-wide text-gray-500"
          >
            <span>August 23, 2024</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Career Updates</span>
          </motion.div>
        </motion.header>

        <main className="space-y-20 md:space-y-32">

          {/* Intro */}
          <Section className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
              I’m thrilled to share that I have started a new position as a <span className="text-black font-medium">Software Developer</span> at <span className="text-black font-medium">RBRO Solutions</span>! This transition marks a significant step in my professional journey, and I’m eager to contribute to a team that is at the forefront of legal technology.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent" />
            </div>
          </Section>

          {/* The Opportunity */}
          <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <div className="pt-2">
              <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">The Role</h2>
            </div>
            <div className="space-y-6">
              <p className="leading-loose">
                Joining RBRO Solutions is an exciting opportunity for me to apply my skills in software development within a dynamic and innovative environment. The company is known for its commitment to delivering high-quality solutions, and I am looking forward to collaborating with talented colleagues who share a passion for excellence.
              </p>
              <p className="leading-loose">
                In this role, I will be focused on developing software solutions that enhance productivity and efficiency for legal professionals. I am particularly excited about the potential to work on challenging projects that will push my boundaries and allow me to grow as a developer.
              </p>
            </div>
          </Section>

          {/* Looking Ahead section */}
          <Section className="relative p-8 md:p-12 rounded-2xl bg-background border border-black/[0.03] shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50" />

            <h2 className="relative text-2xl font-medium text-gray-900 mb-6">Looking Ahead</h2>
            <div className="relative space-y-6 text-gray-600 leading-relaxed">
              <p>
                As I embark on this new chapter, I am filled with gratitude for the support I have received from my network. I want to thank everyone who has encouraged me along the way. I am ready to embrace the challenges ahead and make a meaningful impact at RBRO Solutions.
              </p>
              <p>
                Stay tuned for updates as I settle into my new role and share insights from my experiences!
              </p>
            </div>
          </Section>

          {/* Footer Navigation */}
          <Section className="pt-12 border-t border-black/5 flex justify-between items-end">
            <div>
              <h3 className="text-sm font-medium text-black uppercase tracking-widest mb-2">Company</h3>
              <p className="text-sm text-gray-500">RBRO Solutions</p>
            </div>
            <div className="text-right">
              <Link href="/blog" className="text-sm text-black hover:text-black/60 transition-colors">
                Next Article &rarr;
              </Link>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
