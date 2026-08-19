"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowMark from "./ArrowMark";

const links = [
  { href: "/", label: "Home" },
  { href: "/aboutme", label: "About" },
  { href: "/allwork", label: "Work" },
  { href: "/blog", label: "Writing" },
];

export default function PortfolioNavbar() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-6">
      <div className="pointer-events-auto flex h-14 w-fit items-center rounded-full border border-black/[0.1] bg-[#f7f7f5]/95 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md sm:p-2">
        <nav aria-label="Main navigation" className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-10 items-center rounded-full px-2.5 py-1.5 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 sm:px-3 sm:py-2 sm:text-sm ${
                  isActive
                    ? "bg-black/[0.07] font-medium text-gray-950"
                    : "text-gray-500 hover:bg-black/[0.04] hover:text-gray-900"
                } ${link.label === "About" ? "hidden sm:flex" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:khalifa.seck@outlook.com"
            className="group ml-1 hidden min-h-10 items-center gap-2 rounded-full bg-gray-950 px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 xl:flex"
          >
            Let&apos;s talk <ArrowMark direction="up-right" className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
