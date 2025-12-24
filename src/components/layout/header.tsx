"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";

export function Header() {
  const { cart, openCart } = useCart();
  const itemCount = cart?.totalQuantity || 0;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tight">
              bydaniellealexzandra
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/collections"
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/collections/new-arrivals"
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                New Arrivals
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 text-gray-700 hover:text-black transition-colors"
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
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}
