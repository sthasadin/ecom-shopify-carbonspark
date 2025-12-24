"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/shopify/types";
import { formatPrice } from "@/lib/shopify";
import { useCart } from "@/context/cart-context";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem, isLoading } = useCart();
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    // Initialize with first available option for each
    const initial: Record<string, string> = {};
    product.options.forEach((option) => {
      initial[option.name] = option.values[0];
    });
    return initial;
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find the variant that matches selected options
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
        <div className="aspect-[3/4] relative bg-gray-100 rounded-lg overflow-hidden">
          {product.images[selectedImageIndex] ? (
            <Image
              src={product.images[selectedImageIndex].url}
              alt={product.images[selectedImageIndex].altText || product.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={image.url}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden ${
                  index === selectedImageIndex
                    ? "ring-2 ring-black"
                    : "ring-1 ring-gray-200"
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.altText || `${product.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {product.title}
        </h1>

        {/* Price */}
        <div className="mt-4">
          {selectedVariant ? (
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold">
                {formatPrice(selectedVariant.price)}
              </span>
              {selectedVariant.compareAtPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(selectedVariant.compareAtPrice)}
                </span>
              )}
            </div>
          ) : (
            <span className="text-2xl font-semibold">
              {formatPrice(product.priceRange.minVariantPrice)}
            </span>
          )}
        </div>

        {/* Options */}
        {product.options.map((option) => (
          <div key={option.id} className="mt-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              {option.name}
            </label>
            <div className="flex flex-wrap gap-2">
              {option.values.map((value) => {
                const isSelected = selectedOptions[option.name] === value;
                return (
                  <button
                    key={value}
                    onClick={() => handleOptionChange(option.name, value)}
                    className={`px-4 py-2 text-sm border rounded-md transition-colors ${
                      isSelected
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Add to Cart */}
        <div className="mt-8">
          <button
            onClick={handleAddToCart}
            disabled={!selectedVariant?.availableForSale || isLoading}
            className="w-full py-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading
              ? "Adding..."
              : !selectedVariant?.availableForSale
              ? "Sold Out"
              : "Add to Cart"}
          </button>
        </div>

        {/* Description */}
        {product.descriptionHtml && (
          <div className="mt-8 pt-8 border-t">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
            <div
              className="prose prose-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </div>
        )}

        {/* Product Details */}
        <div className="mt-8 pt-8 border-t">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Details</h2>
          <dl className="space-y-2 text-sm">
            {product.vendor && (
              <div className="flex">
                <dt className="w-24 text-gray-500">Vendor</dt>
                <dd className="text-gray-900">{product.vendor}</dd>
              </div>
            )}
            {product.productType && (
              <div className="flex">
                <dt className="w-24 text-gray-500">Type</dt>
                <dd className="text-gray-900">{product.productType}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}
