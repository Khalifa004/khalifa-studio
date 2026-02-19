import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Khalifa Studio — Developer & UI Designer",
    template: "%s · Khalifa Studio",
  },
  description:
    "Front‑end developer and UI designer building fast, accessible, animated web apps with Next.js, TypeScript, Tailwind, and Framer Motion.",
  openGraph: {
    title: "Khalifa Studio —  Developer & UI Designer",
    description:
      "Front‑end developer and UI designer building fast, accessible, animated web apps with Next.js, TypeScript, Tailwind, and Framer Motion.",
    url: "https://khalifa.studio",
    siteName: "Khalifa Studio",
    images: [
      { url: "/images/Cover.png", width: 1200, height: 630, alt: "Khalifa Studio" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalifa Studio — Developer & UI Designer",
    description:
      "Front‑end developer and UI designer building fast, accessible, animated web apps with Next.js, TypeScript, Tailwind, and Framer Motion.",
    images: ["/images/Cover.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen bg-background w-full overflow-x-hidden">
        <ClientLayout>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClientLayout>
      </body>
    </html>
  );
}
