"use client";

import { ArrowLeft, ArrowUpRight, Compass, MousePointer2, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const questions = [
  {
    title: "Begin with the reason for the trip.",
    body: "The first interaction is not a timetable. It is a way to choose a journey around timing, energy, and intent.",
  },
  {
    title: "Let the route do some of the explaining.",
    body: "A calm, spatial view gives a traveller a sense of where they are before they arrive. Progress becomes part of the experience.",
  },
  {
    title: "Carry one idea from booking to arrival.",
    body: "NorthStar uses one visual language across planning, boarding, and travel, so the day feels connected instead of assembled from separate tools.",
  },
];

const screens = [
  { src: "/images/Northstar1.jpg", title: "Know the station", note: "Route context before the platform scramble." },
  { src: "/images/Northstar2.png", title: "Plan the way you travel", note: "Destination, timing, and preferences in one place." },
  { src: "/images/Northstar3.png", title: "Stay in the moment", note: "Service support that belongs to the journey." },
];

const contribution = [
  { icon: Compass, title: "Experience framing", body: "Shaped the concept around the moments before, during, and after a trip." },
  { icon: MousePointer2, title: "Interaction design", body: "Designed the core flows, transitions, and information hierarchy in Figma." },
  { icon: Workflow, title: "System design", body: "Built a visual language that holds planning, travel, and arrival together." },
];

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function NorthStarCaseStudy() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#f6f2e9] text-[#102044] selection:bg-[#f05e51] selection:text-white">
      <section className="relative bg-[#11234a] text-[#f6f2e9]">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,transparent_49.8%,rgba(235,241,250,0.45)_50%,transparent_50.2%),linear-gradient(rgba(235,241,250,0.25)_1px,transparent_1px)] [background-size:100%_100%,100%_4rem]" />
        <div className="pointer-events-none absolute -right-28 top-20 h-[30rem] w-[30rem] rounded-full border border-[#7080a2]/70" />
        <div className="pointer-events-none absolute -right-4 top-48 h-56 w-56 rounded-full border border-[#7080a2]/70" />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pt-36">
          <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#b9c4d9]">
            <Link href="/allwork" className="group inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              All work
            </Link>
            <span className="hidden sm:inline">A rail concept</span>
          </div>

          <div className="mt-16 grid items-end gap-12 lg:mt-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#b9c4d9]">Toronto to Montréal, reimagined</p>
              <h1 className="mt-5 text-[clamp(4.25rem,11vw,10.5rem)] leading-[0.76] tracking-[-0.09em]">NorthStar</h1>
              <p className="mt-10 max-w-xl text-[clamp(1.65rem,3vw,2.55rem)] font-light leading-[1.05] tracking-[-0.045em] text-[#e8edf6]">A more considered way to move between the cities that shape a life.</p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#b9c4d9]">NorthStar is a future-rail concept that asks a simple question: what if an intercity journey felt as intentional as the destination?</p>
              <a href="#the-idea" className="mt-9 inline-flex items-center gap-2 border-b border-[#f6f2e9] pb-1.5 text-sm font-medium transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Take the route <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.figure
              initial={reducedMotion ? false : { opacity: 0, scale: 0.97, y: 18 }}
              animate={reducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden border border-[#53668d] bg-[#1b305b] shadow-[0_2rem_5rem_rgba(0,0,0,0.24)]"
            >
              <div className="relative aspect-[3/2] sm:aspect-[16/10]">
                <Image src="/images/Northstars.png" alt="NorthStar transit experience screens" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,35,74,0.35),transparent_50%)]" />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-[#53668d] px-4 py-3 text-xs text-[#c7d0e1] sm:px-5">
                <span>One service, across the whole journey.</span>
                <span className="shrink-0 text-[9px] uppercase tracking-[0.16em] text-[#9facbf]">Concept</span>
              </figcaption>
            </motion.figure>
          </div>

          <div className="mt-16 grid border-y border-[#53668d] text-sm sm:grid-cols-3">
            {[["Scope", "Future mobility"], ["Role", "Product design"], ["Made in", "Figma"]].map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 border-[#53668d] py-4 sm:block sm:border-r sm:px-5 sm:py-5 sm:first:pl-0 sm:last:border-r-0">
                <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#9facbf]">{label}</p>
                <p className="mt-0 sm:mt-2">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="the-idea" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.64fr_1.36fr] md:gap-16 md:py-32 lg:px-12">
        <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#687591]">The starting point</p></FadeIn>
        <FadeIn>
          <h2 className="max-w-4xl text-[clamp(2.5rem,5.3vw,5rem)] leading-[0.94] tracking-[-0.065em]">Too far to drive. Too close to fly. Too important to feel like an afterthought.</h2>
          <div className="mt-10 grid max-w-4xl gap-7 border-t border-[#c8cfda] pt-6 text-base leading-relaxed text-[#51607b] md:grid-cols-2">
            <p>The Windsor to Québec corridor connects cities with a huge amount of cultural, economic, and personal exchange. Yet moving through it can still feel fragmented and designed around schedules rather than people.</p>
            <p>NorthStar explores rail as a connected service: one that helps someone choose, prepare, travel, and arrive with more confidence and less friction.</p>
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-[#d3d8e0] bg-[#e8edf2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <FadeIn className="grid gap-8 md:grid-cols-[0.64fr_1.36fr] md:gap-16">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#687591]">The route, made visible</p>
            <div><h2 className="max-w-2xl text-[clamp(2.35rem,4.7vw,4.5rem)] leading-[0.94] tracking-[-0.06em]">The journey is more than the line between two cities.</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-[#51607b]">The route view gives the concept a physical centre of gravity, connecting places, time, and the experience in between.</p></div>
          </FadeIn>
          <FadeIn className="mt-12 overflow-hidden border border-[#aebbd0] bg-[#f5e87a] shadow-[0_1.5rem_3rem_rgba(16,32,68,0.1)]">
            <Image src="/images/northstarmap.png" alt="NorthStar rail route map" width={726} height={468} sizes="(min-width: 1280px) 1152px, 100vw" className="h-auto w-full" />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-32 lg:px-12">
        <FadeIn className="grid gap-8 md:grid-cols-[0.64fr_1.36fr] md:gap-16"><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#687591]">The questions on the route</p><h2 className="max-w-3xl text-[clamp(2.4rem,5vw,4.7rem)] leading-[0.94] tracking-[-0.065em]">Designing for a whole travel day, not just the booking.</h2></FadeIn>
        <div className="mt-14 border-t border-[#c8cfda]">
          {questions.map((question, index) => (
            <FadeIn key={question.title} delay={index * 0.06} className="grid gap-5 border-b border-[#c8cfda] py-7 md:grid-cols-[minmax(0,1fr)_minmax(15rem,0.62fr)] md:items-start md:py-9">
              <h3 className="max-w-xl text-2xl leading-tight tracking-[-0.04em] sm:text-3xl">{question.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-[#51607b]">{question.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-[#11234a] text-[#f6f2e9]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-32 lg:px-12">
          <FadeIn className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#aebbd0]">A system in motion</p><h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.065em]">Calm enough for travel. Clear enough for the next decision.</h2></div><p className="max-w-sm text-sm leading-relaxed text-[#b9c4d9]">Deep blue creates a sense of containment. Signal red appears only when attention or motion needs a focal point.</p></FadeIn>

          <FadeIn className="mt-14 overflow-hidden border border-[#53668d] bg-[#1b305b]"><div className="relative aspect-[16/9]"><Image src="/images/Northstar4.png" alt="NorthStar journey experience design" fill sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" /></div></FadeIn>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {screens.map((screen, index) => (
              <FadeIn key={screen.src} delay={index * 0.07}>
                <figure className="border border-[#53668d] bg-[#e8edf2] p-3 text-[#102044] sm:p-4">
                  <div className="relative aspect-[390/844] overflow-hidden bg-[#d5dce7]"><Image src={screen.src} alt={`NorthStar mobile screen: ${screen.title}`} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" /></div>
                  <figcaption className="border-t border-[#c8cfda] px-1 pt-4"><p className="text-sm font-medium">{screen.title}</p><p className="mt-1 text-xs leading-relaxed text-[#687591]">{screen.note}</p></figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d3d8e0] bg-[#f6f2e9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.64fr_1.36fr] md:gap-16 md:py-32 lg:px-12">
          <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#687591]">My contribution</p></FadeIn>
          <FadeIn><h2 className="max-w-3xl text-[clamp(2.45rem,5vw,4.7rem)] leading-[0.94] tracking-[-0.065em]">Making a future service feel coherent before it exists.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-[#51607b]">NorthStar was a chance to work across the service, not a single booking screen: establish the point of view, map the journey, and build an interface system that makes the concept feel internally consistent.</p>
            <div className="mt-12 grid gap-7 border-t border-[#c8cfda] pt-7 sm:grid-cols-3">{contribution.map(({ icon: Icon, title, body }) => <div key={title}><Icon className="h-5 w-5 text-[#df493d]" /><h3 className="mt-8 text-base font-medium">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#687591]">{body}</p></div>)}</div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#df493d] text-[#fff8f0]">
        <FadeIn className="mx-auto flex max-w-7xl flex-col justify-between gap-9 px-5 py-16 sm:px-8 md:flex-row md:items-end md:py-20 lg:px-12"><div><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#ffe1d9]">Next stop</p><h2 className="mt-4 max-w-2xl text-[clamp(2.5rem,5vw,4.7rem)] leading-[0.94] tracking-[-0.065em]">See more selected work.</h2></div><Link href="/allwork" className="group inline-flex w-fit items-center gap-3 border-b border-[#fff8f0] pb-2 text-base font-medium transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">View all work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></FadeIn>
      </section>
    </main>
  );
}
