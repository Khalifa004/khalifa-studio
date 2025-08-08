import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Work3d: React.FC = () => {
  return (
    <div className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-around gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text content */}
          <motion.div 
            className="flex flex-col justify-start items-start text-left max-w-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3D Modeling Passion</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              In my free time, I love diving into 3D modeling, exploring creative ways to bring objects to life. It's a hobby that lets me push boundaries, experiment, and turn my ideas into tangible digital art.
            </p>
            <Link href="/artwork" passHref>
              <motion.a 
                className="inline-block bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-lime-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My 3D Gallery
              </motion.a>
            </Link>
          </motion.div>
          
          {/* 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <CardContainer className="w-full max-w-[400px]">
              <CardBody className="bg-gray-100 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-gray-200 w-full h-auto rounded-2xl p-6 border">
              

                <CardItem translateZ="100" className="w-full">
                  <Image
                    src="/images/3D.png"
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="3D Model Showcase"
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-500 text-sm mt-4"
                >
                  Explore the intricate details and creative process behind my latest 3D creation.
                </CardItem>
                <div className="mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-lime-600 text-white text-sm font-semibold hover:bg-lime-700 transition-colors duration-300"
                  >
                    View Details
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work3d;
