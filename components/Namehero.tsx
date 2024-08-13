import React, { useEffect, useRef, useMemo, memo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


 // Import LinkPreview
import { LogsIcon } from "lucide-react";
import Image from 'next/image';

import Particles from "./ui/particles";
import { GridBeam } from "./ui/GridBeam";
import { LinkPreview } from "./ui/LinkPreview";
import { FlipWords } from "./ui/flip-words";

interface BoxRevealProps {
  children: JSX.Element;
  width?:  | "100%";
  boxColor?: string;
  duration?: number;
}

const words = ["3D ", "WebDev", "UX/UI"];

const BoxReveal = memo(({ children, boxColor, duration }: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);
  BoxReveal.displayName = 'BoxReveal';

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration || 0.5 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration || 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor || "#c7c7c7",
        }}
      />
    </div>
  );
});

export default function Namehero() {
 
  const boxRevealTitle = useMemo(() => (
    <BoxReveal boxColor="#c7c7c7" duration={0.5}>
      <h1 className="text-6xl sm:text-[12rem]  font-semibold  mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        KHALIFA
      </h1>
    </BoxReveal>
  ), []);

  const boxRevealDescription = useMemo(() => (
    <BoxReveal boxColor="#c7c7c7" duration={0.5}>
      
      <p className="  text-neutral-500 text-2xl sm:text-5xl max-w-lg text-center sm:text-left ">
       Designer specializing
        in <br></br> <FlipWords className="dark:text-[#BEF264]" words={words} />
      </p>
    </BoxReveal>
  ), []);

  const linkPreview = useMemo(() => (
    <LinkPreview
      url="https://k-renders-weld.vercel.app/"
      className="your-class-name mx-1 underline duration-500 hover:text-zinc-300 dark:hover:text-zinc-700"
      width={200}
      height={125}
      quality={50}
      layout="fixed"
      isStatic={false} // indicates that the image is dynamic
    >
      Designer
    </LinkPreview>
  ), []);
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };
  return (
    
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl">
         <header
      className='fixed right-0 left-0 top-0 py-4 px-6  dark:bg-white/7 backdrop-blur-lg z-[100] 
      flex items-center border-b-[1px] border-black/30  dark:border-neutral-900 justify-between'>
      <aside className='flex items-center gap-4'>
        {/* Other header content */}
      </aside>
      <aside className='flex items-center'>
        <a href="#" onClick={scrollToTop} className="relative">
          <Image
            src="/logocolor.png"
            alt=" Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
          />
        </a>
      </aside>
    </header>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {/* Add your navigation items here */}
        </ul>
      </nav>

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <GridBeam className="sm:pl-16 sm:pt-28   flex items-start justify-start">
        <div className="grid gap-2">
          {boxRevealTitle}
          {boxRevealDescription}
        </div>
      </GridBeam>

      <div className="mb-40 sm:mb-20 text-center animate-fade-in flex justify-center ">
        <h2 className="text-sm text-zinc-500">
          {linkPreview} located in Toronto  <span className="relative inline-flex h-2 w-2  group">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
        
        {/* Tooltip */}
        <span className="absolute top-3 left-1/2 transform -translate-x-1/2 p-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Available
        </span>
      </span>
        
        </h2>
      </div>
    </div>
  );
}
