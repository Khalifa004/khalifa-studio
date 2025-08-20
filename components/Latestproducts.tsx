"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { StrengthsSection } from "./Strenghts";

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  href: string;
}

interface BlogPost {
  title: string;
  date: string;
  href: string;
}

const ProductItem: React.FC<{ product: Product }> = React.memo(({ product }) => (
  <Link href={product.href}>
    <motion.div
      className="group relative rounded-lg overflow-hidden backdrop-blur-xl border shadow-lg hover:shadow-2xl transition-all duration-500 h-full bg-[hsl(0,0%,98%)] border-white/30"
      variants={itemVariants}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0  group-hover:bg-black/10 transition-all duration-300" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{product.name}</h3>
          <span className="px-2 py-1 text-xs font-semibold rounded-full flex-shrink-0 text-gray-700 bg-gray-100">
            {product.price}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{product.description}</p>
      </div>
    </motion.div>
  </Link>
));

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
      name: "IntelliCourse",
      price: "Platform",
      description: "AI-powered platform that personalizes learning and fosters continuous growth.",
      image: "/images/intellicourse1.jpeg",
      href: "/allwork/Intellicourse",
    },
    {
      name: "Pomora",
      price: "App",
      description: "A productivity app focused on time management and task organization.",
      image: "/images/pomoramain2.png",
      href: "/allwork/Lapomora",
    },
    {
      name: "EchoBoard",
      price: "Tool",
      description: "A tool for creating and sharing interactive boards with AI-powered content.",
      image: "/images/Echoboard.png",
      href: "/allwork/echoboard",
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
      className="flex justify-center items-center flex-col w-full min-h-[160px] overflow-x-hidden bg-[hsl(0,0%,98%)]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-start gap-6 sm:gap-8 w-full max-w-7xl mx-auto py-6 sm:py-12">
        <section className="flex flex-col items-start justify-start gap-4 sm:gap-6 w-full">
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

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full">
            {products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
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

        <section className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex justify-between mb-2 sm:mb-4 w-full">
            <p className="text-xs sm:text-sm text-gray-600">Blogs</p>
            <Link href="/blog" className="text-xs sm:text-sm text-gray-800 hover:text-lime-600 transition-colors duration-300 cursor-pointer">
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mb-8 sm:mb-12">
            {latestBlogs.map((blog, index) => (
              <Link 
                key={index}
                className="flex Posts_hover__Vc6hP px-2 sm:px-4 bg-transparent rounded-lg transition-colors duration-300 relative group" 
                href={blog.href}
              >
                <div className="flex items-start relative">
                  <motion.div 
                    className="flex bg-gray-300 w-4 sm:w-6 h-[0.125rem] absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300" 
                    initial={{ rotate: 90 }} 
                    whileHover={{ rotate: 0 }} 
                  />
                  <motion.div 
                    className="ml-6 sm:ml-8 flex flex-col" 
                    whileHover={{ x: 10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h2 className="text-sm sm:text-base font-bold text-gray-800 pb-1 sm:pb-2">{blog.title}</h2>
                    <span className="text-xs text-gray-600">{blog.date}</span>
                  </motion.div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default LatestProducts;

