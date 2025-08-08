"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, BarChart2, CheckSquare, Smartphone, Search, Pencil, TestTube, X } from 'lucide-react'
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

export default function Page() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[hsl(0,0%,98%)] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center text-green-600 text-sm font-medium">
            <span className="size-2 bg-lime-600 rounded-full mr-2" />
            Project Journey
          </span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Project Development Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Embark on an innovative odyssey from concept to reality
          </motion.p>
        </div>

        {/* Main Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Research & Planning Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-100 border-gray-200 p-6 h-full">
              <div className="space-y-4">
                <motion.div
                  className="relative w-full h-40 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setEnlargedImage("/placeholder.svg?height=160&width=320")}
                >
                  <Image src="/placeholder.svg?height=160&width=320" alt="Research & Planning" layout="fill" objectFit="cover" />
                </motion.div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-white shadow">
                    <Search className="size-5 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">01</span>
                      <h2 className="text-xl font-semibold text-gray-900">Research & Planning</h2>
                    </div>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Analyzed competitor products</li>
                      <li>• Defined project scope and key features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Design Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-100 border-gray-200 p-6 h-full">
              <div className="space-y-4">
                <motion.div
                  className="relative w-full h-40 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setEnlargedImage("/placeholder.svg?height=160&width=320")}
                >
                  <Image src="/placeholder.svg?height=160&width=320" alt="Design" layout="fill" objectFit="cover" />
                </motion.div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-white shadow">
                    <Pencil className="size-5 text-teal-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">02</span>
                      <h2 className="text-xl font-semibold text-gray-900">Design</h2>
                    </div>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Sketched initial concepts and ideas</li>
                      <li>• Created low-fidelity wireframes</li>
                      <li>• Developed color scheme and typography system</li>
                      <li>• Designed high-fidelity mockups using Figma</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Testing & Deployment Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-100 border-gray-200 p-6 h-full">
              <div className="space-y-4">
                <motion.div
                  className="relative w-full h-40 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src="/images/vercel.png" alt="Testing & Deployment" layout="fill" objectFit="contain" />
                </motion.div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-white shadow">
                    <TestTube className="size-5 text-yellow-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">03</span>
                      <h2 className="text-xl font-semibold text-gray-900">Testing & Deployment</h2>
                    </div>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Conducted thorough unit testing</li>
                      <li>• Performed integration testing</li>
                      <li>• Carried out end-to-end testing</li>
                      <li>• Conducted performance testing and optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: Clock, title: "Intuitive Timer", description: "Circular progress indicator with color psychology for enhanced focus." },
            { icon: BarChart2, title: "Insightful Analytics", description: "Visualizations of productivity data to track your progress over time." },
            { icon: CheckSquare, title: "Task Management", description: "Integrated to-do list for better organization and task tracking." },
            { icon: Smartphone, title: "Sync Across Devices", description: "Seamless experience on all your devices for productivity on the go." }
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-100 border-gray-200 p-6 h-full">
                <motion.div
                  className="flex items-center justify-center size-10 rounded-full bg-white shadow mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <feature.icon className="size-5 text-lime-600" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
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
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full aspect-video"
            >
              <Image src={enlargedImage} alt="Enlarged view" layout="fill" objectFit="contain" />
              <button
                onClick={() => setEnlargedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-lime-600 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
