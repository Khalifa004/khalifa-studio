"use client";
import Head from 'next/head';
import BlogPostLayout from '@/components/BlogPostLayout';
import 'prismjs/themes/prism-tomorrow.css'; // Ensure Prism theme is imported
import Prism from 'prismjs'; // Import Prism
import { useEffect } from 'react';
import { IconCopy } from '@tabler/icons-react'; // Import the code icon

const HarnessingFramerMotion = () => {
  const title = "Harnessing Framer Motion for Dynamic Web Experiences";
  const date = "September 9, 2023";

  const content = (
    <div className="prose prose-invert">
      <p className="text-base mb-4 leading-relaxed">
        Animations can breathe life into web applications, making them more engaging and user-friendly. In this post, I’ll share how I’ve been using Framer Motion to create dynamic web experiences that captivate users and enhance interactivity.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        Why Choose Framer Motion?
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        Framer Motion stands out as a powerful library for adding animations in React applications. It provides a simple and intuitive API that lets you create complex animations without getting bogged down in details. It’s perfect for both beginners and experienced developers looking to add flair to their projects.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        Getting Started with a Basic Animation
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        Starting with Framer Motion is easy. Here’s a quick example of a simple scale animation on hover:
      </p>
      <CodeBlock code={`
import { motion } from 'framer-motion';

const ScaleOnHover = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }} 
      transition={{ duration: 0.3 }}
      className="bg-blue-500 p-6 rounded-lg"
    >
      <h2 className="text-black text-xl">Hover over me!</h2>
    </motion.div>
  );
};
      `} />
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        Using Variants for More Control
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        Variants in Framer Motion allow you to define multiple animation states for your components. This feature is great for creating complex animations that require more control. For example, you can create different states for hovering, tap, and even loading:
      </p>
      <CodeBlock code={`
const boxVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1 },
};

const AnimatedBox = () => {
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      className="bg-green-500 p-6 rounded-lg"
    >
      <h2 className="text-black text-xl">I change on hover!</h2>
    </motion.div>
  );
};
      `} />
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        Adding More Complexity
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        Once you're comfortable with basic animations, you can start experimenting with more complex interactions, like staggering animations or even drag-and-drop functionality. These features make your app feel more interactive and responsive to user actions. Here’s an example of staggering animations:
      </p>
      <CodeBlock code={`
const staggeredVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Item = ({ i }) => (
  <motion.div variants={staggeredVariants} className="bg-red-500 p-4 rounded-lg">
    Item {i}
  </motion.div>
);

const StaggeredList = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-col">
      {Array.from({ length: 5 }, (_, i) => (
        <Item key={i} i={i + 1} />
      ))}
    </motion.div>
  );
};
      `} />
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        Best Practices for Animation
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        When implementing animations, it's essential to keep user experience in mind. Here are some best practices:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Use subtle animations to enhance, not distract.</li>
        <li>Test on various devices to ensure performance.</li>
        <li>Combine animations with clear user feedback.</li>
      </ul>
      <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-gray-600 pb-2">
        Conclusion
      </h2>
      <p className="text-base mb-4 leading-relaxed">
        Framer Motion has been a game changer in my design toolkit. By leveraging its capabilities, I can create engaging and dynamic web experiences that resonate with users. I encourage you to explore this library and see how it can elevate your projects.
      </p>
      <p className="text-base mb-4 leading-relaxed">
        Thanks for reading! If you have any questions or want to share your experiences with Framer Motion, feel free to message me.
      </p>
    </div>
  );

  useEffect(() => {
    Prism.highlightAll(); // Ensure code highlighting is applied
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Exploring how to use Framer Motion for creating dynamic web experiences." />
      </Head>
      <BlogPostLayout title={title} date={date} tags={["Motion","React","Framer Motion"]} readingTime="5 min read">
        {content}
      </BlogPostLayout>
    </>
  );
};

// CodeBlock Component
interface CodeBlockProps {
    code: string; // Define the type of the code prop
  }
  
  const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    };
  
    return (
      <div className="relative mb-6">
        <pre className="bg-[#24242450] p-4 rounded-md">
          <code className="language-js text-black">
            {code}
          </code>
        </pre>
        <button 
          onClick={copyToClipboard} 
          className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded flex items-center"
        >
          <IconCopy className="h-4 w-4 mr-1" />
          Copy Code
        </button>
      </div>
    );
  };
  

export default HarnessingFramerMotion;
