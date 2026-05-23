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
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full", className)}>
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
                            className="flex flex-col gap-6 items-start hover:bg-gray-50/50 p-4 md:p-6 rounded-3xl transition-colors duration-500"
                            target={project.href.startsWith('http') ? "_blank" : undefined}
                            rel={project.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                            {/* Visual Side (Image or Logo) */}
                            <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/3] bg-gray-100 border border-black/5 flex-shrink-0">
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

                                {/* Overlay hover effect */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Expand icon appearing on hover on desktop */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-sm">
                                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="flex flex-col w-full pt-2">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-gray-900 group-hover:text-black transition-colors">
                                        {project.name}
                                    </h3>
                                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-gray-500 px-3 py-1.5 rounded-sm bg-gray-100 border border-black/5">
                                        {project.price}
                                    </span>
                                </div>
                                
                                <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
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
