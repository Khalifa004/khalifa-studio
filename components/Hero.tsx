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

          {/* Enhanced skills showcase */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
              className="group relative rounded-2xl border border-neutral-200 p-6 md:p-8 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300"
            >
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  <div className="text-xs font-medium uppercase tracking-wider text-neutral-600">
                    Areas of Focus
                  </div>
                </div>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">UX/UI Design</div>
                      <div className="text-xs text-neutral-600">User-centered design solutions</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Front‑end Development</div>
                      <div className="text-xs text-neutral-600">Modern experiences</div>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Me Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6"
                >
                  <a
                    href="https://www.linkedin.com/in/khalifa-seck/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all duration-200 border border-neutral-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Contact Me
                  </a>
                </motion.div>
                
                {/* Status indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  className="mt-4 flex items-center gap-2 text-xs text-neutral-500"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>Available</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);

