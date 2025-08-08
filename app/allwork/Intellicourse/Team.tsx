import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Intelliteam: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 py-12">
           {/* Hero Section with 3D Logo */}
           <motion.section
        className="flex flex-col md:flex-row items-center justify-between py-20 px-6 gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-lg">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            AI-Powered Learning, Reimagined
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
           IntelliCourse offer accessible learning for everyone using AI technology. A diverse range of AI-generated courses for learners of all levels, providing interactive learning experiences and real-world applications.

Gain skills and test your learning progress with course assignments, IntelliCourse would take care of the rest! Providing grades and feedbacks even on your presentation video assignment!
          </motion.p>


          <motion.div 
            className="w-full aspect-video mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ICNjiz6oBOc"
              title="IntelliCourse Pitch Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <a href="https://www.intellicourse.ca/" target="_blank" rel="noopener noreferrer">
  <Button className='bg-black font-semibold rounded-3xl text-[#18ACFE] hover:bg-[#18ACFE] hover:text-black' size="lg">View Website</Button>
</a>

          </motion.div>
        </div>
        <motion.div
  className="relative w-full max-w-md aspect-square bg-muted rounded-lg overflow-hidden shadow-lg"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.5 }}
>
  <Image 
    src="/images/intellicourse1.jpeg" 
    alt="IntelliCourse hero"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
</motion.div>

      </motion.section>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-2 bg-[#18ACFE]"></div>
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-gray-800 flex items-center justify-between">
                Team Structure
                <Badge variant="secondary" className="bg-[#18ACFE] text-white">6 Members</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our current team includes two designers and four software developers, working collaboratively to bring innovative solutions to life.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-2 bg-[#18ACFE]"></div>
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-gray-800">My Roles & Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                As the front-end developer and Interactive Designer for our startup, I play a crucial role in bringing our product to life through code and design. My responsibilities span across various aspects of our product development process.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#18ACFE]">Core Responsibilities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#18ACFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Develop and maintain front-end architecture
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#18ACFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Implement user interface designs
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#18ACFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Create interactive designs
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#18ACFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Ensure responsive and cross-browser compatibility
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#18ACFE]">Specialized Focus</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#18ACFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      User interface components
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#18ACFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Interactive prototypes
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#18ACFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Implementation of design systems
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#18ACFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Performance optimization
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                In our small team, I work closely with our product designers and back-end developers to ensure a seamless integration of design and functionality. My focus on interactive design helps create engaging user experiences that set our product apart in the market.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Intelliteam

