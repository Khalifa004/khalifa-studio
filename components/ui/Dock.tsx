"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandLinkedin,
  IconUser,
  IconHome,
  IconNewSection,
  IconBuildingStore,
} from "@tabler/icons-react";

const Dock = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  
    {
      title: "About Me",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <FloatingDock
      mobileClassName="fixed bottom-4 left-1/2 transform -translate-x-1/2" // Add bottom margin for mobile
      desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2" // Add bottom margin for desktop
      items={links}
      
    />
  );
};

export default Dock;
