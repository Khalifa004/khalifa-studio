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
  IconRocket,
  IconTarget,
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

const languages = [
  { name: "French", level: "Native", description: "First language" },
  { name: "English", level: "Fluent", description: "Professional proficiency" }
] as const;

const skills = {
  Design: [
    { label: "Figma", icon: IconBrandFigma, level: 95, description: "Advanced prototyping & design systems" },
    { label: "Prototyping", icon: IconBrandFramer, level: 90, description: "Interactive prototypes & animations" },
    { label: "3D / Blender", icon: IconBrandBlender, level: 80, description: "3D modeling & visualization" },
  ],
  Development: [
    { label: "Next.js", icon: IconBrandNextjs, level: 95, description: "Full-stack React framework" },
    { label: "React", icon: IconBrandReact, level: 90, description: "Modern component architecture" },
    { label: "TypeScript / JS", icon: IconBrandJavascript, level: 88, description: "Type-safe development" },
    { label: "Tailwind", icon: IconBrandTailwind, level: 92, description: "Utility-first CSS framework" },
    { label: "CSS", icon: IconBrandCss3, level: 85, description: "Advanced styling & animations" },
  ],
  Expertise: [
    { label: "Design systems", icon: IconLayoutGrid, level: 90 },
    { label: "Motion & micro‑interactions", icon: IconBolt, level: 88 },
    { label: "Accessible, responsive UI", icon: IconDeviceLaptop, level: 85 },
    { label: "Interactive dashboards", icon: IconSparkles, level: 90 },
    { label: "Figma → Code workflows", icon: IconFrame, level: 92 },
    { label: "Performance & DX", icon: IconSparkles, level: 85 },
  ],
};

const currentFocus = {
  upcoming: [
    {
      title: "Portfolio v3.0",
      description: "Redesigning portfolio with advanced 3D interactions and performance optimizations",
      timeline: "",
      icon: IconRocket
    },
    {
      title: "Open Source Components",
      description: "Publishing reusable React component library for modern web applications",
      timeline: "", 
      icon: IconLayoutGrid
    }
  ]
};

const services = [
  {
    title: "Product Development",
    desc: "End-to-end product development from concept to launch. I've built IntelliCourse (AI-powered learning platform) and multiple web applications with modern tech stacks.",
    icon: IconDeviceLaptop,
    highlights: ["Next.js & React", "TypeScript", "Database Design", "API Integration"],
    recent: "IntelliCourse - AI Learning Platform"
  },
  {
    title: "Design Systems & UI",
    desc: "Creating cohesive design systems and component libraries. From Figma designs to production-ready React components with accessibility and responsive design.",
    icon: IconLayoutGrid,
    highlights: ["Component Libraries", "Figma to Code", "Responsive Design", "Accessibility"],
    recent: "Portfolio Component System"
  },
  {
    title: "Performance & Optimization",
    desc: "Optimizing web applications for speed and user experience. Core Web Vitals, bundle optimization, and smooth animations with Framer Motion.",
    icon: IconBolt,
    highlights: ["Core Web Vitals", "Bundle Optimization", "Framer Motion", "SEO"],
    recent: "Portfolio Performance Optimization"
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
              <div className="flex flex-col gap-3">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`${chip} font-medium`}>{l.name}</span>
                      <span className="text-xs text-neutral-500">({l.level})</span>
                    </div>
                    <span className="text-xs text-neutral-600">{l.description}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="mx-auto max-w-7xl px-6 py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <motion.div className="text-center mb-12" {...fade}>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-4">Coming Next</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Projects and improvements I'm working on
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div className={card} {...fade}>
            <div className="flex items-center gap-2 mb-6">
              <IconTarget size={24} className="text-emerald-600" />
              <h3 className="text-xl font-semibold">Upcoming Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentFocus.upcoming.map(({ title, description, timeline, icon: I }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors">
                  <I size={20} className="text-emerald-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{title}</h4>
                      <span className="text-xs text-neutral-500 font-medium bg-neutral-200 px-2 py-1 rounded-full">{timeline}</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
              <IconSparkles size={18} /> Design
            </div>
            <ul className="space-y-4">
              {skills.Design.map(({ label, icon: I, level, description }) => (
                <motion.li 
                  key={label} 
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 transition-all hover:border-neutral-300 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <I size={20} className="text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                      <span className="font-medium text-neutral-900">{label}</span>
                      <span className="ml-auto text-xs font-medium text-neutral-500">{level}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5 mb-2">
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-xs text-neutral-600 group-hover:text-neutral-700 transition-colors">{description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Dev */}
          <motion.div className={card} {...fade}>
            <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
              <IconDeviceLaptop size={18} /> Development
            </div>
            <ul className="space-y-4">
              {skills.Development.map(({ label, icon: I, level, description }) => (
                <motion.li 
                  key={label} 
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 transition-all hover:border-neutral-300 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <I size={20} className="text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                      <span className="font-medium text-neutral-900">{label}</span>
                      <span className="ml-auto text-xs font-medium text-neutral-500">{level}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5 mb-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-xs text-neutral-600 group-hover:text-neutral-700 transition-colors">{description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div className={card} {...fade}>
            <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
              <Frame size={18} /> Expertise
            </div>
            <ul className="space-y-3">
              {skills.Expertise.map(({ label, icon: I, level }) => (
                <motion.li 
                  key={label} 
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 transition-all hover:border-neutral-300 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <I size={18} className="text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                      <span className="font-medium text-neutral-900 text-sm">{label}</span>
                      <span className="ml-auto text-xs font-medium text-neutral-500">{level}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1">
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl" {...fade}>
          What I Do
        </motion.h2>
        <motion.p className="text-center text-lg text-neutral-600 mt-4 max-w-3xl mx-auto" {...fade}>
          Specialized services combining design thinking with technical expertise
        </motion.p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map(({ title, desc, icon: I, highlights, recent }) => (
            <motion.article 
              key={title} 
              className={`${card} hover:shadow-lg transition-all duration-300`} 
              {...fade}
              whileHover={{ y: -4 }}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 text-white shadow-lg">
                <I size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600 mb-4">{desc}</p>
              
              <div className="mb-4">
                <h4 className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((skill) => (
                    <span 
                      key={skill} 
                      className="inline-flex items-center px-2 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Recent: {recent}</span>
                </div>
              </div>
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
