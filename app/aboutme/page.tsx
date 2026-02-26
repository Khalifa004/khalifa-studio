"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Layers, Zap, Cpu, Code, PenTool, Globe, Terminal, Box, ChevronRight, Mail, Linkedin } from "lucide-react";

// --- Design Tokens ---
const organicEase = [0.4, 0, 0.2, 1];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: organicEase }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative p-8 rounded-2xl bg-background/50 border border-black/[0.03] hover:border-black/[0.08] transition-colors duration-500 h-full ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const SkillItem = ({ label }: { label: string }) => (
  <div className="group flex items-center gap-2 py-2 border-b border-black/[0.03] last:border-0 hover:bg-black/[0.02] transition-colors px-2 -mx-2 rounded-lg">
    <div className="h-1.5 w-1.5 rounded-full bg-gray-200 group-hover:bg-emerald-500 transition-colors" />
    <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors">{label}</span>
  </div>
);

// --- Content Data ---
const services = [
  {
    title: "Product Engineering",
    desc: "End-to-end development from concept to launch. Building robust platforms like IntelliCourse with modern stacks.",
    icon: Terminal
  },
  {
    title: "Design Systems",
    desc: "Creating cohesive UI libraries. From Figma tokens to production-ready React components.",
    icon: Layers
  },
  {
    title: "Performance",
    desc: "Optimizing for speed and fluidity. Core Web Vitals, bundle splitting, and silky smooth Framer Motion interactions.",
    icon: Zap
  }
];

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-gray-600 selection:bg-black/5 selection:text-black font-sans antialiased overflow-x-hidden">

      {/* Background Ambience - Light Mode */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-100/40 blur-[150px] rounded-full mix-blend-multiply opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 blur-[150px] rounded-full mix-blend-multiply opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
          className="mb-20 md:mb-32 flex justify-between items-center"
        >
          <Link href="/" className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-black transition-colors duration-300">
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <span>Return</span>
          </Link>

        </motion.div>

        {/* Hero Section */}
        <motion.header
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="mb-32 md:mb-48"
        >
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: organicEase }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/5 shadow-sm">
                  <Image src="/images/khalif.jpg" alt="Khalifa Seck" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium text-sm">Khalifa Seck</span>
                  <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Toronto, CA</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: organicEase, delay: 0.1 }}
                className="text-5xl md:text-7xl font-medium text-gray-900 tracking-tight leading-[1] mb-8"
              >
                Product Engineer <br />
                <span className="text-gray-400">&</span> <span className="font-serif italic font-normal">Frontend</span> Dev.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                className="text-lg font-light text-gray-500 max-w-xl leading-relaxed"
              >
                I stand at the intersection of design and engineering. Crafting intuitive, accessible interfaces in Figma, and bringing them to life with clean, efficient code in React & TypeScript.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: organicEase, delay: 0.3 }}
              className="space-y-4"
            >

            </motion.div>
          </div>
        </motion.header>

        <main className="space-y-32">

          {/* The Hybrid Profile */}
          <Section className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="font-mono text-[10px] font-medium text-gray-900 uppercase tracking-[0.2em] mb-8 opacity-40">The Approach</h2>
              <p className="text-xl md:text-3xl leading-relaxed text-gray-800 font-serif italic">
                I bridge the gap between design and code. My workflow is hybrid by nature—switching seamlessly between Figma and VS Code to ensure the vision matches the reality.
              </p>
            </div>
            <div className="space-y-8">
              <div className="pl-6 border-l border-black/5 space-y-2">
                <div className="text-gray-900 font-medium">Design Engineering</div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  It's not just about how it looks, but how it works. Component architecture, accessibility, and performance are first-class citizens in my design process.
                </p>
              </div>
              <div className="pl-6 border-l border-black/5 space-y-2">
                <div className="text-gray-900 font-medium">Human-Centric</div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Technology should feel invisible. I focus on micro-interactions and organic motion that guide the user naturally.
                </p>
              </div>
            </div>
          </Section>

          {/* Stack / Tech Stack */}
          <Section>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-serif text-gray-900">Stack</h2>
              <div className="h-px w-32 bg-black/5" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <div className="mb-6 w-10 h-10 rounded-lg bg-gray-100/50 flex items-center justify-center text-gray-700">
                  <PenTool size={20} />
                </div>
                <h3 className="text-gray-900 font-medium mb-6">Design</h3>
                <div className="space-y-1">
                  <SkillItem label="Product Design" />
                  <SkillItem label="Interaction" />
                  <SkillItem label="Figma" />
                  <SkillItem label="Motion" />
                </div>
              </Card>

              <Card>
                <div className="mb-6 w-10 h-10 rounded-lg bg-gray-100/50 flex items-center justify-center text-gray-700">
                  <Code size={20} />
                </div>
                <h3 className="text-gray-900 font-medium mb-6">Development</h3>
                <div className="space-y-1">
                  <SkillItem label="React / Next.js" />
                  <SkillItem label="TypeScript" />
                  <SkillItem label="Tailwind CSS" />
                  <SkillItem label="Node.js" />
                </div>
              </Card>

              <Card>
                <div className="mb-6 w-10 h-10 rounded-lg bg-gray-100/50 flex items-center justify-center text-gray-700">
                  <Cpu size={20} />
                </div>
                <h3 className="text-gray-900 font-medium mb-6">Expertise</h3>
                <div className="space-y-1">
                  <SkillItem label="Design Systems" />
                  <SkillItem label="Performance" />
                  <SkillItem label="Accessibility" />
                  <SkillItem label="SEO" />
                </div>
              </Card>
            </div>
          </Section>

          {/* Capabilities / Services */}
          <Section>
            <h2 className="font-mono text-[10px] font-medium text-gray-900 uppercase tracking-[0.2em] mb-12 opacity-40 text-center">Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="group p-6 rounded-xl hover:bg-background transition-colors duration-300 border border-transparent hover:border-black/[0.03] hover:shadow-sm">
                  <div className="mb-4 text-gray-400 group-hover:text-black transition-colors duration-300">
                    <s.icon size={24} />
                  </div>
                  <h3 className="text-gray-900 font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Footer / Connect */}
          <Section className="pt-24 border-t border-black/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-gray-900 font-medium mb-1">Let's build something.</h3>
                <p className="text-sm text-gray-500">Open for select projects and collaborations.</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="mailto:khalifa.seck@outlook.com"
                  className="px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg shadow-gray-200"
                >
                  <Mail size={16} />
                  Email Me
                </Link>
                <Link
                  href="https://www.linkedin.com/in/khalifa-seck-27a139251/"
                  target="_blank"
                  className="px-6 py-3 rounded-full border border-black/10 text-gray-900 font-medium text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 bg-background"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Link>
              </div>
            </div>
          </Section>

        </main>
      </div>
    </div>
  );
}
