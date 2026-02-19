// app/echoboard/page.tsx (or any route)
// Clean, Apple-like Next.js section for 1) Project Introduction & 2) Problem Statement
// Tailwind CSS required. No external UI libs.

import React from "react";
import Image from "next/image";

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
      desc: "Context constantly switches between chat, whiteboards, docs, and notes ideas get lost and momentum breaks.",
    },
    {
      title: "No in‑context AI",
      desc: "AI is often a separate tab. Teams can't ask questions, cite sources, or summarize in the exact place collaboration happens.",
    },
    {
      title: "Real‑time sync pain",
      desc: "Presence, cursors, and concurrent edits are hard to get right latency and conflicts degrade trust in the tool.",
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

        {/* Problem Visualization */}
        <div className="mt-12 mb-12">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fragmented Collaboration Tools</h3>
              <p className="text-gray-600">Teams constantly switch between multiple disconnected applications</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold text-lg">💬</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Chat App</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-green-600 font-bold text-lg">📝</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Whiteboard</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-purple-600 font-bold text-lg">🤖</span>
                </div>
                <span className="text-sm font-medium text-gray-700">AI Assistant</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-orange-600 font-bold text-lg">📓</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Notes</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-red-600 font-medium">
                <span>↔️</span>
                <span>Context switching breaks flow</span>
                <span>↔️</span>
              </div>
            </div>
          </div>
        </div>

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
