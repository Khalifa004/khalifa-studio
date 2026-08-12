"use client";

import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    title: "Product design",
    description: "Flows, information hierarchy, interaction states, and prototypes in Figma."
  },
  {
    title: "Design systems",
    description: "Tokens, reusable components, variants, and the rules that keep a product consistent."
  },
  {
    title: "Frontend",
    description: "React, Next.js, TypeScript, Tailwind CSS, and responsive implementation."
  },
  {
    title: "Interface quality",
    description: "Accessibility, keyboard behavior, loading and error states, motion, and visual QA."
  }
];

export function StrengthsSection() {
  return (
    <section className="w-full bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl border-y border-black/[0.12] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="grid gap-8 border-b border-black/[0.12] pb-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">How I contribute</p>
            <h2 className="mt-4 font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-gray-900 sm:text-5xl">
              Product work that gets all the way to the browser.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
            I&apos;m at my best where product design and frontend development overlap: figuring out the experience, then doing the work to make it real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-black/[0.12] py-7 md:border-r md:px-6 md:last:border-r-0 lg:min-h-[16rem] lg:border-b-0 lg:px-7"
            >
              <h3 className="text-xl font-medium tracking-[-0.025em] text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
