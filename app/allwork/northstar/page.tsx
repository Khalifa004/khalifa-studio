"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  MapPinned,
  MousePointer2,
  Route,
  Sparkles,
  Ticket,
  Users,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const experiencePillars: Array<{ number: string; title: string; body: string; icon: LucideIcon }> = [
  {
    number: "01",
    title: "Start with the trip, not the timetable",
    body: "The first screen asks what a traveller is trying to do. It turns a route search into a recommendation shaped around timing, energy, and intent.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Make the journey visible",
    body: "A calm, spatial route view gives people a sense of where they are before they arrive. Progress is treated as part of the experience—not a status update.",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Design beyond the ticket",
    body: "From booking to boarding, NorthStar carries one clear visual system across each moment so a complex travel day feels continuous rather than fragmented.",
    icon: Ticket,
  },
];

function SectionLabel({ number, children, dark = false }: { number: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] ${dark ? "text-[#aab6cf]" : "text-[#596982]"}`}>
      <span>{number}</span>
      <span className={`h-px w-8 ${dark ? "bg-[#667899]" : "bg-[#9aa9bd]"}`} />
      <span>{children}</span>
    </div>
  );
}

function RouteLine({ active = false }: { active?: boolean }) {
  return (
    <div className="relative h-12">
      <div className="absolute left-0 right-0 top-1/2 h-px bg-[#8b9ab1]" />
      <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#142144] bg-[#f4f0e8]" />
      <span className={`absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 ${active ? "border-[#f14b3d] bg-[#f14b3d]" : "border-[#142144] bg-[#f4f0e8]"}`} />
      <span className={`absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#f14b3d] ${active ? "left-[65%]" : "left-[38%]"}`} />
    </div>
  );
}

function InterfaceCard({ number, title, body, children }: { number: string; title: string; body: string; children: ReactNode }) {
  return (
    <article className="overflow-hidden border border-[#c6cfdb] bg-[#f4f0e8]">
      <div className="min-h-[23rem] bg-[#e3e8ef] p-5 sm:p-7">{children}</div>
      <div className="border-t border-[#c6cfdb] p-6 sm:p-7">
        <span className="font-mono text-[10px] tracking-[0.16em] text-[#64758b]">{number}</span>
        <h3 className="mt-6 text-2xl tracking-[-0.035em] text-[#142144]">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#526179]">{body}</p>
      </div>
    </article>
  );
}

export default function NorthStarCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#f4f0e8] text-[#142144] selection:bg-[#ffb2a9]">
      <section className="relative overflow-hidden bg-[#142144] text-[#f4f0e8]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(225,233,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(225,233,246,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full border border-[#4c5f83]" />
        <div className="absolute -right-6 top-36 h-48 w-48 rounded-full border border-[#4c5f83]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12 lg:pt-36">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-between">
            <Link href="/allwork" className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b7c5dd] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              All work
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#b7c5dd]">Case study · 2024</span>
          </motion.div>

          <div className="mt-16 grid items-end gap-14 lg:mt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#b7c5dd]">Future mobility · product concept</p>
              <h1 className="mt-6 font-serif text-[clamp(4.2rem,10vw,8.6rem)] leading-[0.8] tracking-[-0.075em]">NorthStar</h1>
              <p className="mt-10 max-w-2xl text-2xl font-light leading-snug tracking-[-0.02em] text-[#dbe4f3] sm:text-3xl">A more considered way to move between the cities that shape a life.</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#b7c5dd]">NorthStar is a future-rail concept that asks a simple question: what if an intercity journey felt as intentional as the destination?</p>
              <a href="#the-process" className="mt-10 inline-flex items-center gap-2 border-b border-[#f4f0e8] pb-1 text-sm font-medium text-[#f4f0e8] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Explore the case study <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-[32rem]">
              <div className="overflow-hidden border border-[#52668d] bg-[#1b2b52] shadow-2xl shadow-black/30">
                <div className="border-b border-[#52668d] px-5 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#b7c5dd]">NorthStar journey network</div>
                <div className="relative aspect-[1.08] overflow-hidden p-7 sm:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(241,75,61,0.26),transparent_20%),radial-gradient(circle_at_80%_70%,rgba(125,166,227,0.2),transparent_24%)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-[#dbe4f3]"><span>Toronto</span><span>Montréal</span></div>
                    <div className="relative h-32">
                      <span className="absolute left-0 top-20 h-4 w-4 rounded-full border-2 border-[#f4f0e8] bg-[#142144]" />
                      <span className="absolute left-[28%] top-14 h-3 w-3 rounded-full bg-[#f14b3d]" />
                      <span className="absolute right-[31%] top-7 h-3 w-3 rounded-full bg-[#f14b3d]" />
                      <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-[#f4f0e8] bg-[#142144]" />
                      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 150" fill="none" aria-hidden="true"><path d="M8 102C88 92 98 55 160 66C223 77 254 28 392 10" stroke="#f14b3d" strokeWidth="2" /><path d="M8 112C88 102 98 65 160 76C223 87 254 38 392 20" stroke="#7189b2" strokeWidth="1" strokeDasharray="5 7" /></svg>
                    </div>
                    <div className="flex items-end justify-between"><div><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#9fb1cf]">Estimated journey</p><p className="mt-2 text-3xl tracking-[-0.05em]">04:10</p></div><div className="border-l border-[#52668d] pl-4 text-right"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#9fb1cf]">Next stop</p><p className="mt-2 text-sm">Kingston</p></div></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 border border-[#bbc8db] bg-[#f4f0e8] px-4 py-3 text-[#142144] shadow-lg sm:-left-8"><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#64758b]">One network</p><p className="mt-1 text-sm">Many ways to travel.</p></div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-20 grid border-t border-[#52668d] sm:grid-cols-4">
            {[["Type", "Future mobility concept"], ["Timeline", "21 days"], ["Role", "Product design"], ["Toolkit", "Figma"]].map(([label, value]) => (
              <div key={label} className="border-b border-[#52668d] py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0"><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#9fb1cf]">{label}</p><p className="mt-2 text-sm text-[#e7edf8]">{value}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-36 lg:px-12">
        <motion.div {...reveal}><SectionLabel number="01">The opportunity</SectionLabel></motion.div>
        <motion.div {...reveal}>
          <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl">Too far to drive. Too close to fly. Too important to feel like an afterthought.</h2>
          <div className="mt-10 grid gap-8 border-t border-[#c6cfdb] pt-7 md:grid-cols-2"><p className="text-base leading-relaxed text-[#526179]">The Windsor–Québec corridor connects cities with a huge amount of cultural, economic, and personal exchange. Yet the experience of moving through it often feels fragmented and designed around schedules rather than people.</p><p className="text-base leading-relaxed text-[#526179]">NorthStar became an exploration of rail as a connected service: one that helps someone choose, prepare, travel, and arrive with more confidence and less friction.</p></div>
        </motion.div>
      </section>

      <section id="the-process" className="border-y border-[#c6cfdb] bg-[#e3e8ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <motion.div {...reveal} className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><SectionLabel number="02">The product process</SectionLabel><div><h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.05em] sm:text-5xl">Reframing a train journey as a continuous product experience.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-[#526179]">I used the trip itself as the design system: before departure, in transit, and at arrival. That framing made it easier to decide what information earns attention in each moment.</p></div></motion.div>
          <div className="mt-16 grid gap-px overflow-hidden border border-[#c6cfdb] bg-[#c6cfdb] md:grid-cols-3">
            {experiencePillars.map((pillar, index) => { const Icon = pillar.icon; return <motion.article key={pillar.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }} className="group bg-[#f4f0e8] p-7 sm:p-8"><div className="flex items-start justify-between"><span className="font-mono text-[10px] tracking-[0.16em] text-[#64758b]">{pillar.number}</span><Icon className="h-5 w-5 text-[#293b63] transition-transform duration-500 group-hover:-translate-y-1" /></div><h3 className="mt-16 max-w-xs text-2xl leading-tight tracking-[-0.035em]">{pillar.title}</h3><p className="mt-5 text-sm leading-relaxed text-[#526179]">{pillar.body}</p></motion.article>; })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
        <motion.div {...reveal} className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><SectionLabel number="03">Journey architecture</SectionLabel><div><h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.05em] sm:text-5xl">A travel day has four distinct jobs to be done.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-[#526179]">The interface does not need to do everything at once. It needs to reveal the right layer of information as someone moves from planning to motion.</p></div></motion.div>
        <motion.div {...reveal} className="mt-14 overflow-hidden border border-[#52668d] bg-[#142144] p-6 text-[#f4f0e8] sm:p-10"><div className="grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">{[["01", "Plan", "Compare routes around the actual reason for the trip."], ["02", "Board", "Replace the last-minute scramble with clear station guidance."], ["03", "Travel", "Make progress, context, and comfort easy to find."], ["04", "Arrive", "Carry the journey forward with local connection points."]].map(([number, title, body], index) => <div key={title} className="contents"><div className="border border-[#52668d] bg-white/[0.04] p-5 md:min-h-48"><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#9fb1cf]">{number}</span><h3 className="mt-8 text-xl tracking-[-0.03em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#c4d0e2]">{body}</p></div>{index < 3 && <span className="hidden font-mono text-[#9fb1cf] md:block">→</span>}</div>)}</div></motion.div>
      </section>

      <section className="bg-[#dce3ec]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <motion.div {...reveal} className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><SectionLabel number="04">Interface direction</SectionLabel><div><h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.05em] sm:text-5xl">A confident interface with room to breathe.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-[#526179]">NorthStar balances editorial travel imagery with functional information. Deep blue creates calm containment; signal red appears only when attention or motion needs a clear focal point.</p></div></motion.div>
          <motion.figure {...reveal} className="mt-14 overflow-hidden border border-[#52668d] bg-[#142144]">
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/982739111?autoplay=0&loop=1&title=0&byline=0&portrait=0&muted=1&controls=1"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                title="NorthStar concept film"
              />
            </div>
            <figcaption className="flex flex-col gap-2 border-t border-[#52668d] px-5 py-4 text-[#f4f0e8] sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#aab6cf]">Concept film</span>
              <span className="text-sm text-[#dbe4f3]">A motion study for the NorthStar travel experience.</span>
            </figcaption>
          </motion.figure>
          <motion.figure {...reveal} className="relative mt-14 overflow-hidden border border-[#afbdce] bg-[#142144]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/Northstars.png"
                alt="NorthStar mobile transit and loyalty interfaces"
                fill
                sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 4rem), 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,33,68,0.42),transparent_45%)]" />
              <div className="absolute bottom-5 left-5 border-l border-[#f14b3d] pl-3 text-[#f4f0e8] sm:bottom-8 sm:left-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#d5dfef]">NorthStar interface system</p>
                <p className="mt-1 text-sm">Routing, loyalty, and a visual language for movement.</p>
              </div>
            </div>
          </motion.figure>

          <motion.div {...reveal} className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              ["/images/Northstar1.jpg", "Station map", "Route context is visible before a traveller needs it."],
              ["/images/Northstar2.png", "Trip planning", "A single place to hold destination, timing, and preferences."],
              ["/images/Northstar3.png", "Service layer", "Travel support designed as part of the journey."],
            ].map(([src, title, caption]) => (
              <figure key={src} className="border border-[#afbdce] bg-[#f4f0e8] p-3 sm:p-4">
                <div className="relative aspect-[390/844] overflow-hidden bg-[#dce3ec]">
                  <Image src={src} alt={`NorthStar ${title} mobile screen`} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="border-t border-[#c6cfdb] px-1 pt-4">
                  <p className="text-sm font-medium text-[#142144]">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#64758b]">{caption}</p>
                </figcaption>
              </figure>
            ))}
          </motion.div>

          <motion.div {...reveal} className="mt-14 grid gap-6 md:grid-cols-3">
            <InterfaceCard number="01" title="Plan around the day" body="A route picker that makes the surrounding trip as visible as the departure time."><div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-[#64758b]"><span>Departure</span><span>07:40</span></div><h3 className="mt-10 font-serif text-4xl leading-none tracking-[-0.06em] text-[#142144]">Toronto<br />to Montréal</h3><div className="mt-10 rounded-2xl bg-[#f4f0e8] p-4"><RouteLine active /><div className="flex justify-between text-xs text-[#526179]"><span>Union</span><span>Central</span></div></div><div className="mt-5 flex w-full items-center justify-between bg-[#142144] px-4 py-3 text-sm text-[#f4f0e8]"><span>Find my journey</span><ArrowUpRight className="h-4 w-4" /></div></InterfaceCard>
            <InterfaceCard number="02" title="Travel with context" body="An in-journey view that makes location and the next decision easy to understand at a glance."><div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-[#64758b]"><span>NorthStar 07</span><span>En route</span></div><div className="mt-12 rounded-[1.5rem] bg-[#142144] p-5 text-[#f4f0e8]"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#aab6cf]">Approaching</p><p className="mt-3 font-serif text-4xl leading-none tracking-[-0.05em]">Kingston</p><div className="mt-8"><RouteLine active /></div><div className="flex justify-between text-xs text-[#c4d0e2]"><span>01:18 elapsed</span><span>02:52 left</span></div></div><p className="mt-5 text-sm leading-relaxed text-[#526179]">The next piece of information should arrive before the traveller has to ask for it.</p></InterfaceCard>
            <InterfaceCard number="03" title="Extend the horizon" body="A layered in-transit experience that gives passengers a reason to look beyond the window."><div className="relative mt-5 h-48 overflow-hidden bg-[#142144] p-5 text-[#f4f0e8]"><div className="absolute -right-6 -top-10 h-48 w-48 rounded-full border border-[#788db4]" /><div className="relative"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#aab6cf]">Discover nearby</p><p className="mt-5 max-w-44 font-serif text-3xl leading-[0.95] tracking-[-0.05em]">A different view of the corridor.</p></div><Sparkles className="absolute bottom-5 right-5 h-5 w-5 text-[#f14b3d]" /></div><div className="mt-5 flex gap-3 text-xs text-[#526179]"><span className="border-b border-[#f14b3d] pb-1 text-[#142144]">Stories</span><span>Places</span><span>AR guide</span></div></InterfaceCard>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#142144] text-[#f4f0e8]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-36 lg:px-12">
          <motion.div {...reveal}><SectionLabel number="05" dark>My contribution</SectionLabel></motion.div>
          <motion.div {...reveal}><h2 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">A concept made tangible through product thinking, visual craft, and prototyping in Figma.</h2><p className="mt-8 max-w-2xl text-base leading-relaxed text-[#b7c5dd]">NorthStar was a chance to design the full service, not a single booking screen: establish the point of view, map the journey, and use a reusable interface system to make the concept feel internally consistent.</p><div className="mt-12 grid gap-3 sm:grid-cols-3">{[[Users, "Experience framing", "A journey shaped around the traveller’s needs and states."], [MousePointer2, "Interaction design", "Core flows, transitions, and hierarchy designed in Figma."], [Workflow, "System design", "A visual language that connects planning, travel, and arrival."]].map(([Icon, title, body]) => { const ContributionIcon = Icon as LucideIcon; return <div key={title as string} className="border border-[#52668d] p-5"><ContributionIcon className="h-5 w-5 text-[#ff8e83]" /><h3 className="mt-9 text-base">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-[#aab6cf]">{body as string}</p></div>; })}</div></motion.div>
        </div>
      </section>

      <section className="border-t border-[#c6cfdb] bg-[#e3e8ef]"><motion.div {...reveal} className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-20 sm:px-8 md:flex-row md:items-end md:py-24 lg:px-12"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#596982]">Future mobility, made human</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[0.98] tracking-[-0.05em] sm:text-5xl">The journey deserves as much design as the destination.</h2></div><Link href="/allwork" className="group inline-flex w-fit items-center gap-3 border-b border-[#142144] pb-2 text-base font-medium transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#142144]">View all work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></motion.div></section>
    </main>
  );
}
