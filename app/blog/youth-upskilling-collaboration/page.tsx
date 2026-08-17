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

export default function YouthUpskilling() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-gray-600 selection:bg-black/5 selection:text-black font-sans antialiased overflow-x-hidden">

            {/* Background Ambience - Light Theme for this one */}
            <div className="fixed inset-0 pointer-events-none z-0">
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
                        className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight leading-[1.1] mb-6"
                    >
                        Collaborating for Youth Upskilling
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                        className="flex items-center gap-4 text-sm font-light tracking-wide text-gray-500"
                    >
                        <span>December 2024</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>Social Impact</span>
                    </motion.div>
                </motion.header>

                <main className="space-y-20 md:space-y-32">

                    {/* Intro */}
                    <Section className="max-w-2xl">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                            Talent is everywhere, but opportunity is not. That's the simple (and somewhat cliché) truth that drove my recent collaboration with <span className="font-medium text-black">African innovators and government leaders</span>. We set out to answer one question: How do we bridge the skills gap for the next generation of digital creators?
                        </p>
                        <div className="mt-8 flex gap-4">
                            <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent" />
                        </div>
                    </Section>

                    {/* The Collaboration */}
                    <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
                        <div className="pt-2">
                            <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">The Mission</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="leading-loose">
                                Late last year, I joined a working group focused on youth upskilling. The goal wasn't just to "teach coding" it was to build a sustainable ecosystem where young people could learn, build, and actually find work.
                            </p>
                            <p className="leading-loose">
                                My role was bringing a product perspective to the table. Policies are great, but how do they translate into a user experience? How does a student in a remote area actually access these resources? We spent weeks mapping out user journeys that accounted for limited data, shared devices, and spotty power.
                            </p>
                        </div>
                    </Section>

                    {/* Key Insight */}
                    <Section className="relative p-8 md:p-12 rounded-2xl bg-background border border-black/[0.03] shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full opacity-50" />

                        <h2 className="relative text-2xl font-medium text-gray-900 mb-6">It's about community, not just content</h2>
                        <div className="relative space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                One major takeaway was that isolation is the biggest killer of motivation. We proposed a "digital hub" model where learners could form local squads. Even if the learning was digital, the support network had to be physical and local.
                            </p>
                            <p>
                                This shifted our entire strategy from purely online courses to a hybrid model that empowered local mentors. It was a reminder that you can't solve human problems with just software. You need humans too.
                            </p>
                        </div>
                    </Section>

                    {/* Quote Block */}
                    <Section>
                        <div className="relative pl-8 md:pl-16 py-4">
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent" />
                            <p className="text-xl md:text-2xl font-light text-gray-800 italic leading-relaxed">
                                "We aren't just building a workforce; we're building a generation of problem solvers who understand their own local context better than anyone else."
                            </p>
                        </div>
                    </Section>

                    {/* Making it Real */}
                    <Section className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-medium text-gray-900">Moving the Needle</h2>
                            <p className="leading-loose max-w-3xl">
                                This collaboration is ongoing, but seeing the pilot programs launch has been one of the highlights of my year. It's messy, it's challenging, and it doesn't always go according to plan but it's real progress. And frankly, that's more satisfying than any perfectly optimized algorithm.
                            </p>
                        </div>

                        <div className="pt-12 border-t border-black/5 flex justify-between items-end">
                            <div>
                                <h3 className="text-sm font-medium text-black uppercase tracking-widest mb-2">Status</h3>
                                <p className="text-sm text-gray-500">Ongoing Partnership</p>
                            </div>
                            <div className="text-right">
                                <Link href="/blog" className="text-sm text-black hover:text-black/60 transition-colors">
                                    More Stories &rarr;
                                </Link>
                            </div>
                        </div>
                    </Section>
                </main>
            </div>
        </div>
    );
}
