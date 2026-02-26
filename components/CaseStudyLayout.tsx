"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CaseStudySidebar from "./CaseStudySidebar";

type Section = {
  title: string;
  body?: React.ReactNode;
  items?: Array<{ label: string; value: string }>; // for meta lists
};

interface CaseStudyLayoutProps {
  header: {
    title: string;
    description: string;
    meta: Array<{ label: string; value: string }>;
    backgroundImage?: string;
    backgroundVideo?: string;
  };
  sections: Section[];
  children?: React.ReactNode;
}

export default function CaseStudyLayout({ header, sections, children }: CaseStudyLayoutProps) {
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    setShouldPlayVideo(!prefersReducedMotion && isDesktop);
  }, []);

  return (
    <div className="bg-background text-gray-900">
      {/* Universal 2-Column Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid lg:grid-cols-[1fr_250px] gap-12 items-start relative">

        {/* Main Content Area (Left Column) */}
        <div className="w-full">
          {/* Header Section */}
          <section className="relative min-h-[70vh] flex flex-col justify-center py-24 px-6 overflow-hidden isolate mb-24 rounded-3xl">
            {header.backgroundVideo && shouldPlayVideo ? (
              <video className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 rounded-3xl" autoPlay muted loop playsInline preload="none" aria-hidden="true">
                <source src={header.backgroundVideo} type="video/mp4" />
              </video>
            ) : null}
            {header.backgroundImage ? (
              <div className="absolute inset-0 z-0 rounded-3xl" style={{ backgroundImage: `url(${header.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
            ) : null}
            {(header.backgroundImage || header.backgroundVideo) && (
              <div className="absolute inset-0 bg-black/40 z-10 rounded-3xl" />
            )}
            <div className={`relative z-20 w-full ${header.backgroundImage || header.backgroundVideo ? 'text-white' : ''}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{header.title}</h1>
              <p className="text-xl md:text-2xl max-w-3xl opacity-90">{header.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm">
                {header.meta.map((m) => (
                  <div key={m.label}>
                    <div className="text-gray-300 md:text-gray-400 uppercase tracking-wide text-xs">{m.label}</div>
                    <div className={`${header.backgroundImage || header.backgroundVideo ? 'text-white' : 'text-gray-800'} font-semibold`}>{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sections Content */}

          <div className="space-y-24 lg:pb-32 w-full">
            {sections.map((s) => {
              const sectionId = s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <motion.section
                  id={sectionId}
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900">{s.title}</h2>
                    <div className="h-px w-32 bg-black/5" />
                  </div>

                  {s.items ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {s.items.map((it) => (
                        <div key={it.label} className="rounded-xl border border-gray-200 bg-background p-4 flex flex-col gap-1">
                          <div className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">{it.label}</div>
                          <div className="text-gray-800 font-medium text-sm">{it.value}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="prose prose-lg max-w-none text-gray-600 font-light">
                    {s.body}
                  </div>
                </motion.section>
              );
            })}

            {children ? (
              <div className="space-y-16">
                {children}
              </div>
            ) : null}
          </div>
        </div>

        {/* Universal Sticky Sidebar */}
        <CaseStudySidebar
          sections={sections.map(s => ({
            id: s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
            label: s.title
          }))}
        />

      </div>
    </div>
  );
}

