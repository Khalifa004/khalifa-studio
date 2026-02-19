"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, BarChart2, CheckSquare, Smartphone, Search, Pencil, TestTube, X, ChevronRight } from 'lucide-react'
import Image from "next/image"

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
  <div className={`relative p-8 rounded-2xl bg-gray-50/50 border border-black/[0.03] hover:border-black/[0.08] transition-colors duration-500 h-full ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default function EnhancedProjectDevelopmentProcess() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  return (
    <div className="w-full text-gray-600 font-sans">
      <div className="w-full space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-black/5 bg-background/50 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Project Journey</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: organicEase }}
            className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight"
          >
            Development Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto font-light"
          >
            From initial research to final deployment, every step is calculated.
          </motion.p>
        </div>

        {/* Main Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {/* Research & Planning Card */}
          <motion.div variants={itemVariants} className="h-full">
            <Card>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">01</span>
                <Search className="size-5 text-gray-900" />
              </div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Research</h2>

              <div className="relative w-full h-40 rounded-lg overflow-hidden cursor-pointer border border-black/5 mb-6 group" onClick={() => setEnlargedImage("/placeholder.svg?height=160&width=320")}>
                <Image src="/placeholder.svg?height=160&width=320" alt="Research & Planning" layout="fill" objectFit="cover" className="transition-transform duration-700 group-hover:scale-105" />
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-500">
                  <ChevronRight className="w-4 h-4 text-gray-300 mt-0.5" />
                  <span>Analyzed competitor products</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-500">
                  <ChevronRight className="w-4 h-4 text-gray-300 mt-0.5" />
                  <span>Defined scope & key features</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Design Card */}
          <motion.div variants={itemVariants} className="h-full">
            <Card>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">02</span>
                <Pencil className="size-5 text-gray-900" />
              </div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Design</h2>

              <div className="relative w-full h-40 rounded-lg overflow-hidden cursor-pointer border border-black/5 mb-6 group" onClick={() => setEnlargedImage("/placeholder.svg?height=160&width=320")}>
                <Image src="/placeholder.svg?height=160&width=320" alt="Design" layout="fill" objectFit="cover" className="transition-transform duration-700 group-hover:scale-105" />
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-500">
                  <ChevronRight className="w-4 h-4 text-gray-300 mt-0.5" />
                  <span>Low-fidelity wireframing</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-500">
                  <ChevronRight className="w-4 h-4 text-gray-300 mt-0.5" />
                  <span>High-fidelity Figma mockups</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Testing & Deployment Card */}
          <motion.div variants={itemVariants} className="h-full">
            <Card>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">03</span>
                <TestTube className="size-5 text-gray-900" />
              </div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Deploy</h2>

              <div className="relative w-full h-40 rounded-lg overflow-hidden cursor-pointer border border-black/5 mb-6 group">
                <Image src="/images/vercel.png" alt="Testing & Deployment" layout="fill" objectFit="contain" className="p-4 transition-transform duration-700 group-hover:scale-105" />
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-500">
                  <ChevronRight className="w-4 h-4 text-gray-300 mt-0.5" />
                  <span>Integration testing</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-500">
                  <ChevronRight className="w-4 h-4 text-gray-300 mt-0.5" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </motion.div>

      </div>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
            className="fixed inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-video bg-background rounded-2xl shadow-2xl overflow-hidden border border-black/5"
            >
              <Image src={enlargedImage} alt="Enlarged view" layout="fill" objectFit="contain" />
              <button
                onClick={() => setEnlargedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <X size={20} className="text-gray-900" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
