"use client";

import React, { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { FaHome } from "react-icons/fa";
import Namehero from "@/components/Namehero";
import Eight from "@/components/Eight";
import Myworks from "@/components/Myworks";
import Compareandlogo from "@/components/Compareandlogo";
import { MyServices } from "@/components/Myservices";
import Poweredby from "@/components/Poweredby";
import Footer from "@/components/Footer";
import { LayoutGridDemo } from "@/components/3dimages";
import Textpass from "@/components/Textpass";
import Expandable from "@/components/ui/expandable";

// Uncomment if needed
// import Study from "@components/Study";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
];

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <PropagateLoader color="white" size={25} />
      </div>
    );
  }

  return (
    
    
    <main className="flex flex-col items-center mx-auto sm:px-10 px-5 overflow-hidden">

      <Namehero />

      <div className="max-w-5xl w-full">
        <Eight />
        <Myworks />
      </div>

     

      <div className="max-w-full w-full ">
        <Compareandlogo />
    <Textpass/>
    <div className="flex items-center justify-center">
  <div className="max-w-4xl max-h-8xl w-full ">
  <LayoutGridDemo />
  </div>
</div>

       
      </div>
     
      
      <MyServices />
      <Poweredby />
      <Footer />
     
    </main>
         );
};

export default Home;
