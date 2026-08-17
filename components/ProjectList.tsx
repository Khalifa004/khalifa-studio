"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
    name: string;
    price: string;
    description: string;
    image?: string;
    backgroundColor?: string;
    logoText?: string;
    logoFont?: string;
    href: string;
    role?: string;
    year?: string;
}

interface ProjectListProps {
    projects: Project[];
    className?: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, className }) => {
    return (
        <div className={cn("grid w-full grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16", className)}>
            {projects.map((project, index) => {
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative flex flex-col w-full"
                    >
                        <Link 
                            href={project.href} 
                            className="flex flex-col items-start gap-5"
                            target={project.href.startsWith('http') ? "_blank" : undefined}
                            rel={project.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                            {/* Visual Side (Image or Logo) */}
                            <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden rounded-[0.7rem] bg-[#ececea]">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    />
                                ) : (
                                    <div 
                                        className={cn("w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:scale-105", project.backgroundColor || "bg-[#F5F5DC]")}
                                    >
                                        <span className={cn("text-6xl md:text-7xl text-gray-900 tracking-tight", project.logoFont || "font-serif italic")}>
                                            {project.logoText || project.name}
                                        </span>
                                    </div>
                                )}

                                <div className="absolute right-4 top-4 flex h-9 w-9 -translate-y-1 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="flex w-full flex-col border-t border-black/[0.1] pt-4">
                                <div className="mb-3 flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-medium tracking-[-0.045em] text-gray-950 transition-colors group-hover:text-gray-500 md:text-3xl">
                                        {project.name}
                                    </h3>
                                    <span className="shrink-0 rounded-full bg-black/[0.05] px-3 py-1 text-xs text-gray-600">
                                        {project.price}
                                    </span>
                                </div>
                                
                                <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                                    {project.description}
                                </p>
                                {(project.role || project.year) && (
                                    <div className="flex items-center gap-2 mt-4 text-xs font-medium text-gray-400 tracking-wide uppercase">
                                        {project.role && <span>{project.role}</span>}
                                        {project.role && project.year && <span>•</span>}
                                        {project.year && <span>{project.year}</span>}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ProjectList;
