import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NorthStar: Reimagining the intercity journey",
  description:
    "A future-mobility product design case study by Khalifa Seck, exploring a more considered intercity rail experience.",
};

export default function NorthStarLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
