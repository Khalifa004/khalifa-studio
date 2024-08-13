import React from "react";
import { companies } from "../data";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

const Footer: React.FC = () => {
  return (
    <footer className="w-full pb-20">
      {/* Title for the companies section */}
    
      <div className="text-center">
  <p className="opacity-70 text-black dark:text-white">Powered by Vercel</p>
  <div className="relative mx-auto w-full max-w-[40rem]">
    {/* Gradients */}
    <div className="absolute inset-x-4 sm:inset-x-5 md:inset-x-20 top-[calc(100%+0.5rem)] bg-gradient-to-r from-transparent via-[#6f8f3b] to-transparent h-[2px] w-3/4 blur-sm" />
    <div className="absolute inset-x-4 sm:inset-x-5 md:inset-x-20 top-[calc(100%+0.5rem)] bg-gradient-to-r from-transparent via-[#76963f] to-transparent h-px w-3/4" />
    <div className="absolute inset-x-4 sm:inset-x-5 md:inset-x-60 top-[calc(100%+0.5rem)] bg-gradient-to-r from-transparent via-[#BEF264] to-transparent h-[5px] w-1/4 blur-sm" />
    <div className="absolute inset-x-4 sm:inset-x-5 md:inset-x-60 top-[calc(100%+0.5rem)] bg-gradient-to-r from-transparent via-[#BEF264] to-transparent h-px w-1/4" />
 
        {/* Core component */}
     
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0  h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 mt-5">
        {companies.map(({ id, img, name }) => (
          <div
            key={id}
            className="flex flex-col items-center gap-1 p-2  rounded-lg shadow-lg"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full ${
                id === 1 ? "bg-gray-100" : ""
              }`}
            >
              <img
                src={img}
                alt={`${name} logo`}
                className="w-5 h-5 md:w-8 md:h-8"
              />
            </div>
            <span className="text-center text-sm font-semibold">{name}</span>
          </div>
        ))}
      </div> </div>
    </footer>
  );
};

export default Footer;
