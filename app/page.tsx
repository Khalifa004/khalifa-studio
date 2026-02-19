"use client"
import { Bigtext } from "@/components/bigtext";

import Horizontalscroll from "@/components/Horizontalscroll";
import LatestProducts from "@/components/Latestproducts";
import UIShowcase from "@/components/UIShowcase";
import Index from "@/components/ui/ScanMe/Index";
import { DraggableCardDemo } from "@/components/dag3d";
import HomeBlogPreview from "@/components/HomeBlogPreview";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative bg-white w-full overflow-x-hidden">
      {/* Animated Logo */}
      <div className="absolute top-4 \ z-10">
        {/* Uncomment the AnimatedLogo when ready */}
      </div>

      {/* Hero Section - Full Width */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Main Container for Other Sections */}
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        {/* Latest Products */}
        <LatestProducts />
      </div>

      {/* Blog Preview Section */}
      <HomeBlogPreview />

      {/* Sticky Cards Section - Full Width */}
      <div className="w-full">
        <DraggableCardDemo />
      </div>


      {/* Footer */}

    </div>
  );
}
