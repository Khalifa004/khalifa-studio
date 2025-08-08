"use client";
import { motion } from "framer-motion";
import React from "react";

export function ColourfulText({ text }: { text: string }) {
    const colors = [
        "rgb(24, 172, 254)",  // Accent Blue (Base)
        "rgb(17, 123, 198)",  // Darker Blue (For contrast)
        "rgb(51, 189, 255)",  // Lighter Blue (Soft and bright)
        "rgb(68, 150, 224)",  // Muted Blue (For balance)
        "rgb(94, 210, 255)",  // Light Blue (Gentle highlight)
        "rgb(0, 143, 223)",   // Deep Blue (Professional tone)
        "rgb(52, 136, 207)",  // Blue with more green (Fresh)
        "rgb(132, 196, 252)", // Very light Blue (For accents)
        "rgb(72, 131, 202)",  // A slightly desaturated blue (Subtle)
        "rgb(33, 96, 175)",   // A much deeper blue (For background elements)
      ];
      

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
