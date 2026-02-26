"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center w-full bg-background overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-peach/20 blur-[120px] rounded-full mix-blend-multiply opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-lavender/20 blur-[120px] rounded-full mix-blend-multiply opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full h-full flex flex-col justify-center relative z-10 pt-20 pb-12">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-end">

          {/* Left Column: Headline & Bio */}
          <div className="flex flex-col items-start gap-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1] tracking-tight">
                Hi, I'm Khalifa. <br className="hidden md:block" />
                I design interfaces and write the code that brings them to life.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "circOut" }}
            >
              <p className="text-lg md:text-xl font-light text-gray-500 leading-relax max-w-2xl">
                I'm a designer who <span className="text-gray-900 font-medium italic">engineers</span>. 
              </p>
            </motion.div>
          </div>

          {/* Right Column: Details & Links */}
          <div className="flex flex-col gap-8 md:pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
              className="flex flex-col gap-6"
            >
              {/* Status Badge */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  Open to exciting new opportunities
                </span>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-black/10 to-transparent" />

              {/* Navigation Links */}
              <div className="flex gap-8">
                <Link href="/allwork" className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-gray-900 transition-colors">
                  <span className="border-b border-black/20 group-hover:border-black transition-colors pb-0.5">Explore Work</span>
                </Link>
                <Link href="/aboutme" className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                  <span className="border-b border-transparent group-hover:border-black transition-colors pb-0.5">About Me</span>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
