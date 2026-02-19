'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  name: string;
  price: string;
  description: string;
  image: string;
  url: string;
  role?: string;
  year?: string;
}

const projects: Project[] = [
  {
    name: "Pomora",
    price: "Platform",
    description: "Boost your productivity with my intelligent Pomodoro Timer.",
    image: "/images/pomoramain2.png",
    url: "/allwork/Lapomora",
    role: "Front-end + UI",
    year: "2024",
  },
  {
    name: "IntelliCourse",
    price: "Platform",
    description: "AI-powered platform that personalizes learning and fosters continuous growth.",
    image: "/images/intellicourse1.jpeg",
    url: "/allwork/Intellicourse",
    role: "Product design + Front-end",
    year: "2024",
  },
  {
    name: "EchoBoard",
    price: "Platform",
    description: "A unified workspace that blends real‑time chat, AI assistance, interactive whiteboards, and personal journaling.",
    image: "/images/Echoboard.png",
    url: "/allwork/echoboard",
    role: "Front-end + UI",
    year: "2025",
  },
  {
    name: "NorthStar",
    price: "UX/UI design",
    description: "Innovation Project",
    image: "/images/Northstars.png",
    url: "/allwork/thenorth",
    role: "UI/UX",
    year: "2024",
  },

];

const LatestWork: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 pt-16 sm:pt-20 md:pt-32 bg-background">
      {/* Header */}
      <motion.div
        className="flex flex-col items-start justify-start max-w-[840px] w-full mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-start gap-2 p-2 sm:p-4">
          <motion.div
            className="flex items-center justify-center h-min bg-neutral-100 border border-neutral-200 rounded-full px-2 py-1 sm:px-3 sm:py-1.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-neutral-800 text-xs sm:text-sm font-semibold">Work</span>
          </motion.div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 pl-2 sm:pl-4">Here you will See</h2>
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600 mb-4 sm:mb-6 pl-2 sm:pl-4">My latest projects.</p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 w-full">
        {projects.map((project: Project) => {
          const ProjectCard = (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              role="article"
              aria-label={`Project: ${project.name}`}
            >
              <div className="relative overflow-hidden aspect-video">
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={`${project.name} project thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-50"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg"
                    >
                      {project.name}
                    </motion.h3>
                    <motion.p
                      className="text-sm sm:text-base mb-2 sm:mb-4 text-gray-100 drop-shadow-md"
                    >
                      {project.description}
                    </motion.p>
                    <div className="flex gap-2 text-xs text-gray-200">
                      {project.role && <span className="opacity-90">{project.role}</span>}
                      {project.year && <span className="opacity-60">· {project.year}</span>}
                    </div>
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.span
                      className="px-2 sm:px-3 py-1 bg-background/30 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white font-medium shadow-md"
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.price}
                    </motion.span>
                    <div className="flex items-center gap-1 sm:gap-2 text-white">
                      <span className="text-xs sm:text-sm font-medium">View Project</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );

          return (
            <div key={project.name}>
              {project.url.startsWith('http') ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  {ProjectCard}
                </a>
              ) : (
                <Link href={project.url}>
                  {ProjectCard}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestWork;

