"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import { formatPrice } from "@/lib/shopify";
import { useCart } from "@/context/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "@/components/ui/spinner";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem, isLoading } = useCart();
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product.options.forEach((option) => {
      initial[option.name] = option.values[0];
    });
    return initial;
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedVariant = product.variants.find((variant) =>
    variant.selectedOptions.every(
      (option) => selectedOptions[option.name] === option.value
    )
  );

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem(selectedVariant.id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="aspect-[3/4] relative bg-background-light rounded-none overflow-hidden">
          <AnimatePresence mode="wait">
            {product.images[selectedImageIndex] ? (
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[selectedImageIndex].url}
                  alt={product.images[selectedImageIndex].altText || product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                No image
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Thumbnail Gallery */}
        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <motion.button
                key={image.url}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-none overflow-hidden border-2 transition-colors duration-200 ${
                  index === selectedImageIndex
                    ? "border-primary"
                    : "border-border hover:border-primary"
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.altText || `${product.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-h1 font-semibold text-text-primary">
          {product.title}
        </h1>

        {/* Price */}
        <div className="mt-4">
          {selectedVariant ? (
            <div className="flex items-center gap-3">
              <span className="text-h2 font-semibold text-text-primary">
                {formatPrice(selectedVariant.price)}
              </span>
              {selectedVariant.compareAtPrice && (
                <span className="text-body-lg text-text-muted line-through">
                  {formatPrice(selectedVariant.compareAtPrice)}
                </span>
              )}
            </div>
          ) : (
            <span className="text-h2 font-semibold text-text-primary">
              {formatPrice(product.priceRange.minVariantPrice)}
            </span>
          )}
        </div>

        {/* Options */}
        {product.options.map((option) => (
          <div key={option.id} className="mt-6">
            <label className="block text-body-sm font-medium text-text-primary mb-2">
              {option.name}
            </label>
            <div className="flex flex-wrap gap-2">
              {option.values.map((value) => {
                const isSelected = selectedOptions[option.name] === value;
                return (
                  <motion.button
                    key={value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOptionChange(option.name, value)}
                    className={`px-4 py-2 text-body-sm border rounded-none transition-colors duration-200 ${
                      isSelected
                        ? "border-secondary bg-secondary text-white"
                        : "border-border text-text-primary hover:border-primary"
                    }`}
                  >
                    {value}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Add to Cart */}
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={!selectedVariant?.availableForSale || isLoading}
            className="w-full py-4 bg-secondary text-white font-medium rounded-none hover:bg-secondary-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Spinner size="sm" />
                <span>Adding...</span>
              </>
            ) : !selectedVariant?.availableForSale ? (
              "Sold Out"
            ) : (
              "Add to Cart"
            )}
          </motion.button>
        </div>

        {/* Description */}
        {product.descriptionHtml && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 pt-8 border-t border-border"
          >
            <h2 className="text-h3 font-semibold text-text-primary mb-4">Description</h2>
            <div
              className="prose prose-sm text-text-secondary"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </motion.div>
        )}

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border"
        >
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Details</h2>
          <dl className="space-y-2 text-body-sm">
            {product.vendor && (
              <div className="flex">
                <dt className="w-24 text-text-muted">Vendor</dt>
                <dd className="text-text-primary">{product.vendor}</dd>
              </div>
            )}
            {product.productType && (
              <div className="flex">
                <dt className="w-24 text-text-muted">Type</dt>
                <dd className="text-text-primary">{product.productType}</dd>
              </div>
            )}
          </dl>
        </motion.div>
      </motion.div>
    </div>
  );
}
