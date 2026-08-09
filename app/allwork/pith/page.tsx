"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  FileText,
  LockKeyhole,
  MessageCircle,
  Mic,
  PenTool,
  Plane,
  ShieldCheck,
  Sparkles,
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

type Principle = {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Let the first thought stay messy",
    body: "The capture moment has one job: get out of the way. Pith begins with voice so a thought can arrive before it is edited, categorized, or lost.",
    icon: Mic,
  },
  {
    number: "02",
    title: "Make privacy perceptible",
    body: "Offline is more than a technical promise. Airplane Mode, on-device language, and calm confirmation states make that promise legible in the interface.",
    icon: LockKeyhole,
  },
  {
    number: "03",
    title: "Turn recall into a conversation",
    body: "A session should not become another note to search for later. Pith returns structure, then gives people a way to ask what they meant when the thought was fresh.",
    icon: MessageCircle,
  },
];

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5c746d]">
      <span>{number}</span>
      <span className="h-px w-8 bg-[#a5bbb4]" />
      <span>{children}</span>
    </div>
  );
}

function PhoneFrame({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[2.35rem] bg-[#092a23] p-2 shadow-[0_28px_70px_rgba(0,25,19,0.22)] ${className}`}>
      <div className="relative min-h-[30rem] overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#f7f3eb] p-5 text-[#062c23]">
        <div className="mx-auto h-5 w-24 rounded-full bg-[#092a23]" />
        <div className="mt-5 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-[#668178]">
          <span>Pith</span>
          <span>{label}</span>
        </div>
        {children}
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#092a23]/80" />
      </div>
    </div>
  );
}

function ModeCard({
  number,
  title,
  description,
  output,
}: {
  number: string;
  title: string;
  description: string;
  output: string;
}) {
  return (
    <div className="border-t border-[#b7c8c1] py-6 sm:py-8">
      <div className="grid gap-4 sm:grid-cols-[3rem_1fr_auto] sm:gap-6">
        <span className="font-mono text-[10px] tracking-[0.16em] text-[#6a8078]">{number}</span>
        <div>
          <h3 className="text-2xl tracking-[-0.03em] text-[#062c23]">{title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#486159]">{description}</p>
        </div>
        <span className="self-start rounded-full border border-[#bdcbc5] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#587168]">
          {output}
        </span>
      </div>
    </div>
  );
}

export default function PithCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#edf0e9] text-[#062c23] selection:bg-[#b9d9ca]">
      <section className="relative overflow-hidden bg-[#062c23] text-[#f7f3eb]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(221,240,230,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(221,240,230,0.07)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <Link
              href="/allwork"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#afc5bb] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              All work
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#afc5bb]">Case study · 2026</span>
          </motion.div>

          <div className="mt-16 grid items-end gap-14 lg:mt-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#afc5bb]">Private voice → structured insight</p>
              <h1 className="mt-6 max-w-3xl font-serif text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.78] tracking-[-0.075em]">
                Pith
              </h1>
              <p className="mt-10 max-w-2xl text-2xl font-light leading-snug tracking-[-0.02em] text-[#dce9e2] sm:text-3xl">
                A private place to think out loud before the thought disappears.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#afc5bb]">
                Pith is an on-device iOS experience that turns raw voice into structured insight—without sending a personal journal, a meeting, or a private conversation to the cloud.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://pith.khalifa.studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#f7f3eb] px-5 py-3 text-sm font-medium text-[#062c23] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Visit the live product
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#the-process"
                  className="inline-flex items-center rounded-full border border-[#739087] px-5 py-3 text-sm text-[#e4eee8] transition-colors hover:border-[#f7f3eb] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  See the design process
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-[32rem]"
            >
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-[#001c15] shadow-2xl shadow-black/30">
                <Image src="/images/pithnotelogo.png" alt="Pith logo" fill priority sizes="(min-width: 1024px) 32rem, 90vw" className="object-cover" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(142,221,182,0.13),transparent_30%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#092f27]/75 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.13em] text-[#dfeee5] backdrop-blur">
                  On device
                </div>
                <div className="absolute bottom-5 right-5 max-w-44 border-l border-[#b9d9ca]/55 pl-3 text-xs leading-relaxed text-[#dfeee5]">
                  Voice, held locally. Ideas, made useful.
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 rounded-xl border border-[#b8d0c5] bg-[#edf0e9] px-4 py-3 text-[#062c23] shadow-lg sm:-left-8">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#5b746b]">
                  <Plane className="h-3.5 w-3.5" /> Airplane Mode
                </div>
                <p className="mt-1 text-sm">Record anywhere.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid border-t border-white/15 sm:grid-cols-4"
          >
            {[
              ["Role", "Product design + development"],
              ["Platform", "Native iOS"],
              ["Constraint", "100% on-device"],
              ["Device", "iPhone 15 Pro+"],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-white/15 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#89a89c]">{label}</p>
                <p className="mt-2 text-sm text-[#e5eee9]">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-36 lg:px-12">
        <motion.div {...reveal}>
          <SectionLabel number="01">The opportunity</SectionLabel>
        </motion.div>
        <motion.div {...reveal}>
          <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-[#062c23] sm:text-5xl md:text-6xl">
            Most thinking tools ask people to become organized before they are allowed to be honest.
          </h2>
          <div className="mt-10 grid gap-8 border-t border-[#b7c8c1] pt-7 md:grid-cols-2">
            <p className="text-base leading-relaxed text-[#486159]">
              Voice notes are fast, intimate, and almost frictionless—but they often become an unsearchable pile of audio. Cloud transcription solves retrieval, but asks people to trade away context that may be deeply personal.
            </p>
            <p className="text-base leading-relaxed text-[#486159]">
              Pith reframes the problem: capture without performance, then return a useful shape. The product had to feel as private as a journal while being more helpful than a transcript.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="the-process" className="border-y border-[#b7c8c1] bg-[#e2e9e3]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <motion.div {...reveal} className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
            <SectionLabel number="02">The design process</SectionLabel>
            <div>
              <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-[#062c23] sm:text-5xl">
                Designing an experience that earns the right to listen.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#486159]">
                I treated Pith as a sequence of emotional states, not a collection of screens. Each decision moves someone from an unformed thought to a clearer next step—without adding anxiety or exposing their context.
              </p>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#b7c8c1] bg-[#b7c8c1] md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.article
                  key={principle.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.08 }}
                  className="group bg-[#edf0e9] p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-[#6a8078]">{principle.number}</span>
                    <Icon className="h-5 w-5 text-[#315c4f] transition-transform duration-500 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="mt-16 max-w-xs text-2xl leading-tight tracking-[-0.035em] text-[#062c23]">{principle.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-[#486159]">{principle.body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
        <motion.div {...reveal} className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <SectionLabel number="03">Experience architecture</SectionLabel>
          <div>
            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-[#062c23] sm:text-5xl">One tap in. A better way back.</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#486159]">
              The core interaction model became a simple loop: speak freely, receive a useful structure, then stay in the context long enough to find what matters.
            </p>
          </div>
        </motion.div>

        <motion.div {...reveal} className="mt-14 overflow-hidden rounded-3xl bg-[#062c23] p-6 text-[#f7f3eb] sm:p-10">
          <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
            {[
              ["01", "Capture", "A quiet prompt makes room for the raw thought."],
              ["02", "Shape", "On-device processing returns the signal, not just the transcript."],
              ["03", "Explore", "Ask follow-up questions without re-explaining the session."],
              ["04", "Revisit", "A growing personal library makes past context usable."],
            ].map(([number, title, body], index) => (
              <div key={title} className="contents">
                <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 md:min-h-48">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#92afa3]">{number}</span>
                  <h3 className="mt-8 text-xl tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#b8cbc3]">{body}</p>
                </div>
                {index < 3 && <span className="hidden font-mono text-[#92afa3] md:block">→</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#d7e4dc]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-36 lg:px-12">
          <motion.div {...reveal}>
            <SectionLabel number="04">Modes, not menus</SectionLabel>
          </motion.div>
          <motion.div {...reveal}>
            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-[#062c23] sm:text-5xl">
              Three intent-led modes give the same recording action a different outcome.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#486159]">
              Rather than asking people to configure an AI system, Pith begins with the situation they are already in. That makes the interface easier to understand and the output more useful from the first session.
            </p>
            <div className="mt-12">
              <ModeCard number="01" title="Journal" description="For a walk, a late-night thought, or a feeling that needs space before it needs a label. Pith finds the thread and returns a warm, structured summary with a Core Vision." output="Core Vision" />
              <ModeCard number="02" title="Briefing" description="For meetings, lectures, and consultations where recall matters. Pith organizes a longer session into chapters, anchor facts, and takeaways that are easy to return to." output="Chapters + facts" />
              <ModeCard number="03" title="Conversation" description="For a shared discussion. Pith distinguishes voices and maps the exchange into a navigable record of interests, ideas, and decisions." output="Interest map" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
        <motion.div {...reveal} className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <SectionLabel number="05">Interface direction</SectionLabel>
          <div>
            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-[#062c23] sm:text-5xl">
              Figma was used to design a system of moments, then carried into code with the same restraint.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#486159]">
              The visual language stays close to the product promise: deep green for containment, warm paper for reflection, and high-contrast type that feels more like a personal notebook than a dashboard.
            </p>
          </div>
        </motion.div>

        <motion.div {...reveal} className="mt-14 grid items-end gap-8 md:grid-cols-3">
          <PhoneFrame label="Journal" className="md:translate-y-10">
            <p className="mt-12 font-serif text-3xl leading-[1.02] tracking-[-0.05em]">What&apos;s on your mind?</p>
            <p className="mt-3 text-sm leading-relaxed text-[#668178]">Say it before you decide what it means.</p>
            <div className="mt-12 flex h-28 items-center justify-center rounded-3xl bg-[#dce9df]">
              <div className="flex items-end gap-1" aria-hidden="true">
                {[18, 34, 56, 28, 70, 42, 26, 48, 32, 60, 20].map((height, index) => (
                  <span key={index} style={{ height }} className="w-1.5 rounded-full bg-[#0a4a39]" />
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#062c23] px-5 py-4 text-[#f7f3eb]">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em]">Hold to record</span>
              <Mic className="h-4 w-4" />
            </div>
          </PhoneFrame>

          <PhoneFrame label="Briefing" className="md:-translate-y-6">
            <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.16em] text-[#668178]">Session recap</p>
            <p className="mt-4 font-serif text-3xl leading-[1.02] tracking-[-0.05em]">A clear thread through a complex hour.</p>
            <div className="mt-9 space-y-3">
              {["The central question", "Decisions to carry forward", "Details worth returning to"].map((item, index) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-[#c8d6cf] p-3">
                  <span className="font-mono text-[9px] text-[#668178]">0{index + 1}</span>
                  <span className="text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </PhoneFrame>

          <PhoneFrame label="Ask Pith" className="md:translate-y-10">
            <div className="mt-10 rounded-3xl bg-[#dce9df] p-4">
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#668178]">In context</p>
              <p className="mt-3 text-sm leading-relaxed">What did I keep circling back to in this session?</p>
            </div>
            <div className="ml-7 mt-4 rounded-3xl bg-[#062c23] p-4 text-[#f7f3eb]">
              <p className="text-sm leading-relaxed">You returned to making space before making a decision.</p>
            </div>
            <div className="mt-9 flex items-center gap-2 border-t border-[#c8d6cf] pt-5 text-[#668178]">
              <Sparkles className="h-4 w-4" />
              <span className="font-mono text-[8px] uppercase tracking-[0.14em]">Private, on-device context</span>
            </div>
          </PhoneFrame>
        </motion.div>
      </section>

      <section className="bg-[#062c23] text-[#f7f3eb]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-36 lg:px-12">
          <motion.div {...reveal}>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9bb8ac]">
              <span>06</span>
              <span className="h-px w-8 bg-[#769589]" />
              <span>Designing for trust</span>
            </div>
          </motion.div>
          <motion.div {...reveal}>
            <blockquote className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-0.05em] text-[#f7f3eb] sm:text-5xl md:text-6xl">
              “True clarity should not cost you your privacy.”
            </blockquote>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#b4c9bf]">
              That sentence became a product test. If a state, interaction, or piece of language made the experience feel like surveillance, it did not belong in Pith. Privacy had to be designed into the rhythm of the product, not appended as a policy.
            </p>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {[
                [Plane, "Record anywhere", "Works in airplane mode."],
                [ShieldCheck, "No cloud uploads", "Personal context stays local."],
                [BrainCircuit, "Ask in context", "Explore a session without re-telling it."],
              ].map(([Icon, title, body]) => {
                const FeatureIcon = Icon as LucideIcon;
                return (
                  <div key={title as string} className="border border-white/15 p-5">
                    <FeatureIcon className="h-5 w-5 text-[#b9d9ca]" />
                    <h3 className="mt-9 text-base">{title as string}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#9bb8ac]">{body as string}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
        <motion.div {...reveal} className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <SectionLabel number="07">My contribution</SectionLabel>
          <div>
            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-[#062c23] sm:text-5xl">
              A product case study that shows both the designer&apos;s eye and the developer&apos;s discipline.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#486159]">
              Pith gave me room to work across the full product arc: define the experience, establish a visual language, design the interaction states, and carry that system through to a real iOS product.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#b7c8c1] bg-[#b7c8c1] sm:grid-cols-3">
              {[
                [PenTool, "Product design", "Experience framing, interaction flows, and the visual system."],
                [Workflow, "Systems thinking", "A connected capture-to-recall journey rather than isolated screens."],
                [Code2, "Development", "Design decisions translated into a coherent, native product experience."],
              ].map(([Icon, title, body]) => {
                const ContributionIcon = Icon as LucideIcon;
                return (
                  <div key={title as string} className="bg-[#edf0e9] p-7">
                    <ContributionIcon className="h-5 w-5 text-[#315c4f]" />
                    <h3 className="mt-12 text-xl tracking-[-0.03em]">{title as string}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#486159]">{body as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-[#b7c8c1] bg-[#e2e9e3]">
        <motion.div {...reveal} className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-20 sm:px-8 md:flex-row md:items-end md:py-24 lg:px-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5c746d]">The live product</p>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-[#062c23] sm:text-5xl">
              Let your thoughts breathe.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#486159]">
              Explore Pith, an offline voice-to-insight companion built for the thoughts you would rather keep to yourself.
            </p>
          </div>
          <a
            href="https://pith.khalifa.studio/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#062c23] pb-2 text-base font-medium text-[#062c23] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#062c23]"
          >
            Visit Pith
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
