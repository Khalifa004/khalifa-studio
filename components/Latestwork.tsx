"use client";

import { motion } from "framer-motion";
import ArrowMark from "./ArrowMark";
import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  type: string;
  description: string;
  image?: string;
  href: string;
  role: string;
  year: string;
  surface: string;
  logoText?: string;
  imageFit?: "cover" | "contain";
  external?: boolean;
};

const projects: Project[] = [
  {
    name: "byOne",
    type: "iOS app",
    description: "A local-first workout tracker that turns a training plan into a calmer gym session and an honest view of progress.",
    image: "/byOne-AppIcon-v2.svg",
    imageFit: "contain",
    href: "/allwork/byone",
    role: "Product design + iOS",
    year: "2026",
    surface: "#f3e0ce",
  },
  {
    name: "Northstar",
    type: "Case study",
    description: "A concept for an immersive high-speed rail experience that brings together service design, booking, and VR.",
    image: "/images/Northstars.png",
    href: "/allwork/thenorth",
    role: "UI/UX design",
    year: "2024",
    surface: "#dbe4ef",
  },
  {
    name: "Pith",
    type: "iOS app",
    description: "A private, on-device voice companion that turns unstructured thoughts into useful notes and insight.",
    image: "/images/pithnotelogo.png",
    href: "/allwork/pith",
    role: "Product design + development",
    year: "2026",
    surface: "#062c23",
  },
  {
    name: "Pomora",
    type: "Web app",
    description: "A focused productivity timer built to make planning a work session feel simple and motivating.",
    image: "/images/pomoramain2.png",
    href: "/allwork/Lapomora",
    role: "Frontend + UI design",
    year: "2024",
    surface: "#f5d1cf",
  },
  {
    name: "Orin",
    type: "Mac app",
    description: "A lightweight memory layer for the small notes, tasks, links, and context that collect during a workday.",
    href: "https://orin.khalifa.studio/",
    role: "Product design + development",
    year: "2026",
    surface: "#f3efe7",
    logoText: "Orin",
    external: true,
  },
  {
    name: "IntelliCourse",
    type: "Learning platform",
    description: "An AI-powered learning platform designed to make education feel more adaptive and personal.",
    image: "/images/intellicourse1.jpeg",
    href: "/allwork/Intellicourse",
    role: "Product design + frontend",
    year: "2024",
    surface: "#e9e4da",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardContent = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[0.7rem]" style={{ backgroundColor: project.surface }}>
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`${project.imageFit === "contain" ? "object-contain p-[15%]" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.035]`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-serif text-5xl tracking-[-0.06em] text-gray-900 sm:text-6xl">{project.logoText}</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-black/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/90 px-2.5 py-1 text-xs text-gray-600 backdrop-blur-sm">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="text-gray-300">/</span>
          <span>{project.type}</span>
        </div>
        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-gray-800 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0">
          <ArrowMark direction="up-right" className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="grid gap-3 border-t border-black/[0.1] py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
        <div>
          <h2 className="text-2xl font-medium tracking-[-0.05em] text-gray-950 transition-opacity group-hover:opacity-60 sm:text-3xl">{project.name}</h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">{project.description}</p>
        </div>
        <div className="flex items-start gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-gray-400 sm:flex-col sm:items-end sm:pt-1">
          <span>{project.role}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </>
  );

  const className = "group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900";

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.07, 0.21), ease: [0.16, 1, 0.3, 1] }}
    >
      {project.external ? (
        <a href={project.href} target="_blank" rel="noreferrer" className={className}>
          {cardContent}
        </a>
      ) : (
        <Link href={project.href} className={className}>
          {cardContent}
        </Link>
      )}
    </motion.article>
  );
}

const LatestWork = () => (
  <main className="w-full bg-background pb-20 pt-28 sm:pt-32 lg:pb-28">
    <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-8 border-b border-black/[0.1] pb-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">Product engineering portfolio</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-[0.9] tracking-[-0.065em] text-gray-950 sm:text-6xl md:text-7xl">
            Selected work.
          </h1>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
          A selection of digital products I&apos;ve designed, built, and refined. Each project notes the part of the work I owned.
        </p>
      </motion.header>

      <div className="grid gap-x-8 gap-y-12 py-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16 md:py-14">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  </main>
);

export default LatestWork;
