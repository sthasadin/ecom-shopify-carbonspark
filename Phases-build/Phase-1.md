Phase 1 Implementation Plan – Core Storefront

 Overview

 Build a fully functional headless e-commerce storefront connected to Shopify.

 ---
 Prerequisites (User Action Required)

 - Shopify store created
 - Storefront API access token generated
 - Store domain noted (e.g., store-name.myshopify.com)
 - At least 1 collection with products created for testing

 ---
 Step 1: Project Scaffolding

 Create Next.js project with:
 - Next.js 14+ (App Router)
 - TypeScript
 - Tailwind CSS
 - ESLint

 Files to create:
 /home/devuser/projects/websites/ecom-shopify/
 ├── .env.local.example          # Environment template
 ├── .gitignore
 ├── next.config.js
 ├── tailwind.config.ts
 ├── tsconfig.json
 ├── package.json
 └── app/
     └── layout.tsx              # Root layout
     └── page.tsx                # Home page placeholder

 ---
 Step 2: Shopify API Integration

 Create Shopify client and types:

 /lib/
 ├── shopify/
 │   ├── index.ts                # Main client (GraphQL fetch)
 │   ├── types.ts                # TypeScript types for Shopify data
 │   └── queries/
 │       ├── products.ts         # Product queries
 │       ├── collections.ts      # Collection queries
 │       └── cart.ts             # Cart mutations

 Key queries to implement:
 - getProducts() – Fetch all products
 - getProduct(handle) – Fetch single product by handle
 - getCollections() – Fetch all collections
 - getCollection(handle) – Fetch collection with products
 - createCart() – Create new cart
 - addToCart() – Add item to cart
 - getCart() – Get cart contents
 - getCheckoutUrl() – Get Shopify checkout URL

 ---
 Step 3: Layout Components

 Create core layout:

 /components/
 ├── layout/
 │   ├── Header.tsx              # Navigation, logo, cart icon
 │   ├── Footer.tsx              # Footer links, copyright
 │   ├── Navigation.tsx          # Nav menu (collections)
 │   └── MobileMenu.tsx          # Mobile hamburger menu

 ---
 Step 4: Home Page

 Build home page with:
 - Hero section (brand statement)
 - Featured collections grid
 - Featured products section
 - Call-to-action sections

 /app/
 ├── page.tsx                    # Home page
 /components/
 ├── home/
 │   ├── Hero.tsx
 │   ├── FeaturedCollections.tsx
 │   └── FeaturedProducts.tsx

 ---
 Step 5: Collection Pages

 Dynamic collection routes:

 /app/
 ├── collections/
 │   ├── page.tsx                # All collections listing
 │   └── [handle]/
 │       └── page.tsx            # Single collection page
 /components/
 ├── product/
 │   ├── ProductCard.tsx         # Product card for grids
 │   └── ProductGrid.tsx         # Grid layout for products

 Features:
 - Fetch products from Shopify collection
 - Display in responsive grid
 - Show price, title, image
 - Link to product detail page

 ---
 Step 6: Product Detail Page

 Dynamic product routes:

 /app/
 ├── products/
 │   └── [handle]/
 │       └── page.tsx            # Product detail page
 /components/
 ├── product/
 │   ├── ProductImages.tsx       # Image gallery
 │   ├── ProductInfo.tsx         # Title, price, description
 │   ├── VariantSelector.tsx     # Size/color picker
 │   └── AddToCartButton.tsx     # Add to cart action

 Features:
 - Product images
 - Title, price, description
 - Variant selection (size, color)
 - Stock availability
 - Add to cart button
 - SEO meta tags

 ---
 Step 7: Cart Functionality

 Cart context and UI:

 /context/
 ├── CartContext.tsx             # Cart state provider
 /components/
 ├── cart/
 │   ├── CartDrawer.tsx          # Slide-out cart
 │   ├── CartItem.tsx            # Single cart item
 │   ├── CartSummary.tsx         # Subtotal, checkout button
 │   └── CartIcon.tsx            # Header cart icon with count
 /app/
 ├── cart/
 │   └── page.tsx                # Full cart page (optional)

 Features:
 - Add/remove items
 - Update quantities
 - Persist cart (localStorage + Shopify)
 - Show cart count in header
 - Checkout button → Shopify checkout

 ---
 Step 8: Static Pages

 /app/
 ├── about/
 │   └── page.tsx
 ├── contact/
 │   └── page.tsx
 ├── shipping/
 │   └── page.tsx
 ├── privacy/
 │   └── page.tsx
 ├── terms/
 │   └── page.tsx

 ---
 Step 9: Basic SEO

 Implement:
 - Meta titles/descriptions per page
 - Open Graph tags
 - Dynamic metadata for products/collections
 - Sitemap generation (later in Phase 3)

 ---
 Environment Variables Required

 SHOPIFY_STORE_DOMAIN=store-name.myshopify.com
 SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token-here

 ---
 File Structure After Phase 1

 /home/devuser/projects/websites/ecom-shopify/
 ├── app/
 │   ├── layout.tsx
 │   ├── page.tsx
 │   ├── globals.css
 │   ├── collections/
 │   │   ├── page.tsx
 │   │   └── [handle]/page.tsx
 │   ├── products/
 │   │   └── [handle]/page.tsx
 │   ├── cart/page.tsx
 │   ├── about/page.tsx
 │   ├── contact/page.tsx
 │   ├── shipping/page.tsx
 │   ├── privacy/page.tsx
 │   └── terms/page.tsx
 ├── components/
 │   ├── layout/
 │   │   ├── Header.tsx
 │   │   ├── Footer.tsx
 │   │   ├── Navigation.tsx
 │   │   └── MobileMenu.tsx
 │   ├── home/
 │   │   ├── Hero.tsx
 │   │   ├── FeaturedCollections.tsx
 │   │   └── FeaturedProducts.tsx
 │   ├── product/
 │   │   ├── ProductCard.tsx
 │   │   ├── ProductGrid.tsx
 │   │   ├── ProductImages.tsx
 │   │   ├── ProductInfo.tsx
 │   │   ├── VariantSelector.tsx
 │   │   └── AddToCartButton.tsx
 │   ├── cart/
 │   │   ├── CartDrawer.tsx
 │   │   ├── CartItem.tsx
 │   │   ├── CartSummary.tsx
 │   │   └── CartIcon.tsx
 │   └── ui/
 │       ├── Button.tsx
 │       └── Container.tsx
 ├── context/
 │   └── CartContext.tsx
 ├── lib/
 │   └── shopify/
 │       ├── index.ts
 │       ├── types.ts
 │       └── queries/
 │           ├── products.ts
 │           ├── collections.ts
 │           └── cart.ts
 ├── .env.local.example
 ├── .env.local
 ├── next.config.js
 ├── tailwind.config.ts
 ├── tsconfig.json
 └── package.json
 