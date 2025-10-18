"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Skiper54 = () => {
  const images = [
    {
      src: "/images/art-1.jpg",
      alt: "Max Flyo",
      title: "Max Flyo",
    },
    {
      src: "/images/art-2.jpg",
      alt: "Khaz Headphones",
      title: "Khaz Headphones",
    },
    {
      src: "/images/art-3.jpg",
      alt: "Madrid",
      title: "Madrid",
    },
    {
      src: "/images/art-4.jpg",
      alt: "Dystopian Station",
      title: "Dystopian Station",
    },
    {
      src: "/images/art-6.jpg",
      alt: "Drone",
      title: "Drone",
    },
  ];
  return (
    <div className="flex h-full w-screen flex-col items-center justify-center overflow-hidden px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-light tracking-wide text-black/80">
          Sometimes I do 3-D work
        </h1>
        <p className="mt-2 text-sm text-black/60">← Swipe or use arrows to navigate →</p>
      </div>
      <div className="w-full max-w-5xl">
        <Carousel_006
          images={images}
          className=""
          loop={true}
          showNavigation={true}
          showPagination={true}
        />
      </div>
    </div>
  );
};

interface Carousel_006Props {
  images: { src: string; alt: string; title: string }[];
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
}

const Carousel_006 = ({
  images,
  className,
  autoplay = false,
  loop = true,
  showNavigation = true,
  showPagination = true,
}: Carousel_006Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className={cn("w-full pb-12", className)}
      opts={{
        loop,
        slidesToScroll: 1,
        align: "center",
      }}
      plugins={
        autoplay
          ? [
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]
          : []
      }
    >
      <CarouselContent className="flex h-[450px] w-full">
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className="relative flex h-full w-full basis-full items-center justify-center"
          >
            <motion.div
              initial={false}
              animate={{
                clipPath:
                  current !== index
                    ? "inset(15% 0 15% 0 round 2rem)"
                    : "inset(0 0 0 0 round 2rem)",
              }}
              className="h-[400px] w-[300px] overflow-hidden rounded-3xl"
            >
              <div className="relative h-full w-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
            <AnimatePresence mode="wait">
              {current === index && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-2 flex h-[14%] w-full translate-y-full items-center justify-center p-2 text-center font-medium tracking-tight text-black/20"
                >
                  {img.title}
                </motion.div>
              )}
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>

      {showNavigation && (
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            aria-label="Previous slide"
            onClick={() => api?.scrollPrev()}
            className="pointer-events-auto rounded-full bg-black/60 p-4 hover:bg-black/80 transition-all duration-200 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => api?.scrollNext()}
            className="pointer-events-auto rounded-full bg-black/60 p-4 hover:bg-black/80 transition-all duration-200 shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      )}

      {showPagination && (
        <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center">
          <div className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-black/10">
            {Array.from({ length: images.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-4 w-4 cursor-pointer rounded-full transition-all duration-200 hover:scale-125",
                  current === index ? "bg-black shadow-md" : "bg-gray-400 hover:bg-gray-500",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </Carousel>
  );
};

export function DraggableCardDemo() {
  return <Skiper54 />;
}

export { Skiper54, Carousel_006 };

/**
 * Skiper 54 Carousel_006 — React + Framer Motion
 * Built with shadcn/ui And Embla Carousel - Read docs to learn more https://ui.shadcn.com/docs/components/carousel https://embla-carousel.com/
 *
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */