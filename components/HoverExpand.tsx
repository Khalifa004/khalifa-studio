"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  price: string;
  description: string;
  image: string;
  href: string;
}

interface HoverExpandProps {
  projects: Project[];
  className?: string;
}

const HoverExpand: React.FC<HoverExpandProps> = ({ projects, className }) => {
  const [activeProject, setActiveProject] = useState<number | null>(1);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleProjectClick = (index: number, e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault(); // Prevent navigation on first click
      if (expandedProject === index) {
        // Second click - navigate to the project
        window.location.href = projects[index].href;
      } else {
        // First click - expand the project
        setExpandedProject(index);
        setActiveProject(index);
      }
    } else {
      // Desktop behavior - direct navigation
      setActiveProject(index);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-7xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className={`flex w-full items-center justify-center gap-2 sm:gap-2 ${isMobile ? 'flex-col' : 'flex-row'} ${isMobile ? 'min-h-[32rem]' : 'min-h-[20rem] sm:min-h-[32rem]'}`}>
          {projects.map((project, index) => {
            const ProjectCard = (
              <motion.div
                className="relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl will-change-transform"
                style={{ transform: "translate3d(0, 0, 0)" }}
                initial={{ 
                  width: isMobile ? "100%" : "4rem", 
                  height: isMobile ? "4rem" : "28rem" 
                }}
                animate={{
                  width: isMobile 
                    ? "100%"
                    : (activeProject === index ? "28rem" : "6rem"),
                  height: isMobile 
                    ? (activeProject === index ? "12rem" : "4rem")
                    : "28rem",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={(e) => handleProjectClick(index, e)}
                onHoverStart={() => !isMobile && setActiveProject(index)}
              >
                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-black/60 to-transparent z-10"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute flex h-full w-full flex-col z-20 p-2 sm:p-4 ${
                        isMobile 
                          ? 'items-start justify-center' 
                          : 'items-end justify-end'
                      }`}
                    >
                      <p className={`text-xs text-white/70 mb-1 sm:mb-2 font-medium ${
                        isMobile ? 'text-left' : 'text-left'
                      }`}>
                        {project.price}
                      </p>
                      <h3 className={`text-white font-bold drop-shadow-lg mb-1 ${
                        isMobile 
                          ? 'text-sm sm:text-base text-left' 
                          : 'text-sm sm:text-lg text-right'
                      }`}>
                        {project.name}
                      </h3>
                      <p className={`text-white/90 drop-shadow-md ${
                        isMobile 
                          ? 'text-xs text-left' 
                          : 'text-xs sm:text-sm text-right'
                      }`}>
                        {project.description}
                      </p>
                      {isMobile && expandedProject === index && (
                        <p className="text-white/80 text-xs mt-2 font-medium">
                          Tap again to view project →
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={project.image}
                  className="size-full object-cover"
                  alt={project.name}
                />
              </motion.div>
            );

            return isMobile ? (
              ProjectCard
            ) : (
              <Link key={index} href={project.href}>
                {ProjectCard}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HoverExpand;
