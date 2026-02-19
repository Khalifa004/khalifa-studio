"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Zap, Palette, Gauge, Maximize2, Type, Sliders, Cpu, Network, Layers, ChartBarIcon } from 'lucide-react'
import Image from "next/image"

// --- Design Tokens ---
const organicEase = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: organicEase } }
}

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative p-8 rounded-2xl bg-background border border-black/[0.03] hover:border-black/[0.08] transition-colors duration-500 h-full ${className}`}>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const sections = [
  {
    title: "Scope & Features",
    icon: Zap,
    items: [
      { icon: Maximize2, title: "Scope", description: "Defined boundaries and objectives." },
      { icon: Layers, title: "Features", description: "Prioritized essential functionalities." },
      { icon: Network, title: "Integration", description: "Mapped data flow and API points." },
    ]
  },
  {
    title: "Design System",
    icon: Palette,
    items: [
      { icon: Palette, title: "Color", description: "Accessible, cohesive palette." },
      { icon: Type, title: "Typography", description: "Clear typographic hierarchy." },
      { icon: Sliders, title: "Components", description: "Reusable UI component library." },
    ]
  },
  {
    title: "Performance",
    icon: Gauge,
    items: [
      { icon: Cpu, title: "Speed", description: "Optimized time-to-interactive." },
      { icon: Gauge, title: "Fluidity", description: "Smooth 60fps interactions." },
      { icon: Layers, title: "Bundling", description: "Efficient code splitting." },
    ]
  },
]

export default function Pomoraprocess2() {

  return (
    <div className="w-full text-gray-600 font-sans">
      <div className="w-full space-y-24">

        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-black/5 bg-background/50 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Deep Dive</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: organicEase }}
            className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight"
          >
            System Architecture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto font-light"
          >
            A closer look at the structural decisions behind Pomora.
          </motion.p>
        </div>

        {/* Flow Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: organicEase }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 border-b border-black/5 pb-4">
            <ChartBarIcon className="text-gray-900" size={20} />
            <h3 className="text-xl font-medium text-gray-900">User Flow</h3>
          </div>

          <div className="rounded-2xl border border-black/5 overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow duration-500">
            <picture>
              <source srcSet="/images/Pomoraflowchart.png" media="(min-width: 1024px)" />
              <source srcSet="/images/Pomoraflowchart.png" media="(min-width: 768px)" />
              <img
                src="/images/Pomoraflowchart.png"
                alt="Flow Chart"
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </picture>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 border-b border-black/5 pb-4">
              <section.icon className="text-gray-900" size={20} />
              <h2 className="text-xl font-medium text-gray-900">{section.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <motion.div key={itemIndex} variants={itemVariants}>
                  <Card>
                    <div className="mb-4 text-gray-400">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-gray-900 font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Design System Special Section */}
            {section.title === "Design System" && (
              <div className="grid md:grid-cols-2 gap-6 pt-8">
                <Card className="bg-background">
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Palette</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {["#4CAF50", "#FFFFFF", "#F5F5F5", "#333333"].map((c, i) => (
                      <div key={i} className="space-y-2">
                        <div className="w-full aspect-square rounded-lg border border-black/5 shadow-sm" style={{ backgroundColor: c }} />
                        <div className="text-[10px] text-gray-400 font-mono">{c}</div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card className="bg-background">
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Typography</h4>
                  <div className="space-y-4">
                    <div className="text-4xl font-medium text-gray-900">Aa</div>
                    <div className="space-y-1">
                      <p className="text-gray-900 font-medium">Poppins</p>
                      <p className="text-xs text-gray-500">Geometric Sans Serif</p>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span>Light 300</span>
                      <span>Regular 400</span>
                      <span>Medium 500</span>
                      <span>Bold 700</span>
                    </div>
                  </div>
                </Card>
              </div>
            )}

          </motion.div>
        ))}
      </div>
    </div>
  )
}
