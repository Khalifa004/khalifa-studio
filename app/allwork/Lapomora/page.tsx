'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LogoMarquee } from '@/components/logoroulette';
import { BarChart, Clock, CheckSquare, Smartphone } from 'lucide-react'
import ProjectHeader from '@/components/project-header';
import Dashboard from '@/components/3grid';
import { AnimatedSection } from '@/components/animated-section';
import EnhancedProjectDevelopmentProcess from '@/components/pomoraprocess';
import Pomoraprocess2 from '@/components/pomoraprocess2';


const Page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-20 bg-[hsl(0,0%,98%)]">
  <ProjectHeader 
         title="Pomora"
         description="Boost your productivity with my intelligent Pomodoro Timer."
         type="Personal Project"
         timeframe="61 days"
         toolkit="Next.js, React, TailwindCSS, Figma" 
         year={'2024'}      
       />
 

      {/* Hero Section */}
      <AnimatedSection className="flex flex-col lg:flex-row justify-center lg:justify-center items-center gap-8 min-h-[50vh] mt-12 lg:mt-24">

        {/* Left Side UI */}
        <motion.div 
          className="mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            <Image
              src="/images/progresscard.png"
              alt="Phone Interface"
              width={300}
              height={600}
              className="rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(74,159,124,0.5)] max-w-full h-auto"
            />
            <span className="absolute -left-4 top-4 bg-[#0cff9a] text-white text-xs sm:text-sm px-2 sm:px-4 py-1 rounded-full shadow-md">
              Progress Tracker
            </span>
          </div>
        </motion.div>

        {/* Center Content */}
        <div className="flex flex-col justify-center items-center text-center  max-w-md mx-auto lg:mx-0">
        <motion.h1 
  className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4b5563] to-[#1f2937] p-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  Get a hold of <br /> your time
</motion.h1>

          <motion.p 
            className="text-[#7d7f78] mt-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            The Pomodoro Platform is a sophisticated productivity tool I designed to help users manage their time effectively using the Pomodoro Technique. This project showcases the power of modern web technologies combined with thoughtful UX/UI design.
          </motion.p>
          <motion.button 
  className="w-[145px] h-[50px] outline-none border-none cursor-pointer px-[26px] rounded-[40px] text-[15px] font-[500] leading-[1em] bg-[#dffd00] text-[#0d0d0d] shadow-[rgba(221,255,0,0.2)_0px_20px_35px] mt-4 mb-8 transition-all duration-300 hover:shadow-[rgba(221,255,0,0.4)_0px_25px_40px] hover:scale-105 hover:bg-black hover:text-white"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.open('https://pomora.app', '_blank')}
>
  Try it Today
</motion.button>


        </div>

        {/* Right Side UI */}
        <motion.div 
          className="flex flex-col gap-4 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-4">
            <div className="group relative">
              <span className="absolute -left-4 top-4 bg-[#8e04ff] text-white text-xs sm:text-sm px-2 sm:px-4 py-1 rounded-full shadow-md">
                Weekly Analysis
              </span>
              <Image
                src="/images/t1.png"
                alt="Feature 1"
                width={150}
                height={150}
                className="rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] max-w-full h-auto"
              />
            </div>
            <div className="group">
              <Image
                src="/images/t2.png"
                alt="Feature 2"
                width={150}
                height={150}
                className="rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] max-w-full h-auto"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="group">
              <Image
                src="/images/t3.png"
                alt="Feature 3"
                width={150}
                height={150}
                className="rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] max-w-full h-auto"
              />
            </div>
            <div className="group">
              <Image
                src="/images/t4.png"
                alt="Feature 4"
                width={150}
                height={150}
                className="rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] max-w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Bottom UI Elements */}
      <AnimatedSection className="flex flex-col items-center sm:flex-row justify-center gap-8 mt-8 px-4 sm:px-0">
        
        <div className="group">
          <Image
            src="/images/timerpicc.png"
            alt="Dashboard Interface"
            width={250}
            height={500}
            className="rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] max-w-full h-auto"
          />
        </div>
      </AnimatedSection>

      {/* Logo Marquee Section */}
      <AnimatedSection className="flex min-h-screen flex-col items-center bg-[hsl(0,0%,98%)] text-black px-4">
  <div className="container flex flex-col items-center py-16">
    <h2 className="mb-12 text-center text-base sm:text-lg text-gray-600">
      Made Using
    </h2>
    <LogoMarquee />
    <div className="mt-24 flex max-w-3xl flex-col items-center gap-8 text-center px-4">
      <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm">
        <span className="mr-2 text-[#FF4500]">●</span> INTRODUCING Pomora
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
        <span className="text-black">Boost your productivity. </span>
        <span className="text-gray-700"> You need an effective time management system to maximize your work efficiency, but staying focused can be challenging in today's distracting world. </span>
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">That's where Pomora steps in.</p>
    </div>
  </div>
</AnimatedSection>


<AnimatedSection className="bg-[hsl(0,0%,98%)] min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
  <div className="max-w-7xl mx-auto w-full">
    <div className="flex items-center justify-center gap-2 mb-6">
      <div className="w-5 h-5 rounded-full bg-lime-300 flex items-center justify-center">
        <span className="text-white text-xs font-medium">→</span>
      </div>
      <span className="text-lime-500 font-medium">Key Features</span>
    </div>
    <div className="text-center mb-16 space-y-2">
      <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
        Boost your productivity
      </h2>
      <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
        with my smart timer platform.
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {[
        { icon: Clock, title: "Intuitive Timer", description: "Circular progress indicator with color psychology for enhanced focus." },
        { icon: BarChart, title: "Insightful Analytics", description: "Visualizations of productivity data to track your progress over time." },
        { icon: CheckSquare, title: "Task Management", description: "Integrated to-do list for better organization and task tracking." },
        { icon: Smartphone, title: "Sync Across Devices", description: "Seamless experience on all your devices for productivity on the go." }
      ].map((feature, index) => (
        <div key={index} className="bg-[hsl(0,0%,98%)] rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-lime-500" />
          </div>
          <h3 className="text-gray-800 text-xl sm:text-2xl font-medium">{feature.title}</h3>
          <p className="text-gray-600 text-base sm:text-lg">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</AnimatedSection>

      {/* Case Study Overview */}
      <AnimatedSection className="bg-[hsl(0,0%,98%)]">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Intro / Problem */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm">
              <span className="mr-2 text-[#0cff9a]">●</span> Why this matters
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
              A calm, motivating way to get real work done
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Distractions make it hard to maintain momentum. Pomora pairs structured focus/break cycles with subtle cues, analytics, and community accountability so staying focused feels natural—not forceful.
            </p>
          </div>

          {/* My Role + Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">My Role</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Product Design & UX/UI</span>: Designed the entire experience with a clean, motivating interface.</li>
                <li><span className="font-medium">Frontend Development</span>: Built the interface using modern web technologies.</li>
                <li><span className="font-medium">Feature Architecture</span>: Planned interactions between timers, community features, and gamification systems.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Tech Stack</h3>
              <div className="grid grid-cols-1 gap-3 text-gray-700">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-gray-500 text-xs uppercase">Frontend</div>
                  <div className="text-gray-900 font-medium">React, Next.js, Tailwind CSS</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-gray-500 text-xs uppercase">Auth</div>
                  <div className="text-gray-900 font-medium">Clerk</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-gray-500 text-xs uppercase">Other Tools</div>
                  <div className="text-gray-900 font-medium">shadcn/ui components, TypeScript</div>
                </div>
                {/* Optional categories (uncomment and fill if applicable) */}
                {/*
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-gray-500 text-xs uppercase">Backend</div>
                  <div className="text-gray-900 font-medium">e.g., Node.js, Express, Convex, Supabase</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-gray-500 text-xs uppercase">Database</div>
                  <div className="text-gray-900 font-medium">e.g., Supabase, Convex, Firebase</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-gray-500 text-xs uppercase">Real-time</div>
                  <div className="text-gray-900 font-medium">e.g., WebSockets, Pusher</div>
                </div>
                */}
              </div>
            </div>
          </div>

          {/* Design Approach */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Design Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <ul className="list-disc pl-5 space-y-2">
                <li>Minimalist, distraction-free layout to reduce cognitive load</li>
                <li>Color cues for focus and break states</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                <li>Subtle, meaningful animation for feedback</li>
                <li>Mobile-first, responsive design for anywhere work</li>
              </ul>
            </div>
          </div>

          {/* Achievements + Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Key Achievements</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Built a functional MVP with both focus and community features</li>
                <li>Implemented a gamification system that increased engagement in testing</li>
                <li>Designed an interface praised for being both motivating and calm</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Impact</h3>
              <p className="text-gray-700">
                Pomora helps users build consistent focus habits and recover from context switching faster. The combination of clear visual states, smart defaults, and a supportive community loop makes the experience feel calm while still driving progress.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

<div className="min-h-screen bg-gradient-to-br p-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <div className="w-full">
            <EnhancedProjectDevelopmentProcess />
          </div>
       
        </div>
      </div>
    </div>
    <div>
          <Pomoraprocess2/>
         </div>
    <AnimatedSection className="max-w-2xl mx-auto px-4 py-16 text-center">
  <div className="space-y-8">
    <h1 className="text-5xl font-semibold text-black mb-4">
      Exciting Features Coming Soon
    </h1>
    
    <p className="text-gray-400 text-lg mb-8">
     I'm rolling out amazing updates. Stay connected to be the first to experience them!
    </p>
    
    <div className="flex flex-col  gap-4 max-w-md mx-auto">
      <button 
        className="px-6 py-3 bg-[#c4ff33] text-gray-900 font-semibold rounded-lg hover:bg-[#b3ee22] transition-colors"
      >
        Explore Current Features
      </button>
    </div>
    
    <p className="text-gray-400 text-sm">
     Checkout my social media or check the website regularly for the latest updates!
    </p>
  </div>
</AnimatedSection>

    </div>
  );
};

export default Page;

