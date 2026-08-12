"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
      <CarouselContent className="-ml-4">
        {artworks.map((artwork, index) => (
          <CarouselItem
            key={artwork.title}
            className="basis-[86%] pl-4 sm:basis-[62%] lg:basis-[43%]"
          >
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.18) }}
              className="group h-full"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden p-3 sm:p-4"
                style={{ backgroundColor: artwork.backdrop }}
              >
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 border border-black/[0.08] transition-colors duration-300 group-hover:border-black/20" />
                <span className="absolute left-4 top-4 bg-background/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-gray-600 backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-black/[0.12] py-4">
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-gray-900">{artwork.title}</h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">
                    {artwork.discipline}
                  </p>
                </div>
                <span className="pt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-gray-400">{artwork.year}</span>
              </div>
            </motion.article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex items-center justify-between border-t border-black/[0.12] pt-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500" aria-live="polite">
          <span className="text-gray-900">{String(current + 1).padStart(2, "0")}</span>
          <span className="px-2 text-gray-300">/</span>
          {String(artworks.length).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous 3D artwork"
            onClick={() => api?.scrollPrev()}
            className="flex h-9 w-9 items-center justify-center border border-black/[0.14] text-gray-700 transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next 3D artwork"
            onClick={() => api?.scrollNext()}
            className="flex h-9 w-9 items-center justify-center border border-black/[0.14] text-gray-700 transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
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
      <div className="mx-auto max-w-7xl border-x border-black/[0.08] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-y border-black/[0.12] py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">Beyond the interface</p>
            <h2 id="three-d-work-heading" className="mt-3 font-serif text-4xl leading-none tracking-[-0.04em] text-gray-950 sm:text-5xl">
              3D explorations
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              A small collection of studies in form, light, and visual storytelling—made to keep my eye for detail sharp beyond product screens.
            </p>
          </div>
          <a
            href="/artwork"
            className="group inline-flex w-fit items-center gap-2 border-b border-black pb-1 text-sm font-medium text-gray-900 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            View all explorations
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
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
