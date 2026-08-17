"use client";

import { motion } from "framer-motion";

interface MethodProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  delay: number;
}

function MethodItem({ category, title, description, tags, delay }: MethodProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col space-y-4 border-t border-gray-200 pt-8"
    >
      <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">{category}</span>
      <h3 className="text-2xl font-medium text-gray-900 tracking-tight">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-light">{description}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-gray-50 text-xs font-medium text-gray-600 rounded-full tracking-wide">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function MyStrengths() {
  const methods = [
    {
      category: "Foundation",
      title: "User Psychology",
      description: "Interfaces grounded in behavioral science to drive engagement. Prioritizing user needs to create products that truly resonate.",
      tags: ["User Research", "Interaction Design", "Accessibility"],
      delay: 0.1
    },
    {
      category: "Engineering",
      title: "Robust Architecture",
      description: "Building scalable, high-performance web applications. Clean code structures that ensure long-term maintainability and speed.",
      tags: ["React / Next.js", "TypeScript", "Performance"],
      delay: 0.2
    },
    {
      category: "Experience",
      title: "Visual Systems",
      description: "Crafting intuitive and aesthetically pleasing design languages. Focusing on pixel-perfect details and coherent style guides.",
      tags: ["Design Systems", "Motion", "Typography"],
      delay: 0.3
    },
    {
      category: "Adaptability",
      title: "Responsive Logic",
      description: "Creating fluid layouts that provide seamless experiences across all devices. Ensuring content is accessible anywhere.",
      tags: ["Mobile First", "Adaptive Layouts", "Cross-browser"],
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">[02] / Methodology</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900">
              Core Competencies
            </h2>
          </div>
          <div className="mb-2">
            <p className="text-gray-500 text-sm tracking-wide uppercase">Evidence-Based Design</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {methods.map((method, index) => (
            <MethodItem key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
}
