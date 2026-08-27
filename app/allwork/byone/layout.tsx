import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "byOne: A calmer way to train",
  description:
    "A product case study for byOne, a local-first iPhone workout tracker designed and built by Khalifa Seck.",
};

export default function ByOneLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
