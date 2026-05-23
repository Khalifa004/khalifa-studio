"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import CaseStudySidebar from '@/components/CaseStudySidebar';

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

export default function EchoBoardPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-gray-600 selection:bg-orange-100 selection:text-orange-900 font-sans antialiased overflow-x-clip">

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
            Case Study 004
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
                    className="flex flex-wrap items-center gap-3 mb-6"
                  >
                    <div className="px-3 py-1 rounded-full border border-black/5 bg-background/50 backdrop-blur-sm">
                      <span className="text-[10px] uppercase tracking-widest text-gray-900">Solo Project</span>
                    </div>
                    <span className="text-gray-400 text-xs uppercase tracking-wider">Aug 2025 – Present</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: organicEase, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-serif text-gray-900 tracking-tight leading-[0.9] mb-8"
                  >
                    EchoBoard
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                    className="text-lg font-light text-gray-500 max-w-xl leading-relaxed"
                  >
                    A unified wojknrkspace that blends real‑time chat, AI assistance, interactive whiteboards, and personal journaling to streamline remote collaboration.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: organicEase, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm">
                      <h3 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">My Role</h3>
                      <p className="text-sm font-medium text-gray-900">Creator & Full-Stack Developer</p>
                    </div>
                    <div className="p-4 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm">
                      <h3 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Tech Stack</h3>
                      <p className="text-sm font-medium text-gray-900">Next.js 15, Supabase, Tailwind, tldraw</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.header>

            <main className="space-y-32 lg:pb-32 w-full">

              {/* The Problem */}
              <Section id="the-problem" className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                <div>
                  <h2 className="text-xs font-medium text-orange-600 uppercase tracking-[0.2em] mb-4">The Problem</h2>
                  <p className="text-xl md:text-3xl leading-relaxed text-gray-900 font-serif italic">
                    Fragmented collaboration breaks momentum.
                  </p>
                </div>
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed text-gray-600 font-light">
                    Distributed teams juggle chat, whiteboards, and docs across multiple disconnected tools. AI is often isolated to a separate tab, meaning teams can't ask questions or summarize in the exact place where collaboration happens.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100/50">
                      <h4 className="text-gray-900 font-medium mb-2">Context Switching</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Ideas get lost when you have to bounce between 4 apps to share a sketch and discuss it.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100/50">
                      <h4 className="text-gray-900 font-medium mb-2">Real-time Conflicts</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Latency and simultaneous edit conflicts degrade trust in the underlying tools.
                      </p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* The Solution */}
              <Section id="the-solution">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-serif text-gray-900">The Solution</h2>
                  <div className="h-px flex-1 bg-black/5 mx-8 hidden sm:block" />
                </div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 border border-black/5 mb-12">
                  <Image
                    src="/images/Echoboard.png"
                    alt="EchoBoard Workspace"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="p-8 rounded-2xl bg-white/40 border border-black/[0.03] hover:border-black/10 transition-colors">
                    <div className="text-xs font-mono text-gray-400 mb-6">01 //</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Unified Comms</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      Real-time multi-user rooms merging text chat with live presence and typing indicators.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="p-8 rounded-2xl bg-white/40 border border-black/[0.03] hover:border-black/10 transition-colors">
                    <div className="text-xs font-mono text-gray-400 mb-6">02 //</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">In-context AI</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      GPT-4o powered assistance that streams responses token-by-token directly into the workspace.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="p-8 rounded-2xl bg-white/40 border border-black/[0.03] hover:border-black/10 transition-colors">
                    <div className="text-xs font-mono text-gray-400 mb-6">03 //</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Live Canvas</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      Integrated tldraw interactive whiteboards with conflict-free multi-cursor synchronization.
                    </p>
                  </div>
                </div>
              </Section>

              {/* Technical Architecture */}
              <Section id="architecture">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-serif text-gray-900">Technical Architecture</h2>
                  <div className="h-px flex-1 bg-black/5 mx-8 hidden sm:block" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-8 rounded-2xl bg-white border border-black/5">
                      <div className="mb-4">
                        <div className="text-xs font-mono text-gray-400 mb-2">01</div>
                        <h3 className="text-gray-900 font-medium">Frontend Foundation</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">
                        Built on Next.js 15 App Router with React 19. Utilizes Streaming SSR and Route-level code splitting for lightning-fast performance.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">TypeScript 5</span>
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">Tailwind 4</span>
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">Framer Motion</span>
                      </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border border-black/5">
                      <div className="mb-4">
                        <div className="text-xs font-mono text-gray-400 mb-2">02</div>
                        <h3 className="text-gray-900 font-medium">Backend & Auth</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">
                        Supabase PostgreSQL with granular Row Level Security (RLS) policies. Clerk handles complex user authentication and OAuth bridging.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">Supabase SSR</span>
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">Clerk Auth</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-8 rounded-2xl bg-black text-white border border-black h-full flex flex-col justify-between">
                      <div>
                        <div className="mb-4">
                          <div className="text-xs font-mono text-gray-500 mb-2">03</div>
                          <h3 className="text-white font-medium">Design Tokens at Scale</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                          The entire application logic is strictly typed and built accessible-first. The theming relies on custom OKLCH palettes mapped to Tailwind for perfectly predictable contrast in dark mode.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-white/10">
                          <span className="text-sm text-gray-300">Radix UI</span>
                          <span className="text-xs font-mono text-gray-500">Primitives</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-white/10">
                          <span className="text-sm text-gray-300">CVA</span>
                          <span className="text-xs font-mono text-gray-500">Variants</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-white/10">
                          <span className="text-sm text-gray-300">Variable Fonts</span>
                          <span className="text-xs font-mono text-gray-500">Typography</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Data Model & Real-time */}
              <Section id="data-model" className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
                <div>
                  <h2 className="text-3xl font-serif text-gray-900 mb-6">Data Model &&nbsp;<br />Real-time</h2>
                  <p className="text-gray-500 leading-relaxed font-light mb-6">
                    Real-time is powered by Supabase WebSockets. Presence and cursors are ephemeral, while persistent content is stored safely in Postgres.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature Breakdown */}
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 border border-black/5 hover:bg-white transition-colors">
                    <div className="mt-2 w-1.5 h-1.5 bg-gray-900 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Optimistic UI & Conflict Resolution</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        Mutations apply instantly and reconcile upon acknowledgement. Room-scoped locks and last-writer-wins logic handles edge cases natively.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 border border-black/5 hover:bg-white transition-colors">
                    <div className="mt-2 w-1.5 h-1.5 bg-gray-900 shrink-0" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Row Level Security Constraints</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        Strict Postgres RLS boundaries ensure users only stream payloads for rooms they are explicitly invited to via role memberships.
                      </p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Outcome */}
              <Section id="impact">
                <div className="p-12 md:p-16 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />

                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-serif mb-6 text-white">Outcome & Reflection</h2>
                    <p className="text-gray-300 leading-relaxed font-light mb-12">
                      EchoBoard successfully reduces tool-switching and keeps teams in flow by unifying disparate collaboration models into one real-time surface.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      <div>
                        <div className="text-4xl font-light text-orange-400 mb-2">-40%</div>
                        <div className="text-sm font-medium text-white">Less Switching</div>
                        <div className="text-xs text-gray-400 mt-1">In pilot sessions</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light text-rose-400 mb-2">+25%</div>
                        <div className="text-sm font-medium text-white">Faster Decisions</div>
                        <div className="text-xs text-gray-400 mt-1">Via whiteboards</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light text-white mb-2">&lt;2m</div>
                        <div className="text-sm font-medium text-white">Setup Time</div>
                        <div className="text-xs text-gray-400 mt-1">Invite to action</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Next Study */}
              <Section className="flex justify-between items-end pt-12 border-t border-black/[0.05]">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Previous Project</h3>
                  <Link href="/allwork/Intellicourse" className="text-lg md:text-xl text-gray-900 font-medium hover:text-gray-500 transition-colors">
                    &larr; IntelliCourse
                  </Link>
                </div>
              </Section>

            </main>
          </div>

          <CaseStudySidebar sections={[
            { id: "the-problem", label: "The Problem" },
            { id: "the-solution", label: "The Solution" },
            { id: "architecture", label: "Technical Architecture" },
            { id: "data-model", label: "Data Model & Real-time" },
            { id: "impact", label: "Outcome & Reflection" }
          ]} />

        </div>
      </div>
    </div>
  );
}