"use client";

import React from "react";

import { motion } from "framer-motion";
import { ColourfulText } from "./ui/colourful-text";

export function Bigtext() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-black rounded-2xl">
      <motion.img
        src="/images/intellicover.jpg" // Your image source here
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="w-full text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white z-10 px-4">
        Build smarter <ColourfulText text="courses" /> <br /> that learners love
      </h1>
    </section>
  );
}
