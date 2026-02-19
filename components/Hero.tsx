"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center w-full bg-background overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full h-full flex flex-col justify-center relative z-10">

        {/* Top Identifier */}
        <div className="absolute top-10 left-6 lg:left-8 mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-black">
            Khalifa Seck — Portfolio
          </span>
        </div>

        <div className="flex flex-col items-start gap-y-8 mt-20">
          {/* Status Status - Minimal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
            </span>
            <span className="text-sm font-medium text-gray-500 tracking-wide">
              Not available for new projects
            </span>
          </motion.div>

          {/* Massive Headline */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] sm:text-[10vw] lg:text-[9vw] font-bold text-black leading-[0.85] tracking-tighter"
            >
              BUILDING
              <br />
              DIGITAL
              <br />
              <span className="text-gray-300">PRODUCTS</span>
            </motion.h1>
          </div>

          {/* Subtitle & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full border-t border-gray-100 pt-8 mt-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
              className="max-w-md"
            >
              <p className="text-xl sm:text-2xl font-light text-gray-600 leading-tight">
                Product Engineer crafting polished, high-performance interfaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
              className="flex items-center gap-8"
            >
              <Link href="/allwork" className="text-lg font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-tight">
                View Work
              </Link>
              <Link href="/aboutme" className="text-lg font-medium text-gray-400 hover:text-black transition-colors uppercase tracking-tight">
                About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
