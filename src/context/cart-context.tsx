"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Cart } from "@/lib/shopify/types";

type CartContextType = {
  cart: Cart | null;
  isLoading: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_ID_KEY = "shopify_cart_id";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Initialize cart on mount
  useEffect(() => {
    const initCart = async () => {
      const cartId = localStorage.getItem(CART_ID_KEY);

      if (cartId) {
        // Try to fetch existing cart
        try {
          const response = await fetch(`/api/cart?cartId=${cartId}`);
          if (response.ok) {
            const data = await response.json();
            if (data.cart) {
              setCart(data.cart);
              return;
            }
          }
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      }

      // Create new cart if none exists
      try {
        const response = await fetch("/api/cart", { method: "POST" });
        if (response.ok) {
          const data = await response.json();
          setCart(data.cart);
          localStorage.setItem(CART_ID_KEY, data.cart.id);
        }
      } catch (error) {
        console.error("Error creating cart:", error);
      }
    };

    initCart();
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    async (variantId: string, quantity: number = 1) => {
      if (!cart) return;

      setIsLoading(true);
      try {
        const response = await fetch("/api/cart/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartId: cart.id,
            variantId,
            quantity,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setCart(data.cart);
          setIsOpen(true); // Open cart drawer after adding
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;

      setIsLoading(true);
      try {
        const response = await fetch("/api/cart/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartId: cart.id,
            lineId,
            quantity,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setCart(data.cart);
        }
      } catch (error) {
        console.error("Error updating cart:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;

      setIsLoading(true);
      try {
        const response = await fetch("/api/cart/remove", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartId: cart.id,
            lineId,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setCart(data.cart);
        }
      } catch (error) {
        console.error("Error removing from cart:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        isOpen,
        openCart,
        closeCart,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
