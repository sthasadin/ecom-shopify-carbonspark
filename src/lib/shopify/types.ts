// Shopify Storefront API Types

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Image = {
  url: string;
  altText: string | null;
  width: number;
  height: number;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
  compareAtPrice: Money | null;
  image?: Image;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  featuredImage: Image | null;
  images: Image[];
  options: {
    id: string;
    name: string;
    values: string[];
  }[];
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  variants: ProductVariant[];
  tags: string[];
  vendor: string;
  productType: string;
  createdAt: string;
  updatedAt: string;
};

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: Image | null;
  products: Product[];
};

export type CartItem = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: {
      id: string;
      handle: string;
      title: string;
      featuredImage: Image | null;
    };
    price: Money;
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money | null;
  };
  lines: CartItem[];
};

// API Response types
export type ShopifyResponse<T> = {
  data: T;
  errors?: {
    message: string;
  }[];
};

export type ProductsResponse = {
  products: {
    edges: {
      node: Product;
    }[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
};

export type ProductResponse = {
  product: Product | null;
};

export type CollectionsResponse = {
  collections: {
    edges: {
      node: Collection;
    }[];
  };
};

export type CollectionResponse = {
  collection: Collection | null;
};

export type CartResponse = {
  cart: Cart | null;
};

export type CartCreateResponse = {
  cartCreate: {
    cart: Cart;
    userErrors: {
      field: string[];
      message: string;
    }[];
  };
};

export type CartLinesAddResponse = {
  cartLinesAdd: {
    cart: Cart;
    userErrors: {
      field: string[];
      message: string;
    }[];
  };
};

export type CartLinesUpdateResponse = {
  cartLinesUpdate: {
    cart: Cart;
    userErrors: {
      field: string[];
      message: string;
    }[];
  };
};

export type CartLinesRemoveResponse = {
  cartLinesRemove: {
    cart: Cart;
    userErrors: {
      field: string[];
      message: string;
    }[];
  };
};
