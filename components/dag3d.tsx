"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArrowMark from "./ArrowMark";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Artwork = {
  src: string;
  alt: string;
  title: string;
  discipline: string;
  year: string;
  backdrop: string;
};

const artworks: Artwork[] = [
  {
    src: "/images/art-1.jpg",
    alt: "Max Flyo 3D character study",
    title: "Max Flyo",
    discipline: "Character study",
    year: "2024",
    backdrop: "#e9e5dd",
  },
  {
    src: "/images/art-2.jpg",
    alt: "Khaz Headphones 3D product render",
    title: "Khaz Headphones",
    discipline: "Product visualization",
    year: "2024",
    backdrop: "#ebe9e5",
  },
  {
    src: "/images/art-3.jpg",
    alt: "Madrid 3D environment study",
    title: "Madrid",
    discipline: "Environment study",
    year: "2023",
    backdrop: "#e6e2dc",
  },
  {
    src: "/images/art-4.jpg",
    alt: "Dystopian Station 3D environment study",
    title: "Dystopian Station",
    discipline: "World building",
    year: "2023",
    backdrop: "#e8e5df",
  },
  {
    src: "/images/art-6.jpg",
    alt: "Drone 3D product study",
    title: "Drone",
    discipline: "Product study",
    year: "2023",
    backdrop: "#e7e5e1",
  },
];

function ArtworkCarousel({ className }: { className?: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className={cn("w-full", className)}
      opts={{ align: "start", loop: true, slidesToScroll: 1 }}
    >
      <CarouselContent className="-ml-3">
        {artworks.map((artwork, index) => (
          <CarouselItem
            key={artwork.title}
            className="basis-[88%] pl-3 sm:basis-[61%] lg:basis-[44%]"
          >
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.18) }}
              className="group h-full"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-white/[0.08]" style={{ backgroundColor: artwork.backdrop }}>
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/20 py-4">
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.04em] text-white">{artwork.title}</h3>
                  <p className="mt-1 text-xs text-white/60">
                    {artwork.discipline}
                  </p>
                </div>
                <span className="pt-1 text-xs text-white/45">{artwork.year}</span>
              </div>
            </motion.article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-4">
        <p className="text-xs text-white/55" aria-live="polite">
          <span className="text-white">{String(current + 1).padStart(2, "0")}</span>
          <span className="px-2 text-white/30">/</span>
          {String(artworks.length).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous 3D artwork"
            onClick={() => api?.scrollPrev()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next 3D artwork"
            onClick={() => api?.scrollNext()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </Carousel>
  );
}

export function DraggableCardDemo() {
  return (
    <section aria-labelledby="three-d-work-heading" className="w-full bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[90rem] rounded-[1.5rem] bg-[#20201f] px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
        <div className="grid gap-8 border-b border-white/20 pb-9 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-12">
          <div className="max-w-2xl">
            <p className="text-sm text-white/55">Beyond the interface</p>
            <h2 id="three-d-work-heading" className="mt-4 text-[clamp(2.5rem,5.5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">
              3D explorations
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              A small collection of studies in form, light, and visual storytelling, made to keep my eye for detail sharp beyond product screens.
            </p>
          </div>
          <a
            href="/artwork"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View all explorations
            <ArrowMark direction="up-right" className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="pt-8 sm:pt-10">
          <ArtworkCarousel />
        </div>
      </div>
    </section>
  );
}

export { ArtworkCarousel };
