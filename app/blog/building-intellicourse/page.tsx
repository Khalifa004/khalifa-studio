"use client";
import Head from 'next/head';
import BlogPostLayout from '@/components/BlogPostLayout';

const BuildingIntelliCourse = () => {
  const title = "Building IntelliCourse — My Journey into AI-Powered Learning";
  const date = "August 08, 2025";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="How I designed and built IntelliCourse, an AI-powered learning platform that generates courses, assignments, and adaptive feedback."
        />
      </Head>
      <BlogPostLayout title={title} date={date} tags={["AI","EdTech","Next.js"]} readingTime="6 min read">
            <p>
              Over the past year, I’ve been working on something that has challenged me as both a designer and a developer: IntelliCourse.
              It began as a simple question. What if creating a complete, personalized course could be as easy as telling an AI what you want to learn? No endless searches, no patchwork of videos and articles, no uncertainty about the quality of the content. Just say “I want to learn this” and get a structured, ready-to-use learning path.
            </p>
            <p>
              That became the core of IntelliCourse, an AI-powered platform that creates courses, assignments, and grading in one place. It acts like a personal tutor who not only knows your goals but adapts to your pace and style of learning.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-2 pb-2 border-b border-gray-200">From idea to prototype</h2>
            <p>
              At first, the vision felt ambitious. Could AI reliably generate high-quality learning material? Would people embrace this style of learning? How could we make the platform feel human, not like another faceless tech tool?
            </p>
            <p>
              I started with a simple, clean interface that would feel inviting to new learners while staying modern and intuitive. The platform needed to be a safe, encouraging place to experiment and grow.
            </p>
            <p>
              We built the course generator with the ChatGPT API, then connected the YouTube API to pull in relevant videos for each lesson. The result was seamless: ask for a course on “Python for data analysis” and, within seconds, IntelliCourse would return modules with reading material, videos, and assignments.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-2 pb-2 border-b border-gray-200">Making it more than just content</h2>
            <p>
              The next breakthrough came when we added AI-powered grading and feedback. Instead of generic results, IntelliCourse could explain why an answer was wrong, suggest resources, and adjust the next lesson accordingly. This transformed it from a course generator into a learning companion.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-2 pb-2 border-b border-gray-200">Designing for real people</h2>
            <p>
              A big focus for me was making IntelliCourse work in low-connectivity environments. For learners in certain parts of Africa, reliable internet isn’t guaranteed. We built offline-ready modules and what we called CDOM (Course Data Offline Mode) so users could download lessons, complete them offline, and sync later. For many students, this wasn’t optional—it was the only way they could fully use the platform.
            </p>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-gray-700 italic">
                “Ask for a course on Python for data analysis and within seconds, IntelliCourse returns modules with reading material, videos, and assignments.”
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-2 pb-2 border-b border-gray-200">Why this mattered to me</h2>
            <p>
              This project gave me the chance to merge creativity and technical problem-solving. I was designing interfaces, mapping user journeys, and thinking about accessibility while also building API integrations and improving performance.
            </p>
            <p>
              The highlight came during the Global AI Summit in Kigali, where I met students, educators, and innovators from across Africa. Their feedback and enthusiasm reinforced that education is about more than just access—it’s about delivering quality learning experiences. I believe AI, used thoughtfully, can play a huge role in that.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-2 pb-2 border-b border-gray-200">Looking forward</h2>
            <p>
              IntelliCourse is still evolving. Feedback from our beta testers has shaped everything from quiz difficulty to how videos are displayed. We’ve begun exploring partnerships with schools, NGOs, and government programs.
            </p>
            <p>
              There’s still more to build, but seeing someone learn something new because of a tool you helped create is an incredible feeling. For me, IntelliCourse wasn’t just a project—it was proof that you can take an ambitious idea and turn it into something real when design, technology, and empathy work together.
            </p>
      </BlogPostLayout>
    </>
  );
};

export default BuildingIntelliCourse;

