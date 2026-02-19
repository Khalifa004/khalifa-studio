"use client"

import { useState } from "react"


import Image from "next/image"
import Link from "next/link"
import DynamicFrameLayout from "@/components/ui/DynamicFrameLayout"

export default function Home() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size

  return (
    <div
      className={`min-h-screen mt-36  flex items-center justify-center p-8  `}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={`text-4xl md:text-6xl font-light italic text-black/80 tracking-tighter leading-[130%]`}
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
              Graphics
              <br />
              and
              <br />
              3D Art
            </h1>
            <div
              className={` flex flex-col gap-12 text-black/50 text-sm font-light max-w-[300px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-black/10 w-full" />
                <p>
                  My work as a graphic designer blends visual storytelling with creative problem-solving. Whether it's branding,
                  digital design, or immersive 3D models, I explore different aspects of design to push creativity and bring ideas to life.
                </p>
                <p>
                  From bold graphics to intricate 3D compositions, I experiment with form, color, and motion to create impactful visuals.
                  My process involves a mix of traditional design principles and modern techniques, allowing me to craft unique and engaging experiences.
                </p>
                <p>Here are some of my favorite works so far.</p>
                <div className="h-px bg-background/10 w-full" />
              </div>

            </div>

          </div>

        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}

