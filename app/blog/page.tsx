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
      className="bg-background text-gray-900 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto p-4 mt-36">
        <h1 className="text-5xl font-bold text-left mb-10">I write sometimes...</h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 px-l mb-40 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {posts.map((post, index) => (
            <Link
              key={index}
              className="flex px-4 mx-4  rounded-lg transition-shadow duration-300 relative group hover:shadow-lg"
              href={post.href}
              aria-label={`Read more about ${post.title}`}
            >
              <div className="flex items-start relative py-4">
                <motion.div
                  className="flex bg-gray-300 w-8 h-[0.125rem] absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300"
                  initial={{ rotate: 90 }}
                  whileHover={{ rotate: 0 }}
                />
                <motion.div
                  className="ml-10 flex flex-col"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h2 className="text-xl font-bold text-gray-800 pb-3">{post.title}</h2>
                  <span className="text-gray-600 text-sm">{post.date}</span>
                </motion.div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}
