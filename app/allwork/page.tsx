"use client"; // Keep this directive at the top
import React from "react";

import Latestwork from "@/components/Latestwork";

export default function Home() {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div className="relative">



      {/* Main Container for Responsive Layout */}
      <div >


        <Latestwork/>

      </div>

     
    
    </div>
  );
}
