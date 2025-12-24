import {
  Product,
  Collection,
  Cart,
  ShopifyResponse,
  ProductsResponse,
  ProductResponse,
  CollectionsResponse,
  CollectionResponse,
  CartResponse,
  CartCreateResponse,
  CartLinesAddResponse,
  CartLinesUpdateResponse,
  CartLinesRemoveResponse,
} from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch<T>({
  query,
  variables,
  cache = "force-cache",
  tags,
}: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  tags?: string[];
}): Promise<ShopifyResponse<T>> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
      cache,
      ...(tags && { next: { tags } }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Shopify fetch error:", error);
    throw error;
  }
}

// ============================================
// PRODUCT QUERIES
// ============================================

const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id
    handle
    title
    description
    descriptionHtml
    availableForSale
    vendor
    productType
    tags
    createdAt
    updatedAt
    featuredImage {
      url
      altText
      width
      height
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    options {
      id
      name
      values
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          image {
            url
            altText
            width
            height
          }
        }
      }
    }
  }
`;

function reshapeProduct(product: any): Product {
  return {
    ...product,
    images: product.images.edges.map((edge: any) => edge.node),
    variants: product.variants.edges.map((edge: any) => edge.node),
  };
}

export async function getProducts(first: number = 20): Promise<Product[]> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            ...ProductFragment
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<ProductsResponse>({
    query,
    variables: { first },
    tags: ["products"],
  });

  return response.data.products.edges.map((edge) => reshapeProduct(edge.node));
}

export async function getProduct(handle: string): Promise<Product | null> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        ...ProductFragment
      }
    }
  `;

  const response = await shopifyFetch<ProductResponse>({
    query,
    variables: { handle },
    tags: ["products", `product-${handle}`],
  });

  if (!response.data.product) return null;
  return reshapeProduct(response.data.product);
}

// ============================================
// COLLECTION QUERIES
// ============================================

const COLLECTION_FRAGMENT = `
  fragment CollectionFragment on Collection {
    id
    handle
    title
    description
    updatedAt
    image {
      url
      altText
      width
      height
    }
  }
`;

export async function getCollections(): Promise<Collection[]> {
  const query = `
    ${COLLECTION_FRAGMENT}
    query GetCollections {
      collections(first: 100) {
        edges {
          node {
            ...CollectionFragment
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<CollectionsResponse>({
    query,
    tags: ["collections"],
  });

  return response.data.collections.edges.map((edge) => ({
    ...edge.node,
    products: [],
    updatedAt: edge.node.updatedAt,
  }));
}

export async function getCollection(handle: string): Promise<Collection | null> {
  const query = `
    ${PRODUCT_FRAGMENT}
    ${COLLECTION_FRAGMENT}
    query GetCollection($handle: String!) {
      collection(handle: $handle) {
        ...CollectionFragment
        products(first: 100) {
          edges {
            node {
              ...ProductFragment
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<{ collection: any }>({
    query,
    variables: { handle },
    tags: ["collections", `collection-${handle}`],
  });

  if (!response.data.collection) return null;

  return {
    ...response.data.collection,
    products: response.data.collection.products.edges.map((edge: any) =>
      reshapeProduct(edge.node)
    ),
  };
}

// ============================================
// CART OPERATIONS
// ============================================

const CART_FRAGMENT = `
  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                id
                handle
                title
                featuredImage {
                  url
                  altText
                  width
                  height
                }
              }
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

function reshapeCart(cart: any): Cart {
  return {
    ...cart,
    lines: cart.lines.edges.map((edge: any) => edge.node),
  };
}

export async function createCart(): Promise<Cart> {
  const query = `
    ${CART_FRAGMENT}
    mutation CreateCart {
      cartCreate {
        cart {
          ...CartFragment
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await shopifyFetch<CartCreateResponse>({
    query,
    cache: "no-store",
  });

  return reshapeCart(response.data.cartCreate.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const query = `
    ${CART_FRAGMENT}
    query GetCart($cartId: ID!) {
      cart(id: $cartId) {
        ...CartFragment
      }
    }
  `;

  const response = await shopifyFetch<CartResponse>({
    query,
    variables: { cartId },
    cache: "no-store",
  });

  if (!response.data.cart) return null;
  return reshapeCart(response.data.cart);
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const query = `
    ${CART_FRAGMENT}
    mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFragment
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await shopifyFetch<CartLinesAddResponse>({
    query,
    variables: { cartId, lines },
    cache: "no-store",
  });

  return reshapeCart(response.data.cartLinesAdd.cart);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; quantity: number }[]
): Promise<Cart> {
  const query = `
    ${CART_FRAGMENT}
    mutation UpdateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFragment
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await shopifyFetch<CartLinesUpdateResponse>({
    query,
    variables: { cartId, lines },
    cache: "no-store",
  });

  return reshapeCart(response.data.cartLinesUpdate.cart);
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[]
): Promise<Cart> {
  const query = `
    ${CART_FRAGMENT}
    mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          ...CartFragment
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await shopifyFetch<CartLinesRemoveResponse>({
    query,
    variables: { cartId, lineIds },
    cache: "no-store",
  });

  return reshapeCart(response.data.cartLinesRemove.cart);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function formatPrice(money: { amount: string; currencyCode: string }): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode,
  }).format(parseFloat(money.amount));
}
