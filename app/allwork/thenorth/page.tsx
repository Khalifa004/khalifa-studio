"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Train, Map, Globe, Clock, Zap, Target, Users, Layout, Mouse, CreditCard, Bot, Settings, Briefcase, Plane, Camera, Building } from "lucide-react";

const organicEase = [0.4, 0, 0.2, 1];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: organicEase }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const GridItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="group relative p-6 rounded-xl bg-gray-50/50 border border-black/[0.03] hover:border-black/[0.08] transition-colors duration-500 h-full">
    <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100/80 text-gray-600 group-hover:text-black group-hover:scale-110 transition-all duration-500 ease-out">
        <Icon size={20} />
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-2 tracking-wide">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

const StatItem = ({ label, value }: { label: string, value: string }) => (
  <div className="border-l border-black/10 pl-6 py-2">
    <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{label}</div>
    <div className="text-lg font-light text-gray-900 tracking-tight">{value}</div>
  </div>
);

export default function NorthStarCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-gray-600 selection:bg-red-100 selection:text-red-900 font-sans antialiased overflow-x-hidden">

      {/* Background Ambience - Light Mode (Red/Warm tint for NorthStar) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-100/20 blur-[150px] rounded-full mix-blend-multiply opacity-30" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-orange-100/20 blur-[150px] rounded-full mix-blend-multiply opacity-30" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: organicEase, delay: 0.1 }}
          className="mb-20 md:mb-32 flex justify-between items-center"
        >
          <Link href="/allwork" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors duration-300">
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <span>Return</span>
          </Link>
          <div className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-gray-400">
            Case Study 003
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.header
          className="mb-32 md:mb-48"
        >
          <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24 mb-16">
            <div className="md:flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: organicEase }}
                className="text-6xl md:text-9xl font-medium text-gray-900 tracking-tighter leading-none mb-8"
              >
                NorthStar
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: organicEase, delay: 0.2 }}
                className="text-lg md:text-xl font-light text-gray-500 max-w-2xl leading-relaxed"
              >
                Bullet train service concept blending efficient transport with immersive VR experiences across cities.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12">
              {[
                { l: "Type", v: "Concept" },
                { l: "Time", v: "21 Days" },
                { l: "Tool", v: "Figma" },
                { l: "Year", v: "2024" }
              ].map((item, i) => (
                <motion.div
                  key={item.l}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: organicEase, delay: 0.3 + (i * 0.1) }}
                >
                  <StatItem label={item.l} value={item.v} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: organicEase, delay: 0.4 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/[0.05] shadow-2xl shadow-gray-200/50 bg-black"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <iframe
                src="https://player.vimeo.com/video/982739111?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=0&controls=1"
                className="w-full h-full object-cover"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Northstar™"
              />
            </div>
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          </motion.div>
        </motion.header>

        <main className="space-y-32 md:space-y-48">

          {/* Overview / Problem */}
          <Section className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="text-xs font-medium text-gray-900 uppercase tracking-[0.2em] mb-4">The Challenge</h2>
              <div className="h-px w-12 bg-black/10" />
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Too far to drive, too close to fly</h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                  The Windsor-Quebec corridor is home to 68 million people. With 600+ daily short-haul flights, there is a lack of efficient, sustainable alternatives.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <GridItem icon={Zap} title="The Solution" desc="AI-driven navigation combined with eco-friendly propulsion." />
                <GridItem icon={Target} title="Key Metric" desc="Connecting 70+ million people with 5,000km of new tracks." />
              </div>
            </div>
          </Section>

          {/* Target Audience */}
          <Section className="space-y-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Target Audience</h2>
              <p className="text-gray-500 leading-relaxed">
                Crafting a journey as unique as each passenger. Our service isn't just transportation; it's a tailored experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GridItem icon={Building} title="Urban Commuters" desc="City dwellers who ride the pulse of public transit daily." />
              <GridItem icon={Briefcase} title="Business" desc="Movers and shakers needing swift, reliable connections." />
              <GridItem icon={Plane} title="Air Travellers" desc="Globetrotters seeking seamless airport links via rapid rail." />
              <GridItem icon={Camera} title="Tourists" desc="Explorers navigating city wonders with ease." />
              <GridItem icon={Users} title="Event Goers" desc="Conference-goers riding the rails to their next big moment." />
              <GridItem icon={Train} title="Daily Riders" desc="Those seeking a consistent, high-quality daily commute." />
            </div>
          </Section>

          {/* Visual Design Gallery */}
          <Section className="space-y-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Visual Interface</h2>
              <p className="text-gray-500 leading-relaxed">
                A sleek, transparent design language that puts the journey first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["/images/Northstar1.jpg", "/images/Northstar2.png", "/images/Northstar3.png"].map((src, i) => (
                <div key={i} className="relative group rounded-2xl overflow-hidden border border-black/[0.05] shadow-lg shadow-gray-200/50">
                  <div className="aspect-[9/19.5] relative">
                    <Image
                      src={src}
                      alt={`Design ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Smart Booking / UI UX */}
          <Section className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Smart Booking</h2>
                <p className="text-gray-500 leading-relaxed">
                  Revolutionize journey planning with AI-powered systems. Specify departure times, seating, and budget for a truly personalized experience.
                </p>
              </div>
              <div className="space-y-4">
                <GridItem icon={Bot} title="AI Assistant" desc="Intelligently generates the best trip schedule based on natural language." />
                <GridItem icon={Settings} title="Preferences" desc="Deep customization for seating, amenities, and environment." />
                <GridItem icon={CreditCard} title="Dynamic Pricing" desc="Smart budget allocation for optimal travel value." />
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-black/[0.05] shadow-xl shadow-gray-200/50">
              <Image
                src="/images/smartbooking.png"
                alt="Smart Booking Interface"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </Section>

          {/* Business Model & Footer */}
          <Section className="space-y-12">
            <div className="p-12 rounded-3xl bg-gray-50 border border-black/[0.05]">
              <h3 className="text-xs uppercase tracking-[0.2em] text-red-500 mb-6">Business Model</h3>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                As a private company, NorthStar funds construction through real estate leverage selling land value from station development. Ticket fares cover operations, ensuring sustainability without government subsidies.
              </p>
            </div>

            <div className="flex justify-between items-end pt-12 border-t border-black/[0.05]">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Next Project</h3>
                <Link href="/allwork" className="text-lg md:text-xl text-gray-900 font-medium hover:text-gray-500 transition-colors">
                  View All Work &rarr;
                </Link>
              </div>
            </div>
          </Section>

        </main>
      </div>
    </div>
  );
}
