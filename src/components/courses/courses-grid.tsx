"use client";

import { Product } from "@/lib/shopify/types";
import { CourseCard } from "./course-card";
import { useState } from "react";
import { motion } from "framer-motion";

type CoursesGridProps = {
  products: Product[];
};

type SortOption = "featured" | "price-asc" | "price-desc" | "title-asc" | "title-desc";

export function CoursesGrid({ products }: CoursesGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return (
          parseFloat(a.priceRange.minVariantPrice.amount) -
          parseFloat(b.priceRange.minVariantPrice.amount)
        );
      case "price-desc":
        return (
          parseFloat(b.priceRange.minVariantPrice.amount) -
          parseFloat(a.priceRange.minVariantPrice.amount)
        );
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <p className="text-text-secondary">No courses found.</p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="appearance-none bg-transparent text-body-sm text-text-secondary uppercase tracking-wider pr-8 py-2 cursor-pointer focus:outline-none focus:text-text-primary"
          >
            <option value="featured">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Name: A-Z</option>
            <option value="title-desc">Name: Z-A</option>
          </select>
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Product Count */}
        <span className="text-body-sm text-text-secondary">
          {products.length} {products.length === 1 ? "product" : "products"}
        </span>
      </div>

      {/* Products Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sortedProducts.map((product, index) => (
          <CourseCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
