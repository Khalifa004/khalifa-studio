"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Boxes, Palette, Keyboard, Zap, ShieldCheck, Database, Cpu, Check, Sparkles, BarChart3 } from "lucide-react";
import CaseStudySidebar from "@/components/CaseStudySidebar";

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

const GridItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="group relative p-6 rounded-xl bg-background/50 border border-black/[0.03] hover:border-black/[0.08] transition-colors duration-500">
    <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100/80 text-gray-600 group-hover:text-black group-hover:scale-110 transition-all duration-500 ease-out">
        <Icon size={20} />
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-2 tracking-wide">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

const StatItem = ({ label, value }: { label: string, value: string }) => (
  <div className="border-l border-black/10 pl-6 py-2">
    <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{label}</div>
    <div className="text-lg font-light text-gray-900 tracking-tight">{value}</div>
  </div>
);

export default function IntellicourseCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-gray-600 selection:bg-indigo-100 selection:text-indigo-900 font-sans antialiased overflow-x-clip">

      {/* Background Ambience - Light Mode */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-30%] right-[-10%] w-[70%] h-[70%] bg-indigo-200/20 blur-[120px] rounded-full mix-blend-multiply opacity-40" />
        <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-200/20 blur-[120px] rounded-full mix-blend-multiply opacity-40" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 md:px-12 md:pb-20 md:pt-36">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
          className="mb-14 flex items-center justify-between md:mb-24"
        >
          <Link href="/allwork" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors duration-300">
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <span>Return</span>
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
              className="mb-20 md:mb-32"
            >
              <div className="mb-10 flex flex-col gap-10 md:mb-16 md:flex-row md:items-end md:gap-24">
                <div className="md:flex-1">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: organicEase }}
                    className="mb-6 text-4xl font-medium leading-[0.9] tracking-tighter text-gray-900 sm:text-6xl md:mb-8 md:text-9xl"
                  >
                    IntelliCourse
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                    className="max-w-2xl text-base font-light leading-relaxed text-gray-500 sm:text-lg md:text-xl"
                  >
                    AI-powered learning platform that generates courses, adapts to learners, and provides instant assessments.
                  </motion.p>
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-8 sm:gap-y-8">
                  {[
                    { l: "Type", v: "Startup" },
                    { l: "Toolkit", v: "Next.js, TS, Tailwind" },
                    { l: "Role", v: "Lead Frontend" },
                    { l: "Year", v: "2024" }
                  ].map((item, i) => (
                    <motion.div
                      key={item.l}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: organicEase, delay: 0.3 + (i * 0.1) }}
                    >
                      <StatItem label={item.l} value={item.v} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: organicEase, delay: 0.4 }}
                className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/[0.05] shadow-2xl shadow-gray-200/50"
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/images/intellianimblackbg.mp4" type="video/mp4" />
                </video>
                {/* Optional overlay to lighten video if it's too dark for the theme, 
                  but user might want the contrast. Keeping it clean for now. 
                  Actually, let's add a very slight light wash to integrate it better if it is pitch black. */}
                <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
              </motion.div>
            </motion.header>

            <main className="w-full space-y-20 md:space-y-32 lg:pb-32">

              {/* Overview / Role */}
              <Section id="the-mission" className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
                <div>
                  <h2 className="text-xs font-medium text-gray-900 uppercase tracking-[0.2em] mb-4">The Mission</h2>
                  <div className="h-px w-12 bg-black/10" />
                </div>
                <div className="space-y-12">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                    I lead front‑end implementation and interaction design. My focus: scalable UI architecture, design system, and performant motion.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <GridItem icon={Layers} title="Architecture" desc="App Router structure, layouts, and shared providers." />
                    <GridItem icon={Boxes} title="Component Lib" desc="Reusable UI components and patterns with Tailwind." />
                    <GridItem icon={Palette} title="Design System" desc="Tokens, spacing scale, typography, and accessible color." />
                    <GridItem icon={Zap} title="Motion" desc="Micro‑interactions with Framer Motion." />
                  </div>
                </div>
              </Section>

              {/* Architecture Stack */}
              <Section>
                <div className="border-y border-black/[0.05] py-12">
                  <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {['Next.js App Router', 'TypeScript', 'Tailwind', 'Framer Motion', 'Prism', 'Responsive Images'].map((tech) => (
                      <span key={tech} className="text-sm uppercase tracking-widest font-medium text-gray-900/40 hover:text-gray-900 transition-colors cursor-default">{tech}</span>
                    ))}
                  </div>
                </div>
              </Section>

              {/* Technical Highlights */}
              <Section id="technical-architecture" className="space-y-16">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Technical Architecture</h2>
                  <p className="text-gray-500 leading-relaxed">
                    Building a seamless AI learning requires robust engineering. Here is how we handled the complexity.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* UI Architecture Column */}
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-indigo-600 font-medium pl-2 border-l-2 border-indigo-200">UI Systems</h3>
                    <div className="space-y-4">
                      <GridItem icon={Database} title="Component-driven" desc="Composable components with clear props and slots." />
                      <GridItem icon={Cpu} title="RSC Composition" desc="Server components by default; client islands for interactivity." />
                      <GridItem icon={Check} title="Form Engine" desc="Multi-step flows with field-level validation." />
                    </div>
                  </div>

                  {/* Performance Column */}
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-blue-600 font-medium pl-2 border-l-2 border-blue-200">Performance</h3>
                    <div className="space-y-4">
                      <GridItem icon={Zap} title="Code-splitting" desc="Route-based splitting with lazy loading." />
                      <GridItem icon={Sparkles} title="In-view Render" desc="IntersectionObserver-driven reveals." />
                      <div className="p-6 rounded-xl bg-background border border-black/[0.03] flex flex-col justify-center items-center text-center h-[140px]">
                        <div className="text-3xl font-light text-gray-900 mb-1">98-100</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400">Lighthouse Score</div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Column */}
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-emerald-600 font-medium pl-2 border-l-2 border-emerald-200">Data</h3>
                    <div className="space-y-4">
                      <GridItem icon={BarChart3} title="Event Hooks" desc="Custom hooks for funnel tracking." />
                      <GridItem icon={Database} title="Normalized Shape" desc="Consistent event payloads for aggregation." />
                    </div>
                  </div>
                </div>
              </Section>

              {/* Team */}
              <Section id="the-team" className="grid items-center gap-8 rounded-3xl border border-black/[0.05] bg-background p-5 shadow-sm sm:p-8 md:grid-cols-2 md:gap-12 md:p-12">
                <div>
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">The Team</h2>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Our current team includes two designers and four software developers, working collaboratively to bring innovative solutions to life.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-full border border-black/5 bg-background text-sm text-gray-700">2 Designers</div>
                    <div className="px-4 py-2 rounded-full border border-black/5 bg-background text-sm text-gray-700">4 Developers</div>
                  </div>
                </div>
                <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden shadow-lg shadow-gray-200/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ICNjiz6oBOc?controls=0&modestbranding=1"
                    title="IntelliCourse Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Section>

              {/* Footer Navigation */}
              <Section className="flex justify-between items-end pt-12 border-t border-black/[0.05]">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Next Case Study</h3>
                  <Link href="/allwork" className="text-lg md:text-xl text-gray-900 font-medium hover:text-gray-500 transition-colors">
                    View All Work &rarr;
                  </Link>
                </div>
              </Section>

            </main>
          </div>

          <CaseStudySidebar
            sections={[
              { id: "the-mission", label: "The Mission" },
              { id: "technical-architecture", label: "Technical Architecture" },
              { id: "the-team", label: "The Team" }
            ]}
          />

        </div>
      </div>
    </div>
  );
}
