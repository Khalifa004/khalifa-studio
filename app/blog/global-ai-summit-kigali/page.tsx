"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const organicEase = [0.4, 0, 0.2, 1];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: organicEase }}
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default function GlobalAISummit() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#FAFAFA] text-gray-600 selection:bg-black/5 selection:text-black font-sans antialiased overflow-x-hidden">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-100/40 blur-[120px] rounded-full mix-blend-multiply opacity-60" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-100/40 blur-[100px] rounded-full mix-blend-multiply opacity-50" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24">

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
                    className="mb-16 md:mb-24"
                >
                    <Link href="/blog" className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-300">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="font-light tracking-wide">Back to writing</span>
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.header
                    style={{ opacity, scale }}
                    className="mb-24 md:mb-32 pl-4 border-l border-black/5"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: organicEase }}
                        className="text-4xl md:text-6xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-6"
                    >
                        Global AI Summit in Kigali
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                        className="flex items-center gap-4 text-sm font-light tracking-wide text-gray-500"
                    >
                        <span>April 2025</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>High-Impact Engineering</span>
                    </motion.div>
                </motion.header>

                <main className="space-y-20 md:space-y-32">

                    {/* Intro */}
                    <Section className="max-w-2xl">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                            Sometimes, an email changes everything. When I received the invitation from the <span className="text-black font-normal">Mastercard Foundation</span> to attend the Global AI Summit in Kigali, it wasn't just another conference—it was a recognition of the work we were doing with IntelliCourse.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent" />
                        </div>
                    </Section>

                    {/* The Experience */}
                    <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
                        <div className="pt-2">
                            <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">The Summit</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="leading-loose">
                                Walking into the summit, the energy was palpable. It wasn't just about the technology; it was about the people using it to solve real-world problems. Being recognized as a <span className="font-medium text-gray-900">High-Impact Engineer</span> felt surreal, but standing there among innovators from across the continent, I realized that what we build actually matters.
                            </p>
                            <p className="leading-loose">
                                I had the chance to share the story of IntelliCourse—how we're trying to make personalized education accessible even in low-connectivity areas. The feedback was incredibly grounding. It’s easy to get lost in code and metrics, but hearing how your tool could impact a student in a rural village brings you right back to the "why".
                            </p>
                        </div>
                    </Section>

                    {/* Connection */}
                    <Section className="relative p-8 md:p-12 rounded-2xl bg-white border border-black/[0.03] shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full opacity-50" />

                        <h2 className="relative text-2xl font-medium text-gray-900 mb-6">More than just AI</h2>
                        <div className="relative space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                The conversations weren't about complex algorithms or server costs. They were about <span className="text-gray-900 font-medium">potential</span>. We talked about how AI can be a bridge, not just a tool. Meeting other founders and engineers who are just as obsessed with impact as they are with optimization was refreshing.
                            </p>
                            <p>
                                It reinforced my belief that the best technology doesn't scream "look at me"—it quietly empowers people to do more than they thought possible.
                            </p>
                        </div>
                    </Section>

                    {/* Reflection */}
                    <Section>
                        <div className="relative pl-8 md:pl-16 py-4">
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
                            <p className="text-xl md:text-2xl font-light text-gray-800 italic leading-relaxed">
                                "We are not just coding for screens; we are coding for futures. Every optimized line of code could mean one less barrier for a student somewhere."
                            </p>
                        </div>
                    </Section>

                    {/* Looking Forward */}
                    <Section className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-medium text-gray-900">What's Next?</h2>
                            <p className="leading-loose max-w-3xl">
                                Leaving Kigali, I felt a renewed sense of purpose. IntelliCourse is just the beginning. The connections made and the perspectives gained have already started influencing how I approach my next set of features. It’s not just about being smart; it’s about being useful, accessible, and human.
                            </p>
                        </div>

                        <div className="pt-12 border-t border-black/5 flex justify-between items-end">
                            <div>
                                <h3 className="text-sm font-medium text-black uppercase tracking-widest mb-2">Location</h3>
                                <p className="text-sm text-gray-500">Kigali, Rwanda</p>
                            </div>
                            <div className="text-right">
                                <Link href="/blog" className="text-sm text-black hover:text-black/60 transition-colors">
                                    Back to Writing &rarr;
                                </Link>
                            </div>
                        </div>
                    </Section>
                </main>
            </div>
        </div>
    );
}
