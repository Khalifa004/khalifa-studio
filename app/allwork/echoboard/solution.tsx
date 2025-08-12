// app/echoboard/solution-and-features.tsx
// Sections 3–4: Solution Overview & Key Features — Apple‑style Next.js + Tailwind CSS

import React from "react";

const meta = {
  solution:
    "EchoBoard unifies key collaboration and productivity features into one seamless, real‑time environment. It provides chat, AI assistance, whiteboarding, and personal journaling — all synced instantly, so teams stay in flow and ideas stay connected.",
  differentiators: [
    "AI‑powered collaboration right where you work",
    "Single tool replacing 3–5 separate apps",
    "Real‑time sync with zero context switching",
  ],
  keyFeatures: {
    collaboration: [
      "Multi‑user rooms with role‑based permissions",
      "Real‑time chat with AI assistance",
      "Interactive whiteboards with live collaboration",
    ],
    ai: [
      "Context‑aware responses",
      "Web search with inline citations",
      "Voice‑to‑text transcription",
    ],
    productivity: [
      "Personal journaling with rich text editing",
      "Search and tagging across all content",
      "Export and backup capabilities",
    ],
  },
};

export default function EchoBoardSolutionAndFeatures() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Solution Overview */}
      <section className="mx-auto max-w-6xl px-6 py-20" id="solution">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.08_120)]" /> Solution
        </div>
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">The Solution</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-800 md:text-lg">{meta.solution}</p>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {meta.differentiators.map((d) => (
            <li key={d} className="rounded-xl border border-gray-300 bg-white/70 p-4 text-sm font-medium backdrop-blur">{d}</li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-6xl px-6"><hr className="border-gray-300" /></div>

      {/* Key Features */}
      <section className="mx-auto max-w-6xl px-6 py-20" id="features">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.08_300)]" /> Key Features
        </div>
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Core Capabilities</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-medium">Collaboration</h3>
            <ul className="list-disc space-y-1 pl-4 text-sm text-gray-800">
              {meta.keyFeatures.collaboration.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium">AI‑Powered</h3>
            <ul className="list-disc space-y-1 pl-4 text-sm text-gray-800">
              {meta.keyFeatures.ai.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium">Productivity</h3>
            <ul className="list-disc space-y-1 pl-4 text-sm text-gray-800">
              {meta.keyFeatures.productivity.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}