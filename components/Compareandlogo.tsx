

import { Compare } from "./ui/compare";


import { useTheme } from 'next-themes';
import React, { useMemo } from "react";
import { Cover } from "./ui/cover";

const Compareandlogo = () => {
  const { theme } = useTheme();

  // Use useMemo to memoize the firstImage based on the theme
  const firstImage = useMemo(() => (theme === 'dark' ? 'black.jpg' : 'beige.png'), [theme]);

  return (
    <section id="about" className="sm:flex justify-center items-center w-full pb-20">
      <div >
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
       On my free time I make 3D renders <br /> on <Cover href="https://k-renders-weld.vercel.app/" className="dark:text-[#BEF264]">this site</Cover>
      </h1>
    </div>
      <div className="mt-10 flex justify-center items-center  h-[300px] md:w-[700px] md:h-[700px] sm:ml-20">
        <Compare
          firstImage="compare333.png" 
          secondImage={firstImage} // Update these paths to the actual image sources
          firstImageClassName="object-cover object-center-top"
          secondImageClassname="object-cover object-center-top" // Corrected casing
          className="h-[400px] w-[400px] md:h-[800px] md:w-[800px] sm:h-[400px] sm:w-[400px]"
          slideMode="hover"
           autoplay={true}
        />
      </div>
    </section>
  );
};

export default Compareandlogo;
