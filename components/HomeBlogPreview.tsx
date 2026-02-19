"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const blogPreviews = [
    {
        title: "Global AI Summit in Kigali",
        date: "April 2025",
        excerpt: "Invited by Mastercard Foundation as a High-Impact Engineer. Reflecting on the future of AI in education.",
        href: "/blog/global-ai-summit-kigali",
        tags: ["AI Summit", "Kigali"]
    },
    {
        title: "Collaborating for Youth Upskilling",
        date: "December 2024",
        excerpt: "Working with African innovators and governments to bridge the digital skills gap for the next generation.",
        href: "/blog/youth-upskilling-collaboration",
        tags: ["Social Impact", "Education"]
    }
];

export default function HomeBlogPreview() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-light text-black tracking-tight"
                        >
                            Latest Writing
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link href="/blog" className="group flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors">
                            <span>Read all posts</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {blogPreviews.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        >
                            <Link href={post.href} className="group block h-full">
                                <article className="h-full p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-transparent">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{post.date}</span>
                                                <div className="flex gap-2">
                                                    {post.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-200/50 text-[10px] text-gray-500">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 group-hover:text-black transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-8">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center text-sm font-medium text-gray-900 group-hover:underline decoration-gray-300 underline-offset-4">
                                            Read full story
                                            <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
