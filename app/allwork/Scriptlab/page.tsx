'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LogoMarquee } from '@/components/logoroulette';
import { BarChart, Code, Pen, Zap } from 'lucide-react'
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import CaseStudyLayout from '@/components/CaseStudyLayout';

const AICaseStudy = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const features = [
    { title: "AI-Powered Code Generation", desc: "Generate code snippets in various programming languages", icon: <Code /> },
    { title: "Content Creation Assistant", desc: "Create blog posts, articles, and marketing copy with AI assistance", icon: <Pen /> },
    { title: "Real-time Collaboration", desc: "Work together seamlessly with team members on projects", icon: <Zap /> },
    { title: "Advanced Analytics", desc: "Track and analyze your content performance with AI insights", icon: <BarChart /> }
  ];

  return (
    <CaseStudyLayout
      header={{
        title: 'AI Content Generator',
        description: 'An AI-powered content creation tool for code and prose with real-time collaboration and analytics.',
        meta: [
          { label: 'Type', value: 'Personal Project' },
          { label: 'Timeframe', value: '42 days' },
          { label: 'Toolkit', value: 'Next.js, TypeScript, Tailwind, Framer Motion, Gemini AI' },
          { label: 'Year', value: '2024' },
        ],
      }}
      sections={[
        {
          title: 'Overview',
          body: (
            <p className="text-lg text-gray-600">
              Built an integrated authoring experience with AI assistance, focusing on motion, clarity, and performance.
            </p>
          ),
        },
        {
          title: 'Highlights',
          body: (
            <div className="relative min-h-[40vh] overflow-hidden px-4 sm:px-6 lg:px-8">

      <div className="flex flex-col lg:flex-row justify-center items-center min-h-[40vh] mt-8">
        {/* Left Side UI */}
        <motion.div className="mb-8 lg:mb-0 relative w-full lg:w-1/2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#00d4ff] to-[#00ffae] rounded-full filter blur-3xl opacity-20"></div>
        </motion.div>
        
        {/* Center Content */}
        <div className="flex flex-col justify-center items-center text-center w-full lg:w-1/2 px-4">
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ffae] p-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            AI-Powered Content Creation
          </motion.h1>
          <motion.p className="text-gray-300 mt-4 px-4 text-sm sm:text-base" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            Empowering creators with innovative AI tools for code and content generation
          </motion.p>
          <motion.button className="w-[180px] h-[50px] outline-none border-none cursor-pointer px-[26px] rounded-[40px] text-[15px] font-[500] leading-[1em] bg-gradient-to-r from-[#00d4ff] to-[#00ffae] text-black shadow-[rgba(0,212,255,0.2)_0px_20px_35px] mt-8 mb-8 transition-all duration-300 hover:shadow-[rgba(0,212,255,0.4)_0px_25px_40px] hover:scale-105" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Preview
          </motion.button>

          {/* AI Implementation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative my-20 w-full max-w-full overflow-x-visible"
          >
            <pre className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-8 rounded-2xl shadow-[0_0_30px_rgba(0,212,155,0.2)] border border-[#00d49b] border-opacity-30">
              <code className="language-typescript text-xs sm:text-sm text-gray-300">
                {`import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateContent(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

// Usage in an API route
export default async function handler(req, res) {
  const { prompt } = req.body;
  try {
    const generatedContent = await generateContent(prompt);
    res.status(200).json({ content: generatedContent });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate content' });
  }
}`}
              </code>
            </pre>
            <div className="absolute -top-4 -right-4 bg-[#00d49b] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Gemini AI Integration
            </div>
          </motion.div>
        </div>
      </div>
            </div>
          ),
        },
        {
          title: 'Powered by',
          body: (
            <div className="flex min-h-[40vh] flex-col items-center text-white px-4">
        <div className="container flex flex-col items-center py-16">
          <h2 className="mb-12 text-center text-base sm:text-lg text-gray-400">
            Powered By
          </h2>
          <LogoMarquee />
          <div className="mt-24 flex max-w-3xl flex-col items-center gap-8 text-center px-4">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ffae] px-4 py-1 text-sm text-black">
              <span className="mr-2">●</span> INTRODUCING AI Content Generator
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-black">Revolutionize Your Workflow. </span>
              <span className="text-gray-400">Harness the power of AI to streamline your content creation process and boost productivity.</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#00d4ff]">Unleash Your Creativity with AI</p>
          </div>
        </div>
      </div>
          ),
        },
        {
          title: 'Key Features',
          body: (
            <div className="min-h-[40vh] flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full bg-[#00d4ff] flex items-center justify-center">
              <span className="text-black text-xs font-medium">→</span>
            </div>
            <span className="text-[#00d4ff] font-medium">Key Features</span>
          </div>
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-[#272727] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Empower Your Creativity
            </h2>
            <h2 className="text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              with AI-Powered Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 space-y-6 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ffae] flex items-center justify-center">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-black" })}
                </div>
                <h3 className="text-zinc-100 text-xl sm:text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-400 text-base sm:text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
          ),
        },
      ]}
    />
  );
};

export default AICaseStudy;
