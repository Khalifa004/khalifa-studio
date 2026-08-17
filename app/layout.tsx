import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "@/components/ClientLayout";

const sansFont = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-sans-local",
  display: "swap",
});

const monoFont = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  display: "swap",
});

const accentFont = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-comfortaa",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Khalifa Studio: Product Engineer",
    template: "%s · Khalifa Studio",
  },
  description:
    "Front‑end developer and UI designer building fast, accessible, animated web apps with Next.js, TypeScript, Tailwind, and Framer Motion.",
  openGraph: {
    title: "Khalifa Studio: Product Engineer",
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
    title: "Khalifa Studio: Developer & UI Designer",
    description:
      "Front‑end developer and UI designer building fast, accessible, animated web apps with Next.js, TypeScript, Tailwind, and Framer Motion.",
    images: ["/images/Cover.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <body className={`min-h-screen bg-background w-full overflow-x-clip ${sansFont.variable} ${monoFont.variable} ${accentFont.variable}`}>
        <ClientLayout>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClientLayout>
      </body>
    </html>
  );
}
