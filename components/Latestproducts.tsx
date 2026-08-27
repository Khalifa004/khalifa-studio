"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { StrengthsSection } from "./Strenghts";
import ProjectList from "./ProjectList";
import ArrowMark from "./ArrowMark";

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
      name: "Northstar",
      price: "Case Study",
      description: "A cutting-edge bullet train service that combines efficient transportation with immersive VR experiences.",
      image: "/images/norhtstars.png",
      href: "/allwork/thenorth",
    },
    {
      name: "Pith",
      price: "iOS App",
      description: "Pith distills your raw voice into structured insights completely offline. Designed to capture and organize your core ideas with privacy in mind.",
      image: "/images/pithnotelogo.png",
      href: "/allwork/pith",
    },
    {
      name: "byOne",
      price: "iOS App",
      description: "A local-first workout tracker for planning a real training week, logging focused gym sessions, and seeing progress clearly.",
      image: "/byOne-AppIcon-v2.svg",
      backgroundColor: "bg-[#F3E0CE]",
      href: "/allwork/byone",
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
      title: 'Building IntelliCourse: My Journey into AI-Powered Learning',
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
      className="relative flex w-full flex-col overflow-x-hidden bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative mx-auto flex w-full max-w-[90rem] flex-col gap-16 py-20 sm:py-28">
        <section className="flex w-full flex-col gap-6">
          <div className="flex justify-between items-center w-full">
            <motion.p
              className="text-sm text-gray-500"
              variants={itemVariants}
            >
              Latest Work
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="/allwork"
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-950 underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black"
              >
                See all work <ArrowMark className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="w-full">
            <ProjectList projects={products} />
          </div>
        </section>

        <StrengthsSection />
      </div>
    </motion.main>
  );
};

export default LatestProducts;
