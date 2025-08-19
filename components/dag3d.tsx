import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Max Flyo",
      image: "/images/art-1.jpg",
      className: "absolute top-20 left-[10%] rotate-[-5deg]",
    },
    {
      title: "Khaz Headphones",
      image: "/images/art-2.jpg",
      className: "absolute top-32 right-[15%] rotate-[-7deg]",
    },
    {
      title: "Madrid",
      image: "/images/art-3.jpg",
      className: "absolute bottom-32 left-[12%] rotate-[8deg]",
    },
    {
      title: "Dystopian Station",
      image: "/images/art-4.jpg",
      className: "absolute bottom-20 right-[10%] rotate-[10deg]",
    },
    {
      title: "Drone",
      image: "/images/art-6.jpg",
      className: "absolute top-1/2 left-[8%] -translate-y-1/2 rotate-[-7deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-2xl -translate-y-3/4 text-center text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight z-20">
        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
          Sometimes I do
        </span>
        <br />
        <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
          3D artworks
        </span>
        <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-xl"
          />
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
