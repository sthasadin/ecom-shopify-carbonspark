"use client";

import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
  const { cart, isOpen, closeCart, updateItem, removeItem, isLoading } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-secondary/50 z-50"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-h3 font-semibold text-text-primary">Shopping Cart</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                className="p-2 hover:bg-background-light rounded-none transition-colors duration-200"
                aria-label="Close cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-text-secondary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {!cart || cart.lines.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16 text-border mb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <p className="text-text-secondary mb-4">Your cart is empty</p>
                  <button
                    onClick={closeCart}
                    className="text-body-sm font-medium text-primary underline hover:no-underline transition-colors duration-200"
                  >
                    Continue Shopping
                  </button>
                </motion.div>
              ) : (
                <ul className="space-y-4">
                  {cart.lines.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-4"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-20 bg-background-light rounded-none overflow-hidden flex-shrink-0">
                        {item.merchandise.product.featuredImage ? (
                          <Image
                            src={item.merchandise.product.featuredImage.url}
                            alt={item.merchandise.product.featuredImage.altText || item.merchandise.product.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-text-muted">
                            No image
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/products/${item.merchandise.product.handle}`}
                          onClick={closeCart}
                          className="text-body-sm font-medium text-text-primary hover:underline line-clamp-1"
                        >
                          {item.merchandise.product.title}
                        </Link>
                        {item.merchandise.title !== "Default Title" && (
                          <p className="text-body-sm text-text-secondary mt-0.5">
                            {item.merchandise.title}
                          </p>
                        )}
                        <p className="text-body-sm font-medium text-text-primary mt-1">
                          {formatPrice(item.merchandise.price)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateItem(item.id, item.quantity - 1)}
                            disabled={isLoading || item.quantity <= 1}
                            className="w-8 h-8 flex items-center justify-center border border-border rounded-none hover:bg-background-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                          >
                            -
                          </motion.button>
                          <span className="text-body-sm w-8 text-center text-text-primary">{item.quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateItem(item.id, item.quantity + 1)}
                            disabled={isLoading}
                            className="w-8 h-8 flex items-center justify-center border border-border rounded-none hover:bg-background-light disabled:opacity-50 transition-colors duration-200"
                          >
                            +
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => removeItem(item.id)}
                            disabled={isLoading}
                            className="ml-auto text-body-sm text-error hover:text-error/80 disabled:opacity-50 transition-colors duration-200"
                          >
                            Remove
                          </motion.button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart && cart.lines.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-t border-border p-4 space-y-4"
              >
                <div className="flex items-center justify-between text-body font-medium text-text-primary">
                  <span>Subtotal</span>
                  <span>{formatPrice(cart.cost.subtotalAmount)}</span>
                </div>
                <p className="text-body-sm text-text-secondary">
                  Shipping and taxes calculated at checkout.
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={cart.checkoutUrl}
                  className="block w-full bg-secondary text-white text-center py-3 rounded-none font-medium hover:bg-secondary-hover transition-colors duration-200"
                >
                  Checkout
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
