"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className={`px-5 py-2 overflow-hidden relative text-black font-secondary font-normal rounded-full md:text-xl text-sm flex flex-row items-center justify-center gap-x-3 transition-colors duration-300 ease-in-out ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-lime-500 transition-transform duration-500 ease-in-out"
        style={{ transform: isHovered ? "translateX(-100%)" : "translateX(0)" }}
      />
      <div
        className="absolute inset-0 bg-background transition-transform duration-500 ease-in-out"
        style={{ transform: isHovered ? "translateX(0)" : "translateX(100%)" }}
      />
      <span className="relative z-10">{children}</span>
      <motion.div
        className="relative z-10"
        animate={{ rotate: 45 }}
        transition={{ type: "spring", stiffness: 300, repeatType: "mirror", repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowRight size={20} />
      </motion.div>
    </motion.button>
  )
}