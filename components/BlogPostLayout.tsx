"use client";
import Link from "next/link";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  tags?: string[];
  readingTime?: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, date, tags = [], readingTime, children }: BlogPostLayoutProps) {
  return (
    <main className="mt-40 text-gray-900 min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" passHref>
          <button className="flex items-center px-3 py-1 mb-8 rounded-full border border-gray-300 text-gray-700 font-medium text-sm transition-colors hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l6 6m-6-6l6-6" />
            </svg>
            Back to blog
          </button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-8">
          <span>{date}</span>
          {readingTime && (<><span>•</span><span>{readingTime}</span></>)}
          {tags.length > 0 && (
            <div className="flex items-center gap-2">
              {tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs">{t}</span>
              ))}
            </div>
          )}
        </div>

        <article className="max-w-none space-y-6">
          {children}
        </article>
      </div>
    </main>
  );
}

