"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { StrengthsSection } from "./Strenghts";
import ProjectList from "./ProjectList";

interface Product {
  name: string;
  price: string;
  description: string;
  image?: string;
  backgroundColor?: string;
  logoText?: string;
  logoFont?: string;
  href: string;
}

interface BlogPost {
  title: string;
  date: string;
  href: string;
}


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
};

const LatestProducts: React.FC = () => {
  const products: Product[] = [
    {
      name: "Orin",
      price: "Mac App",
      description: "A Mac app that turns the notch into a lightweight memory layer for work, letting you capture notes, tasks, links, and context instantly across apps and websites.",
      backgroundColor: "bg-[#F3EFE7]",
      logoText: "Orin",
      logoFont: "font-comfortaa font-bold",
      href: "https://orin.khalifa.studio/",
    },
    {
      name: "Pith",
      price: "iOS App",
      description: "Pith distills your raw voice into structured insights completely offline. Designed to capture and organize your core ideas with privacy in mind.",
      image: "/images/pithnotelogo.png",
      href: "https://pith.khalifa.studio/",
    },
    {
      name: "Northstar",
      price: "Case Study",
      description: "A cutting-edge bullet train service that combines efficient transportation with immersive VR experiences.",
      image: "/images/norhtstars.png",
      href: "/allwork/thenorth",
    },
    {
      name: "IntelliCourse",
      price: "Platform",
      description: "AI-powered platform that personalizes learning and fosters continuous growth.",
      image: "/images/intellicourse1.jpeg",
      href: "/allwork/Intellicourse",
    },
  ];

  // Centralized blog data - same as in app/blog/page.tsx
  const allBlogPosts: BlogPost[] = [
    {
      title: 'Building IntelliCourse — My Journey into AI-Powered Learning',
      date: 'August 08, 2025',
      href: '/blog/building-intellicourse',
    },
    {
      title: 'The Evolution of My Career Through AI Innovation',
      date: 'July 13, 2024',
      href: '/blog/new-milestone-in-my-career',
    },
    {
      title: 'Navigating the Digital Futures: My Journey Through OCAD University and Self-Taught Coding',
      date: 'December 19, 2023',
      href: '/blog/OCADJourney',
    },
    {
      title: 'Harnessing Framer Motion for Dynamic Web Experiences',
      date: 'September 09, 2023',
      href: '/blog/Framermotion',
    },
    {
      title: 'My Pomodoro Journey: Creating Pomora',
      date: 'November 09, 2024',
      href: '/blog/pomora',
    },
  ];

  // Sort blogs by date (latest first) and take the first 2
  const latestBlogs = allBlogPosts
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 2);

  return (
    <motion.main
      className="relative flex justify-center items-center flex-col w-full min-h-[160px] overflow-x-hidden bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gray-50 opacity-30" />
      <div className="absolute inset-0" />
      <div className="relative flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-12 z-10">
        <section className="flex flex-col items-start justify-start gap-3 sm:gap-4 md:gap-6 w-full">
          <div className="flex justify-between items-center w-full">
            <motion.p
              className="text-sm sm:text-base font-medium text-gray-900"
              variants={itemVariants}
            >
              Latest Work
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="/allwork"
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                See all work →
              </Link>
            </motion.div>
          </div>

          <div className="w-full mt-8 md:mt-12">
            <ProjectList projects={products} />
          </div>
        </section>

        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"
          variants={itemVariants}
        />

        <StrengthsSection />

        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"
          variants={itemVariants}
        />


      </div>
    </motion.main>
  );
};

export default LatestProducts;

