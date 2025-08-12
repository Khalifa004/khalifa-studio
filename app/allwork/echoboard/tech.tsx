// app/echoboard/tech-and-design.tsx
// Sections 5–6: Technical Architecture & UI/UX Design — Apple‑style Next.js + Tailwind
// Solo project tone, white background by default

import React from "react";

const meta = {
  role: "Solo Project — Designer, Engineer, and Product Owner",
  frontend: {
    overview:
      "Next.js 15 (App Router) + React 19 with TypeScript 5 and Tailwind CSS 4. Streaming SSR, server actions, and code‑splitting for speed.",
    items: [
      { title: "Framework", desc: "Next.js 15 (App Router), React 19 concurrent features" },
      { title: "Language", desc: "TypeScript 5 with strict configuration" },
      { title: "Styling", desc: "Tailwind CSS 4, OKLCH color system, custom design tokens" },
      { title: "Performance", desc: "Streaming SSR, image & font optimization, route‑level code splitting" },
    ],
  },
  backend: {
    overview:
      "Supabase + PostgreSQL with Row Level Security and real‑time subscriptions. Server components fetch data securely.",
    items: [
      { title: "Database", desc: "PostgreSQL (Supabase) with RLS and indexed queries" },
      { title: "Auth", desc: "Clerk + Google OAuth with role‑based access" },
      { title: "Realtime", desc: "Supabase Realtime + WebSockets for presence/cursors" },
      { title: "SSR", desc: "Supabase SSR helpers for secure server‑side rendering" },
    ],
  },
  ai: {
    overview:
      "GPT‑4o powers chat, summarization, and guidance. Tavily Core supports web search with inline citations. Voice input via speech‑to‑text.",
    items: [
      { title: "Model", desc: "OpenAI GPT‑4o with streamed token‑by‑token UI" },
      { title: "Search", desc: "Tavily Core for citations and source popovers" },
      { title: "Voice", desc: "Real‑time speech‑to‑text for hands‑free input" },
      { title: "Context", desc: "Conversation memory scoped to room and user role" },
    ],
  },
  realtime: {
    overview:
      "tldraw for whiteboards with multi‑cursor presence and conflict‑free updates. Optimistic UI and background sync.",
    items: [
      { title: "Whiteboard", desc: "tldraw integration with persistent storage" },
      { title: "Presence", desc: "Live cursors, typing indicators, and room status" },
      { title: "Streaming", desc: "NDJSON streaming for AI responses" },
      { title: "Offline", desc: "Optimistic updates and background sync" },
    ],
  },
  design: {
    philosophy: [
      "Minimal, calm surfaces with generous white space",
      "Accessible by default (WCAG), keyboard‑first flows",
      "Motion used sparingly to guide attention",
      "Dark mode ready via OKLCH tokens",
    ],
    components: [
      { title: "Primitives", desc: "Radix UI patterns; headless, accessible building blocks" },
      { title: "Variants", desc: "Class Variance Authority for scaleable component states" },
      { title: "Motion", desc: "Framer Motion micro‑interactions (enter/exit, press)" },
      { title: "Tokens", desc: "Spacing, radii, type scale, and color mapped to Tailwind" },
    ],
    theming: [
      { title: "Color", desc: "OKLCH palettes for consistent contrast across themes" },
      { title: "Type", desc: "Variable fonts with optical sizing for crisp rendering" },
      { title: "Density", desc: "Comfortable defaults with compact variants for data‑dense views" },
    ],
  },
};

export default function EchoBoardTechAndDesign() {
  return (
    <main className="min-h-screen bg-gray-50 text-[oklch(0.21_0_0)] antialiased">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.08_240)]" /> Sections 5–6
        </div>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Technical Architecture & UI/UX Design
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-black/70 md:text-lg">
          Built and designed solo — from systems architecture to interface details.
        </p>
      </section>

      {/* Technical Architecture */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">5. Technical Architecture</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Frontend */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.08_250)]" /> Frontend
            </div>
            <p className="text-sm text-black/70">{meta.frontend.overview}</p>
            <dl className="mt-4 space-y-3">
              {meta.frontend.items.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-6">
                  <dt className="min-w-28 text-sm font-medium text-black/80">{item.title}</dt>
                  <dd className="flex-1 text-sm text-black/70">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Backend */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.08_120)]" /> Backend
            </div>
            <p className="text-sm text-black/70">{meta.backend.overview}</p>
            <dl className="mt-4 space-y-3">
              {meta.backend.items.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-6">
                  <dt className="min-w-28 text-sm font-medium text-black/80">{item.title}</dt>
                  <dd className="flex-1 text-sm text-black/70">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* AI */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.08_20)]" /> AI & Intelligence
            </div>
            <p className="text-sm text-black/70">{meta.ai.overview}</p>
            <dl className="mt-4 space-y-3">
              {meta.ai.items.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-6">
                  <dt className="min-w-28 text-sm font-medium text-black/80">{item.title}</dt>
                  <dd className="flex-1 text-sm text-black/70">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Realtime */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.08_300)]" /> Real‑time
            </div>
            <p className="text-sm text-black/70">{meta.realtime.overview}</p>
            <dl className="mt-4 space-y-3">
              {meta.realtime.items.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-6">
                  <dt className="min-w-28 text-sm font-medium text-black/80">{item.title}</dt>
                  <dd className="flex-1 text-sm text-black/70">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <hr className="border-black/10" />
      </div>

      {/* UI/UX Design */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">6. UI/UX Design System</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Philosophy */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium">Design Philosophy</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              {meta.design.philosophy.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/50" /> {p}
                </li>
              ))}
            </ul>
          </article>

          {/* Component Architecture */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium">Component Architecture</h3>
            <dl className="mt-3 space-y-3 text-sm">
              {meta.design.components.map((c) => (
                <div key={c.title} className="flex items-start justify-between gap-6">
                  <dt className="min-w-28 font-medium text-black/80">{c.title}</dt>
                  <dd className="flex-1 text-black/70">{c.desc}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Theming */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium">Theming & Tokens</h3>
            <dl className="mt-3 space-y-3 text-sm">
              {meta.design.theming.map((t) => (
                <div key={t.title} className="flex items-start justify-between gap-6">
                  <dt className="min-w-28 font-medium text-black/80">{t.title}</dt>
                  <dd className="flex-1 text-black/70">{t.desc}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>

        {/* CTA to next sections */}
        <div className="mt-10 flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/5 p-4">
          <div>
            <p className="text-sm text-black/60">Up next</p>
            <p className="text-base font-medium">7. Database & Data Model · 8. Real‑time Collaboration</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
            Continue <span aria-hidden>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}