"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { useState } from "react";

const organicEase = [0.4, 0, 0.2, 1];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: organicEase }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

// CodeBlock Component
interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="relative mb-8 group">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white/70 hover:text-white transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="rounded-xl overflow-hidden border border-black/[0.05] shadow-sm">
        <pre className="!m-0 !p-6 !bg-[#1e1e1e] text-sm overflow-x-auto">
          <code className="language-javascript">
            {code.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default function HarnessingFramerMotion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-gray-600 selection:bg-black/5 selection:text-black font-sans antialiased overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-pink-100/40 blur-[120px] rounded-full mix-blend-multiply opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-100/40 blur-[100px] rounded-full mix-blend-multiply opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <Link href="/blog" className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-300">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-light tracking-wide">Back to writing</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.header
          style={{ opacity, scale }}
          className="mb-24 md:mb-32 pl-4 border-l border-black/5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: organicEase }}
            className="text-4xl md:text-6xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            Harnessing Framer Motion<br />for Dynamic Web Experiences
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
            className="flex items-center gap-4 text-sm font-light tracking-wide text-gray-500"
          >
            <span>September 9, 2023</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Interactive Design</span>
          </motion.div>
        </motion.header>

        <main className="space-y-20 md:space-y-32">

          {/* Intro */}
          <Section className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
              Animations can breathe life into web applications, making them more engaging and user-friendly. In this post, I’ll share how I’ve been using <span className="font-medium text-black">Framer Motion</span> to create dynamic web experiences that captivate users and enhance interactivity.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent" />
            </div>
          </Section>

          {/* Why Choose Framer Motion? */}
          <Section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <div className="pt-2">
              <h2 className="text-sm font-medium text-black uppercase tracking-widest opacity-40">Why it works</h2>
            </div>
            <div className="space-y-6">
              <p className="leading-loose">
                Framer Motion stands out as a powerful library for adding animations in React applications. It provides a simple and intuitive API that lets you create complex animations without getting bogged down in details. It’s perfect for both beginners and experienced developers looking to add flair to their projects.
              </p>
            </div>
          </Section>

          {/* Code Examples Segment */}
          <Section className="space-y-16">

            {/* Basic Animation */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Getting Started</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Starting with Framer Motion is easy. Here’s a quick example of a simple scale animation on hover:
              </p>
              <CodeBlock code={`
import { motion } from 'framer-motion';

const ScaleOnHover = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }} 
      transition={{ duration: 0.3 }}
      className="bg-blue-500 p-6 rounded-lg"
    >
      <h2 className="text-black text-xl">Hover over me!</h2>
    </motion.div>
  );
};
              `} />
            </div>

            {/* Variants */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Using Variants</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Variants in Framer Motion allow you to define multiple animation states for your components. This feature is great for creating complex animations that require more control.
              </p>
              <CodeBlock code={`
const boxVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1 },
};

const AnimatedBox = () => {
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      className="bg-green-500 p-6 rounded-lg"
    >
      <h2 className="text-black text-xl">I change on hover!</h2>
    </motion.div>
  );
};
              `} />
            </div>

            {/* Staggering */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Adding Complexity</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Once you're comfortable with basic animations, you can start experimenting with more complex interactions, like staggering animations to make lists feel more organic.
              </p>
              <CodeBlock code={`
const staggeredVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Item = ({ i }) => (
  <motion.div variants={staggeredVariants} className="bg-red-500 p-4 rounded-lg">
    Item {i}
  </motion.div>
);

const StaggeredList = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-col">
      {Array.from({ length: 5 }, (_, i) => (
        <Item key={i} i={i + 1} />
      ))}
    </motion.div>
  );
};
              `} />
            </div>

          </Section>

          {/* Best Practices */}
          <Section className="relative p-8 md:p-12 rounded-2xl bg-background border border-black/[0.03] shadow-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-50" />

            <h2 className="relative text-2xl font-medium text-gray-900 mb-6">Golden Rules of Animation</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 mt-2.5" />
                <p className="text-gray-600 leading-relaxed">Use subtle animations to enhance, not distract.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 mt-2.5" />
                <p className="text-gray-600 leading-relaxed">Test on various devices to ensure performance holds up (especially on mobile).</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 mt-2.5" />
                <p className="text-gray-600 leading-relaxed">Combine animations with clear user feedback motion should have meaning.</p>
              </li>
            </ul>
          </Section>

          {/* Closing */}
          <Section className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-900">Conclusion</h2>
              <p className="leading-loose max-w-3xl">
                Framer Motion has been a game changer in my design toolkit. By leveraging its capabilities, I can create engaging and dynamic web experiences that resonate with users. I encourage you to explore this library and see how it can elevate your projects.
              </p>
            </div>

            <div className="pt-12 border-t border-black/5 flex justify-between items-end">
              <div>
                <h3 className="text-sm font-medium text-black uppercase tracking-widest mb-2">Category</h3>
                <p className="text-sm text-gray-500">Development</p>
              </div>
              <div className="text-right">
                <Link href="/blog" className="text-sm text-black hover:text-black/60 transition-colors">
                  More Articles &rarr;
                </Link>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
