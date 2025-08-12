// app/echoboard/data-and-realtime.tsx
// Sections 7–8: Database & Data Model + Real‑time Collaboration — Apple‑style Next.js + Tailwind
// Solo project tone, light/white look for portfolio consistency

import React from "react";

const meta = {
  role: "Solo Project — I designed the schema, wrote policies, and wired realtime.",
  tables: [
    { name: "profiles", desc: "User profiles, display names, and metadata" },
    { name: "rooms", desc: "Collaborative spaces with visibility (private/public)" },
    { name: "memberships", desc: "User ↔ room roles & permissions (OWNER/EDITOR/VIEWER)" },
    { name: "messages", desc: "Chat messages with optional AI citations" },
    { name: "journals", desc: "Personal notebooks (per‑user)" },
    { name: "journal_entries", desc: "Rich text entries with tags & timestamps" },
    { name: "room_invites", desc: "Email‑based invitations with token expiry" },
    { name: "notifications", desc: "Event notifications with read state" },
  ],
  security: [
    {
      title: "Row Level Security (RLS)",
      points: [
        "Profiles: users can read self + room‑related public details",
        "Rooms: visibility filter; private rooms restricted to members",
        "Memberships: only owners can grant/revoke roles",
        "Messages: only room members can read; authors can edit within a window",
        "Journals/Entries: only the owner; optional public flag honored by policy",
      ],
    },
    {
      title: "RBAC & Constraints",
      points: [
        "Roles stored in memberships; enforced in policies and app",
        "Foreign keys with ON DELETE CASCADE for clean teardown",
        "Indexed queries for messages(room_id, created_at) and entries(journal_id, created_at)",
      ],
    },
  ],
  realtime: {
    summary:
      "Realtime is powered by Supabase Realtime + WebSockets. Presence and cursors are ephemeral; persistent content is stored in Postgres. tldraw is wired to a room‑scoped store with conflict‑aware updates.",
    features: [
      { title: "Presence & Typing", desc: "See who’s online, where their cursor is, and who’s typing" },
      { title: "Live Whiteboards", desc: "Multi‑user drawing via tldraw; diff‑based synchronization" },
      { title: "Streaming AI", desc: "NDJSON token streaming renders responses progressively" },
      { title: "Optimistic UI", desc: "Mutations apply instantly, reconcile on ack; background sync" },
      { title: "Conflict Handling", desc: "Room‑scoped locks and last‑writer‑wins for lightweight cases" },
    ],
    perf: [
      "Message timelines indexed; pagination by created_at",
      "Connection pooling; client subscriptions batched per room",
      "Lightweight payloads for presence; avoid writing ephemeral state to DB",
    ],
  },
};

export default function EchoBoardDataAndRealtime() {
  return (
    <main className="min-h-screen bg-gray-50 text-black antialiased">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.08_240)]" /> Sections 7–8
        </div>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Database & Data Model · Real‑time Collaboration
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-black/70 md:text-lg">{meta.role}</p>
      </section>

      {/* 7. Database & Data Model */}
      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">7. Database & Data Model</h2>
        <p className="mt-3 text-sm text-black/70">
          PostgreSQL on Supabase with strict RLS. Entities are room‑scoped where applicable and keyed for fast timelines.
        </p>

        {/* Core Tables */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {meta.tables.map((t) => (
            <article key={t.name} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-black/60" /> {t.name}
              </div>
              <p className="text-sm text-black/75">{t.desc}</p>
            </article>
          ))}
        </div>

        {/* Security & Permissions */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {meta.security.map((block) => (
            <article key={block.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium">{block.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/75">
                {block.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/50" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Tiny ER sketch (decorative/indicative) */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-b from-black/5 to-white p-6">
          <h4 className="text-sm font-medium text-black/70">ER Overview (simplified)</h4>
          <div className="mt-4 grid grid-cols-3 gap-6 text-xs text-black/70">
            <div className="rounded-lg border border-black/10 bg-white p-3">
              <div className="font-semibold">rooms</div>
              <div className="mt-1">id • owner_id • visibility</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-3">
              <div className="font-semibold">memberships</div>
              <div className="mt-1">room_id • user_id • role</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-3">
              <div className="font-semibold">messages</div>
              <div className="mt-1">room_id • author_id • created_at</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-black/60">(Foreign keys with ON DELETE CASCADE; indexes on timeline columns.)</p>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <hr className="border-black/10" />
      </div>

      {/* 8. Real‑time Collaboration */}
      <section className="mx-auto max-w-6xl px-6 pb-20" id="realtime">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">8. Real‑time Collaboration</h2>
        <p className="mt-3 text-sm text-black/70">{meta.realtime.summary}</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {meta.realtime.features.map((f) => (
            <article key={f.title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.08_300)]" /> {f.title}
              </div>
              <p className="text-sm text-black/75">{f.desc}</p>
            </article>
          ))}
        </div>

        {/* Performance Notes */}
        <div className="mt-10 rounded-2xl border border-black/10 bg-gradient-to-b from-black/5 to-white p-6">
          <h3 className="text-lg font-medium">Performance Considerations</h3>
          <ul className="mt-3 grid list-disc grid-cols-1 gap-2 pl-5 text-sm text-black/75 md:grid-cols-2">
            {meta.realtime.perf.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/5 p-4">
          <div>
            <p className="text-sm text-black/60">Up next</p>
            <p className="text-base font-medium">9. Performance & Optimization · 10. Development Workflow</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
            Continue <span aria-hidden>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}