"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import UIModal from "@/components/ui/UIModal";

interface UIComponentProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tech?: string[];
  detailedDescription?: string;
  additionalImages?: string[];
  features?: string[];
  challenges?: string[];
}

const uiComponents: UIComponentProps[] = [
  {
    title: "Pomora Analytics Dashboard",
    description: "Clean and minimal analytics interface with data visualization components",
    image: "/images/pomoraanalytics.png",
    category: "Dashboard",
    tech: ["React", "Chart.js", "Tailwind CSS", "TypeScript"],
    detailedDescription: "A comprehensive analytics dashboard designed for the Pomora productivity platform. Features clean data visualization, real-time metrics tracking, and intuitive user engagement insights. The interface prioritizes clarity and actionable data presentation.",
    additionalImages: ["/images/pomoramain.png", "/images/pomoramain2.png"],
    features: [
      "Real-time productivity metrics visualization",
      "Interactive charts with hover states and animations",
      "Responsive design optimized for all screen sizes",
      "Dark/light theme compatibility",
      "Export functionality for reports",
      "Customizable dashboard widgets"
    ],
    challenges: [
      "Designing an intuitive way to display complex productivity data without overwhelming users",
      "Creating a flexible component system that could adapt to different data types and metrics",
      "Implementing smooth animations that enhance rather than distract from the data visualization"
    ]
  },
  {
    title: "Timer Interface",
    description: "Intuitive Pomodoro timer with elegant progress indicators",
    image: "/images/timerpic.png",
    category: "Timer",
    tech: ["React", "Framer Motion", "CSS Animations"],
    detailedDescription: "A beautifully crafted timer interface that makes productivity sessions engaging and visually appealing. The design focuses on minimal distraction while providing clear visual feedback about session progress.",
    additionalImages: ["/images/timerpicc.png"],
    features: [
      "Circular progress indicator with smooth animations",
      "Customizable timer durations",
      "Visual and audio notifications",
      "Session history tracking",
      "Pause and resume functionality",
      "Minimalist design for focus enhancement"
    ],
    challenges: [
      "Creating smooth, performant animations that don't drain device battery",
      "Designing an interface that remains visible but non-intrusive during focus sessions",
      "Implementing accurate timing mechanisms across different browser environments"
    ]
  },
  {
    title: "Task Management UI",
    description: "Modern task management interface with drag-and-drop functionality",
    image: "/images/progresscard.png",
    category: "Productivity",
    tech: ["React", "DnD Kit", "Framer Motion", "Tailwind CSS"],
    detailedDescription: "A sophisticated task management interface that combines beautiful design with powerful functionality. Features intuitive drag-and-drop interactions and clear visual hierarchy for better task organization.",
    features: [
      "Drag-and-drop task reordering",
      "Priority levels with color coding",
      "Progress tracking with visual indicators",
      "Due date management",
      "Task categorization and filtering",
      "Collaborative features for team workflows"
    ],
    challenges: [
      "Implementing smooth drag-and-drop interactions that work across touch and mouse interfaces",
      "Creating a visual hierarchy that works for both simple and complex task structures",
      "Designing responsive layouts that maintain usability on mobile devices"
    ]
  },
  {
    title: "Smart Booking System",
    description: "Calendar-based booking interface with real-time availability",
    image: "/images/smartbooking.png",
    category: "Booking",
    tech: ["React", "Calendar API", "TypeScript", "Date-fns"],
    detailedDescription: "An intelligent booking system interface that streamlines appointment scheduling with real-time availability checking and intuitive calendar navigation. Designed for both service providers and clients.",
    features: [
      "Real-time availability calendar",
      "Multi-timezone support",
      "Booking confirmation workflows",
      "Recurring appointment options",
      "Conflict detection and resolution",
      "Mobile-optimized touch interactions"
    ],
    challenges: [
      "Handling complex timezone calculations and display",
      "Creating an intuitive mobile calendar experience with limited screen space",
      "Implementing real-time updates without performance degradation"
    ]
  },
  {
    title: "Dashboard Components",
    description: "Reusable dashboard widgets and card components",
    image: "/images/sweetdash.png",
    category: "Components",
    tech: ["React", "TypeScript", "Storybook", "CSS Modules"],
    detailedDescription: "A comprehensive component library featuring reusable dashboard widgets designed for scalability and consistency across different applications. Each component follows strict design system guidelines.",
    features: [
      "Modular component architecture",
      "Consistent design system implementation",
      "Accessibility-first design approach",
      "Theme customization capabilities",
      "Comprehensive documentation",
      "Performance optimized rendering"
    ],
    challenges: [
      "Creating components flexible enough for various use cases while maintaining consistency",
      "Implementing proper accessibility standards across all interactive elements",
      "Designing a scalable architecture that supports future component additions"
    ]
  },
  {
    title: "Product Score UI",
    description: "Interactive scoring interface with animated feedback",
    image: "/images/prodscore.png",
    category: "Analytics",
    tech: ["React", "GSAP", "D3.js", "Canvas API"],
    detailedDescription: "An engaging product scoring interface that transforms complex metrics into understandable visual feedback. Features dynamic animations and interactive elements that guide users through evaluation processes.",
    features: [
      "Interactive scoring mechanisms",
      "Real-time visual feedback",
      "Animated progress indicators",
      "Comparative analysis tools",
      "Export and sharing capabilities",
      "Touch-optimized interactions"
    ],
    challenges: [
      "Creating meaningful visual representations of abstract scoring concepts",
      "Implementing smooth animations that enhance rather than distract from the scoring process",
      "Designing an interface that works equally well for novice and expert users"
    ]
  }
];

const UICard: React.FC<{ component: UIComponentProps; index: number; onClick: () => void }> = ({ component, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={component.image}
          alt={component.title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
            {component.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors">
          {component.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {component.description}
        </p>

        {/* Tech Stack */}
        {component.tech && (
          <div className="flex flex-wrap gap-2">
            {component.tech.map((tech, i) => (
              <span
                key={i}
                className="inline-block px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 border-2 border-black rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  );
};

const UIShowcase: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<UIComponentProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (component: UIComponentProps) => {
    setSelectedComponent(component);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  };

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-6">
            UI/UX Design
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Interface Design
          </h2>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiComponents.map((component, index) => (
            <UICard
              key={index}
              component={component}
              index={index}
              onClick={() => handleCardClick(component)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my design process?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            View Design System
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <UIModal
        isOpen={isModalOpen}
        onClose={closeModal}
        component={selectedComponent}
      />
    </div>
  );
};

export default UIShowcase;
