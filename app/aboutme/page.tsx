"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFigma,
  IconBrandBlender,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandReact,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandFramer,
  IconBrandTailwind,
  IconArrowUpRight,
  IconMail,
  IconDownload,
  IconSparkles,
  IconSchool,
  IconLanguage,
  IconDeviceLaptop,
  IconLayoutGrid,
  IconBolt,
  IconFrame,
} from "@tabler/icons-react";
import { Frame } from "lucide-react";

// ---- Motion helpers -------------------------------------------------------
const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const chip =
  "inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/70 px-4 py-2 text-sm text-neutral-700 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50";

const card =
  "group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md";

// ---- Content strings (tailored) ------------------------------------------
const intro = {
  title: "Design Engineer",
  kicker: "Toronto → Building clean, fast, human interfaces",
  blurb:
    "I design and build thoughtful interfaces—from concept to production. I’m a UI engineer and designer who ships with React, Next.js, TypeScript, and Tailwind, and I care a lot about clarity, motion, and accessibility. Recently I’ve been growing IntelliCourse (AI-powered learning).",
};

const education = {
  school: "OCAD University",
  program: "Digital Futures",
  focus: "Business & Social Innovation",
};

const languages = ["English", "French"] as const;

const skills = {
  Design: [
    { label: "Figma", icon: IconBrandFigma },
    { label: "Prototyping", icon: IconBrandFramer },
    { label: "3D / Blender", icon: IconBrandBlender },
  ],
  Development: [
    { label: "Next.js", icon: IconBrandNextjs },
    { label: "React", icon: IconBrandReact },
    { label: "TypeScript / JS", icon: IconBrandJavascript },
    { label: "Tailwind", icon: IconBrandTailwind },
    { label: "CSS", icon: IconBrandCss3 },
  ],
  Expertise: [
    "Design systems",
    "Motion & micro‑interactions",
    "Accessible, responsive UI",
    "Interactive dashboards",
    "Figma → Code workflows",
    "Performance & DX",
  ],
};

const services = [
  {
    title: "Front‑end Engineering",
    desc: "Production Next.js apps with TypeScript, accessibility, and performance baked in.",
    icon: IconDeviceLaptop,
  },
  {
    title: "UI/UX Design",
    desc: "From architecture and wireframes to high‑fidelity design systems and prototypes.",
    icon: IconLayoutGrid,
  },
  {
    title: "Motion & Interactions",
    desc: "Framer Motion systems, tasteful transitions, and interaction polish that feels native.",
    icon: IconBolt,
  },
];

export default function About() {
  return (
    <div className="relative bg-neutral-50 text-neutral-900">
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200 blur-3xl opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-indigo-200 blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(0,0,0,0.02)_1px)] [background-size:24px_24px]" />
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-28 md:grid-cols-[1.2fr_.8fr] md:pb-32 md:pt-40">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div className="mb-4" {...fade}>
            <span className={`${chip} bg-white/80`}>Khalifa Seck</span>
          </motion.div>

          <motion.h1
            className="text-balance text-5xl font-semibold leading-tight tracking-tight md:text-6xl"
            {...fade}
          >
            {intro.title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 md:text-xl"
            {...fade}
          >
            {intro.blurb}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-3" {...fade}>
            <Link
              href="mailto:khalifa.seck@outlook.com"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              <IconMail size={18} />
              Contact
            </Link>
     
            <Link
              href="https://www.linkedin.com/in/khalifa-seck-27a139251/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:bg-neutral-100"
            >
              <IconBrandLinkedin size={18} />
              LinkedIn
              <IconArrowUpRight size={16} className="-mr-1" />
            </Link>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap items-center gap-2 text-sm text-neutral-600"
            {...fade}
          >
            {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
              (t) => (
                <li key={t} className={`${chip} px-3 py-1`}>{t}</li>
              )
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          className="mx-auto grid place-items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative h-72 w-72 overflow-visible md:h-80 md:w-80">
            {/* Glow ring */}
            <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-tr from-neutral-200 via-white to-neutral-200 p-[2px] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]" />
            <Image
              src="/images/khalif.jpg"
              alt="Portrait of Khalifa Seck"
              fill
              priority
              className="rounded-full object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 pb-10 md:pb-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <motion.div {...fade}>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-neutral-700">
            I bridge product design and front-end engineering, turning complex ideas into clear, functional systems. I focus on creating accessible components, adding meaningful motion, and building with strong performance in mind, ensuring every interface feels effortless to use.
            </p>
          </motion.div>

          <motion.div className="grid gap-6" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div className={card} {...fade}>
              <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500">
                <IconSchool size={18} /> Education
              </div>
              <div className="text-lg font-medium">{education.school}</div>
              <div className="text-neutral-700">{education.program}</div>
              <div className="text-neutral-500">{education.focus}</div>
            </motion.div>

            <motion.div className={card} {...fade}>
              <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500">
                <IconLanguage size={18} /> Languages
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span key={l} className={`${chip}`}>{l}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl" {...fade}>
          Skills & Tools
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Design */}
          <motion.div className={card} {...fade}>
            <div className="mb-4 flex items-center gap-2 text-sm text-neutral-500">
              <IconSparkles size={18} /> Design
            </div>
            <ul className="flex flex-wrap gap-4">
              {skills.Design.map(({ label, icon: I }) => (
                <li key={label} className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm">
                  <I size={18} />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dev */}
          <motion.div className={card} {...fade}>
            <div className="mb-4 flex items-center gap-2 text-sm text-neutral-500">
              <IconDeviceLaptop size={18} /> Development
            </div>
            <ul className="flex flex-wrap gap-4">
              {skills.Development.map(({ label, icon: I }) => (
                <li key={label} className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm">
                  <I size={18} />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div className={card} {...fade}>
            <div className="mb-4 flex items-center gap-2 text-sm text-neutral-500">
              <Frame size={18} /> Expertise
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {skills.Expertise.map((s) => (
                <li key={s} className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl" {...fade}>
          Services
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map(({ title, desc, icon: I }) => (
            <motion.article key={title} className={card} {...fade}>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/90 text-white">
                <I size={18} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t border-neutral-200/80 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <p className="text-center text-sm text-neutral-600 md:text-left">
            Open to product design & front‑end roles, and selected freelance work.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="mailto:khalifaseckbiz@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800"
            >
              <IconMail size={18} />
              Get in touch
            </Link>
            <Link
              href="https://www.linkedin.com/in/khalifa-seck-27a139251/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:bg-neutral-100"
            >
              <IconBrandLinkedin size={18} />
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
