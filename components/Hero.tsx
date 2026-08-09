"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background text-gray-900">
      <div className="mx-auto flex min-h-[78vh] w-full max-w-7xl flex-col border-x border-black/[0.08] px-6 pt-28 sm:px-8 lg:px-12 lg:pt-36">
        <div className="grid flex-1 md:grid-cols-[1.35fr_0.85fr] md:gap-14 lg:gap-24">
          <div className="flex flex-col justify-between pb-14 md:pb-20">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden border border-black/10">
                <Image src="/images/khalif.jpg" alt="Khalifa Seck" fill sizes="40px" className="object-cover" />
              </div>
              <div className="text-sm leading-tight">
                <span className="block font-medium">Khalifa Seck</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">Product engineer · Toronto</span>
              </div>
            </div>

            <div className="mt-16 max-w-3xl md:mt-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">Designing the useful, not just the new</p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.93] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
                Products for learning, focus, and the loose threads of a day.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-700 md:text-lg">
                I&apos;m Khalifa—a product engineer who designs and builds thoughtful digital experiences for learning, focus, and everyday work.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
                From Figma to frontend, I pair systems thinking with a sharp eye for interaction, motion, and the details that make technology feel human.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium">
                <Link href="/allwork" className="group inline-flex items-center gap-2 border-b border-black pb-1 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
                  View selected work <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                </Link>
                <a href="mailto:khalifa.seck@outlook.com" className="group inline-flex items-center gap-2 border-b border-black/25 pb-1 text-gray-600 transition-colors hover:border-black hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
                  Start a conversation <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </div>
            </div>

            <p className="mt-12 max-w-md border-t border-black/10 pt-5 text-sm leading-relaxed text-gray-500">
              Based in Toronto and available for select product and collaboration opportunities.
            </p>
          </div>

          <aside className="border-t border-black/[0.1] py-10 md:mt-16 md:border-l md:border-t-0 md:py-0 md:pl-10 lg:pl-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">A few things I&apos;m making</p>
            <div className="mt-7 border-t border-black/[0.12]">
              <article className="grid grid-cols-[2rem_1fr] gap-3 border-b border-black/[0.12] py-5">
                <span className="font-mono text-[10px] text-gray-400">01</span>
                <div>
                  <h2 className="text-lg font-medium">IntelliCourse</h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">Making adaptive learning feel less transactional.</p>
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">Lead frontend + interaction design</p>
                </div>
              </article>
              <article className="grid grid-cols-[2rem_1fr] gap-3 border-b border-black/[0.12] py-5">
                <span className="font-mono text-[10px] text-gray-400">02</span>
                <div>
                  <a
                    href="https://orin.khalifa.studio/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex w-fit items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-[#f3efe7] font-serif text-xl leading-none text-gray-900 transition-transform duration-300 group-hover:scale-105">O</span>
                    <h2 className="text-lg font-medium transition-opacity group-hover:opacity-60">Orin</h2>
                    <span aria-hidden="true" className="text-sm text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">A lightweight memory layer for the loose context of a workday.</p>
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">Product design + development</p>
                </div>
              </article>
              <article className="grid grid-cols-[2rem_1fr] gap-3 border-b border-black/[0.12] py-5">
                <span className="font-mono text-[10px] text-gray-400">03</span>
                <div>
                  <a
                    href="https://pith.khalifa.studio/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex w-fit items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
                  >
                    <span className="relative h-9 w-9 overflow-hidden rounded-full border border-black/10 bg-[#062c23] transition-transform duration-300 group-hover:scale-105">
                      <Image src="/images/pithnotelogo.png" alt="" fill sizes="36px" className="object-cover" />
                    </span>
                    <h2 className="text-lg font-medium transition-opacity group-hover:opacity-60">Pith</h2>
                    <span aria-hidden="true" className="text-sm text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">A private voice-to-insight companion that works completely offline.</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <Link href="/allwork/pith" className="text-xs font-medium text-gray-500 underline decoration-black/20 underline-offset-4 transition-colors hover:text-black hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
                      Read the case study
                    </Link>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">Product design + development</span>
                  </div>
                </div>
              </article>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
