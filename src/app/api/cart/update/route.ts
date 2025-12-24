import { NextRequest, NextResponse } from "next/server";
import { updateCart } from "@/lib/shopify";

export async function POST(request: NextRequest) {
  try {
    const { cartId, lineId, quantity } = await request.json();

    if (!cartId || !lineId || quantity === undefined) {
      return NextResponse.json(
        { error: "Cart ID, Line ID, and quantity required" },
        { status: 400 }
      );
    }

    const cart = await updateCart(cartId, [{ id: lineId, quantity }]);

    return NextResponse.json({ cart });
  } catch (error) {
    console.error("Error updating cart:", error);
    return NextResponse.json(
      { error: "Failed to update cart" },
      { status: 500 }
    );
  }
}
