// app/echoboard/page.tsx (or any route)
// Clean, Apple-like Next.js section for 1) Project Introduction & 2) Problem Statement
// Tailwind CSS required. No external UI libs.

import React from "react";

// --- Content you can edit quickly ---
const meta = {
  name: "EchoBoard",
  tagline:
    "A unified workspace that blends real‑time chat, AI assistance, interactive whiteboards, and personal journaling.",
  elevator:
    "EchoBoard streamlines collaboration for remote and hybrid teams by combining conversation, ideation, and personal knowledge in a single, fast, real‑time canvas.",
  role: "Sole Creator & Full‑Stack Developer",
  context:
    "Distributed teams juggle chat, whiteboards, and docs across multiple tools.",
  pains: [
    {
      title: "Fragmented workflow",
      desc: "Context constantly switches between chat, whiteboards, docs, and notes—ideas get lost and momentum breaks.",
    },
    {
      title: "No in‑context AI",
      desc: "AI is often a separate tab. Teams can't ask questions, cite sources, or summarize in the exact place collaboration happens.",
    },
    {
      title: "Real‑time sync pain",
      desc: "Presence, cursors, and concurrent edits are hard to get right—latency and conflicts degrade trust in the tool.",
    },
  ],
};

export default function EchoBoardIntroAndProblem() {
  return (
    <main className=" text-gray-900 antialiased">
      {/* Top gradient bar */}
    


      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* Problem Statement */}
      <section className="mx-auto max-w-6xl bg-gray-50 px-6 py-20 md:py-24" id="problem">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-orange-400" />
          Problem
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">The Problem We're Solving</h2>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-7 text-gray-700">
          {meta.context}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {meta.pains.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400" />
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">{p.title}</h3>
              <p className="mt-4 text-base leading-6 text-gray-600">{p.desc}</p>
            </article>
          ))}
        </div>

     
      </section>
    </main>
  );
}
