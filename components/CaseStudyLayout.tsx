"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <div className="bg-[hsl(0,0%,98%)] text-gray-900">
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 pt-24 overflow-hidden isolate">
        {header.backgroundVideo && shouldPlayVideo ? (
          <video className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" autoPlay muted loop playsInline preload="none" aria-hidden="true">
            <source src={header.backgroundVideo} type="video/mp4" />
          </video>
        ) : null}
        {header.backgroundImage ? (
          <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${header.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
        ) : null}
        {(header.backgroundImage || header.backgroundVideo) && (
          <div className="absolute inset-0 bg-black/40 z-10" />
        )}
        <div className={`relative z-20 max-w-6xl mx-auto ${header.backgroundImage || header.backgroundVideo ? 'text-white' : ''}`}>
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

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {sections.map((s) => (
          <motion.section
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">{s.title}</h2>
            {s.items ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {s.items.map((it) => (
                  <div key={it.label} className="rounded-xl border border-gray-200 bg-white p-4">
                    <div className="text-gray-500 text-xs uppercase">{it.label}</div>
                    <div className="text-gray-800 font-medium">{it.value}</div>
                  </div>
                ))}
              </div>
            ) : null}
            {s.body}
          </motion.section>
        ))}
        {children ? (
          <div className="space-y-16">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}

