"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const { cart, openCart } = useCart();
  const itemCount = cart?.totalQuantity || 0;
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevCount, setPrevCount] = useState(itemCount);

  useEffect(() => {
    if (itemCount !== prevCount && itemCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      setPrevCount(itemCount);
      return () => clearTimeout(timer);
    }
    setPrevCount(itemCount);
  }, [itemCount, prevCount]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="by Danielle Alexandra"
                width={200}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/collections"
                className="text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                Shop
              </Link>
              <Link
                href="/collections/new-arrivals"
                className="text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                New Arrivals
              </Link>
              <Link
                href="/about"
                className="text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCart}
              className="relative p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
              aria-label="Open cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    key={itemCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                      scale: isAnimating ? [1, 1.3, 1] : 1,
                      opacity: 1
                    }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-1 -right-1 bg-secondary text-white text-caption w-5 h-5 rounded-none flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}
