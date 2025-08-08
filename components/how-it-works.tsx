import React from 'react'
import { ArrowRight, TypeIcon as type, LucideIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Step {
  icon: LucideIcon
  title: string
  description: string
  bulletPoints: string[]
}

interface HowItWorksProps {
  title: string
  subtitle: string
  steps: Step[]
  ctaText: string
  onCtaClick: () => void
}

export function HowItWorks({ title, subtitle, steps, ctaText, onCtaClick }: HowItWorksProps) {
  return (
    <section className="bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
            <ArrowRight className="text-white w-3 h-3" />
          </div>
          <span className="text-red-500 font-medium">NorthStar: Revolutionizing Transportation</span>
        </div>
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            {title}
          </h2>
          <h2 className="text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            {subtitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-100 rounded-3xl p-8 flex items-start gap-6 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-red-500" />
              </div>
              <div className="space-y-4">
                <h3 className="text-gray-800 text-2xl font-medium flex items-center gap-2">
                  <span className="text-red-500">0{index + 1}</span>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {step.bulletPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-600 text-lg">
                      <span className="text-red-500">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
