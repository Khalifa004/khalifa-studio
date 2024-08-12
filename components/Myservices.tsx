

import React from "react";


import { Card, Carousel } from "./ui/apple-cards-carousel";
import BoxReveal from "./ui/box-reveal";


export function MyServices() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="Services" className="pb-20" >
      <BoxReveal>
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold dark:text-[#BEF264]  font-sans">
          My services
        </h2>
      </BoxReveal>
      <Carousel items={cards} />
    </div>
  );
}

interface DummyContentProps {
  text: string;
  src: string;
  email: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ text, src, email }) => {
  return (
    <div className="bg-[#dfdfdf] dark:bg-[#000000] p-8 md:p-14 rounded-3xl mb-4">
      <div className="  text-base md:text-2xl font-sans max-w-3xl mx-auto space-y-6">
        {text.split("\n").map((paragraph, index) => {
          const isTitle = paragraph.includes(":");
          const boldText = isTitle ? paragraph.split(":")[0] : "";
          const normalText = isTitle ? paragraph.split(":")[1] : paragraph;

          return (
            <p
              key={index}
              className={`${
                isTitle ? "font-light text-neutral-700 dark:text-neutral-200" : ""
              }`}
            >
              {boldText && <span className="font-bold">{boldText}:</span>} {normalText}
            </p>
          );
        })}
        <a
          href={`mailto:${email}`}
          className="inline-block mt-4 px-6 py-3 bg-gray-800 text-white text-lg font-bold rounded-2xl hover:bg-blue-700 transition-colors"
        >
          Let me know what you are looking for!
        </a>
      </div>
    
    </div>
  );
};

const data = [
  {
    category: "Web Development",
    title: "Portfolio",
    src: "/portfolioima.png",
    content: (
      <DummyContent
        text={`Are you looking to create a stunning and professional online portfolio that showcases your work and skills? Look no further! I specialize in building custom portfolios using Next.js, a powerful and flexible framework that ensures your portfolio is not only visually appealing but also highly performant.
        \nWhat I Offer:
        \nCustom Design: Tailored designs that reflect your personal brand and style, ensuring a unique and professional online presence.
        \nResponsive Layouts: Portfolios that look great on any device, providing a seamless experience for your audience.
        \nSEO Optimization: Enhance your visibility on search engines with built-in SEO best practices.
        \nFast Loading Speed: Next.js ensures your portfolio loads quickly, keeping your visitors engaged.
        \nInteractive Features: Add dynamic elements to your portfolio, such as animations, galleries, and more.
        \nEasy Updates: User-friendly content management allows you to easily update your portfolio with new projects and information.
        \nWhy Choose Next.js?
        \nNext.js is a cutting-edge framework that combines the best of React and static site generation. This means your portfolio will be fast, secure, and scalable. Whether you're a designer, developer, photographer, or any other creative professional, a Next.js portfolio will elevate your online presence and help you stand out in your field.
        \nGet Started Today!
        \nTransform your online presence with a custom-built portfolio that showcases your talents and achievements. Contact me today to discuss your vision and get started on your Next.js portfolio.`}
        src="/portfolioima.png"
        email="khalifa.seck@protonmail.com"
      />
    ),
  },
  {
    category: "3D Models",
    title: "Abstract Formations.",
    src: "/3Dservice.png",
    content: (
      <DummyContent
        text={`Explore the realm of 3D modeling and bring your ideas to life with stunning visual representations. Whether for product visualization, architectural renderings, or creative projects, I provide top-notch 3D modeling services.
        \nWhat I Offer:
        \nConcept Development: Transform your ideas into detailed 3D models with precision and creativity.
        \nRendering: Produce high-quality renderings that showcase your models in the best possible light.
        \nAnimation: Create dynamic animations to bring movement and life to your 3D models.
        \nTexturing: Apply realistic textures and materials to enhance the visual appeal of your models.
      `}
        src="/3Dservice.png"
        email="khalifa.seck@protonmail.com"
      />
    ),
  },
  {
    category: "Product Design",
    title: "Enhance your productivity.",
    src: "/prodserv.png",
    content: (
      <DummyContent
        text={`Discover the art of product design and how it can elevate your business to new heights. I offer a comprehensive range of services to ensure your products not only meet but exceed customer expectations.
        \nWhat I Offer:
        \nUser Research: Gain insights into your target audience to create products that truly resonate with them.
        \nPrototyping: Develop interactive prototypes to visualize and test your product concepts.
        \nUsability Testing: Ensure your products are intuitive and user-friendly through rigorous testing.
        \nVisual Design: Create aesthetically pleasing designs that capture the essence of your brand.
        \nIteration: Continuously improve your product designs based on user feedback and market trends.
        \nCollaboration: Work closely with your team to ensure a seamless integration of design and functionality.
        \nProduct design is a collaborative and iterative process that combines creativity and practicality. Let’s work together to create products that delight your customers and drive business success.
        \nGet Started Today!
        \nTransform your product ideas into reality with a design process that prioritizes user experience and innovative solutions. Contact me today to start your product design journey.`}
        src="/prodserv.png"
        email="khalifa.seck@protonmail.com"
      />
    ),
  },

];
