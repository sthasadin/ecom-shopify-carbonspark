"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/shopify/types";
import { formatPrice } from "@/lib/shopify";
import { motion } from "framer-motion";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { handle, title, featuredImage, priceRange } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/products/${handle}`} className="group block">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="aspect-[3/4] relative bg-gray-100 rounded-lg overflow-hidden mb-3"
        >
          {featuredImage ? (
            <Image
              src={featuredImage.url}
              alt={featuredImage.altText || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </motion.div>
        <h3 className="text-sm font-medium text-gray-900 group-hover:underline line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {formatPrice(priceRange.minVariantPrice)}
        </p>
      </Link>
    </motion.div>
  );
}
