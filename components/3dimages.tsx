"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { VelocityScroll } from "./ui/scroll-based-velocity";


export function LayoutGridDemo() {
  return (

  
       
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    
    <div>
        
      <p className="font-bold md:text-4xl text-xl text-white">
        Heaphones Concept
      </p>
    
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Madridista
      </p>
     
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Drone Animation
      </p>
      
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Shoe Concept
      </p>
    
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "headphoneresized.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "madridseat.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "drone.gif",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 ",
    thumbnail:
      "/shoevid.gif",
  },
];
