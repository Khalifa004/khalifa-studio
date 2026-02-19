// app/echoboard/outcomes-and-learnings.tsx
// Sections 12–13: Outcome / Impact & Reflection / Learnings — Apple‑style Next.js + Tailwind
// Solo project tone, white background by default

import React from "react";
import Image from "next/image";

const meta = {
  outcome: {
    summary:
      "EchoBoard reduces tool‑switching and keeps teams in flow by unifying chat, AI, whiteboards, and journaling in one real‑time surface.",
    metrics: [
      { label: "Fewer Switches", value: "−40%", note: "less context switching reported in pilot sessions" },
      { label: "Faster Decisions", value: "+25%", note: "time to consensus during whiteboard sessions" },
      { label: "Setup Time", value: "< 2 min", note: "from invite to first collaborative action" },
    ],
    qualitative: [
      "AI answers in‑context with citations, so the team trusts the output",
      "Whiteboards + chat side‑by‑side capture decisions where they happen",
      "Personal journals reduce meeting follow‑ups and capturable knowledge loss",
    ],
    replacements: [
      "Chat app",
      "Whiteboard app",
      "Personal notes app",
      "Lightweight task tracker",
    ],
  },
  learnings: {
    challenges: [
      {
        title: "Realtime consistency vs. UX smoothness",
        desc: "Balancing conflict resolution with optimistic UI required scoped locks and pragmatic LWW rules for drawings/messages.",
      },
      {
        title: "AI context boundaries",
        desc: "Room‑scoped memory and explicit citations improved trust while avoiding cross‑room leakage.",
      },
      {
        title: "Design tokens at scale",
        desc: "OKLCH tokens simplified dark mode contrast, but demanded careful mapping to Tailwind for consistency.",
      },
    ],
    whatWorked: [
      "Streaming SSR + NDJSON created a responsive, calm feel",
      "CVA variants kept component states tidy and predictable",
      "Schema first: modeling memberships/roles early avoided policy churn",
    ],
    next: [
      "Granular audit log for enterprise rooms",
      "Replayable whiteboard sessions with time‑scrub",
      "Inline tasks with due‑dates extracted from chat via AI",
    ],
  },
};

export default function EchoBoardOutcomesAndLearnings() {
  return (
    <main className="min-h-screen bg-background text-black antialiased">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.08_240)]" /> Sections 12–13
        </div>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Outcome & Impact · Reflection & Learnings</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-black/70 md:text-lg">Solo project — delivery from architecture to UI polish.</p>
      </section>

      {/* Impact Overview Visualization */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-black/10 bg-background p-8 shadow-sm">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Project Impact Overview</h3>
            <p className="text-black/70">Measurable improvements in team collaboration and productivity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">-40%</div>
              <h4 className="font-medium text-black mb-1">Fewer Context Switches</h4>
              <p className="text-sm text-black/70">Less tool switching reported in pilot sessions</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">+25%</div>
              <h4 className="font-medium text-black mb-1">Faster Decisions</h4>
              <p className="text-sm text-black/70">Time to consensus during whiteboard sessions</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">&lt;2min</div>
              <h4 className="font-medium text-black mb-1">Setup Time</h4>
              <p className="text-sm text-black/70">From invite to first collaborative action</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Outcome / Impact */}
      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">12. Outcome / Impact</h2>
        <p className="mt-3 text-sm text-black/70">{meta.outcome.summary}</p>

        {/* Impact Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {meta.outcome.metrics.map((m) => (
            <article key={m.label} className="rounded-2xl border border-black/10 bg-background p-6 text-center shadow-sm">
              <div className="text-3xl font-semibold tracking-tight">{m.value}</div>
              <div className="mt-1 text-sm font-medium">{m.label}</div>
              <div className="mt-1 text-xs text-black/60">{m.note}</div>
            </article>
          ))}
        </div>

        {/* Qualitative wins & tool replacement */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-background p-6 shadow-sm">
            <h3 className="text-lg font-medium">Qualitative Wins</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/75">
              {meta.outcome.qualitative.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/50" /> {q}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-black/10 bg-background p-6 shadow-sm">
            <h3 className="text-lg font-medium">Tool Consolidation</h3>
            <p className="mt-2 text-sm text-black/70">EchoBoard can replace or reduce reliance on:</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-black/80">
              {meta.outcome.replacements.map((r) => (
                <li key={r} className="rounded-lg border border-black/10 bg-black/5 px-3 py-2">{r}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <hr className="border-black/10" />
      </div>

      {/* Learning Journey Visualization */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-black/10 bg-background p-8 shadow-sm">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Development Journey</h3>
            <p className="text-black/70">Key learnings and challenges overcome during development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-black">Challenges Faced</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">⚖️</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-black">Consistency vs UX</h5>
                    <p className="text-sm text-black/70">Balancing conflict resolution with smooth UI</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🧠</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-black">AI Context Boundaries</h5>
                    <p className="text-sm text-black/70">Room-scoped memory management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-black">What Worked Well</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-black">Streaming SSR</h5>
                    <p className="text-sm text-black/70">Responsive, calm user experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🧩</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-black">CVA Variants</h5>
                    <p className="text-sm text-black/70">Tidy component state management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-black">Future Iterations</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-black">Audit Logging</h5>
                    <p className="text-sm text-black/70">Granular tracking for enterprise</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🎬</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-black">Session Replay</h5>
                    <p className="text-sm text-black/70">Replayable whiteboard sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Reflection & Learnings */}
      <section className="mx-auto max-w-6xl px-6 pb-20" id="learnings">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">13. Reflection & Learnings</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Challenges */}
          <article className="rounded-2xl border border-black/10 bg-background p-6 shadow-sm">
            <h3 className="text-lg font-medium">Key Challenges</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/75">
              {meta.learnings.challenges.map((c) => (
                <li key={c.title} className="">
                  <div className="font-medium">{c.title}</div>
                  <div className="text-black/70">{c.desc}</div>
                </li>
              ))}
            </ul>
          </article>

          {/* What Worked */}
          <article className="rounded-2xl border border-black/10 bg-background p-6 shadow-sm">
            <h3 className="text-lg font-medium">What Worked</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/75">
              {meta.learnings.whatWorked.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/50" /> {w}
                </li>
              ))}
            </ul>
          </article>

          {/* Next Iterations */}
          <article className="rounded-2xl border border-black/10 bg-background p-6 shadow-sm">
            <h3 className="text-lg font-medium">Next Iterations</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/75">
              {meta.learnings.next.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/50" /> {n}
                </li>
              ))}
            </ul>
          </article>
        </div>


      </section>
    </main>
  );
}
