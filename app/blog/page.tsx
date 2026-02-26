"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  date: string;
  href: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      title: 'Global AI Summit in Kigali',
      date: 'April 2025',
      href: '/blog/global-ai-summit-kigali',
    },
    {
      title: 'Collaborating for Youth Upskilling',
      date: 'December 2024',
      href: '/blog/youth-upskilling-collaboration',
    },
    {
      title: 'Building IntelliCourse — My Journey into AI-Powered Learning',
      date: 'August 08, 2025',
      href: '/blog/building-intellicourse',
    },
    {
      title: 'The Evolution of My Career Through AI Innovation',
      date: 'July 13, 2024',
      href: '/blog/new-milestone-in-my-career',
    },
    {
      title: 'Navigating the Digital Futures: My Journey Through OCAD University and Self-Taught Coding',
      date: 'December 19, 2023',
      href: '/blog/OCADJourney',
    },
    {
      title: 'Harnessing Framer Motion for Dynamic Web Experiences',
      date: 'September 09, 2023',
      href: '/blog/Framermotion',
    },
    {
      title: 'My Pomodoro Journey: Creating Pomora',
      date: 'November 09, 2024',
      href: '/blog/pomora',
    },
  ];

  return (
    <motion.main
      className="bg-background text-gray-600 min-h-screen font-sans antialiased overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-32 md:py-48">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 tracking-tight leading-[0.9] mb-20 md:mb-32">
          Notes & <br className="hidden md:block" />Observations
        </h1>

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {posts.map((post, index) => (
            <Link
              key={index}
              className="group flex flex-col items-start gap-3 border-b border-black/5 pb-6 hover:border-black/20 transition-colors"
              href={post.href}
              aria-label={`Read more about ${post.title}`}
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors">{post.date}</span>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight group-hover:opacity-60 transition-opacity">{post.title}</h2>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}
