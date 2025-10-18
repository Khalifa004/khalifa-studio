"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
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
        <div className="flex w-full items-center justify-center gap-2 min-h-[32rem]">
          {projects.map((project, index) => (
            <Link key={index} href={project.href}>
              <motion.div
                className="relative cursor-pointer overflow-hidden rounded-3xl will-change-transform"
                style={{ transform: "translate3d(0, 0, 0)" }}
                initial={{ width: "4rem", height: "28rem" }}
                animate={{
                  width: activeProject === index ? "28rem" : "6rem",
                  height: activeProject === index ? "28rem" : "28rem",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => setActiveProject(index)}
                onHoverStart={() => setActiveProject(index)}
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
                      className="absolute flex h-full w-full flex-col items-end justify-end p-4 z-20"
                    >
                      <p className="text-left text-xs text-white/70 mb-2 font-medium">
                        {project.price}
                      </p>
                      <h3 className="text-white text-lg font-bold text-right mb-1 drop-shadow-lg">
                        {project.name}
                      </h3>
                      <p className="text-white/90 text-sm text-right drop-shadow-md">
                        {project.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={project.image}
                  className="size-full object-cover"
                  alt={project.name}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HoverExpand;
