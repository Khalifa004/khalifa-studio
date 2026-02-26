"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
    name: string;
    price: string;
    description: string;
    image: string;
    href: string;
}

interface MasonryGridProps {
    projects: Project[];
    className?: string;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ projects, className }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12", className)}>
            {projects.map((project, index) => {
                // Offset the even items downwards to create the masonry stagger on desktop
                const isOffset = index % 2 !== 0 && !isMobile;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className={cn("group relative flex flex-col", isOffset ? "sm:mt-24" : "")}
                    >
                        <Link href={project.href} className="flex flex-col gap-4">
                            <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/5] bg-gray-100 border border-black/5">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                                />

                                {/* Overlay hover effect */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Expand icon appearing on hover */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-sm">
                                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                                </div>
                            </div>

                            <div className="flex flex-col px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif italic text-2xl md:text-3xl text-gray-900 group-hover:text-black transition-colors">
                                        {project.name}
                                    </h3>
                                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-gray-500 mt-2 px-2 py-1 rounded-sm bg-gray-100 border border-black/5">
                                        {project.price}
                                    </span>
                                </div>
                                <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed max-w-sm">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default MasonryGrid;
