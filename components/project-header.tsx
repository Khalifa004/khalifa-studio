"use client";

import { motion } from "framer-motion";

interface ProjectHeaderProps {
  title: string;
  description: string;
  type: string;
  timeframe: string;
  toolkit: string;
  year: string;
  backgroundImage?: string;
  backgroundVideo?: string; // New prop for video background
}

export default function ProjectHeader({
  title,
  description,
  type,
  timeframe,
  toolkit,
  year,
  backgroundImage,
  backgroundVideo, // Destructure backgroundVideo
}: ProjectHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`text-gray-800 min-h-[90vh] flex flex-col justify-center p-8 pt-24 md:p-16 lg:p-24 relative overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      {/* Conditional rendering for video background */}
      {backgroundVideo && (
        <video
          className="h-full w-full object-cover absolute inset-0 pointer-events-none"
          autoPlay
          muted
          playsInline
          onEnded={() => {
            console.log("Video ended");
            // You can add any action here after the video ends
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay for better text readability when using a background image or video */}
      {(backgroundImage || backgroundVideo) && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}

      <div className={`max-w-6xl mx-auto w-full space-y-16 relative z-10 ${backgroundImage || backgroundVideo ? 'text-white' : 'bg-[hsl(0,0%,98%)]'}`}>
        {/* Title Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${backgroundImage || backgroundVideo ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={`h-1 ${backgroundImage || backgroundVideo ? 'bg-white' : 'bg-stone-900'} rounded-full`}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`${backgroundImage || backgroundVideo ? 'text-gray-200' : 'text-gray-600'} text-xl md:text-2xl lg:text-3xl max-w-3xl font-light`}
        >
          {description}
        </motion.p>

        {/* Project Details Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 text-sm"
        >
          {[
            { label: "Type", value: type },
            { label: "Timeframe", value: timeframe },
            { label: "Toolkit", value: toolkit },
            { label: "Year", value: year },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "2rem" }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className={`w-1 ${backgroundImage || backgroundVideo ? 'bg-gray-300' : 'bg-neutral-200'} rounded-full`}
              />
              <div className="space-y-2">
                <p className={`${backgroundImage || backgroundVideo ? 'text-gray-300' : 'text-gray-500'} font-medium`}>{item.label}</p>
                <p className={`${backgroundImage || backgroundVideo ? 'text-white' : 'text-gray-800'} font-semibold`}>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
