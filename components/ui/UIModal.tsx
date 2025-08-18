"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface UIModalProps {
  isOpen: boolean;
  onClose: () => void;
  component: {
    title: string;
    description: string;
    image: string;
    category: string;
    tech?: string[];
    detailedDescription?: string;
    additionalImages?: string[];
    features?: string[];
    challenges?: string[];
  } | null;
}

const UIModal: React.FC<UIModalProps> = ({ isOpen, onClose, component }) => {
  if (!component) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 20 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Section */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={component.image}
                  alt={component.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-full">
                    {component.category}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {component.title}
                  </h2>
                  <p className="text-white/90 text-lg max-w-2xl">
                    {component.description}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Tech Stack */}
                {component.tech && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {component.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Detailed Description */}
                {component.detailedDescription && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      About This Project
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {component.detailedDescription}
                    </p>
                  </div>
                )}

                {/* Features */}
                {component.features && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {component.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Images */}
                {component.additionalImages && component.additionalImages.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Additional Views
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {component.additionalImages.map((image, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200">
                          <Image
                            src={image}
                            alt={`${component.title} view ${i + 1}`}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {component.challenges && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Design Challenges & Solutions
                    </h3>
                    <div className="space-y-4">
                      {component.challenges.map((challenge, i) => (
                        <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {challenge}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={onClose}
                      className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UIModal;
