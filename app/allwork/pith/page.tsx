"use client";

import { ArrowLeft, ArrowUpRight, LockKeyhole, MessageCircle, Mic, Pause, Plane, Play, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const voiceLevels = [15, 32, 22, 58, 30, 76, 42, 18, 55, 35, 68, 26, 47, 82, 34, 19, 59, 40, 72, 28, 51, 24, 63, 37, 17];

const modes = [
  {
    name: "Journal",
    description: "For a walk, a late-night thought, or a feeling that needs space before it needs a label. Pith finds the thread and returns a warm, structured summary with a Core Vision.",
  },
  {
    name: "Briefing",
    description: "For meetings, lectures, and consultations where recall matters. Pith organizes a longer session into chapters, anchor facts, and takeaways that are easy to return to.",
  },
  {
    name: "Conversation",
    description: "For a shared discussion. Pith distinguishes voices and maps the exchange into a navigable record of interests, ideas, and decisions.",
  },
];

const commitments = [
  { icon: Plane, title: "Works in airplane mode", body: "Record anywhere, even when a connection is not part of the moment." },
  { icon: ShieldCheck, title: "No cloud uploads", body: "Personal context stays on the device instead of becoming another account to manage." },
  { icon: MessageCircle, title: "Context stays close", body: "Ask about a session without having to explain the thought all over again." },
];

const designDecisions = [
  {
    tension: "Thoughts usually arrive before structure.",
    choice: "Start with voice, not a form.",
    effect: "Pith can receive a thought before asking someone to name, sort, or edit it.",
  },
  {
    tension: "Privacy needs to be felt, not just promised.",
    choice: "Make local-first behavior visible in the product.",
    effect: "On-device language and airplane-mode use make the boundary clear without turning it into a settings page.",
  },
  {
    tension: "Recall should not feel like searching an archive.",
    choice: "Let a person ask about a session in context.",
    effect: "The product can return to a thought through conversation instead of forcing someone to replay or scan every note.",
  },
];

const rise = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

function VoiceField({ light = false }: { light?: boolean }) {
  return (
    <div aria-hidden="true" className={`flex h-28 items-center justify-between gap-1 ${light ? "text-[#b9d9ca]" : "text-[#1e5b4b]"}`}>
      {voiceLevels.map((height, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scaleY: 0.2 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.018, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: `${height}%` }}
          className="w-px origin-center bg-current sm:w-1"
        />
      ))}
    </div>
  );
}

function ModesDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <figure className="mt-12 overflow-hidden border border-[#b7c8c1] bg-[#092a23] p-2 sm:p-3">
      <div className="group relative">
        <video ref={videoRef} className="block h-auto w-full" autoPlay muted loop playsInline preload="metadata" aria-label="Pith modes in use" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
          <source src="/2modespith.mp4" type="video/mp4" />
        </video>
        <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause Pith modes demo" : "Play Pith modes demo"} className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#092a23]/85 px-3 py-2 text-xs text-white opacity-0 backdrop-blur transition-opacity focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-hover:opacity-100">
          {isPlaying ? <Pause className="h-3.5 w-3.5" fill="currentColor" /> : <Play className="h-3.5 w-3.5" fill="currentColor" />}
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <figcaption className="flex flex-col gap-2 px-3 pb-2 pt-5 text-sm text-[#dce9e2] sm:flex-row sm:items-center sm:justify-between">
        <span>A closer look at two ways the product is used.</span>
        <span className="text-xs text-[#9bb8ac]">Journal and Briefing</span>
      </figcaption>
    </figure>
  );
}

export default function PithCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#edf0e9] text-[#062c23] selection:bg-[#b9d9ca]">
      <section className="relative isolate overflow-hidden bg-[#092a23] text-[#f7f3eb]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_83%_15%,rgba(142,221,182,0.17),transparent_26%),linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:auto,42px_42px]" />
        <div className="relative mx-auto max-w-[84rem] px-5 pb-10 pt-28 sm:px-8 sm:pb-12 lg:px-12 lg:pt-36">
          <div className="flex items-center justify-between text-xs text-[#afc5bb]">
            <Link href="/allwork" className="group inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" /> All work
            </Link>
            <span className="hidden sm:inline">An offline voice companion</span>
          </div>

          <div className="grid items-end gap-12 py-14 lg:grid-cols-[1fr_0.78fr] lg:gap-24 lg:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center gap-3 text-xs text-[#b9d9ca]"><span className="h-2 w-2 rounded-full bg-current" /> Private voice, structured insight</div>
              <h1 className="mt-8 font-sans text-[clamp(4.5rem,13vw,11rem)] font-medium leading-[0.72] tracking-[-0.11em]">Pith</h1>
              <p className="mt-10 max-w-xl text-2xl leading-[1.05] tracking-[-0.04em] text-[#e3eee7] sm:text-3xl">A private place to think out loud before the thought disappears.</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#afc5bb]">Pith is an on-device iOS experience that turns raw voice into structured insight without sending a personal journal, a meeting, or a private conversation to the cloud.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://pith.khalifa.studio/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-[#f7f3eb] px-5 py-3 text-sm font-medium text-[#062c23] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Visit the live product <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
                <a href="#story" className="inline-flex items-center rounded-full border border-[#739087] px-5 py-3 text-sm text-[#e4eee8] transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Read the story</a>
              </div>
            </motion.div>

            <motion.figure initial={{ opacity: 0, rotate: 2, scale: 0.97 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }} className="relative">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image src="/images/pithnotelogo.png" alt="Pith" fill priority sizes="(min-width: 1024px) 36rem, 90vw" className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(6,44,35,0.88))]" />
                <div className="absolute bottom-5 left-5 right-5"><p className="text-sm text-[#e7f0ea]">A thought does not need to become public to become useful.</p><VoiceField light /></div>
              </div>
              <figcaption className="flex items-center justify-between pt-4 text-xs text-[#afc5bb]"><span>Built for iPhone</span><span>Entirely on device</span></figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.65fr_1.35fr] md:py-32 lg:px-12">
        <motion.p {...rise} className="text-sm text-[#5c746d]">The reason Pith exists</motion.p>
        <motion.div {...rise}>
          <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.6rem)] font-medium leading-[0.91] tracking-[-0.07em]">Most thinking tools ask people to become organized before they are allowed to be honest.</h2>
          <div className="mt-10 grid gap-7 border-t border-[#b7c8c1] pt-6 sm:grid-cols-2">
            <p className="text-base leading-relaxed text-[#486159]">Voice notes are fast, intimate, and almost frictionless, but they often become an unsearchable pile of audio. Cloud transcription solves retrieval, but asks people to trade away context that may be deeply personal.</p>
            <p className="text-base leading-relaxed text-[#486159]">Pith reframes the problem: record without performance, then return a useful shape. The product had to feel as private as a journal while being more helpful than a transcript.</p>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-[#b7c8c1] bg-[#e4ebe4]">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.65fr_1.35fr] md:py-28 lg:px-12">
          <motion.div {...rise}>
            <p className="text-sm text-[#5c746d]">The thinking behind it</p>
            <p className="mt-5 max-w-48 text-sm leading-relaxed text-[#668178]">The product began with a few practical questions, not a predefined feature list.</p>
          </motion.div>
          <motion.div {...rise}>
            <h2 className="max-w-4xl text-[clamp(2.5rem,4.8vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.07em]">I used the tensions in voice notes to decide what Pith should and should not do.</h2>
            <div className="mt-14 border-t border-[#b7c8c1]">
              {designDecisions.map((decision, index) => (
                <article key={decision.tension} className="grid gap-5 border-b border-[#b7c8c1] py-8 md:grid-cols-[0.8fr_0.9fr_1fr] md:gap-8 md:py-10">
                  <div><span className="text-xs text-[#6a8078]">0{index + 1}</span><p className="mt-4 text-lg leading-snug tracking-[-0.025em]">{decision.tension}</p></div>
                  <div className="border-l border-[#b7c8c1] pl-5"><p className="text-xs text-[#6a8078]">I chose to</p><p className="mt-4 text-lg leading-snug tracking-[-0.025em]">{decision.choice}</p></div>
                  <p className="text-sm leading-relaxed text-[#486159] md:pt-6">{decision.effect}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#b7c8c1] bg-[#dfe7df]">
        <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <motion.div {...rise} className="max-w-3xl"><p className="text-sm text-[#5c746d]">Three ways to return to a thought</p><h2 className="mt-4 text-[clamp(2.5rem,4.4vw,5rem)] font-medium leading-[0.92] tracking-[-0.065em]">The same recording action can mean very different things.</h2></motion.div>
          <div className="mt-14 border-t border-[#b7c8c1]">
            {modes.map((mode, index) => (
              <motion.article key={mode.name} {...rise} transition={{ ...rise.transition, delay: index * 0.07 }} className="grid gap-5 border-b border-[#b7c8c1] py-8 md:grid-cols-[minmax(11rem,0.6fr)_1.4fr] md:gap-12 md:py-11">
                <h3 className="text-3xl font-medium tracking-[-0.055em]">{mode.name}</h3>
                <p className="max-w-2xl text-base leading-relaxed text-[#486159]">{mode.description}</p>
              </motion.article>
            ))}
          </div>
          <motion.div {...rise}><ModesDemo /></motion.div>
        </div>
      </section>

      <section className="bg-[#092a23] text-[#f7f3eb]">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.65fr_1.35fr] md:py-32 lg:px-12">
          <motion.div {...rise}><p className="text-sm text-[#9bb8ac]">Designed around trust</p><LockKeyhole className="mt-8 h-7 w-7 text-[#b9d9ca]" /></motion.div>
          <motion.div {...rise}>
            <blockquote className="max-w-4xl text-[clamp(2.5rem,5vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.07em]">“True clarity should not cost you your privacy.”</blockquote>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#b4c9bf]">That sentence became a product test. If a state, interaction, or piece of language made the experience feel like surveillance, it did not belong in Pith. Privacy had to be designed into the rhythm of the product, not appended as a policy.</p>
            <div className="mt-12 grid items-center gap-8 border-y border-white/15 py-8 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-12">
              <p className="max-w-xl text-xl leading-relaxed tracking-[-0.03em] text-[#e3eee7]">Ask Pith lets you continue a thought without digging back through a pile of voice notes.</p>
              <figure className="mx-auto w-full max-w-[16rem] overflow-hidden border border-white/15 bg-[#edf0e9]">
                <Image src="/askpith1.jpg" alt="Ask Pith answering questions from a private note" width={1179} height={2272} className="h-auto w-full" />
              </figure>
            </div>
            <div className="mt-14 grid border-t border-white/15 sm:grid-cols-3">
              {commitments.map((item) => { const Icon = item.icon; return <div key={item.title} className="border-b border-white/15 py-7 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"><Icon className="h-5 w-5 text-[#b9d9ca]" /><h3 className="mt-8 text-lg font-medium tracking-[-0.035em]">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#9bb8ac]">{item.body}</p></div>; })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.65fr_1.35fr] md:py-32 lg:px-12">
        <motion.div {...rise}><p className="text-sm text-[#5c746d]">From product idea to iOS app</p><Mic className="mt-8 h-7 w-7 text-[#315c4f]" /></motion.div>
        <motion.div {...rise}>
          <h2 className="max-w-4xl text-[clamp(2.5rem,4.8vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.07em]">The work moved between product design and development without losing its point of view.</h2>
          <div className="mt-10 grid gap-5 border-t border-[#b7c8c1] pt-6 sm:grid-cols-3"><p className="text-sm leading-relaxed text-[#486159]">Experience framing, interaction flows, and the visual system.</p><p className="text-sm leading-relaxed text-[#486159]">A connected recording-to-recall journey, rather than isolated screens.</p><p className="text-sm leading-relaxed text-[#486159]">Design decisions translated into a coherent, native product experience.</p></div>
        </motion.div>
      </section>

      <section className="border-t border-[#b7c8c1] bg-[#dfe7df]">
        <div className="mx-auto flex max-w-[84rem] flex-col justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:py-20 lg:px-12">
          <div><p className="text-sm text-[#5c746d]">The live product</p><h2 className="mt-4 text-4xl font-medium leading-[0.9] tracking-[-0.065em] sm:text-5xl">Let your thoughts breathe.</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-[#486159]">Explore Pith, an offline voice-to-insight companion built for the thoughts you would rather keep to yourself.</p></div>
          <a href="https://pith.khalifa.studio/" target="_blank" rel="noreferrer" className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#062c23] px-5 py-3 text-sm font-medium text-[#f7f3eb] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#062c23]">Visit Pith <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>
      </section>
    </main>
  );
}
