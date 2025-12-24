# bydaniellealexzandra – Build Plan

## The Big Picture

This project consists of **two separate systems working together**:

```
┌─────────────────────────────────────────────────────────────────┐
│                        SHOPIFY (Backend)                        │
│  • Stores all products, prices, inventory                       │
│  • Handles checkout & payments                                  │
│  • Client manages everything here (no coding needed)            │
└─────────────────────────────────────────────────────────────────┘
                              ↑
                              │ GraphQL API calls
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    NEXT.JS FRONTEND (What we build)             │
│  • Beautiful custom design                                      │
│  • Animations & smooth UX                                       │
│  • Fetches product data from Shopify                            │
│  • Sends customers to Shopify for checkout                      │
└─────────────────────────────────────────────────────────────────┘
                              ↑
                              │
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                         CUSTOMER                                │
│  • Browses products                                             │
│  • Adds to cart                                                 │
│  • Checks out (on Shopify)                                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## How Data Flows

**Example: Customer visits a collection page (e.g., "Dresses")**

1. Customer opens `/collections/dresses`
2. Our Next.js app calls Shopify API: "Give me all products in the 'dresses' collection"
3. Shopify returns product data (title, price, images, variants)
4. We render a beautiful page with that data
5. Customer clicks "Add to Cart" → we create a Shopify cart
6. Customer clicks "Checkout" → we redirect them to Shopify's checkout page
7. Shopify handles payment → order complete

**The magic:** When the client adds a new dress in Shopify Admin, it automatically shows up. No code changes needed.

---

## Project Structure

```
/app
  /page.tsx                    → Home page
  /collections
    /[handle]/page.tsx         → Dynamic collection pages
  /products
    /[handle]/page.tsx         → Dynamic product pages
  /cart/page.tsx               → Cart page
  /about/page.tsx              → Static pages
  /contact/page.tsx
  ...

/components
  /layout                      → Header, Footer, Navigation
  /product                     → ProductCard, ProductGrid, etc.
  /cart                        → CartDrawer, CartItem, etc.
  /ui                          → Buttons, inputs, common UI

/lib
  /shopify                     → Shopify API client & queries

/context
  /cart-context.tsx            → Cart state management
```

---

## Phase 1 – Core Storefront (Foundation)

Build a fully functional store:

- [ ] Set up Next.js project with TypeScript + Tailwind
- [ ] Create environment variables structure for Shopify credentials
- [ ] Build Shopify API client (GraphQL)
- [ ] Create GraphQL queries for products, collections, cart
- [ ] Build layout components (Header, Footer, Navigation)
- [ ] Build Home page with featured collections/products
- [ ] Build Collection pages (dynamic, fetched from Shopify)
- [ ] Build Product Detail page (variants, images, add to cart)
- [ ] Implement Cart functionality (context + UI)
- [ ] Implement Checkout redirect to Shopify
- [ ] Basic SEO setup (meta tags, Open Graph)

**End result:** A working store. Not pretty yet, but functional.

---

## Phase 2 – UX & Animation (Polish)

Make it beautiful and smooth:

- [ ] Page transitions (smooth navigation between pages)
- [ ] Scroll animations (elements fade/slide in as you scroll)
- [ ] Micro-interactions (button hovers, cart updates, loading states)
- [ ] Loading skeletons for async content
- [ ] Mobile experience refinement
- [ ] Visual polish matching brand identity
- [ ] Image galleries with smooth transitions
- [ ] Cart drawer animations

**End result:** A premium-feeling, animated storefront.

---

## Phase 3 – Optimization & Hardening (Production Ready)

Make it fast and bulletproof:

- [ ] Performance optimization (bundle size, code splitting)
- [ ] Image optimization (Next/Image, lazy loading)
- [ ] SEO refinement (structured data, sitemaps, robots.txt)
- [ ] Edge cases (empty states, error boundaries, 404 pages)
- [ ] Analytics integration (GA4, Meta Pixel, TikTok Pixel)
- [ ] Accessibility audit (ARIA, keyboard navigation)
- [ ] Cross-browser/device testing
- [ ] Lighthouse score optimization

**End result:** Production-ready, optimized, trackable.

---

## Prerequisites

Before starting development:

1. **Shopify Store** – Must be set up
2. **Storefront API Access Token** – Generated from Shopify Admin → Settings → Apps → Develop apps
3. **Store Domain** – e.g., `your-store.myshopify.com`
4. **Test Products/Collections** – At least a few products to test with

---

## Tech Stack (Locked)

| Category | Technology |
|----------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| API | Shopify Storefront API (GraphQL) |
| Rendering | ISR / Server Components |

---

## Key Principles

1. **Shopify is the source of truth** – Never hardcode product data
2. **Dynamic everything** – Products appear automatically when added in Shopify
3. **No custom backend** – Shopify handles all commerce logic
4. **Performance first** – Fast loading, minimal JavaScript
5. **Simple code** – No over-engineering, keep it maintainable
