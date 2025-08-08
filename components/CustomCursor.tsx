"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState(10)
  const [opacity, setOpacity] = useState(1)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches("a, button, [data-cursor='hover']")) {
        setSize(24)
        setOpacity(0.6)
      } else {
        setSize(10)
        setOpacity(1)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleHover)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleHover)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[1000] border-2 bg-black border-lime-500 rounded-full"
      animate={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        opacity,
        scale: isClicking ? 0.6 : 1,
        transform: "translate(-50%, -50%)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  )
}
