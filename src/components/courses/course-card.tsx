"use client";

import { Product } from "@/lib/shopify/types";
import { formatPrice } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type CourseCardProps = {
  product: Product;
  index?: number;
};

export function CourseCard({ product, index = 0 }: CourseCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const image = product.featuredImage;
  const price = product.priceRange.minVariantPrice;

  // Extract course name for overlay (use tags or title)
  const getCourseName = () => {
    // Try to get a short name from tags, otherwise use title
    const courseTag = product.tags?.find((tag) =>
      tag.toLowerCase().includes("course")
    );
    if (courseTag) return courseTag.toUpperCase();

    // Fallback: shorten the title
    const title = product.title.toUpperCase();
    if (title.includes("COURSE")) {
      return title;
    }
    return `THE ${title} COURSE`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/products/${product.handle}`} className="block">
        {/* Image Container with Overlay */}
        <div className="relative aspect-[4/5] overflow-hidden bg-background-light mb-4">
          {image ? (
            <Image
              src={image.url}
              alt={image.altText || product.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-background-warm">
              <span className="text-text-muted">No image</span>
            </div>
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Course Name Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-white text-xs tracking-widest mb-1">THE</span>
            <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide leading-tight">
              {product.title.split(" ").slice(0, 3).join(" ").toUpperCase()}
            </h3>
            <span className="text-white text-xs tracking-widest mt-1">COURSE</span>
          </div>

          {/* Wishlist Heart Icon */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-4 right-4 p-2 transition-colors"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                isWishlisted
                  ? "fill-red-500 text-red-500"
                  : "fill-transparent text-white hover:text-red-400"
              }`}
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h4 className="text-body text-text-primary group-hover:text-text-secondary transition-colors line-clamp-2">
            {product.title}
          </h4>
          <p className="text-body text-text-secondary">
            {formatPrice(price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
