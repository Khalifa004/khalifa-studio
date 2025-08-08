"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Palette, Gauge, Maximize2, Type, Sliders, Cpu, Network, Layers, X, ZapOff, ChartBarIcon } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
}

const colorPalette = [
  { name: "Primary", color: "#4CAF50" },
  { name: "Background", color: "#FFFFFF" },
  { name: "Surface", color: "#F5F5F5" },
  { name: "Text", color: "#333333" },
]

const typographyStyles = [
  { name: "Heading 1", size: "text-4xl md:text-6xl", weight: "font-bold" },
  { name: "Heading 2", size: "text-3xl md:text-5xl", weight: "font-semibold" },
  { name: "Heading 3", size: "text-2xl md:text-4xl", weight: "font-medium" },
  { name: "Body", size: "text-base", weight: "font-normal" },
  { name: "Caption", size: "text-sm", weight: "font-light" },
]

const sections = [
  {
    title: "Project Scope and Features",
    icon: Zap,
    color: "#FF6B6B",
    image: "/placeholder.svg?height=160&width=320",
    items: [
      { icon: Maximize2, title: "Comprehensive Scope", description: "Defined clear project boundaries and objectives" },
      { icon: Layers, title: "Key Features", description: "Identified and prioritized essential functionalities" },
      { icon: Network, title: "Integration Points", description: "Mapped out system integrations and data flow" },
    ]
  },
  {
    title: "Design System",
    icon: Palette,
    color: "#4ECDC4",
    image: "/placeholder.svg?height=160&width=320",
    items: [
      { icon: Palette, title: "Color Scheme", description: "Developed a cohesive and accessible color palette" },
      { icon: Type, title: "Typography", description: "Established a clear typographic hierarchy and font selection" },
      { icon: Sliders, title: "Component Library", description: "Created a reusable set of UI components" },
    ]
  },
  {
    title: "Performance Optimization",
    icon: Gauge,
    color: "#FFA400",
    items: [
      { icon: Cpu, title: "Load Time Optimization", description: "Improved initial page load and time to interactive" },
      { icon: Gauge, title: "Responsiveness", description: "Enhanced UI responsiveness and smooth interactions" },
      { icon: Layers, title: "Code Splitting", description: "Implemented efficient code splitting and lazy loading" },
    ]
  },
]

export default function Pomoraprocess2() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[hsl(0,0%,98%)] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center text-green-600 text-sm font-medium">
            <span className="size-2 bg-green-600 rounded-full mr-2" />
            Project Insights
          </span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Detailed Project Overview
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Explore the key aspects of our project development process
          </motion.p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <ChartBarIcon className="text-green-600" size={24} />
            <h3 className="text-3xl font-semibold text-gray-900">Flow Chart</h3>
          </div>
          
          <picture>
            <source srcSet="/images/Pomoraflowchart.png" media="(min-width: 1024px)" />
            <source srcSet="/images/Pomoraflowchart.png" media="(min-width: 768px)" />
            <img 
              src="/images/Pomoraflowchart.png" 
              alt="Flow Chart" 
              className="w-full h-auto"
            />
          </picture>
        </div>

        {/* Sections */}
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <section.icon className="text-lime-600" size={32} />
              {section.title}
            </motion.h2>
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-100 border-gray-200 p-6">
                <div className="flex grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.div key={itemIndex} variants={itemVariants} className="bg-white bg-opacity-70 p-4 rounded-lg shadow">
                        <div className="flex items-center gap-3 mb-2">
                          <item.icon className="text-lime-600" size={24} />
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Design System Details */}
            {section.title === "Design System" && (
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-gray-900 mt-8">
                  Color Palette
                </motion.h3>
                <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {colorPalette.map((color, index) => (
                    <div key={index} className="space-y-2">
                      <div className="w-full aspect-square rounded-lg shadow-lg" style={{ backgroundColor: color.color }} />
                      <p className="text-gray-900 text-sm font-medium">{color.name}</p>
                      <p className="text-gray-600 text-xs">{color.color}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-gray-900 mt-8">
                  Typography, Font: Poppins 
                </motion.h3>
                <motion.div variants={itemVariants} className="space-y-4">
                  {typographyStyles.map((style, index) => (
                    <div key={index} className="bg-gray-200 p-4 rounded-lg">
                      <p className={`${style.size} ${style.weight} text-gray-900`}>
                        {style.name}
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Size: {style.size}, Weight: {style.weight}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
