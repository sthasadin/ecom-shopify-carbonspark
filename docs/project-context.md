# bydaniellealexzandra – Headless E-commerce Frontend Build
## Master Instruction & Project Brief for Claude Code

---

## 1. Project Overview

**Project Name:** bydaniellealexzandra  
**Business Type:** Single-brand fashion e-commerce store  
**Model:** Direct-to-consumer (DTC)  
**Marketplace:** No (single brand only)

This project is a **premium, future-ready headless e-commerce storefront** for a fashion brand.  
The goal is to build a **high-performance, modern, animated frontend** while using **Shopify as the commerce engine**.

This is NOT a custom backend project.

---

## 2. Core Architecture (Very Important)

### Source of Truth
- **Shopify is the single source of truth** for:
  - Products
  - Collections (categories)
  - Inventory
  - Pricing
  - Orders
  - Checkout
  - Payments
  - Discounts
  - Refunds

### Architecture Flow

Customer Browser  
↓  
Custom Frontend (Next.js)  
↓  
Shopify Storefront API  
↓  
Shopify Admin (used by client)

---

## 3. Admin & Product Management (Critical Rule)

- The client manages **everything** inside **Shopify Admin**
- There is **NO custom admin panel**
- Products MUST be fetched dynamically

### Dynamic Product Requirement (MANDATORY)

- Category pages MUST be driven by **Shopify Collections**
- When the client:
  1. Adds a new product in Shopify
  2. Assigns it to a collection
  3. Publishes it

👉 The product MUST automatically appear on the frontend  
👉 No code changes  
👉 No redeploy required

DO NOT hardcode product lists.

---

## 4. Tech Stack (Locked)

### Frontend
- **Framework:** Next.js (latest stable)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (or equivalent utility-first CSS)
- **Animations:** Free, open-source only
  - Framer Motion (preferred)
  - Native CSS animations where possible
- **Scrolling / UX:**
  - Smooth scrolling
  - Subtle micro-interactions
  - Performance-first (no heavy libraries)

### Data & APIs
- Shopify Storefront API (GraphQL)
- Environment variables for API keys

### Rendering Strategy
- Use **ISR (Incremental Static Regeneration)** or **Server Components**
- Pages must be:
  - SEO-friendly
  - Fast
  - Dynamically updated from Shopify

---

## 5. Pages to Build

### Public Pages
1. Home Page
2. Collection (Category) Pages
3. Product Detail Page (PDP)
4. Cart
5. Checkout Redirect (Shopify-hosted)
6. Static Pages:
   - About
   - Contact
   - Shipping & Returns
   - Privacy Policy / Terms

---

## 6. Page Responsibilities

### Home Page
- Brand storytelling
- Featured collections (fetched from Shopify)
- Featured products (dynamic)
- Smooth animations on scroll

### Collection Pages
- Fetch products dynamically from Shopify collections
- Support:
  - Pagination or infinite scroll
  - Sorting (price, newest, etc.)
- No hardcoded product data

### Product Detail Page
- Product title
- Images (optimized)
- Price
- Variants (size, color, etc.)
- Stock availability
- Add to cart
- SEO-friendly metadata

---

## 7. Cart & Checkout Flow

### Cart
- Cart state handled client-side
- Synced with Shopify
- Persistent across sessions if possible

### Checkout
- DO NOT build a custom checkout
- Redirect users to **Shopify Checkout**
- Shopify handles:
  - Payments
  - Address
  - Shipping
  - Order confirmation

---

## 8. What NOT to Build (Hard Rules)

DO NOT:
- Build a custom backend
- Build inventory logic
- Build order management
- Build a custom admin dashboard
- Duplicate Shopify functionality
- Overengineer state management

If Shopify already does it → use Shopify.

---

## 9. Analytics & Tracking (Setup Only)

Frontend must include hooks for:
- Google Analytics 4 (GA4)
- Meta Pixel
- TikTok Pixel

Track:
- Product views
- Add to cart
- Checkout initiated
- Purchase completed (via Shopify)

---

## 10. Performance & Quality Standards

- Lighthouse score should be high (especially mobile)
- Images optimized (Next/Image or equivalent)
- Minimal JavaScript bundle
- Clean, readable, maintainable code
- No unnecessary abstractions

---

## 11. Phase-wise Development Plan

### Phase 1 – Core Storefront
- Shopify API integration
- Home, collection, product pages
- Cart + checkout redirect
- Basic SEO

### Phase 2 – UX & Animation
- Smooth page transitions
- Scroll-based animations
- Micro-interactions
- Visual polish

### Phase 3 – Optimization & Hardening
- Performance tuning
- SEO refinement
- Edge cases
- Final testing

---

## 12. Instructions to Claude Code (Important)

- Act as a **senior frontend engineer**
- Treat this document as the **single source of truth**
- Ask questions ONLY if something blocks progress
- Do not introduce new tools without justification
- Prefer simplicity and performance over complexity
- Ensure product data is fully dynamic from Shopify

---

## 13. Definition of Success

- Client can add/edit products in Shopify
- Products appear automatically on the site
- No developer involvement needed for catalog updates
- Frontend is fast, smooth, and brand-aligned
- Architecture is scalable and maintainable

---

END OF DOCUMENT
