// app/echoboard/outcomes-and-learnings.tsx
// Sections 12–13: Outcome / Impact & Reflection / Learnings — Apple‑style Next.js + Tailwind
// Solo project tone, white background by default

import React from "react";

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
    <main className="min-h-screen bg-gray-50 text-black antialiased">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.08_240)]" /> Sections 12–13
        </div>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Outcome & Impact · Reflection & Learnings</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-black/70 md:text-lg">Solo project — delivery from architecture to UI polish.</p>
      </section>

      {/* 12. Outcome / Impact */}
      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">12. Outcome / Impact</h2>
        <p className="mt-3 text-sm text-black/70">{meta.outcome.summary}</p>

        {/* Impact Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {meta.outcome.metrics.map((m) => (
            <article key={m.label} className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-semibold tracking-tight">{m.value}</div>
              <div className="mt-1 text-sm font-medium">{m.label}</div>
              <div className="mt-1 text-xs text-black/60">{m.note}</div>
            </article>
          ))}
        </div>

        {/* Qualitative wins & tool replacement */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium">Qualitative Wins</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/75">
              {meta.outcome.qualitative.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/50" /> {q}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
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

      {/* 13. Reflection & Learnings */}
      <section className="mx-auto max-w-6xl px-6 pb-20" id="learnings">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">13. Reflection & Learnings</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Challenges */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
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
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
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
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
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
