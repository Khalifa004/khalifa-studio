"use client";

import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    number: "01",
    title: "Creative UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces that enhance user experience and engagement across various digital platforms."
  },
  {
    number: "02",
    title: "Proficient Web Development",
    description: "Building robust, scalable web applications using modern technologies and best practices to deliver high-performance digital solutions."
  },
  {
    number: "03",
    title: "Responsive Design",
    description: "Creating adaptive layouts that provide seamless user experiences across all devices, from desktop to mobile, ensuring accessibility and usability."
  },
  {
    number: "04",
    title: "User-Centered Approach",
    description: "Prioritizing user needs and preferences in every aspect of design and development, resulting in products that truly resonate with the target audience."
  }
];

export function StrengthsSection() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-100 pb-8">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-6">
              My Strengths
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              These skills fuel my passion for crafting amazing digital experiences that leave a lasting impression.
            </p>
          </div>
          <div className="hidden md:block pb-1">
             <span className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-gray-200 text-xs font-medium uppercase tracking-widest text-gray-500">
              Personal Toolkit
            </span>
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-start"
            >
              <span className="text-5xl font-light text-gray-200 mb-6 group-hover:text-gray-900 transition-colors duration-500 font-mono tracking-tighter">
                {item.number}
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
