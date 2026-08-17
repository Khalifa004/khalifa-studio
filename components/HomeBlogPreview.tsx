"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const blogPreviews = [
  {
    title: "Global AI Summit in Kigali",
    date: "April 2025",
    excerpt: "Invited by Mastercard Foundation as a High-Impact Engineer. Reflecting on the future of AI in education.",
    href: "/blog/global-ai-summit-kigali",
    tags: ["AI Summit", "Kigali"],
    partner: { label: "With Mastercard Foundation", image: "/mastercard.webp" },
  },
  {
    title: "Collaborating for Youth Upskilling",
    date: "December 2024",
    excerpt: "Working with African innovators and governments to bridge the digital skills gap for the next generation.",
    href: "/blog/youth-upskilling-collaboration",
    tags: ["Social Impact", "Education"],
    label: "Latest note",
  },
];

export default function HomeBlogPreview() {
  return (
    <section className="w-full bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[90rem] border-t border-black/[0.1] px-5 pt-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-5 pb-12 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-gray-500">From the journal</p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-3 text-[clamp(2.5rem,5.5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.065em] text-gray-950">
              Latest Writing
            </motion.h2>
          </div>
          <Link href="/blog" className="group inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-4 py-2.5 text-sm font-medium text-gray-950 transition-colors hover:border-black">
            Read all posts <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="border-t border-black/[0.1]">
          {blogPreviews.map((post, index) => (
            <motion.article key={post.href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="border-b border-black/[0.1]">
              <Link href={post.href} className="group grid gap-5 py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 md:grid-cols-[4rem_minmax(0,1.55fr)_minmax(14rem,0.8fr)_auto] md:items-start md:gap-8 md:py-10">
                <span className="text-xs text-gray-400">0{index + 1}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    {post.partner ? <><span className="relative h-6 w-6 overflow-hidden rounded-full bg-white"><Image src={post.partner.image} alt="Mastercard Foundation" fill sizes="24px" className="object-cover" /></span><span>{post.partner.label}</span></> : <span>{post.label}</span>}
                    <span className="text-gray-300">/</span><span>{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-medium leading-[0.96] tracking-[-0.055em] text-gray-950 transition-colors group-hover:text-gray-500 md:text-4xl">{post.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 md:pt-1">{post.excerpt}</p>
                <div className="flex items-center gap-2 md:flex-col md:items-end md:gap-3">
                  {post.tags.map((tag) => <span key={tag} className="rounded-full bg-black/[0.05] px-2.5 py-1 text-[10px] text-gray-600">{tag}</span>)}
                  <ArrowUpRight className="ml-auto h-5 w-5 text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:mt-5" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
