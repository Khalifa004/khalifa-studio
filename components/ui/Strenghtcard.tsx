"use client";

import { motion } from 'framer-motion';

interface StrengthCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

export default function StrengthCard({ icon: Icon, title, description, index }: StrengthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/90 backdrop-blur-xl rounded-3xl transform transition-transform duration-500 group-hover:scale-105" />
      
      <div className="relative p-8 md:p-12">
        <div className="flex items-center gap-6 mb-8">
          <div className="p-4 rounded-2xl bg-black/5 backdrop-blur-xl">
            <Icon className="h-8 w-8 text-gray-900" />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {title}
          </h3>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}