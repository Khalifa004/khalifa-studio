"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import ArrowMark from "./ArrowMark";

const projects = [
  { number: "01", title: "NorthStar", description: "A concept for an immersive high-speed rail experience that brings together service design, booking, and VR.", role: "UI/UX design", caseStudy: "/allwork/thenorth" },
  { number: "02", title: "byOne", description: "A local-first workout tracker for building a real training habit, one focused session at a time.", role: "Product design + iOS", caseStudy: "/allwork/byone", appStore: "https://apps.apple.com/app/byone-gym-workout-tracker/id6804019100" },
  { number: "03", title: "Pith", description: "A private voice-to-insight companion that works completely offline.", role: "Product design + development", href: "https://pith.khalifa.studio/", caseStudy: "/allwork/pith" },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="w-full overflow-hidden bg-background text-gray-950">
      <div className="mx-auto max-w-[90rem] px-5 pb-10 pt-20 sm:px-8 sm:pb-12 sm:pt-24 lg:pb-14 lg:pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div {...entrance()} className="flex items-center justify-center gap-3 text-left">
            <div className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image src="/images/khalif.jpg" alt="Khalifa Seck" fill sizes="36px" className="object-cover" />
            </div>
            <p className="text-sm leading-tight text-gray-600"><span className="font-medium text-gray-950">Khalifa Seck</span><span className="mx-1.5 text-gray-300">/</span>Product engineer · Toronto</p>
          </motion.div>

          <motion.h1 {...entrance(0.08)} className="mt-10 text-balance font-sans text-[clamp(2.7rem,6.5vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.07em] text-gray-950 sm:mt-12">
            I design and build <span className="relative inline-block h-[0.66em] w-[1.38em] overflow-hidden rounded-full align-[-0.04em]"><Image src="/images/toronto-cn-tower-hero-v2.png" alt="Toronto's CN Tower" fill sizes="180px" className="object-cover" /></span> digital products.
          </motion.h1>

          <motion.div {...entrance(0.16)} className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            <Link href="/allwork" className="group inline-flex items-center gap-2.5 rounded-full bg-gray-950 px-5 py-3 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">View selected work <ArrowMark direction="up-right" className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
            <a href="mailto:khalifa.seck@outlook.com" className="group inline-flex items-center gap-2.5 rounded-full border border-black/15 px-5 py-3 text-gray-800 transition-colors hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">Start a conversation <ArrowMark direction="up-right" className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }} className="mt-10 rounded-[1.5rem] bg-[#eaeae7] px-6 py-8 sm:mt-12 sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium text-gray-950">A few things I&apos;m making</p>
            </div>
            <div className="grid sm:grid-cols-3">
              {projects.map((project) => (
                <article key={project.number} className="border-t border-black/[0.1] py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:px-6 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0">
                  <span className="text-xs text-gray-400">{project.number} / 03</span>
                  <h2 className="mt-8 text-2xl font-medium tracking-[-0.05em] text-gray-950">
                    {project.href ? <a href={project.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-opacity hover:opacity-55">{project.title}<ArrowMark direction="up-right" className="h-3 w-3 text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a> : project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{project.description}</p>
                  <p className="mt-6 text-xs text-gray-500">{project.role}</p>
                  {(project.caseStudy || project.appStore) && <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">{project.caseStudy && <Link href={project.caseStudy} className="text-sm font-medium text-gray-950 underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black">Read the case study</Link>}{project.appStore && <a href={project.appStore} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 rounded-full bg-gray-950 px-3 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"><FaApple className="h-3.5 w-3.5" aria-hidden="true" />Try byOne <ArrowMark direction="up-right" className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>}</div>}
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
