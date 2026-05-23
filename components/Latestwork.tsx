'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ProjectList from './ProjectList';

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

const projects: Project[] = [
  {
    name: "Pomora",
    price: "Platform",
    description: "Boost your productivity with my intelligent Pomodoro Timer.",
    image: "/images/pomoramain2.png",
    href: "/allwork/Lapomora",
    role: "Front-end + UI",
    year: "2024",
  },
  {
    name: "IntelliCourse",
    price: "Platform",
    description: "AI-powered platform that personalizes learning and fosters continuous growth.",
    image: "/images/intellicourse1.jpeg",
    href: "/allwork/Intellicourse",
    role: "Product design + Front-end",
    year: "2024",
  },
  {
    name: "NorthStar",
    price: "UX/UI design",
    description: "Innovation Project",
    image: "/images/Northstars.png",
    href: "/allwork/thenorth",
    role: "UI/UX",
    year: "2024",
  },
  {
    name: "Orin",
    price: "Mac App",
    description: "A lightweight memory layer for work.",
    backgroundColor: "bg-[#F3EFE7]",
    logoText: "Orin",
    logoFont: "font-comfortaa font-bold",
    href: "https://orin.khalifa.studio/",
    role: "Development + UI",
    year: "2024",
  },
  {
    name: "Pith",
    price: "iOS App",
    description: "Pith distills your raw voice into structured insights completely offline. Designed to capture and organize your core ideas with privacy in mind.",
    image: "/images/pithnotelogo.png",
    href: "https://pith.khalifa.studio/",
    role: "Development + UI",
    year: "2024",
  },
];

const LatestWork: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 pt-16 sm:pt-20 md:pt-32 bg-background flex flex-col items-center">
      {/* Header */}
      <motion.div
        className="flex flex-col items-start justify-start max-w-7xl w-full mx-auto mb-12 sm:mb-16"
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

      {/* Projects Grid Container aligned to max-w-7xl */}
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-4">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default LatestWork;

