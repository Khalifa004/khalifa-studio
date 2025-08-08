"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IconBrandFigma, IconBrandBlender, IconBrandJavascript, IconBrandCss3, IconBrandReact, IconBrandLinkedin, IconBrandNextjs, IconBrandFramer, IconBrandTailwind } from '@tabler/icons-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="min-h-[90vh] flex flex-col justify-center items-center px-6 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="text-center mb-12"
          {...fadeIn}
        >
          <h1 className="text-[8vw] md:text-[6vw] font-bold tracking-tight text-gray-900 mb-8">
            Design Engineer
          </h1>
          
        </motion.div>
        
        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Image 
            src="/images/khalif.jpg"
            alt="Khalifa's Picture"
            fill
            className="rounded-full object-cover shadow-2xl"
          />
        </motion.div>
      </motion.section>

      {/* Bio Section */}
      <motion.section 
        className="py-24 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                className="text-5xl font-bold mb-8"
                {...fadeIn}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-xl leading-relaxed text-gray-600"
                {...fadeIn}
              >
               Hey there! I'm a Toronto-based designer who loves turning tricky problems into beautiful, easy-to-use solutions.
Think of me as a creative problem solver who speaks the language of both technology and design. I create digital experiences that look amazing and just... work. Whether it's a slick mobile app or a user-friendly website, I'm all about making complex things feel simple and intuitive.
My sweet spot is designing interfaces that not only look great but also feel natural to use.  
              </motion.p>
              
              <motion.div 
                className="mt-8 flex gap-4"
                {...fadeIn}
              >
             <Link 
  href="https://www.linkedin.com/in/khalifa-seck-27a139251/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
>
                  <IconBrandLinkedin className="mr-2" />
                  Connect
                </Link>
              </motion.div>
            </div>

            <motion.div 
              className="space-y-8"
              {...fadeIn}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <p className="text-xl text-gray-600">
                  OCAD University
                  <br />
                  <span className="font-medium">Digital Futures</span>
                  <br />
                  <span className="text-gray-500">Business and Social Innovation</span>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                <div className="flex gap-2">
                  {['English', 'French'].map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium shadow-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
  className="py-24 bg-gray-50"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-7xl mx-auto px-6">
    <motion.h2 
      className="text-5xl font-bold mb-16 text-center"
      {...fadeIn}
    >
      Skills & Tools
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Design */}
      <motion.div className="text-center" {...fadeIn}>
        <h3 className="text-2xl font-semibold mb-6">Design</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="flex flex-col items-center">
            <IconBrandFigma className="text-6xl text-gray-900 mb-2" />
            <span>Figma</span>
          </div>
          <div className="flex flex-col items-center">
            <IconBrandBlender className="text-6xl text-gray-900 mb-2" />
            <span>Blender</span>
          </div>
          <div className="flex flex-col items-center">
            <IconBrandFramer className="text-6xl text-gray-900 mb-2" />
            <span>Framer Motion</span>
          </div>
        </div>
      </motion.div>

      {/* Development */}
      <motion.div className="text-center" {...fadeIn}>
        <h3 className="text-2xl font-semibold mb-6">Development</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="flex flex-col items-center">
            <IconBrandNextjs className="text-6xl text-gray-900 mb-2" />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <IconBrandReact className="text-6xl text-gray-900 mb-2" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <IconBrandTailwind className="text-6xl text-gray-900 mb-2" />
            <span>Tailwind</span>
          </div>
          <div className="flex flex-col items-center">
            <IconBrandJavascript className="text-6xl text-gray-900 mb-2" />
            <span>JavaScript</span>
          </div>
        </div>
      </motion.div>

      {/* Expertise */}
      <motion.div className="text-center" {...fadeIn}>
        <h3 className="text-2xl font-semibold mb-6">Expertise</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            'Responsive UI Design',
            'Full-stack Development',
            'Interactive Dashboards',
            '3D Web Elements',
            'Figma-to-Code Workflow',
            'Custom Component Libraries',
            'State & Access Management',
          ].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-24 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 className="text-5xl font-bold mb-12 text-center" {...fadeIn}>
            Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Front‑end Engineering', desc: 'Production-grade UIs with Next.js, TypeScript, Tailwind, best practices for performance and accessibility.' },
              { title: 'UI/UX Design', desc: 'Wireframes to high‑fidelity design, components, design systems, and interactive prototypes.' },
              { title: 'Motion & Interactions', desc: 'Framer Motion micro‑interactions, transitions, and scroll/motion systems that enhance UX.' },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}