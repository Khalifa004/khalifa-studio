"use client";

import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Dumbbell,
  LockKeyhole,
  Share2,
  Sparkles,
  Trophy,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import type { ReactNode } from "react";
import ArrowMark from "@/components/ArrowMark";

const principles = [
  {
    number: "01",
    title: "Today first",
    body: "The first screen answers what to do next instead of making people decode a dashboard.",
  },
  {
    number: "02",
    title: "Less between sets",
    body: "Gym Mode keeps the next useful decision within reach, without turning training into spreadsheet work.",
  },
  {
    number: "03",
    title: "Progress, honestly",
    body: "Trends and personal records compare meaningful training data instead of overstating the result.",
  },
];

const technicalChoices = [
  {
    title: "Focused SwiftUI feature views",
    body: "Feature-level views kept the daily workout, Gym Mode, analysis, and sharing experiences responsive and easier to evolve without one oversized view layer.",
  },
  {
    title: "Explicit domain models",
    body: "Plans, scheduled workouts, logged sets, completions, and metrics are distinct types—not incidental UI state—so multiple features derive from one source of truth.",
  },
  {
    title: "Atomic, file-backed persistence",
    body: "Primary data is stored in Application Support as JSON. Each write is atomic and retains the previous valid version as a recovery copy before replacement.",
  },
  {
    title: "Recoverable data handling",
    body: "If a saved file cannot be decoded, byOne preserves it instead of silently replacing a person’s training history with an empty state.",
  },
  {
    title: "Versioned import and export",
    body: "People can export readable JSON, validate it before restore, and explicitly control whether it replaces local training data.",
  },
  {
    title: "Permission-aware platform features",
    body: "ActivityKit, local notifications, and Live Activities add session context when available without becoming prerequisites for training.",
  },
  {
    title: "Final-size rendering",
    body: "Share visuals are rendered with ImageRenderer at 1080 × 1920, avoiding the blurred exports that result from scaling a preview screenshot.",
  },
  {
    title: "Sharing with a fallback",
    body: "Instagram Stories receives a platform-specific handoff when installed; the native iOS share sheet supports every other destination.",
  },
];

const architecture = {
  features: [
    ["Onboarding", "Plan-building decisions and the first-run experience"],
    ["Dashboard", "Daily workout, scheduling adjustments, streak, and recap"],
    ["Gym Mode", "Set logging, rest timing, recovery, and Live Activity"],
    ["Analysis", "Trends, personal records, and training summaries"],
    ["Sharing", "Story renderer, Instagram handoff, and native share sheet"],
    ["History + Settings", "Corrections, preferences, reminders, backup, and privacy"],
  ],
  domain: [
    ["Training", "Exercises, prescriptions, plans, and load progression"],
    ["Scheduling", "Calendar-aware workouts and training weeks"],
    ["Progress", "Completion records, metrics, persistence, and export"],
    ["Profile", "Lightweight local profile data"],
  ],
};

const correctnessCases = [
  "Incomplete sessions remain as partial records instead of disappearing.",
  "An interrupted session can resume without losing saved sets or the active exercise.",
  "Automatic load increases are withheld after partial sessions or near-failure effort.",
  "Schedule coverage extends forward without duplicating days or rewriting completed history.",
  "Rest days are evaluated only inside the active plan window, and today does not break a streak before its planned workout happens.",
  "Backup files are validated before any local data is replaced, and sharing falls back cleanly when Instagram is unavailable.",
];

const processSteps = [
  ["01", "Defined the smallest complete loop", "I started with the repeat-use sequence: make a plan, know what to do today, log without friction, see evidence of progress, and return with better context."],
  ["02", "Designed for normal interruptions", "Rest periods, locks, equipment changes, and schedule changes are expected gym conditions. That informed durable drafts, resume/discard states, flexible scheduling, and partial completion."],
  ["03", "Modeled the data before polishing charts", "Completed workouts, exercise results, working sets, units, status, and timestamps were defined so recommendations and analytics could draw from the same record."],
  ["04", "Used progressive disclosure", "Each feature presents the next decision before advanced controls: today before planning, one exercise before an entire form, a summary before a detailed chart."],
  ["05", "Made reliability visible", "Atomic writes, recovery copies, validated restore, explicit destructive confirmations, and on-device export make data trust a product outcome—not hidden infrastructure."],
  ["06", "Shipped, then extended the loop", "The initial release established the complete training loop. A later sharing update adds celebration and distribution without compromising the tracker’s private, focused core."],
];

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2.55rem] bg-[#242321] p-2.5 shadow-[0_2.2rem_5rem_rgba(36,35,33,0.2)] ${className}`}>
      <div className="relative min-h-0 overflow-hidden rounded-[2rem] bg-[#fbf8f2]">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-[34%] -translate-x-1/2 rounded-full bg-[#242321]" />
        {children}
      </div>
    </div>
  );
}

function HomePhone() {
  return (
    <PhoneFrame className="mx-auto w-full max-w-[19.5rem] rotate-[-3.5deg]">
      <div className="flex aspect-[0.492] flex-col px-5 pb-5 pt-11 text-[#242321]">
        <div className="flex items-center justify-between text-[9px] font-medium text-[#807a71]"><span>Monday</span><span>9:41</span></div>
        <div className="mt-5 flex items-end justify-between"><div><p className="text-[10px] text-[#807a71]">Good morning, Khalifa</p><h3 className="mt-1 text-2xl font-medium tracking-[-0.065em]">Let&apos;s train.</h3></div><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3e0ce]"><Dumbbell className="h-3.5 w-3.5 text-[#d95f16]" /></div></div>
        <div className="mt-6 grid grid-cols-7 gap-1 text-center text-[8px] text-[#9a9389]">{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <div key={`${day}-${index}`} className="space-y-1"><span>{day}</span><span className={`mx-auto flex h-5 w-5 items-center justify-center rounded-full ${index === 0 ? "bg-[#242321] text-white" : ""}`}>{index + 11}</span></div>)}</div>
        <div className="mt-6 rounded-2xl bg-[#242321] p-4 text-[#fbf8f2]"><div className="flex items-center justify-between"><span className="text-[9px] text-[#c7c1b8]">TODAY&apos;S SESSION</span><span className="rounded-full bg-[#f47a24] px-2 py-1 text-[8px] font-medium text-[#242321]">45 min</span></div><h4 className="mt-5 text-lg font-medium tracking-[-0.05em]">Upper strength</h4><p className="mt-1 text-[10px] text-[#c7c1b8]">5 exercises · 18 working sets</p><button className="mt-5 flex w-full items-center justify-between rounded-xl bg-[#fbf8f2] px-3 py-2.5 text-left text-[10px] font-medium text-[#242321]"><span>Begin workout</span><ChevronRight className="h-3.5 w-3.5" /></button></div>
        <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-[#e3ddd4] p-3"><p className="text-[8px] text-[#8e877d]">CURRENT STREAK</p><p className="mt-2 text-xl font-medium tracking-[-0.06em]">6 <span className="text-[9px] text-[#8e877d]">days</span></p></div><div className="rounded-2xl border border-[#e3ddd4] p-3"><p className="text-[8px] text-[#8e877d]">THIS WEEK</p><p className="mt-2 text-xl font-medium tracking-[-0.06em]">2/4</p></div></div>
        <div className="mt-auto flex items-center justify-between border-t border-[#e8e2d9] pt-4 text-[8px] text-[#8d867c]"><span className="font-medium text-[#242321]">Today</span><span>Plan</span><span>Progress</span><span>History</span></div>
      </div>
    </PhoneFrame>
  );
}

function GymPhone() {
  return (
    <PhoneFrame className="mx-auto w-full max-w-[20rem]">
      <div className="flex aspect-[0.492] flex-col bg-[#242321] px-5 pb-5 pt-11 text-[#fbf8f2]">
        <div className="flex items-center justify-between text-[9px] text-[#c7c1b8]"><span>Upper strength</span><span>32:18</span></div>
        <div className="mt-7 flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[0.15em] text-[#f6ae74]">Exercise 02 of 05</p><h3 className="mt-3 text-[1.7rem] font-medium leading-none tracking-[-0.065em]">Incline press</h3></div><div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5c5853]"><Clock3 className="h-4 w-4 text-[#f6ae74]" /></div></div>
        <div className="mt-8 rounded-2xl bg-[#302f2c] p-4"><div className="grid grid-cols-[0.55fr_1fr_1fr] border-b border-[#4e4a45] pb-2 text-[8px] uppercase tracking-[0.1em] text-[#a9a39a]"><span>Set</span><span>kg</span><span>reps</span></div>{[["1", "45", "10"], ["2", "45", "10"], ["3", "45", "8"]].map((set, index) => <div key={set[0]} className="grid grid-cols-[0.55fr_1fr_1fr] items-center border-b border-[#46423e] py-3 text-xs last:border-0"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f47a24] text-[8px] text-[#242321]"><Check className="h-3 w-3" /></span><span>{set[1]}</span><span>{set[2]}</span></div>)}</div>
        <div className="mt-5 rounded-2xl border border-[#59544e] p-3"><p className="text-[8px] uppercase tracking-[0.13em] text-[#aaa39a]">Rest timer</p><p className="mt-1 text-2xl font-medium tracking-[-0.06em]">01:24</p><div className="mt-3 h-1 rounded-full bg-[#55504a]"><div className="h-full w-2/3 rounded-full bg-[#f47a24]" /></div></div>
        <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47a24] px-3 py-3 text-xs font-medium text-[#242321]">Log next set <ChevronRight className="h-3.5 w-3.5" /></button>
      </div>
    </PhoneFrame>
  );
}

function ProgressPhone() {
  return (
    <PhoneFrame className="mx-auto w-full max-w-[18.25rem] rotate-[3.5deg]">
      <div className="flex aspect-[0.492] flex-col px-5 pb-5 pt-11 text-[#242321]">
        <div className="flex items-center justify-between"><div><p className="text-[9px] text-[#8d867c]">ANALYSIS</p><h3 className="mt-1 text-xl font-medium tracking-[-0.06em]">Your progress</h3></div><BarChart3 className="h-4 w-4 text-[#d95f16]" /></div>
        <div className="mt-6 rounded-2xl bg-[#f3e0ce] p-4"><p className="text-[8px] uppercase tracking-[0.12em] text-[#9d5727]">Bench press</p><div className="mt-2 flex items-end justify-between"><p className="text-3xl font-medium tracking-[-0.07em]">+12<span className="text-sm">%</span></p><span className="text-[9px] text-[#86522e]">last 3 months</span></div><div className="relative mt-6 h-20"><svg viewBox="0 0 240 80" className="h-full w-full overflow-visible" aria-hidden="true"><path d="M0 67 C28 64, 38 55, 62 58 S100 40, 124 47 S164 32, 184 35 S215 12, 240 16" fill="none" stroke="#d95f16" strokeWidth="4" strokeLinecap="round" /><circle cx="240" cy="16" r="5" fill="#f47a24" /></svg></div></div>
        <div className="mt-5"><p className="text-[9px] font-medium text-[#7e776e]">PERSONAL RECORDS</p><div className="mt-3 space-y-2">{[["Deadlift", "115 kg"], ["Incline press", "45 kg"]].map(([exercise, value]) => <div className="flex items-center justify-between rounded-xl border border-[#e4ddd4] px-3 py-2.5" key={exercise}><span className="text-[10px]">{exercise}</span><span className="flex items-center gap-1 text-[10px] font-medium"><Trophy className="h-3 w-3 text-[#d95f16]" />{value}</span></div>)}</div></div>
        <div className="mt-auto rounded-2xl bg-[#242321] p-3 text-[#fbf8f2]"><div className="flex items-center justify-between"><span className="text-[9px]">You&apos;re building momentum.</span><Sparkles className="h-3.5 w-3.5 text-[#f47a24]" /></div><p className="mt-2 text-[8px] leading-relaxed text-[#c7c1b8]">Four consistent weeks make this your strongest training block yet.</p></div>
      </div>
    </PhoneFrame>
  );
}

function AppScreen({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 24rem, (min-width: 640px) 42vw, 78vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative rounded-[2.9rem] bg-[#171716] p-[0.38rem] shadow-[0_2.2rem_5rem_rgba(36,35,33,0.34),0_0_0_1px_rgba(255,255,255,0.22)_inset] ${className}`}>
      <span aria-hidden="true" className="absolute -left-[0.15rem] top-[17%] h-[9%] w-[0.13rem] rounded-full bg-[#3d3d3a] shadow-[-0.06rem_0_0_rgba(0,0,0,0.25)]" />
      <span aria-hidden="true" className="absolute -right-[0.15rem] top-[25%] h-[15%] w-[0.13rem] rounded-full bg-[#3d3d3a] shadow-[0.06rem_0_0_rgba(0,0,0,0.25)]" />
      <div className="relative overflow-hidden rounded-[2.54rem] bg-[#e9e7e2]">
        <Image src={src} alt={alt} width={1179} height={2556} priority={priority} sizes={sizes} className="block h-auto w-full" />
        <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-[31%] -translate-x-1/2 rounded-full bg-[#050505] shadow-[0_1px_0_rgba(255,255,255,0.16)_inset] sm:top-2.5 sm:h-6" />
        <span aria-hidden="true" className="pointer-events-none absolute inset-x-[0.45rem] top-[0.45rem] z-10 h-12 rounded-[1.6rem] border border-white/[0.12]" />
      </div>
    </div>
  );
}

export default function ByOneCaseStudy() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#fbf8f2] text-[#242321] selection:bg-[#f47a24] selection:text-[#242321]">
      <section className="relative isolate overflow-hidden bg-[#242321] text-[#fbf8f2]">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(251,248,242,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(251,248,242,0.12)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="pointer-events-none absolute -right-40 top-[-12rem] h-[40rem] w-[40rem] rounded-full border border-[#665f55]" />
        <div className="pointer-events-none absolute -right-4 top-36 h-56 w-56 rounded-full border border-[#665f55]" />

        <div className="relative mx-auto max-w-[84rem] px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pt-36">
          <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#bdb5a9]">
            <Link href="/allwork" className="group inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />All work</Link>
            <span className="hidden sm:inline">A local-first iPhone workout tracker</span>
          </div>

          <div className="grid items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:py-20">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center gap-4"><Image src="/byOne-AppIcon-v2.svg" alt="byOne" width={82} height={82} priority className="h-16 w-16 rounded-[1.35rem] bg-[#fbf8f2] p-2 sm:h-20 sm:w-20" /><h1 className="text-[clamp(4.6rem,12vw,10.5rem)] font-medium leading-[0.72] tracking-[-0.11em]">byOne</h1></div>
              <p className="mt-10 max-w-2xl text-[clamp(1.75rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.055em] text-[#f5eee4]">Build a training habit, not another spreadsheet.</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#bdb5a9]">A focused workout companion that turns a plan for your real week into a calm gym session and an honest view of progress.</p>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
                <a href="https://apps.apple.com/app/byone-gym-workout-tracker/id6804019100" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-[#fbf8f2] px-5 py-3 text-sm font-medium text-[#242321] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><FaApple className="h-4 w-4" aria-hidden="true" />Try byOne <ArrowMark direction="up-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
                <a href="#the-story" className="group inline-flex items-center gap-2 border-b border-[#f5eee4] pb-1.5 text-sm font-medium text-[#fbf8f2] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Read the case study <ArrowMark direction="up-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" /></a>
              </div>
            </motion.div>

            <motion.div initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 18 }} animate={reducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-[31rem] lg:max-w-none">
              <div className="relative grid grid-cols-[0.82fr_1fr] items-end px-4 py-7 sm:px-10 sm:py-10"><AppScreen src="/byone/progressanalysis.png" alt="byOne analysis screen with recent wins and training focus" className="relative z-10 translate-x-8 translate-y-5" /><AppScreen src="/byone/IMG_0576.PNG" alt="byOne dashboard showing an Upper Body workout ready to train" priority className="relative z-20" /></div>
            </motion.div>
          </div>

          <div className="grid border-y border-[#5c554d] text-sm sm:grid-cols-4">
            {[["Role", "Product design + iOS"], ["Platform", "Native iPhone app"], ["Built with", "Swift + SwiftUI"], ["Status", "Shipped to App Store"]].map(([label, value]) => <div key={label} className="flex items-baseline justify-between gap-4 border-[#5c554d] py-4 sm:block sm:border-r sm:px-5 sm:py-5 sm:first:pl-0 sm:last:border-r-0"><p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#948b80]">{label}</p><p className="mt-0 text-xs text-[#f5eee4] sm:mt-2">{value}</p></div>)}
          </div>
        </div>
      </section>

      <section id="the-story" className="mx-auto grid max-w-[84rem] gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:gap-16 md:py-32 lg:px-12">
        <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">The product thesis</p></FadeIn>
        <FadeIn><h2 className="max-w-4xl text-[clamp(2.65rem,5.3vw,5.25rem)] font-medium leading-[0.92] tracking-[-0.07em]">A good workout app should reduce decisions at the moment of effort.</h2><div className="mt-10 grid max-w-4xl gap-7 border-t border-[#ded6cb] pt-6 text-base leading-relaxed text-[#6f685f] md:grid-cols-2"><p>Fitness trackers often make people choose between a generic program, a dense logging screen, and a dashboard that says very little. byOne is designed around the moment someone needs to know exactly what to do next.</p><p>The result is a private, local-first product loop: start with a plan that fits the week, focus during the session, and return to feedback that respects the work that was actually logged.</p></div></FadeIn>
      </section>

      <section className="border-y border-[#e0d8ce] bg-[#fffdfa]">
        <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <FadeIn className="grid gap-8 md:grid-cols-[0.62fr_1.38fr] md:gap-16"><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">What I owned</p><div><h2 className="max-w-4xl text-[clamp(2.35rem,4.8vw,4.7rem)] font-medium leading-[0.93] tracking-[-0.065em]">I carried the product from its first decision through App Store release.</h2><p className="mt-6 max-w-3xl text-base leading-relaxed text-[#70685f]">My role spanned product strategy, information architecture, interaction and visual design, SwiftUI implementation, training-domain logic, local persistence, analytics, sharing, QA, testing, and release preparation. The product decisions and technical system were developed together rather than handed off between separate phases.</p></div></FadeIn>
          <div className="mt-14 grid border-t border-[#ded6cb] sm:grid-cols-3">{principles.map(({ number, title, body }) => <FadeIn key={title} className="border-b border-[#ded6cb] py-7 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"><p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">{number}</p><h3 className="mt-5 text-2xl font-medium tracking-[-0.055em]">{title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-[#70685f]">{body}</p></FadeIn>)}</div>
        </div>
      </section>

      <section className="border-y border-[#e0d8ce] bg-[#f2ece3]">
        <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 md:py-24 lg:px-12">
          <FadeIn className="grid gap-8 md:grid-cols-[0.62fr_1.38fr] md:gap-16"><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">The complete loop</p><div><h2 className="max-w-3xl text-[clamp(2.4rem,4.8vw,4.8rem)] font-medium leading-[0.93] tracking-[-0.065em]">A quieter path from plan to progress.</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-[#70685f]">The information architecture follows the rhythm of a training habit, so each moment carries only the context someone needs next.</p></div></FadeIn>
          <div className="mt-14 grid border-t border-[#d8cfc4] sm:grid-cols-4">{[[CalendarDays, "01", "Plan", "Build a training week around a real goal, schedule, equipment, and session length."], [Dumbbell, "02", "Today", "See the next useful workout, a flexible schedule, and the context to begin."], [Clock3, "03", "Gym Mode", "Log working sets one exercise at a time without losing momentum."], [BarChart3, "04", "Progress", "Understand training trends, records, and the wins worth sharing."]].map(([Icon, number, title, body]) => { const ItemIcon = Icon as typeof CalendarDays; return <FadeIn key={title as string} className="border-b border-[#d8cfc4] py-7 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"><ItemIcon className="h-5 w-5 text-[#d95f16]" /><p className="mt-8 text-[9px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">{number as string}</p><h3 className="mt-3 text-xl font-medium tracking-[-0.045em]">{title as string}</h3><p className="mt-3 text-sm leading-relaxed text-[#70685f]">{body as string}</p></FadeIn>; })}</div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:py-32 lg:px-12">
        <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">A plan that fits</p></FadeIn>
        <div><FadeIn><h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.07em]">Personal enough to begin. Flexible enough to keep going.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-[#70685f]">Initial planning asks only for choices that materially change the recommendation: a goal, training days, equipment, session length, and a preferred starting point. The plan stays editable when a real week inevitably changes.</p></FadeIn>
          <FadeIn className="mt-12 grid gap-5 sm:grid-cols-2"><figure className="rounded-3xl border border-[#e1d9cf] bg-[#fffdfa] p-4 sm:p-6"><AppScreen src="/byone/IMG_0579.PNG" alt="byOne workout focus sheet for changing a scheduled training day" className="mx-auto max-w-[15rem]" /><figcaption className="mt-6"><p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#a05e2d]">Flexible scheduling</p><p className="mt-2 text-sm leading-relaxed text-[#70685f]">Move a planned day or take a rest day without losing the balance of the wider training week.</p></figcaption></figure><figure className="rounded-3xl border border-[#e1d9cf] bg-[#fffdfa] p-4 sm:p-6"><AppScreen src="/byone/IMG_0575.PNG" alt="byOne movement swap screen with alternative exercises" className="mx-auto max-w-[15rem]" /><figcaption className="mt-6"><p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#a05e2d]">Control when it matters</p><p className="mt-2 text-sm leading-relaxed text-[#70685f]">Swap a movement or create a custom one without having to abandon the session plan.</p></figcaption></figure></FadeIn>
        </div>
      </section>

      <section className="border-y border-[#e0d8ce] bg-[#f2ece3]">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:py-28 lg:px-12">
          <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">The daily surface</p></FadeIn>
          <FadeIn><h2 className="max-w-4xl text-[clamp(2.45rem,5vw,4.9rem)] font-medium leading-[0.92] tracking-[-0.07em]">The Home screen responds to the person&apos;s actual training state.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-[#70685f]">I treated Home as a state-aware decision surface rather than a calendar. A week strip supplies planning context, but the primary card changes according to what has really happened.</p><div className="mt-10 border-t border-[#d8cfc4]">{[["Scheduled workout", "Preview the session, see prior results, edit the exercise list, then begin."], ["Rest day", "See the next planned session or intentionally choose an optional workout."], ["In-progress session", "Resume the saved draft instead of forcing someone to begin again."], ["Completed session", "Review the result, restart if needed, or create a share card from a real milestone."]].map(([state, detail]) => <div className="grid gap-3 border-b border-[#d8cfc4] py-5 sm:grid-cols-[0.72fr_1.28fr]" key={state}><h3 className="text-sm font-medium">{state}</h3><p className="text-sm leading-relaxed text-[#70685f]">{detail}</p></div>)}</div></FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#242321] text-[#fbf8f2]">
        <div className="pointer-events-none absolute bottom-[-14rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full border border-[#5a544c]" />
        <div className="relative mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.72fr_1.28fr] md:items-center md:py-32 lg:px-12">
          <FadeIn><AppScreen src="/byone/IMG_0577.PNG" alt="byOne Gym Mode for logging dumbbell bench press sets" className="mx-auto max-w-[20rem]" /></FadeIn>
          <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#f6ae74]">Gym Mode</p><h2 className="mt-5 max-w-4xl text-[clamp(2.65rem,5.1vw,5.2rem)] font-medium leading-[0.92] tracking-[-0.07em]">One exercise at a time. One less thing to think about.</h2><p className="mt-7 max-w-2xl text-base leading-relaxed text-[#c5bdb2]">Gym Mode is a dedicated, distraction-light workout environment: one exercise per page, persistent session context, and a clear action dock. It deliberately avoids making someone navigate a dense form between sets.</p><div className="mt-12 border-t border-[#5b554d]">{[["Set-level logging", "Working sets record weight, reps, units, and optional perceived effort without obscuring the next action."], ["Useful session context", "Elapsed time, completed sets, volume, rest timing, and the active exercise stay visible at a glance."], ["Adaptable in the moment", "A person can add an exercise during the workout when the plan needs to change around available equipment."], ["Cautious load guidance", "External load only increases after two complete sessions at the top of a prescribed rep range; near-failure effort and partial sessions hold the recommendation."], ["Resilient by design", "The active workout is a durable draft. Resume or Discard makes interruption explicit while preserving sets, timer state, elapsed time, and the active exercise."], ["Graceful platform support", "Live Activity context and notifications are useful additions on supported devices, not requirements for completing a session."]].map(([title, body], index) => <div className="grid gap-3 border-b border-[#5b554d] py-5 sm:grid-cols-[0.75fr_1.25fr]" key={title}><p className="text-sm font-medium"><span className="mr-3 text-[#f47a24]">{String(index + 1).padStart(2, "0")}</span>{title}</p><p className="text-sm leading-relaxed text-[#bdb5a9]">{body}</p></div>)}</div></FadeIn>
        </div>
      </section>

      <section className="border-b border-[#dfd7cc] bg-[#f7f1e8]">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.25fr_0.75fr] md:items-center md:py-32 lg:px-12">
          <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">Feedback worth trusting</p><h2 className="mt-5 max-w-4xl text-[clamp(2.6rem,5vw,5.05rem)] font-medium leading-[0.92] tracking-[-0.07em]">Progress only matters when it tells the truth.</h2><p className="mt-7 max-w-2xl text-base leading-relaxed text-[#70685f]">The Analysis tab turns history into a focused review across a month, three months, six months, or all time. I designed the metrics around data integrity—not around filling a dashboard with numbers.</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{[["Compare like with like", "Assisted and externally loaded movements are not silently merged into a single exercise trend."], ["Use an honest total", "The all-training trend shows weekly external-load work instead of implying unrelated sessions belong on one progression line."], ["Keep records meaningful", "Personal records are calculated from working sets and retain the previous best when a worthwhile comparison exists."], ["Respect partial work", "Incomplete sessions remain in a person’s history without being overstated as full completions."], ["Convert at display time", "The same underlying record can be viewed in pounds or kilograms without losing its original training history."], ["Leave out misleading claims", "When a number would create a false comparison, the interface chooses a more appropriate measure—or none at all."]].map(([title, body], index) => <div className="rounded-2xl border border-[#ddd4c9] bg-[#fffdfa] p-5" key={title}><p className="text-[9px] font-medium tracking-[0.14em] text-[#a05e2d]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-5 text-lg font-medium tracking-[-0.045em]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#70685f]">{body}</p></div>)}</div></FadeIn>
          <FadeIn className="relative"><div className="absolute inset-8 rounded-full bg-[#f3e0ce] blur-3xl" /><figure className="relative overflow-hidden rounded-3xl border border-[#ddd4c9] bg-[#e9e7e2] shadow-[0_2rem_4rem_rgba(36,35,33,0.12)]"><Image src="/byone/IMG_0578.jpg" alt="byOne session focus analysis visualizing training-set balance" width={1179} height={1120} sizes="(min-width: 768px) 36vw, 90vw" className="h-auto w-full" /></figure></FadeIn>
        </div>
      </section>

      <section className="bg-[#302e2a] text-[#fbf8f2]">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:py-32 lg:px-12">
          <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#f6ae74]">A deliberate sharing feature</p></FadeIn>
          <FadeIn><h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.07em]">A celebration layer, not a social network.</h2><div className="mt-7 grid max-w-4xl gap-7 text-base leading-relaxed text-[#c5bdb2] md:grid-cols-2"><p>The share composer appears only after a real milestone—completed workout, streak, personal best, or weekly progress. I kept it intentionally constrained: someone chooses a story, can optionally add a gym photo, previews the result, and shares it.</p><p>That preserves the focus of the core logging flow while giving a person a polished artifact for motivation and word of mouth. It is not a feed, an image editor, or another competing destination in the app.</p></div><div className="mt-12 grid overflow-hidden rounded-3xl border border-[#5b554d] sm:grid-cols-[0.86fr_1.14fr]"><div className="border-b border-[#5b554d] p-6 sm:border-b-0 sm:border-r sm:p-8"><p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#f6ae74]">Story formats</p><ul className="mt-6 space-y-3 text-sm text-[#e5ded4]">{["Workout complete", "Workout details", "Training streak and calendar", "Personal best", "Weekly progress"].map((format) => <li key={format} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#f47a24]" />{format}</li>)}</ul></div><div className="p-6 sm:p-8"><p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#f6ae74]">Rendering and handoff</p><div className="mt-6 grid gap-3 text-sm"><div className="rounded-xl bg-[#3c3934] p-3 text-[#e5ded4]">Saved training data → selected story format</div><div className="rounded-xl bg-[#3c3934] p-3 text-[#e5ded4]">ImageRenderer → final 1080 × 1920 asset</div><div className="rounded-xl bg-[#3c3934] p-3 text-[#e5ded4]">Instagram Stories when available → native iOS share sheet fallback</div></div></div></div></FadeIn>
        </div>
      </section>

      <section className="border-y border-[#e0d8ce] bg-[#f2ece3]">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:py-32 lg:px-12">
          <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">Architecture</p></FadeIn>
          <FadeIn><h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.07em]">Product features above a training domain that stays coherent.</h2><p className="mt-6 max-w-3xl text-base leading-relaxed text-[#70685f]">I organized byOne around product domains rather than a single oversized view layer. That lets the product surface a focused screen while scheduling, metrics, persistence, and progression rules remain consistent underneath it.</p><div className="mt-12 grid gap-5 lg:grid-cols-[1.28fr_0.72fr]"><div className="rounded-3xl border border-[#d8cfc4] bg-[#fffdfa] p-5 sm:p-7"><p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">Features</p><div className="mt-5 border-t border-[#e4ddd4]">{architecture.features.map(([name, description]) => <div key={name} className="grid gap-2 border-b border-[#e4ddd4] py-4 sm:grid-cols-[9rem_1fr]"><p className="text-sm font-medium">{name}</p><p className="text-sm leading-relaxed text-[#70685f]">{description}</p></div>)}</div></div><div className="rounded-3xl bg-[#242321] p-5 text-[#fbf8f2] sm:p-7"><p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#f6ae74]">Domain</p><div className="mt-5 border-t border-[#5b554d]">{architecture.domain.map(([name, description]) => <div key={name} className="border-b border-[#5b554d] py-4"><p className="text-sm font-medium">{name}</p><p className="mt-1 text-sm leading-relaxed text-[#bdb5a9]">{description}</p></div>)}</div></div></div></FadeIn>
        </div>
      </section>

      <section className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:py-32 lg:px-12">
        <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">Technical decisions</p></FadeIn>
        <FadeIn><h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.07em]">Trust is a feature, not a footnote.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-[#70685f]">The product was designed and built around a local-first model. Training data remains on-device, and its export, restore, and deletion flows give people a clear sense of control over the history they create.</p><div className="mt-12 grid border-t border-[#ddd4c9] sm:grid-cols-2">{technicalChoices.map(({ title, body }, index) => <div key={title} className="border-b border-[#ddd4c9] py-7 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7"><p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#a05e2d]">0{index + 1}</p><h3 className="mt-5 text-xl font-medium tracking-[-0.05em]">{title}</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-[#70685f]">{body}</p></div>)}</div><div className="mt-10 flex items-start gap-4 rounded-2xl bg-[#f2ece3] p-5"><LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-[#d95f16]" /><p className="text-sm leading-relaxed text-[#665e55]">byOne keeps the core training loop private and practical: no account is required to make a plan, log a workout, see progress, or recover their own data.</p></div></FadeIn>
      </section>

      <section className="border-y border-[#e0d8ce] bg-[#fffdfa]">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:py-32 lg:px-12">
          <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">Privacy and user control</p></FadeIn>
          <FadeIn><h2 className="max-w-4xl text-[clamp(2.45rem,5vw,4.95rem)] font-medium leading-[0.92] tracking-[-0.07em]">Training history should remain useful without becoming an account or a data product.</h2><div className="mt-7 grid max-w-4xl gap-7 text-base leading-relaxed text-[#70685f] md:grid-cols-2"><p>byOne is local-first: training data is not uploaded by the app and the privacy manifest does not include tracking. That decision shaped both the system architecture and the controls people see in the product.</p><p>The product makes the important actions explicit. Someone can correct saved workouts, export their data, validate a restore, delete individual records, delete all local data, or decide whether reminders are appropriate for them.</p></div><div className="mt-12 grid border-t border-[#ded6cb] sm:grid-cols-2">{[["Correct a record", "Review and amend saved workouts instead of treating the first log as permanent."], ["Export a full backup", "Schedule, workout history, custom exercises, templates, preferences, and setup notes are included in a versioned JSON export."], ["Restore safely", "A backup is validated and confirmed before it can replace local data."], ["Delete intentionally", "Individual history items and all local data have explicit destructive-action controls."], ["Choose reminders", "Local reminders remain permission-aware and optional."], ["Keep the data local", "The core training loop works without cloud upload or a social profile."]].map(([title, body]) => <div key={title} className="border-b border-[#ded6cb] py-6 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7"><h3 className="text-base font-medium">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#70685f]">{body}</p></div>)}</div></FadeIn>
        </div>
      </section>

      <section className="bg-[#242321] text-[#fbf8f2]">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:py-32 lg:px-12">
          <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#f6ae74]">Correctness beyond the happy path</p></FadeIn>
          <FadeIn><h2 className="max-w-4xl text-[clamp(2.45rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.07em]">A visually polished screen can still produce the wrong training recommendation.</h2><p className="mt-7 max-w-3xl text-base leading-relaxed text-[#c5bdb2]">Workout data compounds over time: one logged set can influence a progression nudge, a trend, and a personal record. I treated the data model and edge conditions as product work, not as invisible implementation details.</p><div className="mt-12 grid gap-x-10 border-t border-[#5b554d] md:grid-cols-2">{correctnessCases.map((item, index) => <div key={item} className="flex gap-4 border-b border-[#5b554d] py-5"><span className="pt-0.5 text-[10px] font-medium tracking-[0.16em] text-[#f47a24]">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-relaxed text-[#c5bdb2]">{item}</p></div>)}</div><div className="mt-12 rounded-3xl border border-[#5b554d] bg-[#302e2a] p-6 sm:p-8"><p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#f6ae74]">Automated coverage</p><div className="mt-5 grid gap-4 sm:grid-cols-2">{[["Load progression", "Decision rules for when to increase, hold, or withhold recommended load."], ["Training schedule", "Plan behavior, coverage, rest days, and calendar-aware future sessions."], ["Calendar boundaries", "Week calculations that remain correct at dates and plan transitions."], ["Prescription parsing", "Workout prescriptions interpreted safely before they influence the session."]].map(([title, body]) => <div key={title} className="rounded-2xl bg-[#3c3934] p-4"><h3 className="text-sm font-medium text-[#fbf8f2]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#bdb5a9]">{body}</p></div>)}</div></div></FadeIn>
        </div>
      </section>

      <section className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.62fr_1.38fr] md:py-32 lg:px-12">
        <FadeIn><p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a05e2d]">Process</p></FadeIn>
        <FadeIn><h2 className="max-w-4xl text-[clamp(2.45rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.07em]">How I moved from the first product decision to a shipped native app.</h2><div className="mt-12 border-t border-[#ded6cb]">{processSteps.map(([number, title, body]) => <article key={number} className="grid gap-4 border-b border-[#ded6cb] py-7 md:grid-cols-[5rem_minmax(0,0.8fr)_1.2fr] md:gap-8"><p className="text-[10px] font-medium tracking-[0.16em] text-[#a05e2d]">{number}</p><h3 className="text-xl font-medium leading-tight tracking-[-0.045em]">{title}</h3><p className="max-w-xl text-sm leading-relaxed text-[#70685f]">{body}</p></article>)}</div></FadeIn>
      </section>

      <section className="bg-[#f47a24] text-[#242321]">
        <FadeIn className="mx-auto flex max-w-[84rem] flex-col justify-between gap-9 px-5 py-16 sm:px-8 md:flex-row md:items-end md:py-20 lg:px-12"><div><div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#7f3e18]"><Share2 className="h-4 w-4" />Designed, built, and shipped</div><h2 className="mt-5 max-w-3xl text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.07em]">A private training companion built for the long run.</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-[#633315]">byOne turns a personal plan into a focused session, a clearer record of progress, and the occasional win worth celebrating.</p></div><Link href="/allwork" className="group inline-flex w-fit items-center gap-3 border-b border-[#242321] pb-2 text-base font-medium transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#242321]">See all work <ArrowMark direction="up-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></FadeIn>
      </section>
    </main>
  );
}
