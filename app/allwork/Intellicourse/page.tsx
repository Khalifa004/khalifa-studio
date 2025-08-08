"use client";
import React from 'react';
import Intelliteam from './Team';
import Intellifeatures from './Intellifeatures';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { Layers, Boxes, Zap, Keyboard, Palette, Gauge, Rocket, ShieldCheck } from 'lucide-react';

const ComingSoonPage = () => {
  return (
    <CaseStudyLayout
      header={{
        title: 'IntelliCourse',
        description:
          'AI-powered learning platform that generates courses, adapts to learners, and provides instant assessments.',
        meta: [
          { label: 'Type', value: 'Startup' },
          { label: 'Timeframe', value: 'Aug 2024 – Present' },
          { label: 'Toolkit', value: 'Next.js, TypeScript, Tailwind, Framer Motion, Figma' },
          { label: 'Year', value: '2024' },
        ],
        backgroundVideo: '/images/intellianimblackbg.mp4',
      }}
      sections={[
        {
          title: 'Overview',
          body: (
            <p className="text-lg text-gray-600">
              I lead front‑end implementation and interaction design. My focus: scalable UI architecture, design system, and performant motion.
            </p>
          ),
        },
        {
          title: 'My Role & Contributions',
          body: (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: <Layers className="w-5 h-5" />, title: 'Front‑end Architecture', desc: 'Built App Router structure, routing, layouts, and shared providers.' },
                { icon: <Boxes className="w-5 h-5" />, title: 'Component Library', desc: 'Created reusable UI components and patterns with Tailwind.' },
                { icon: <Palette className="w-5 h-5" />, title: 'Design System', desc: 'Tokens, spacing scale, typography, and accessible color usage.' },
                { icon: <Keyboard className="w-5 h-5" />, title: 'Form Flows', desc: 'Built multi‑step forms with validation, errors, and progressive disclosure.' },
                { icon: <Zap className="w-5 h-5" />, title: 'Motion & Interactions', desc: 'Micro‑interactions with Framer Motion; reduced motion fallbacks.' },
                { icon: <ShieldCheck className="w-5 h-5" />, title: 'Quality & Hardening', desc: 'Edge cases, loading/skeleton states, and resilient UI under failure.' },
              ].map((c) => (
                <div key={c.title} className="rounded-lg border border-gray-200 bg-white p-4 flex gap-3 items-start">
                  <div className="shrink-0 rounded-md bg-gray-100 p-2 text-gray-700">{c.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{c.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: 'Architecture & Stack',
          body: (
            <div className="flex flex-wrap gap-2">
              {['Next.js App Router', 'TypeScript', 'Tailwind', 'Framer Motion', 'Prism code blocks', 'Responsive images'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-gray-700">{tag}</span>
              ))}
            </div>
          ),
        },
        {
          title: 'Goals & Constraints',
          items: [
            { label: 'Primary goal', value: 'Launch MVP with adaptive courses and assessment flows' },
            { label: 'KPIs', value: 'Signup conversion, onboarding completion, lesson completion' },
            { label: 'Constraints', value: 'Small team, tight timelines, mobile-first UX' },
            { label: 'Accessibility', value: 'Target WCAG AA basics: focus states, contrast, semantics' },
          ],
        },
        {
          title: 'Performance & Accessibility',
          body: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[{ label: 'Lighthouse (UI routes)', value: '95–100' }, { label: 'LCP target (Wi‑Fi)', value: '< 2.0s' }, { label: 'CLS target', value: '~0.01' }].map((s) => (
                <div key={s.label} className="rounded-lg border border-gray-200 bg-white p-4">
                  <div className="text-xs uppercase tracking-wide text-gray-500">{s.label}</div>
                  <div className="text-xl font-semibold text-gray-900">{s.value}</div>
                </div>
              ))}
              <div className="md:col-span-3 rounded-lg border border-gray-200 bg-white p-4">
                <ul className="list-disc list-inside text-gray-700 text-sm grid md:grid-cols-2 gap-2">
                  <li>Keyboard navigable components and visible focus states</li>
                  <li>Semantic landmarks and headings hierarchy</li>
                  <li>Reduced motion fallback and lazy-loaded heavy media</li>
                  <li>Optimized images with Next/Image and responsive sizes</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          title: 'Implementation',
          body: (
            <div className="space-y-12">
              <Intelliteam />
              <Intellifeatures />
            </div>
          ),
        },
        {
          title: 'Challenges & Solutions',
          body: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {title:'Complex multi‑step forms', sol:'Modular steps with state isolation, optimistic UI, and inline validation.'},
                {title:'Motion without jank', sol:'Framer Motion variants + prefers‑reduced‑motion and intersection observers.'},
                {title:'Consistent theming', sol:'Central tokens and utilities; constrained component APIs and docs.'},
              ].map((i)=> (
                <div key={i.title} className="rounded-lg border border-gray-200 bg-white p-4">
                  <h4 className="font-semibold text-gray-900 text-sm">{i.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{i.sol}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: 'What I’d improve next',
          body: (
            <ul className="list-disc list-inside text-gray-600">
              <li>Refine analytics dashboards for instructors.</li>
              <li>Deeper accessibility audits and keyboard testing.</li>
              <li>Server-side render critical pages for faster TTFB.</li>
            </ul>
          ),
        },
      ]}
    />
  );
};

export default ComingSoonPage;
