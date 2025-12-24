# bydaniellealexzandra - Development & Deployment Plan

## Overview

Build a headless e-commerce frontend using Next.js, deployed on Vercel, connected to Shopify as the backend.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      DEVELOPMENT WORKFLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   VPS (Code Workspace)                                          │
│   /home/devuser/projects/websites/ecom-shopify                  │
│         │                                                        │
│         │ git push                                               │
│         ▼                                                        │
│   GitHub Repository                                              │
│         │                                                        │
│         │ auto-deploy (webhook)                                  │
│         ▼                                                        │
│   Vercel (Hosting)                                               │
│         │                                                        │
│         │ API calls                                              │
│         ▼                                                        │
│   Shopify Storefront API (Backend)                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Part 1: Initial Setup (One-Time)

### Step 1.1: Initialize Git Repository

```bash
cd /home/devuser/projects/websites/ecom-shopify
git init
git add .
git commit -m "Initial commit: Next.js project setup"
```

### Step 1.2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `bydaniellealexzandra` (or your preferred name)
3. Keep it Private (recommended for client projects)
4. Do NOT initialize with README (we already have code)
5. Click "Create repository"

### Step 1.3: Connect Local to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/bydaniellealexzandra.git
git branch -M main
git push -u origin main
```

### Step 1.4: Set Up Vercel

1. Go to https://vercel.com
2. Sign up / Log in (use GitHub account for easy integration)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. **Add Environment Variables** before deploying:
   ```
   SHOPIFY_STORE_DOMAIN = carbonspark.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN = 42e1a7a82a2c68c0278b4a385459d58f
   ```
7. Click "Deploy"

### Step 1.5: Verify Deployment

- Vercel gives you a URL like: `https://bydaniellealexzandra.vercel.app`
- Open it and verify the site loads
- Every future `git push` will auto-deploy!

---

## Part 2: Development Workflow (Ongoing)

### Daily Workflow

```
1. Write/edit code on VPS (or locally)
2. Test changes (optional: run locally if needed)
3. Commit changes:
   git add .
   git commit -m "Description of changes"
4. Push to GitHub:
   git push
5. Vercel auto-deploys (takes ~1-2 minutes)
6. View live site at your Vercel URL
```

### Preview Deployments

- Every push to a branch creates a preview URL
- Push to `main` branch deploys to production
- Great for testing before going live

---

## Part 3: Build Phases

### Phase 1 - Core Storefront (Current)
- [x] Project scaffolding (Next.js + TypeScript + Tailwind)
- [ ] Git + GitHub + Vercel setup
- [ ] Shopify API integration (client + queries)
- [ ] Layout components (Header, Footer, Navigation)
- [ ] Home page with featured collections/products
- [ ] Collection pages (dynamic)
- [ ] Product detail pages
- [ ] Cart functionality
- [ ] Checkout redirect to Shopify
- [ ] Basic SEO setup

### Phase 2 - UX & Animation
- [ ] Page transitions
- [ ] Scroll animations (Framer Motion)
- [ ] Micro-interactions
- [ ] Loading states & skeletons
- [ ] Mobile optimization

### Phase 3 - Optimization & Launch
- [ ] Performance optimization
- [ ] SEO refinement
- [ ] Analytics integration (GA4, Meta Pixel)
- [ ] Final testing
- [ ] Custom domain setup
- [ ] Launch!

---

## Part 4: Key Files Structure

```
/home/devuser/projects/websites/ecom-shopify/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── collections/        # Collection pages
│   │   ├── products/           # Product pages
│   │   └── cart/               # Cart page
│   ├── components/             # React components
│   │   ├── layout/             # Header, Footer, Nav
│   │   ├── product/            # Product components
│   │   ├── cart/               # Cart components
│   │   └── ui/                 # Common UI components
│   ├── lib/
│   │   └── shopify/            # Shopify API client
│   └── context/                # React context (cart state)
├── .env.local                  # Local environment variables
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies
└── next.config.ts              # Next.js configuration
```

---

## Part 5: Environment Variables

### Local Development (.env.local)
```env
SHOPIFY_STORE_DOMAIN=carbonspark.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=42e1a7a82a2c68c0278b4a385459d58f
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Vercel Production (set in Vercel dashboard)
```env
SHOPIFY_STORE_DOMAIN=carbonspark.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=42e1a7a82a2c68c0278b4a385459d58f
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Part 6: Custom Domain (Later)

When ready to launch:
1. Buy domain (if not already owned)
2. In Vercel: Project Settings → Domains → Add
3. Update DNS records as Vercel instructs
4. SSL is automatic

---

## Benefits of This Approach

| Benefit | Description |
|---------|-------------|
| No server management | Vercel handles everything |
| Auto-scaling | Handles traffic spikes automatically |
| Global CDN | Fast loading worldwide |
| Preview deploys | Test changes before going live |
| Free SSL | HTTPS included |
| Zero downtime deploys | Updates without interruption |
| No VPS conflicts | Doesn't affect your other projects |

---

## Commands Reference

```bash
# Push changes to deploy
git add .
git commit -m "Your message"
git push

# Check deployment status
# → View in Vercel dashboard or GitHub

# View logs
# → Vercel dashboard → Deployments → Select deployment → Logs
```
