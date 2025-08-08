"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  href: string;
  variants: any;
}

const ProductCard = ({ name, price, description, image, href, variants }: ProductCardProps) => (
  <Link href={href}>
    <motion.div
      className="group relative h-full rounded-2xl overflow-hidden bg-white/80 backdrop-blur-lg border border-white/20 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-500"
      variants={variants}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
          <span className="px-4 py-1 text-sm text-gray-500 bg-gray-50 rounded-full">
            {price}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  </Link>
);