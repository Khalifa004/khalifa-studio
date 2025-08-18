"use client"
import { Bigtext } from "@/components/bigtext";
import Hero from "@/components/Hero";
import Horizontalscroll from "@/components/Horizontalscroll";
import LatestProducts from "@/components/Latestproducts";
import UIShowcase from "@/components/UIShowcase";
import Index from "@/components/ui/ScanMe/Index";

export default function Home() {
  return (
    <div className="relative bg-[hsl(0,0%,98%)] w-full overflow-x-hidden">
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
      
      {/* UI Showcase Section */}
      {/* <UIShowcase />
       */}
      {/* 3D Work Horizontal Scroll */}
      <Horizontalscroll/>

        {/* Footer */}
   

      <div className="fixed bottom-0 right-0 z-20 p-4 shadow-md">
     
        <Index />
      </div>
    </div>
  );
}
