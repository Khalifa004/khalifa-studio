"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import "swiper/css";
import Image from "next/image";
import { ArrowRight, Train, Crown, Briefcase, Gift, Layout, Mouse, Users, Search, Map, Globe, MessageSquare, Bot, Settings, Clock, MapPin, Calendar, CreditCard, Gem, Zap, Target, TypeIcon as type, LucideIcon, Camera, Plane, Building } from 'lucide-react';

import { HowItWorks } from "@/components/how-it-works";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { AnimatedSection } from "@/components/animated-section";

interface FeatureItem {
  icon: LucideIcon;
  text: string;
}

const features: FeatureItem[] = [
  { icon: Search, text: "Efficient search" },
  { icon: Layout, text: "Customizable options" },
  { icon: Map, text: "Destination highlights" },
  { icon: Globe, text: "Multilingual support" },
  { icon: MessageSquare, text: "User feedback" },
  { icon: Users, text: "Inclusive design" }
];

const loyaltyFeatures: FeatureItem[] = [
  { icon: Train, text: "Earn Points" },
  { icon: Crown, text: "Membership Tiers" },
  { icon: Briefcase, text: "Exclusive Benefits" },
  { icon: Gift, text: "Bonus Opportunities" }
];

const smartBookingFeatures: FeatureItem[] = [
  { icon: Clock, text: "Preferred travel times" },
  { icon: MapPin, text: "Destination details" },
  { icon: Users, text: "Group size" },
  { icon: Calendar, text: "Travel dates" },
  { icon: CreditCard, text: "Budget range" }
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const images = [
  "/images/Northstar1.jpg",
  "/images/Northstar2.png",
  "/images/Northstar3.png",
];

const Page: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA clicked");
  };

  return (
    <CaseStudyLayout
      header={{
        title: 'NorthStar',
        description:
          'Bullet train service concept blending efficient transport with immersive VR experiences across cities.',
        meta: [
          { label: 'Type', value: 'Personal Project' },
          { label: 'Timeframe', value: '21 days' },
          { label: 'Toolkit', value: 'Figma' },
          { label: 'Year', value: '2024' },
        ],
      }}
      sections={[
        {
          title: 'Overview',
          body: (
            <p className="text-lg text-gray-600">A conceptual UX case study exploring ticketing, loyalty, and smart booking flows.</p>
          ),
        },
      ]}
    >

      <AnimatedSection>
        <HowItWorks
          title="A case study"
          subtitle=""
          steps={[
            {
              icon: Zap,
              title: "Project Overview",
              description:
                "NorthStar is a cutting-edge bullet train service that combines efficient transportation with immersive VR experiences, revolutionizing the concept of travel through cities.",
              bulletPoints: [],
            },
            {
              icon: Target,
              title: "Key Features",
              description:
                "Monitor your productivity trends with our insightful analytics, identifying peak performance times.",
              bulletPoints: [
                "Advanced AI-driven navigation systems",
                "Eco-friendly propulsion mechanisms",
                "Seamless integration with existing infrastructure",
              ],
            },
          ]}
          ctaText="Get Started Now"
          onCtaClick={handleCtaClick}
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 px-4 sm:px-6 lg:px-8">
        <ProblemSolution />
        </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 px-4 sm:px-6 lg:px-8">



<div className="text-center sm:text-left p-9">
<span className="text-red-700 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl block">Northstar</span>
<span className="text-white opacity-20 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block mt-2">a ride to enjoy.</span>

<div className="w-full max-w-4xl p-4 text-center">
<div>
  <iframe src="https://player.vimeo.com/video/982739111?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Northstar™"></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
</div>
</div>

<div>



<AnimatedSection className="text-black p-4 rounded">
  <div className="text-black p-6 md:p-8 rounded-3xl  ">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-red-500">Target Audience</h2>

    <div className="mb-10 text-center">
      <p className="text-gray-700 text-lg italic leading-relaxed">
        By defining our target audience, we craft a journey that's as unique as each passenger. Our train service isn't just transportation; it's a tailored experience that resonates with the rhythm of urban life.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <FeatureCard
        icon={Building}
        text="Urban Commuters"
        description="City dwellers who ride the pulse of public transit daily."
      />
      <FeatureCard
        icon={Briefcase}
        text="Business Professionals"
        description="Movers and shakers needing swift, reliable city connections."
      />
      <FeatureCard
        icon={Plane}
        text="Air Travellers"
        description="Globetrotters seeking seamless airport links via rapid rail."
      />
    </div>

    <div className="bg-gray-100 rounded-3xl p-8 space-y-8 shadow-inner">
      <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">Beyond the Commute</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          icon={Camera}
          text="Tourists"
          description="Explorers navigating city wonders with ease and excitement."
        />
        <FeatureCard
          icon={Users}
          text="Events Attendees"
          description="Revelers and conference-goers riding the rails to their next big moment."
        />
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-gray-600 text-sm font-light tracking-wide">
        Every journey tells a story. We're here to make yours unforgettable...
      </p>
    </div>
  </div>
</AnimatedSection>









</div>

</div>


  





        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 px-4 sm:px-6 lg:px-8">

        <VisualDesign images={images} />
        <UIUXDesign features={features} />
        <SmartBooking features={smartBookingFeatures} />
        <SmartBookingImg features={smartBookingFeatures} />
      
      </div>
  


      <BusinessModel />
    </CaseStudyLayout>
  );
};


const FeatureCard: React.FC<FeatureItem & { description?: string }> = ({ icon: Icon, text, description }) => (
  <div className="bg-gray-100 rounded-2xl p-4 space-y-3">
    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
      <Icon className="w-5 h-5 text-red-500" />
    </div>
    <h3 className="text-gray-800 sm:text-xl text-sm font-medium">{text}</h3>
    {description && <p className="text-gray-600 text-sm">{description}</p>}
  </div>
);

const ProblemSolution: React.FC = () => (
  <>
    <AnimatedSection className="text-black p-4">
      <div className="text-black p-4">
        <h3 className="text-black text-7xl font-medium mb-4">The Problem</h3>
        <h4 className="text-red-500 text-xl font-medium mb-2">Too far to drive, too close to fly</h4>
        <p className="text-gray-600 text-lg mb-4">
          The Windsor-Quebec corridor in Canada and the Northeast corridor in the US are home to over 68 million people. With over 600 daily short-haul flights between these cities, there's a significant environmental impact and a lack of efficient alternatives.
        </p>
        <div className="w-full h-48 relative rounded-xl overflow-hidden"></div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="text-black p-4 rounded">
      <div className="text-black p-4 rounded">
        <h3 className="text-black text-7xl font-medium mb-4">The Solution</h3>
        <h4 className="text-gray-700 text-xl font-medium mb-2">Connecting 70+ million people with over 5,000km of new tracks</h4>
        <p className="text-gray-600 text-lg mb-4">
          <span className="text-red-500 font-medium">North Star Express</span> NorthStar introduces a revolutionary transportation system that combines AI, clean energy, and smart infrastructure to create efficient, sustainable, and accessible mobility for all.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          <span className="text-blue-500 font-medium">Star Connector</span> is the local service Connecting smaller communities, without compromising speed and comfort.
        </p>
        <div className="w-full h-96 relative rounded-xl overflow-hidden">
          <Image
            src="/images/northstarmap.png"
            alt="Futuristic, clean transportation system"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </AnimatedSection>
  </>
);


const VisualDesign: React.FC<{ images: string[] }> = ({ images }) => (
  <AnimatedSection className="text-white p-4 rounded">
    <motion.section className="max-w-6xl mx-auto mb-20" variants={fadeInUp}>
      <h2 className="text-4xl font-bold text-center mb-10">Visual Design</h2>
      <div className="flex items-center justify-center relative">
        <div className="scale-75 transform-gpu">
          <DeviceFrameset device="iPhone X" color="gold">
            <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Prototype Screenshot ${index + 1}`}
                     
                      className="rounded-lg object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </DeviceFrameset>
        </div>
        <motion.div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-sm text-gray-400 font-semibold"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Swipe to see more →
        </motion.div>
      </div>
    </motion.section>
  </AnimatedSection>
);

const UIUXDesign: React.FC<{ features: FeatureItem[] }> = ({ features }) => (
  <AnimatedSection className="text-black p-4 rounded">
    <div className=" text-black p-6 md:p-8 rounded-3xl ">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-500">UI/UX Design</h2>
      
      <div className="mb-8 text-center">
        <p className="text-gray-700 text-lg">
          Prioritizing simplicity, efficiency, and engagement for an exceptional booking experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <FeatureCard
          icon={Layout}
          text="User Interface"
          description="Sleek and intuitive layout for effortless navigation and comprehensive booking functionalities."
        />
        <FeatureCard
          icon={Mouse}
          text="User Experience"
          description="Streamlined booking process with efficient search features and step-by-step flows for a seamless experience."
        />
        <FeatureCard
          icon={Users}
          text="Accessibility"
          description="Inclusive design ensuring all passengers can navigate the app comfortably, with multilingual support."
        />
      </div>
      
      <div className="bg-gray-100 rounded-2xl p-6 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Key Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          Experience a user-centric design that evolves with your needs, ensuring an exceptional journey from booking to destination.
        </p>
      </div>
    </div>
  </AnimatedSection>
);




const SmartBooking: React.FC<{ features: FeatureItem[] }> = ({ features }) => (
  <AnimatedSection className="max-w-2xl mx-auto">
    <div className=" text-black p-3 rounded-3xl ">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-600">Smart Booking</h2>
      
      <div className="mb-8">
        <p className="text-gray-700 text-lg mb-4">
          Revolutionize your journey planning with our AI-powered smart booking system. Experience unparalleled convenience and personalized assistance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          icon={Bot}
          text="AI Assistant Integration"
          description="Communicate your travel needs and preferences to our AI, which will intelligently generate the best trip schedule tailored to your requirements."
        />
        <FeatureCard
          icon={Settings}
          text="Customizable Preferences"
          description="Specify desired departure times, seating arrangements, budget constraints, and specific amenities for a truly personalized travel experience."
        />
      </div>
      
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Enhanced User Inputs</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <item.icon className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          Experience a new level of travel planning with our AI-powered smart booking system.
        </p>
      </div>
    </div>
  </AnimatedSection>
);


const SmartBookingImg: React.FC<{ features: FeatureItem[] }> = ({ features }) => (
  <section className="p-8 max-w-4xl mx-auto transition-all duration-300 ease-in-out">
    <div className=" rounded-6xl overflow-hidden  transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="p-6 md:p-8">
        <img 
          src="/images/smartbooking.png" 
          alt="Smart Booking" 
          className="w-full h-auto object-cover transition-opacity duration-300 ease-in-out hover:opacity-90"
        />
      </div>
    </div>
  </section>
);




const BusinessModel: React.FC = () => (
  <AnimatedSection>
    <section className=" min-h-screen flex flex-col items-center justify-center px-4 sm:px-3 md:px-3 py-3 sm:py-12 md:py-3">
      <div className="max-w-7xl mx-auto w-full bg-gray-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg">
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500 flex items-center justify-center">
            <ArrowRight className="text-white w-2 h-2 sm:w-3 sm:h-3" />
          </div>
          <span className="text-red-500 font-medium text-sm sm:text-base">
            Business Model
          </span>
        </div>
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-4">
          <h2 className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium leading-relaxed sm:leading-relaxed md:leading-relaxed">
            As a private company without government subsidies, NorthStar's
            primary funding for construction costs comes through real
            estate. We leverage the increased land value from rail station
            construction by selling to developers for Transit Oriented
            Development. Ticket fares cover ongoing maintenance and staff
            costs, ensuring financial sustainability while creating walkable
            areas for an enhanced user experience.
          </h2>
        </div>
      </div>
    </section>
  </AnimatedSection>
);


export default Page;

