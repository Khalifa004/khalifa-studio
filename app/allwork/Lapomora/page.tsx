"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { LogoMarquee } from '@/components/logoroulette';
import CaseStudySidebar from '@/components/CaseStudySidebar';

// --- Design Tokens ---
const organicEase = [0.4, 0, 0.2, 1];

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <motion.div
      id={id}
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
  <div className={`relative p-8 rounded-2xl bg-gray-50/50 border border-black/[0.03] hover:border-black/[0.08] transition-colors duration-500 h-full ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default function LapomoraPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-gray-600 selection:bg-black/5 selection:text-black font-sans antialiased overflow-x-clip">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
          className="mb-20 md:mb-32 flex justify-between items-center"
        >
          <Link href="/allwork" className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors duration-300">
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <span>All Work</span>
          </Link>
          <div className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-gray-400">
            Case Study 002
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_250px] gap-12 items-start relative">

          <div className="w-full min-w-0">
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
                    <div className="px-3 py-1 rounded-full border border-black/5 bg-background/50 backdrop-blur-sm">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500">Personal Project</span>
                    </div>
                    <span className="text-gray-400 text-xs uppercase tracking-wider">2024</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: organicEase, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-medium text-gray-900 tracking-tight leading-[0.9] mb-8"
                  >
                    Pomora
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                    className="text-lg font-light text-gray-500 max-w-xl leading-relaxed"
                  >
                    An intelligent Pomodoro timer designed to calm the chaos. Integrating structured focus cycles with subtle gamification to make productivity feel natural.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: organicEase, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-4">
                    <Link
                      href="https://pomora.app"
                      target="_blank"
                      className="group flex items-center justify-between p-4 rounded-xl bg-background border border-black/[0.03] hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <span className="text-sm font-medium text-gray-900">Visit Live Site</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.header>

            <main className="space-y-32 lg:pb-32 w-full">

              {/* Overview / Problem */}
              <Section id="overview" className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div>
                  <h2 className="text-xs font-medium text-gray-900 uppercase tracking-[0.2em] mb-8 opacity-40">The Challenge</h2>
                  <p className="text-xl md:text-3xl leading-relaxed text-gray-800 font-serif italic">
                    Distractions make it hard to maintain momentum. Pomora pairs structured focus/break cycles with subtle cues and analytics, so staying focused feels natural not forceful.
                  </p>
                </div>
                <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-black/5">
                  <Image
                    src="/images/progresscard.png"
                    alt="Pomora Interface"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Section>

              {/* Features Grid */}
              <Section id="features">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-serif text-gray-900">Core Features</h2>
                  <div className="h-px w-32 bg-black/5" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { id: "01", title: "Intuitive Timer", desc: "Circular progress with color psychology." },
                    { id: "02", title: "Analytics", desc: "Visual productivity data tracking." },
                    { id: "03", title: "Tasks", desc: "Integrated to-do list for flow." },
                    { id: "04", title: "Sync", desc: "Seamless cross-device experience." }
                  ].map((f, i) => (
                    <Card key={i}>
                      <div className="text-xs font-mono text-gray-400 mb-6">{f.id} //</div>
                      <h3 className="text-gray-900 font-medium mb-2">{f.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-light">
                        {f.desc}
                      </p>
                    </Card>
                  ))}
                </div>
              </Section>

              {/* Gallery Section - Feature Highlights */}
              <Section id="gallery">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-black/5 shadow-sm">
                      <Image src="/images/t1.png" alt="Weekly Analysis" fill className="object-cover" />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-black/5 shadow-sm">
                      <Image src="/images/t3.png" alt="Task Management" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="space-y-8 md:pt-16">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-black/5 shadow-sm">
                      <Image src="/images/t2.png" alt="Timer Interface" fill className="object-cover" />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-black/5 shadow-sm">
                      <Image src="/images/t4.png" alt="Settings" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </Section>

              {/* Process & System Architecture */}
              <Section id="process">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-serif text-gray-900">Process & Architecture</h2>
                  <div className="h-px flex-1 bg-black/5 mx-8 hidden sm:block" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card>
                    <div className="text-xs font-mono text-gray-400 mb-6">Phase 01</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Research & Scope</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Analyzed competitor productivity tools</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Defined core focus-cycle requirements</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Prioritized essential MVPs vs nice-to-haves</span>
                      </li>
                    </ul>
                  </Card>

                  <Card>
                    <div className="text-xs font-mono text-gray-400 mb-6">Phase 02</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Design System</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Low-fidelity user flow wireframing</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Accessible, cohesive color palette derivation</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Establishing geometric typographic hierarchy</span>
                      </li>
                    </ul>
                  </Card>

                  <Card>
                    <div className="text-xs font-mono text-gray-400 mb-6">Phase 03</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Performance & Build</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Optimized time-to-interactive</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Smooth 60fps timer interactions</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-500 font-light">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        <span>Rigorous CI/CD deployment pipelines</span>
                      </li>
                    </ul>
                  </Card>
                </div>

                <div className="rounded-2xl border border-black/5 overflow-hidden bg-background shadow-sm">
                  <picture>
                    <source srcSet="/images/Pomoraflowchart.png" media="(min-width: 1024px)" />
                    <source srcSet="/images/Pomoraflowchart.png" media="(min-width: 768px)" />
                    <img
                      src="/images/Pomoraflowchart.png"
                      alt="Pomora Architecture Flow Chart"
                      className="w-full h-auto"
                    />
                  </picture>
                </div>
              </Section>

              {/* Tech Stack */}
              <Section id="tech-stack">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-serif text-gray-900">Tech Stack</h2>
                  <div className="h-px w-32 bg-black/5" />
                </div>
                <div className="w-full overflow-hidden">
                  <LogoMarquee />
                </div>
              </Section>

              {/* Footer / Results */}
              <Section id="impact" className="pt-24 border-t border-black/5">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-6">Impact</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Pomora helps users build consistent focus habits and recover from context switching faster. The combination of clear visual states, smart defaults, and a supportive community loop makes the experience feel calm while still driving progress.
                    </p>
                  </div>
                  <div>
                    <div className="p-8 rounded-2xl bg-lime-50 border border-lime-100/50">
                      <h4 className="text-lime-900 font-medium mb-2">Next Steps</h4>
                      <p className="text-lime-700/80 text-sm leading-relaxed">
                        Currently rolling out new features including enhanced analytics and social accountability modes. Stay tuned for updates.
                      </p>
                    </div>
                  </div>
                </div>
              </Section>

            </main>
          </div>

          <CaseStudySidebar sections={[
            { id: "overview", label: "Overview" },
            { id: "features", label: "Core Features" },
            { id: "gallery", label: "Gallery" },
            { id: "process", label: "Process" },
            { id: "tech-stack", label: "Tech Stack" },
            { id: "impact", label: "Impact & Results" }
          ]} />

        </div>
      </div>
    </div>
  );
}
