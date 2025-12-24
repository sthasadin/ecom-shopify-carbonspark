import { NextRequest, NextResponse } from "next/server";
import { addToCart } from "@/lib/shopify";

export async function POST(request: NextRequest) {
  try {
    const { cartId, variantId, quantity = 1 } = await request.json();

    if (!cartId || !variantId) {
      return NextResponse.json(
        { error: "Cart ID and Variant ID required" },
        { status: 400 }
      );
    }

    const cart = await addToCart(cartId, [
      { merchandiseId: variantId, quantity },
    ]);

    return NextResponse.json({ cart });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json(
      { error: "Failed to add to cart" },
      { status: 500 }
    );
  }
}
