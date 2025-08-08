// pages/blog/navigating-the-digital-futures.js

"use client";
import Head from 'next/head';
import BlogPostLayout from '@/components/BlogPostLayout';

const NavigatingTheDigitalFutures = () => {
  const title = "Navigating the Digital Futures: My Journey Through OCAD University and Self-Taught Coding";
  const date = "November 19, 2023";
  
  const content = (
    <div className="prose prose-invert">
      <p className="text-base mb-4 leading-relaxed">
        When I first joined OCAD University’s Digital Futures program, I was drawn in by its promise of blending creativity, design, and emerging technologies. It felt like the perfect fit for someone like me who wanted to push boundaries and explore new digital landscapes. The courses were filled with exciting ideas, from interactive media to forward-thinking design concepts. But amidst all this creativity, I hit a major roadblock: coding and web/app design.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        The Challenge: Struggling with Coding and Web/App Design
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        As much as I loved the innovation-driven atmosphere, coding was something I just couldn’t wrap my head around. It seemed like a foreign language, and the structured logic behind it felt far removed from the more intuitive, artistic aspects of the program. I quickly realized that if I wanted to create digital products and applications, I needed to understand not just how they looked, but how they worked. Yet, despite my best efforts during the program, I found myself struggling to make progress in coding and web/app development.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        A Turning Point: Taking Learning into My Own Hands
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        I soon recognized that if I wanted to improve, I’d have to take a different approach. The university provided a solid foundation, but the hands-on technical skills I needed weren’t fully clicking in the classroom setting. That’s when I decided to take control of my own learning journey. I turned to online resources, coding tutorials, and personal projects to bridge the gap in my skills. Whether it was late-night YouTube tutorials or meticulously working through coding exercises, I started teaching myself step by step.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        Building Skills: The Power of Self-Taught Coding
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        It wasn’t easy. Debugging code for hours or facing errors that seemed impossible to solve became regular challenges. But the more I practiced, the more things started to make sense. My understanding of web and app development grew through self-guided projects, where I applied what I learned in real-world scenarios. These projects allowed me to explore ideas that went beyond just theory—combining design with functionality and creating intuitive digital experiences that I was proud of.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        A Creative & Technical Blend: Bringing Ideas to Life
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        Once I gained confidence in coding, I began to see how it could elevate my design work. What started as frustrating and tedious became a powerful tool for bringing my ideas to life. I could now design and build apps that weren’t just visually appealing, but also highly functional. The ability to blend creativity with technical skills opened up a new world of possibilities, and I became more independent and driven in my projects.
      </p>
    </div>
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A blog post detailing my journey through OCAD University’s Digital Futures program and my experience with self-taught coding." />
      </Head>
      <BlogPostLayout title={title} date={date} tags={["OCAD","Learning","Career"]} readingTime="6 min read">
        {content}
      </BlogPostLayout>
    </>
  );
};

export default NavigatingTheDigitalFutures;
