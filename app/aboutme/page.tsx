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
      <div className="relative z-10 mx-auto max-w-[90rem] px-5 pb-20 pt-28 sm:px-8 sm:pt-32 md:pb-28">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
          className="mb-16 flex items-center justify-between md:mb-24"
        >
          <Link href="/" className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Home
          </Link>
        </motion.div>

        <motion.header style={{ opacity: heroOpacity, scale: heroScale }} className="mb-20 border-b border-black/[0.1] pb-14 md:mb-28 md:pb-20">
          <div className="grid items-end gap-10 md:grid-cols-[1.65fr_0.85fr]">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: organicEase }}
                className="mb-8 flex items-center gap-3"
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
                className="mb-8 text-[clamp(3rem,9vw,9rem)] font-medium leading-[0.88] tracking-[-0.07em] text-gray-950"
              >
                Product Engineer <br />
                <span className="text-gray-400">&</span> <span className="font-normal">Frontend</span> Dev.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                className="max-w-xl text-lg leading-relaxed tracking-[-0.02em] text-gray-600"
              >
                I stand at the intersection of design and engineering. Crafting intuitive, accessible interfaces in Figma, and bringing them to life with clean, efficient code in React &amp; TypeScript.
              </motion.p>
            </div>

            <div />
          </div>
        </motion.header>

        <main className="space-y-20 md:space-y-28">
          <Section className="grid gap-12 rounded-[1.5rem] bg-[#eaeae7] px-7 py-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:px-12 md:py-14">
            <div>
              <p className="text-sm text-gray-500">What I do</p>
              <h2 className="mt-5 text-4xl font-medium leading-[0.9] tracking-[-0.06em] text-gray-950 md:text-5xl">
                Design it. Build it. Make it better.
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-xl leading-relaxed tracking-[-0.02em] text-gray-800 md:text-2xl">
                I build the customer-facing parts of digital products, from the first pass at a flow to the frontend that ships.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-gray-500 md:text-base">
                The value I bring is being able to make decisions on both sides of the work. I can work through a screen in Figma, understand what it needs to do in a real browser, and build it without losing the intent along the way.
              </p>
            </div>
          </Section>

          <Section>
            <div className="mb-3 flex items-end justify-between border-b border-black/[0.1] pb-6">
              <div>
                <p className="text-sm text-gray-500">The work</p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.055em] text-gray-950 md:text-4xl">One process, from idea to interface.</h2>
              </div>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400 sm:block">01 / 03</span>
            </div>
            <div>
              {practices.map((practice) => (
                <article key={practice.number} className="grid gap-4 border-b border-black/[0.1] py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-8 md:grid-cols-[4.5rem_1fr_1.1fr] md:py-8">
                  <span className="text-xs text-gray-400">{practice.number}</span>
                  <h3 className="text-xl font-medium tracking-[-0.045em] text-gray-950 md:text-2xl">{practice.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-gray-500">{practice.body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-sm text-gray-500">Working stack</p>
              <h2 className="mt-4 text-4xl font-medium leading-[0.9] tracking-[-0.06em] text-gray-950">The tools I use to get the work across the line.</h2>
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
                <p className="text-sm text-gray-500">Let&apos;s talk</p>
                <h2 className="mt-4 text-4xl font-medium leading-[0.9] tracking-[-0.06em] text-gray-950 md:text-5xl">Looking for a product engineer?</h2>
                <p className="mt-5 text-sm leading-relaxed text-gray-500">I&apos;m open to product, frontend, and design-engineering opportunities.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:khalifa.seck@outlook.com" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
                  <Mail className="h-4 w-4" strokeWidth={1.5} /> Email me
                </a>
                <a href="https://www.linkedin.com/in/khalifa-seck-27a139251/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/[0.14] bg-background px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
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
