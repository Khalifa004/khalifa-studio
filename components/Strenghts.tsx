"use client";
import Image from "next/image";
import React from "react";

import { PaintBrushIcon, CodeBracketIcon, DevicePhoneMobileIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { WobbleCard } from "./ui/wooble";

const strengths = [
  {
    icon: PaintBrushIcon,
    title: "Creative UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces that enhance user experience and engagement across various digital platforms."
  },
  {
    icon: CodeBracketIcon,
    title: "Proficient Web Development",
    description: "Building robust, scalable web applications using modern technologies and best practices to deliver high-performance digital solutions."
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Responsive Design",
    description: "Creating adaptive layouts that provide seamless user experiences across all devices, from desktop to mobile, ensuring accessibility and usability."
  },
  {
    icon: UserGroupIcon,
    title: "User-Centered Approach",
    description: "Prioritizing user needs and preferences in every aspect of design and development, resulting in products that truly resonate with the target audience."
  }
];

export function StrengthsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 pt-20 gap-4 max-w-7xl mx-auto w-full">
      {strengths.map((strength, index) => (
        <WobbleCard
          key={index}
          containerClassName={`col-span-1 ${index === 0 ? 'lg:col-span-2' : ''} min-h-[300px] bg-black`}
          className="p-6"
        >
          <strength.icon className="h-12 w-12 text-white mb-4" />
          <h2 className="text-left text-balance text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white mb-3">
            {strength.title}
          </h2>
          <p className="text-left text-base text-gray-300">
            {strength.description}
          </p>
        </WobbleCard>
      ))}
     <WobbleCard
  containerClassName="hidden md:block col-span-1 min-h-[300px]"
  className="p-6"
>
  <h2 className="text-left text-balance text-4xl lg:text-7xl font-semibold tracking-[-0.015em] text-white mb-3">
    My Strengths
  </h2>
  <p className="text-left text-base text-gray-300">
  These skills fuel my passion for crafting amazing digital experiences that leave a lasting impression.
  </p>
</WobbleCard>

    </div>
  );
}
