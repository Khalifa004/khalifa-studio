"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const Horizontalscroll = () => {
    const cardsData = [
      { id: 1, image: "/images/art-2.jpg" },
      { id: 2, image: "/images/art-1.jpg" },
      { id: 3, image: "/images/art-2.gif" },
      { id: 4, image: "/images/art-3.jpg" },
      { id: 5, image: "/images/art-4.jpg" },
    ];
  
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll__start",
          start: "15% center",
          end: "85% center",
          pin: "#scroll__pin",
          pinSpacing: false,
          scrub: 2,
        },
      });
  
      tl.to("#scroll__pin", {
        x: "-70%",
        duration: 0.5,
        ease: "power2.out",
      });
    });
  
    return (
      <div
        id="scroll__start"
        className="h-[300vh] overflow-x-hidden mr-10 lg:block hidden" // Hide on small screens
      >
        <div className="h-screen flex justify-start items-center">
          <div id="scroll__pin" className="flex justify-start gap-x-48">
            {cardsData.map((d) => (
              <div key={d.id} className="aspect-square w-[700px]">
                <img
                  className="w-full h-full object-cover object-top rounded-[40px]"
                  alt="3d work"
                  src={d.image}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Horizontalscroll;
  