"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/aboutme", label: "About" },
  { href: "/allwork", label: "Work" },
  { href: "/blog", label: "Writing" },
];

export default function PortfolioNavbar() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      <div className="pointer-events-auto mx-auto mt-4 flex h-14 max-w-7xl items-center justify-between border border-black/[0.12] bg-[#efede7]/95 px-4 shadow-[0_8px_26px_rgba(20,20,20,0.06)] backdrop-blur-md sm:px-5">
        <Link
          href="/"
          className="group flex min-w-0 items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
        >
          <span className="truncate text-sm font-medium tracking-[-0.02em] text-gray-900">Khalifa Seck</span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500 sm:inline">Product engineer</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-5">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`border-b pb-0.5 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 sm:text-sm ${
                  isActive
                    ? "border-gray-900 font-medium text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-400 hover:text-gray-900"
                } ${link.label === "About" ? "hidden sm:inline" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:khalifa.seck@outlook.com"
            className="hidden border-l border-black/[0.12] pl-5 text-sm font-medium text-gray-900 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 lg:inline"
          >
            Let&apos;s talk ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
