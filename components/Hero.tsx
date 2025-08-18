"use client";

import type React from "react";
import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedButton } from "./AnimatedButton";
import ShaderBackground from "./ui/shadereffect";
import { LiquidButton } from "./ui/liquidglassbutton";

const Hero: React.FC = () => {
  return (
    <ShaderBackground>
      <section className="relative min-h-screen flex items-center justify-center w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            
            {/* Left Column - Main Content */}
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium w-fit mx-auto lg:mx-0"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight text-white">
                  <span className="block">Frontend</span>
                  <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Engineer
                  </span>
                  <span className="block text-gray-300 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light">
                    & UI Designer
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-300 max-w-2xl leading-relaxed"
              >
                Crafting exceptional digital experiences through thoughtful design and modern development practices.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
              >
                <Link href="/allwork" className="flex justify-center lg:justify-start">
                  <AnimatedButton className="text-base px-8 py-3">
                    View My Work
                  </AnimatedButton>
                </Link>
                <Link href="/aboutme" className="flex justify-center lg:justify-start">
                  <LiquidButton size="xxl" className="text-lg font-medium text-white">
                    About Me
                  </LiquidButton>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-8 pt-8 border-t border-white/10 justify-center lg:justify-start"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">6+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
              
              </motion.div>
            </div>

            {/* Right Column - Professional Info Card */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                className="w-full max-w-md"
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 shadow-xl">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-white/80 rounded-full" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">Expertise</h3>
                          <p className="text-white/70 text-sm">Core competencies</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-6 mb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-white/80 mt-2 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium mb-1">UX/UI Design</div>
                          <div className="text-white/70 text-sm leading-relaxed">User-centered design solutions, wireframing, prototyping</div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-white/80 mt-2 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium mb-1">Frontend Development</div>
                          <div className="text-white/70 text-sm leading-relaxed">React, Next.js, TypeScript, modern web standards</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-white/80 mt-2 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium mb-1">Performance Optimization</div>
                          <div className="text-white/70 text-sm leading-relaxed">Core Web Vitals, accessibility, responsive design</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/20 mb-6" />

                    {/* Contact Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/khalifa-seck/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
                      >
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Connect on LinkedIn
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ShaderBackground>
  );
};

export default memo(Hero);

