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
    <section className="w-full bg-background py-4 sm:py-8">
      <div className="rounded-[1.5rem] bg-[#20201f] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-16">
          <div>
            <p className="text-sm text-white/55">How I contribute</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.07em] text-white">
              Product work that gets all the way to the browser.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
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
              className="group border-b border-white/15 py-7 md:border-r md:border-white/15 md:px-6 md:last:border-r-0 lg:min-h-[14rem] lg:border-b-0 lg:px-7"
            >
              <span className="text-xs text-white/45">0{index + 1}</span>
              <h3 className="mt-7 text-xl font-medium tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
