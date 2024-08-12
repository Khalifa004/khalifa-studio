import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";



import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khalifa Studio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          
     
        >
          <TooltipProvider delayDuration={0}>
            <Navbar />
            {children}
          </TooltipProvider>
        </ThemeProvider>
       
      </body>
    </html>
  );
}
