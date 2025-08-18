"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

const CalWidget = dynamic(() => import("@/components/ui/bookings/CalWidget"), {
  ssr: false,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      <div className="flex justify-center w-full">
        <Navbar />
      </div>
      {children}
      <CalWidget />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </>
  );
}
