"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface StrengthProps {
  name: string
  description: string
  proficiency: number
}

function Strength({ name, description, proficiency }: StrengthProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <Progress value={proficiency} className="h-2 w-full bg-gray-200" />
    </div>
  )
}

export default function MyStrengths() {
  const strengths = [
    {
      name: "Creative UI/UX Design",
      description: "Crafting intuitive and visually appealing user interfaces that enhance user experience and engagement across various digital platforms.",
      proficiency: 90,
    },
    {
      name: "Proficient Web Development",
      description: "Building robust, scalable web applications using modern technologies and best practices to deliver high-performance digital solutions.",
      proficiency: 85,
    },
    {
      name: "Responsive Design",
      description: "Creating adaptive layouts that provide seamless user experiences across all devices, from desktop to mobile, ensuring accessibility and usability.",
      proficiency: 80,
    },
    {
      name: "User-Centered Approach",
      description: "Prioritizing user needs and preferences in every aspect of design and development, resulting in products that truly resonate with the target audience.",
      proficiency: 95,
    },
  ]

  return (
    <div className="min-h-screen bg-[hsl(0,0%,98%)] p-6 flex items-center justify-center">
      <Card className="w-full max-w-3xl bg-gray-100 border-gray-200 shadow-md">
        <CardHeader className="pb-0">
          <div className="text-sm font-medium text-gray-600 mb-2">[02] — Skills & Expertise</div>
          <CardTitle className="text-4xl font-bold tracking-tight text-gray-800">
            My Strengths
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {strengths.map((strength, index) => (
            <Strength key={index} {...strength} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
