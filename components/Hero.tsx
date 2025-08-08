"use client";

import type React from "react";
import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedButton } from "./AnimatedButton";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Heading & copy */}
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="font-bold leading-tight tracking-tight break-words text-neutral-900"
            >
              <span className="block text-[clamp(2.25rem,8vw,5rem)]">Front‑end engineer</span>
              <span className="block text-[clamp(2.25rem,8vw,5rem)]">and UI designer</span>
            </motion.h1>

   

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/allwork">
                <AnimatedButton data-cursor="hover">View my work</AnimatedButton>
              </Link>
              <Link href="/aboutme">
                <button className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition">
                  About me
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Compact side card */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="rounded-2xl border border-neutral-200 p-4 md:p-6 bg-white/70 backdrop-blur"
            >
              <div className="text-xs uppercase tracking-wide text-neutral-500 mb-2">Focus</div>
              <div className="text-neutral-900 space-y-1">
                <div>UX/UI Design</div>
                <div>Front‑end Development</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);

