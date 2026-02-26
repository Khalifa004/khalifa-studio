"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Section {
    id: string;
    label: string;
}

interface CaseStudySidebarProps {
    sections: Section[];
}

export default function CaseStudySidebar({ sections }: CaseStudySidebarProps) {
    const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = sections[0].id;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3) {
                        currentSection = section.id;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Account for fixed header / spacing
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="sticky top-32 hidden lg:flex flex-col gap-8 w-64 pt-12 self-start h-[calc(100vh-8rem)]">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono">Contents</h3>

            <div className="relative pl-4 flex flex-col gap-6">
                {/* Progress Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/5">
                    <motion.div
                        className="absolute top-0 left-0 right-0 w-[1px] bg-black/30 origin-top"
                        style={{ scaleY }}
                    />
                </div>

                {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollTo(section.id)}
                            className={cn(
                                "relative text-left text-sm transition-all duration-300 font-medium",
                                isActive ? "text-gray-900 translate-x-1" : "text-gray-400 hover:text-gray-600 hover:translate-x-1"
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute -left-5 top-[0.4rem] w-2 h-2 rounded-full border-2 transition-all duration-300 bg-background",
                                    isActive ? "border-gray-900 scale-100 opcaity-100" : "border-transparent scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-75 group-hover:border-gray-400"
                                )}
                            />
                            {section.label}
                        </button>
                    );
                })}
            </div>

            {/* Decorative Pastel Blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-peach/20 blur-3xl rounded-full mix-blend-multiply opacity-50 z-[-1]" />
        </div>
    );
}
