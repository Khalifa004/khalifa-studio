"use client"
import LatestProducts from "@/components/Latestproducts";
import { DraggableCardDemo } from "@/components/dag3d";
import HomeBlogPreview from "@/components/HomeBlogPreview";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative bg-background w-full overflow-x-hidden">
      <div className="w-full">
        <Hero />
      </div>

      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        {/* Latest Products */}
        <LatestProducts />
      </div>

      <HomeBlogPreview />

      <div className="w-full">
        <DraggableCardDemo />
      </div>
    </div>
  );
}
