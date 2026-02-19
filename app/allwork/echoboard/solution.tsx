// app/echoboard/solution-and-features.tsx
// Sections 3–4: Solution Overview & Key Features — Apple‑style Next.js + Tailwind CSS

import React from "react";
import Image from "next/image";

const meta = {
  solution:
    "EchoBoard unifies key collaboration and productivity features into one seamless, real‑time environment. It provides chat, AI assistance, whiteboarding, and personal journaling all synced instantly, so teams stay in flow and ideas stay connected.",
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

        {/* EchoBoard Main Image */}
        <div className="mt-12 mb-12">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">EchoBoard - Unified Workspace</h3>
              <p className="text-gray-600">One platform that brings everything together</p>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src="/images/Echoboard.png"
                alt="EchoBoard unified workspace interface showing chat, whiteboard, and AI features"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-green-600 font-medium">
                <span>✨</span>
                <span>All-in-one collaboration platform</span>
                <span>✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><hr className="border-gray-300" /></div>

      {/* Key Features */}
      <section className="mx-auto max-w-6xl px-6 py-20" id="features">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.08_300)]" /> Key Features
        </div>
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Core Capabilities</h2>
        
        {/* Unified Platform Visualization */}
        <div className="mt-8 mb-12">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unified Platform Architecture</h3>
              <p className="text-gray-600">All features seamlessly integrated in one interface</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">💬</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Real-time Chat</h4>
                    <p className="text-sm text-gray-600">Instant messaging with AI assistance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📝</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Interactive Whiteboards</h4>
                    <p className="text-sm text-gray-600">Multi-user drawing and collaboration</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">AI-Powered Assistance</h4>
                    <p className="text-sm text-gray-600">Context-aware responses and citations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-200">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Personal Journaling</h4>
                    <p className="text-sm text-gray-600">Rich text editing with search</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <span>🔄</span>
                <span>Real-time synchronization across all features</span>
                <span>🔄</span>
              </div>
            </div>
          </div>
        </div>

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