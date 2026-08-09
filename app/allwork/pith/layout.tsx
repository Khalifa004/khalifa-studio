import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pith — Private voice, structured thought",
  description:
    "A product case study for Pith, an offline voice-to-insight iOS app designed and built by Khalifa Seck.",
};

export default function PithLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
