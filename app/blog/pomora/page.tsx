"use client";

import Head from 'next/head';
import BlogPostLayout from '@/components/BlogPostLayout';

const MyPomodoroJourneyCreatingPomora = () => {
  const title = "My Pomodoro Journey: Creating Pomora";
  const date = "July 15, 2024";
  
  const content = (
    <div className="prose prose-invert">
      <p className="text-base mb-4 leading-relaxed">
        Hey there! So, I've got to tell you about this crazy ride I've been on lately. You know how sometimes you get an idea stuck in your head and it just won't let go? Well, that's what happened to me with this whole Pomodoro thing. I mean, I've always been a bit of a productivity nerd (okay, maybe more than a bit), but this time I really went off the deep end.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        The "Aha!" Moment
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        It all started when I was pulling one of those classic all-nighters, you know the type - fueled by too much coffee and the sheer panic of a looming deadline. I thought to myself, "There's got to be a better way!" And that's when it hit me - why not create a Pomodoro app that actually gets me? Thus, Pomora was born (well, conceptually at least - the actual birth was a lot messier and involved way more debugging).
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        The "What Have I Gotten Myself Into?" Phase
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        Let me tell you, building Pomora was no walk in the park. There were days when I thought my computer was plotting against me. I mean, how hard could it be to make a timer that works across different time zones? Turns out, pretty darn hard! But you know what? Each bug I squashed (and there were many) felt like a personal victory. It was like playing a really frustrating game where the reward is a slightly less frustrating game.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        The "People Actually Use This?" Revelation
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        The real kicker came when people started using Pomora. And not just using it, but sending me messages about how it's changed their work habits. It was mind-blowing! There I was, thinking I'd made this quirky little tool for myself, and suddenly I'm getting feature requests and bug reports (mostly polite, thankfully). It's like I accidentally started a tiny productivity revolution from my laptop.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        The "What's Next?" Daydream
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        Now, I'm dreaming big. I'm talking AI that knows when you need a break before you do, integrations with every app under the sun, maybe even a Pomora coffee maker that brews a fresh cup right as your work session ends (patent pending, don't steal my idea!). But seriously, seeing Pomora grow from a late-night idea to a tool that's actually helping people - it's been incredible.
      </p>
      <p className="text-base mb-4 leading-relaxed">
        So here's to Pomora, to crazy ideas, to countless hours of coding, and to all of you who've joined me on this wild ride. Who knew that a simple tomato timer could lead to all this? If you haven't tried Pomora yet, come check it out. And if you have any ideas on how to make it even better, hit me up. Just remember, if you suggest the coffee maker integration, I called dibs!
      </p>
    </div>
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A personal account of my journey in creating Pomora, a unique Pomodoro platform, and how it's revolutionizing productivity." />
      </Head>
      <BlogPostLayout title={title} date={date} tags={["Productivity","React"]} readingTime="4 min read">
        {content}
      </BlogPostLayout>
    </>
  );
};

export default MyPomodoroJourneyCreatingPomora;