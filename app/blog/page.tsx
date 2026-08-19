"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArrowMark from "@/components/ArrowMark";

type BlogPost = {
  title: string;
  date: string;
  href: string;
  category: string;
  excerpt: string;
  avatar: string;
  avatarClass?: string;
  avatarLabel: string;
};

const posts: BlogPost[] = [
  {
    title: "Building IntelliCourse: My Journey into AI-Powered Learning",
    date: "August 2025",
    href: "/blog/building-intellicourse",
    category: "Product build",
    excerpt: "What it takes to design a learning platform that feels adaptive, useful, and grounded in a learner’s actual pace.",
    avatar: "/images/intellicoursecover.jpg",
    avatarLabel: "IntelliCourse",
  },
  {
    title: "Global AI Summit in Kigali",
    date: "April 2025",
    href: "/blog/global-ai-summit-kigali",
    category: "Field note",
    excerpt: "Invited by Mastercard Foundation as a High-Impact Engineer, reflecting on AI in education and who gets to shape its future.",
    avatar: "/mastercard.webp",
    avatarLabel: "Mastercard Foundation",
  },
  {
    title: "Collaborating for Youth Upskilling",
    date: "December 2024",
    href: "/blog/youth-upskilling-collaboration",
    category: "Social impact",
    excerpt: "Notes from collaborating with African innovators and governments to help close the digital skills gap.",
    avatar: "/images/kigali.png",
    avatarLabel: "Youth upskilling collaboration",
  },
  {
    title: "My Pomodoro Journey: Creating Pomora",
    date: "November 2024",
    href: "/blog/pomora",
    category: "Product build",
    excerpt: "The thinking behind a calmer focus tool, where structure, feedback, and a little delight make concentration easier to return to.",
    avatar: "/images/pomoralogo.svg",
    avatarClass: "object-contain p-1.5",
    avatarLabel: "Pomora",
  },
  {
    title: "The Evolution of My Career Through AI Innovation",
    date: "July 2024",
    href: "/blog/new-milestone-in-my-career",
    category: "Reflection",
    excerpt: "A look at the experiments, collaborators, and turning points that continue to shape my work in technology.",
    avatar: "/framer.png",
    avatarLabel: "Framer Motion",
  },
  {
    title: "Navigating the Digital Futures: My Journey Through OCAD University and Self-Taught Coding",
    date: "December 2023",
    href: "/blog/OCADJourney",
    category: "Reflection",
    excerpt: "How design education and self-directed code became one practice for turning ideas into experiences.",
    avatar: "/images/khalif.jpg",
    avatarLabel: "Khalifa Seck",
  },
  {
    title: "Harnessing Framer Motion for Dynamic Web Experiences",
    date: "September 2023",
    href: "/blog/Framermotion",
    category: "Craft note",
    excerpt: "A practical look at using motion to clarify interaction, guide attention, and make an interface feel more alive.",
    avatar: "/images/khalif.jpg",
    avatarLabel: "Khalifa Seck",
  },
];

export default function Blog() {
  return (
    <motion.main
      className="min-h-screen overflow-x-hidden bg-background text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mx-auto max-w-[90rem] px-5 pb-20 pt-28 sm:px-8 sm:pt-32 md:pb-28">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 border-b border-black/[0.1] pb-14 md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-20"
        >
          <div>
            <p className="text-sm text-gray-500">Notes from the work</p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.07em] text-gray-950">
              Writing about the work behind the work.
            </h1>
          </div>
          <div className="md:pb-1">
            <p className="max-w-md text-base leading-relaxed text-gray-600">
              Product notes, field observations, and reflections on the systems, people, and experiments that shape how I design and build.
            </p>
            <div className="mt-8 flex items-center gap-4 text-xs text-gray-500">
              <span>07 essays</span>
              <span className="h-px w-7 bg-black/15" />
              <span>2023 to 2025</span>
            </div>
          </div>
        </motion.header>

        <section className="mt-12 border-t border-black/[0.1]" aria-label="Writing">
          {posts.map((post, index) => (
            <motion.article
              key={post.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.25), ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-black/[0.1]"
            >
              <Link
                href={post.href}
                aria-label={`Read ${post.title}`}
                className="group grid gap-5 py-8 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 sm:grid-cols-[2.5rem_3rem_minmax(0,1fr)_auto] sm:items-start sm:gap-5 sm:py-11"
              >
                <span className="text-xs text-gray-400">{String(index + 1).padStart(2, "0")}</span>

                <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                  <Image
                    src={post.avatar}
                    alt={post.avatarLabel}
                    fill
                    sizes="40px"
                    className={post.avatarClass ?? "object-cover"}
                  />
                </span>

                <div className="sm:pr-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-500">
                    <span>{post.category}</span>
                    <span className="hidden h-px w-4 bg-black/15 sm:block" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-[0.96] tracking-[-0.055em] text-gray-950 transition-colors group-hover:text-gray-500 sm:text-4xl md:text-5xl">
                    {post.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">{post.excerpt}</p>
                </div>

                <span className="hidden items-center gap-2 self-center text-sm font-medium text-gray-700 transition-transform group-hover:translate-x-1 sm:inline-flex">
                  Read <ArrowMark direction="up-right" className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.article>
          ))}
        </section>
      </div>
    </motion.main>
  );
}
