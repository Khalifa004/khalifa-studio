"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

const organicEase = [0.4, 0, 0.2, 1] as const;

const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.7, ease: organicEase }}
    className={`relative ${className}`}
  >
    {children}
  </motion.section>
);

const practices = [
  {
    number: "01",
    title: "Shape the flow",
    body: "I use Figma to turn an early idea into a clear path: what someone needs to do, what they need to understand, and what happens when things do not go as planned.",
  },
  {
    number: "02",
    title: "Build the product",
    body: "I take that work into React and TypeScript, creating responsive components and real states instead of stopping at a polished mockup.",
  },
  {
    number: "03",
    title: "Keep improving it",
    body: "Once it is live, I care about the things that make an interface hold up: accessibility, performance, feedback, and the small details people notice without naming.",
  },
];

const capabilities = [
  {
    label: "Design",
    items: ["Product flows & information hierarchy", "Figma libraries and component states", "Prototypes for interaction and motion", "UI critique and visual QA"],
  },
  {
    label: "Engineering",
    items: ["React, Next.js & TypeScript", "Tailwind and component architecture", "Frontend integrations and APIs", "Responsive, accessible implementation"],
  },
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
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-background font-sans text-gray-600 antialiased selection:bg-black/5 selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute right-[-10%] top-[-20%] h-[60%] w-[60%] rounded-full bg-emerald-100/40 opacity-50 blur-[150px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-100/40 opacity-50 blur-[150px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
          className="mb-20 flex items-center justify-between md:mb-32"
        >
          <Link href="/" className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Home
          </Link>
        </motion.div>

        <motion.header style={{ opacity: heroOpacity, scale: heroScale }} className="mb-28 md:mb-40">
          <div className="grid items-end gap-12 md:grid-cols-[1.5fr_1fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: organicEase }}
                className="mb-6 flex items-center gap-3"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/5 shadow-sm">
                  <Image src="/images/khalif.jpg" alt="Khalifa Seck" fill sizes="48px" className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">Khalifa Seck</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">Toronto, CA</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: organicEase, delay: 0.1 }}
                className="mb-8 text-5xl font-medium leading-[1] tracking-tight text-gray-900 md:text-7xl"
              >
                Product Engineer <br />
                <span className="text-gray-400">&</span> <span className="font-serif font-normal italic">Frontend</span> Dev.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                className="max-w-xl text-lg font-light leading-relaxed text-gray-500"
              >
                I stand at the intersection of design and engineering. Crafting intuitive, accessible interfaces in Figma, and bringing them to life with clean, efficient code in React &amp; TypeScript.
              </motion.p>
            </div>

            <div />
          </div>
        </motion.header>

        <main className="space-y-24 md:space-y-32">
          <Section className="grid gap-12 border-y border-black/[0.1] py-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:py-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">What I do</p>
              <h2 className="mt-5 font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-gray-900 md:text-5xl">
                Design it. Build it. Make it better.
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-xl leading-relaxed tracking-[-0.02em] text-gray-800 md:text-2xl">
                I build the customer-facing parts of digital products—from the first pass at a flow to the frontend that ships.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-gray-500 md:text-base">
                The value I bring is being able to make decisions on both sides of the work. I can work through a screen in Figma, understand what it needs to do in a real browser, and build it without losing the intent along the way.
              </p>
            </div>
          </Section>

          <Section>
            <div className="mb-10 flex items-end justify-between border-b border-black/[0.1] pb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">The work</p>
                <h2 className="mt-3 text-3xl tracking-[-0.035em] text-gray-900 md:text-4xl">One process, from idea to interface.</h2>
              </div>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400 sm:block">01—03</span>
            </div>
            <div>
              {practices.map((practice) => (
                <article key={practice.number} className="grid gap-4 border-b border-black/[0.1] py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-8 md:grid-cols-[4.5rem_1fr_1.1fr] md:py-8">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-gray-400">{practice.number}</span>
                  <h3 className="text-xl font-medium tracking-[-0.025em] text-gray-900 md:text-2xl">{practice.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-gray-500">{practice.body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">Working stack</p>
              <h2 className="mt-4 font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-gray-900">The tools I use to get the work across the line.</h2>
            </div>
            <div className="grid border-t border-black/[0.1] sm:grid-cols-2 sm:border-l">
              {capabilities.map((capability) => (
                <div key={capability.label} className="border-b border-black/[0.1] py-7 sm:border-r sm:px-7 sm:py-0 md:px-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400">{capability.label}</p>
                  <ul className="mt-5 space-y-3">
                    {capability.items.map((item) => (
                      <li key={item} className="border-t border-black/[0.06] pt-3 text-sm leading-snug text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section className="border-t border-black/[0.1] pt-12 md:pt-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">Let&apos;s talk</p>
                <h2 className="mt-4 font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-gray-900 md:text-5xl">Looking for a product engineer?</h2>
                <p className="mt-5 text-sm leading-relaxed text-gray-500">I&apos;m open to product, frontend, and design-engineering opportunities.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:khalifa.seck@outlook.com" className="inline-flex items-center gap-2 bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
                  <Mail className="h-4 w-4" strokeWidth={1.5} /> Email me
                </a>
                <a href="https://www.linkedin.com/in/khalifa-seck-27a139251/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-black/[0.14] bg-background px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
                  <Linkedin className="h-4 w-4" strokeWidth={1.5} /> LinkedIn
                </a>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
