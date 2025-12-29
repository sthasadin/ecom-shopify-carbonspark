# bydaniellealexzandra - Style Guide

A comprehensive design system for maintaining consistency across the website.
Inspired by minimalist luxury aesthetics with sharp, modern design.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Borders & Corners](#borders--corners)
6. [Shadows](#shadows)
7. [Buttons](#buttons)
8. [Links](#links)
9. [Form Elements](#form-elements)
10. [Cards & Containers](#cards--containers)
11. [Images](#images)
12. [Animations](#animations)
13. [Layout Grid](#layout-grid)
14. [Component Examples](#component-examples)

---

## Design Philosophy

- **Minimalist Luxury** - Clean, spacious, sophisticated
- **Sharp Corners** - Modern, contemporary feel (0px border radius)
- **Warm Neutrals** - Elegant brown tones for a premium look
- **Generous Whitespace** - Content should breathe
- **Light Mode Only** - Focused, consistent experience

---

## Color Palette

### Primary Colors (Warm Brown)

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Primary | `#8e8b84` | `text-primary` / `bg-primary` | Headings, accents, borders |
| Primary Dark | `#6b6862` | `text-primary-dark` / `bg-primary-dark` | Hover states |
| Primary Light | `#a8a59e` | `text-primary-light` / `bg-primary-light` | Subtle accents |

### Secondary Colors (Black)

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Secondary | `#000000` | `text-secondary` / `bg-secondary` | CTA buttons, strong emphasis |
| Secondary Hover | `#333333` | `hover:bg-secondary-hover` | Button hover states |

### Background Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Background | `#ffffff` | `bg-background` | Main page background |
| Background Warm | `#f8f6f3` | `bg-background-warm` | Alternate sections, hero |
| Background Light | `#f5f5f5` | `bg-background-light` | Cards, inputs, subtle areas |

### Text Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Text Primary | `#1a1a1a` | `text-text-primary` | Main body text, headings |
| Text Secondary | `#6b6862` | `text-text-secondary` | Secondary text, descriptions |
| Text Muted | `#9ca3af` | `text-text-muted` | Placeholders, captions |

### Border Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Border | `#e5e5e5` | `border-border` | Default borders |
| Border Dark | `#8e8b84` | `border-border-dark` | Emphasized borders |

### Status Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Success | `#008060` | `text-success` / `bg-success` | Success messages |
| Error | `#d72c0d` | `text-error` / `bg-error` | Error messages, remove buttons |

### CSS Variables

```css
:root {
  --color-primary: #8e8b84;
  --color-primary-dark: #6b6862;
  --color-primary-light: #a8a59e;
  --color-secondary: #000000;
  --color-secondary-hover: #333333;
  --color-background: #ffffff;
  --color-background-warm: #f8f6f3;
  --color-background-light: #f5f5f5;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #6b6862;
  --color-text-muted: #9ca3af;
  --color-border: #e5e5e5;
  --color-border-dark: #8e8b84;
  --color-success: #008060;
  --color-error: #d72c0d;
}
```

---

## Typography

### Font Family

**Primary Font:** Inter (sans-serif)

```css
font-family: "Inter", system-ui, sans-serif;
```

Tailwind: `font-sans`

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Tailwind |
|---------|------|--------|-------------|----------------|----------|
| Display | 48px (3rem) | 600 | 1.1 | -0.02em | `text-display font-semibold` |
| H1 | 36px (2.25rem) | 600 | 1.2 | -0.01em | `text-h1 font-semibold` |
| H2 | 24px (1.5rem) | 600 | 1.3 | 0 | `text-h2 font-semibold` |
| H3 | 20px (1.25rem) | 600 | 1.4 | 0 | `text-h3 font-semibold` |
| Body Large | 18px (1.125rem) | 400 | 1.6 | 0 | `text-body-lg` |
| Body | 16px (1rem) | 400 | 1.6 | 0 | `text-body` |
| Body Small | 14px (0.875rem) | 400 | 1.5 | 0 | `text-body-sm` |
| Caption | 12px (0.75rem) | 500 | 1.4 | 0.02em | `text-caption font-medium` |

### Font Weights

| Weight | Value | Tailwind Class | Usage |
|--------|-------|----------------|-------|
| Regular | 400 | `font-normal` | Body text |
| Medium | 500 | `font-medium` | Links, labels, captions |
| Semibold | 600 | `font-semibold` | Headings, buttons |
| Bold | 700 | `font-bold` | Strong emphasis |

### Usage Examples

```html
<!-- Display Heading -->
<h1 class="text-display font-semibold text-text-primary">
  Premium Fashion Collection
</h1>

<!-- Section Heading -->
<h2 class="text-h1 font-semibold text-text-primary">
  What We Offer
</h2>

<!-- Body Text -->
<p class="text-body text-text-secondary">
  Discover our curated selection of contemporary pieces.
</p>

<!-- Caption -->
<span class="text-caption font-medium text-text-muted">
  Free shipping on orders over $100
</span>
```

---

## Spacing System

Based on an **8px grid system**.

### Spacing Scale

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| 1 | 4px | `p-1`, `m-1`, `gap-1` | Tight gaps, icon spacing |
| 2 | 8px | `p-2`, `m-2`, `gap-2` | Small internal spacing |
| 3 | 12px | `p-3`, `m-3`, `gap-3` | Component internal padding |
| 4 | 16px | `p-4`, `m-4`, `gap-4` | Standard padding/gaps |
| 5 | 20px | `p-5`, `m-5`, `gap-5` | Medium spacing |
| 6 | 24px | `p-6`, `m-6`, `gap-6` | Section internal spacing |
| 8 | 32px | `p-8`, `m-8`, `gap-8` | Component margins |
| 10 | 40px | `p-10`, `m-10` | Large spacing |
| 12 | 48px | `p-12`, `m-12` | Section spacing |
| 16 | 64px | `p-16`, `m-16` | Major section padding |
| 20 | 80px | `p-20`, `m-20` | Hero sections |
| 24 | 96px | `p-24`, `m-24` | Extra large sections |

### Container & Page Layout

```html
<!-- Standard Container -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>

<!-- Section Spacing -->
<section class="py-16 lg:py-24">
  <!-- Section content -->
</section>
```

### Common Patterns

| Pattern | Classes |
|---------|---------|
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Section Padding | `py-16` or `py-16 lg:py-24` |
| Card Grid | `grid gap-6` or `grid gap-4 md:gap-6` |
| Stack Items | `space-y-4` or `space-y-6` |
| Inline Items | `space-x-4` or `gap-4` |

---

## Borders & Corners

### Border Radius

**Default: Sharp corners (0px)**

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| None | 0px | `rounded-none` | Default for all elements |
| Small | 2px | `rounded-sm` | Subtle rounding if needed |

### Border Width

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| Default | 1px | `border` | Standard borders |
| Thick | 2px | `border-2` | Emphasis borders |

### Border Styles

```html
<!-- Default Border -->
<div class="border border-border rounded-none">

<!-- Emphasized Border -->
<div class="border border-border-dark rounded-none">

<!-- Bottom Border Only -->
<div class="border-b border-border">
```

---

## Shadows

**Approach: Minimal shadows for flat, modern design**

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| None | none | `shadow-none` | Default |
| Subtle | `0 1px 2px rgba(0,0,0,0.05)` | `shadow-subtle` | Cards on hover |

---

## Buttons

### Primary Button (Black)

For main CTAs and important actions.

```html
<button class="bg-secondary text-white px-6 py-3 font-medium rounded-none hover:bg-secondary-hover transition-colors duration-200">
  Shop Now
</button>
```

**Specs:**
- Background: `#000000`
- Text: `#ffffff`
- Hover: `#333333`
- Padding: `px-6 py-3` (24px horizontal, 12px vertical)
- Font: Medium weight
- Corners: Sharp (0px)

### Secondary Button (Outline)

For secondary actions.

```html
<button class="bg-transparent text-primary border border-primary px-6 py-3 font-medium rounded-none hover:bg-primary hover:text-white transition-colors duration-200">
  Learn More
</button>
```

**Specs:**
- Background: Transparent
- Text: `#8e8b84`
- Border: `#8e8b84`
- Hover: Fill with primary color
- Padding: `px-6 py-3`
- Corners: Sharp (0px)

### Text Button / Link Button

For tertiary actions.

```html
<button class="text-primary font-medium underline hover:no-underline transition-colors duration-200">
  View All →
</button>
```

### Button Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| Small | `px-4 py-2` | `text-sm` |
| Medium | `px-6 py-3` | `text-base` |
| Large | `px-8 py-4` | `text-lg` |

### Disabled State

```html
<button class="bg-secondary text-white px-6 py-3 font-medium rounded-none opacity-50 cursor-not-allowed" disabled>
  Sold Out
</button>
```

---

## Links

### Text Links

```html
<!-- Primary Link -->
<a href="#" class="text-primary font-medium underline hover:no-underline">
  Explore Collections
</a>

<!-- Navigation Link -->
<a href="#" class="text-text-secondary hover:text-text-primary transition-colors">
  Shop
</a>

<!-- Arrow Link -->
<a href="#" class="text-primary font-medium">
  View All Products →
</a>
```

---

## Form Elements

### Text Input

```html
<input
  type="text"
  placeholder="Enter your email"
  class="w-full px-4 py-3 bg-background-light border border-border rounded-none text-text-primary placeholder-text-muted focus:border-primary focus:outline-none transition-colors"
/>
```

### Select

```html
<select class="w-full px-4 py-3 bg-background-light border border-border rounded-none text-text-primary focus:border-primary focus:outline-none">
  <option>Select size</option>
</select>
```

---

## Cards & Containers

### Basic Card

```html
<div class="bg-background border border-border rounded-none p-6">
  <!-- Card content -->
</div>
```

### Product Card

```html
<div class="group">
  <div class="aspect-[3/4] bg-background-light rounded-none overflow-hidden">
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
  </div>
  <h3 class="mt-3 text-body font-medium text-text-primary">Product Name</h3>
  <p class="text-body-sm text-text-secondary">$99.00</p>
</div>
```

### Section Container

```html
<!-- White Background Section -->
<section class="bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Content -->
  </div>
</section>

<!-- Warm Background Section -->
<section class="bg-background-warm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Content -->
  </div>
</section>
```

---

## Images

### Aspect Ratios

| Ratio | Class | Usage |
|-------|-------|-------|
| Portrait | `aspect-[3/4]` | Product cards, hero images |
| Square | `aspect-square` | Thumbnails, grid items |
| Landscape | `aspect-[4/3]` | Collection cards, features |
| Wide | `aspect-video` (16/9) | Banners |

### Image Treatment

```html
<!-- Product Image -->
<div class="aspect-[3/4] bg-background-light rounded-none overflow-hidden">
  <img
    src="..."
    alt="..."
    class="w-full h-full object-cover"
  />
</div>

<!-- Hover Zoom Effect -->
<div class="aspect-[3/4] rounded-none overflow-hidden">
  <img
    src="..."
    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
```

---

## Animations

### Transition Durations

| Speed | Duration | Tailwind | Usage |
|-------|----------|----------|-------|
| Fast | 150ms | `duration-150` | Hover states, small UI |
| Normal | 200ms | `duration-200` | Standard transitions |
| Slow | 300ms | `duration-300` | Page elements, images |

### Easing

Default: `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind's default ease)

Tailwind: `ease-out` or `transition-colors`

### Common Transitions

```html
<!-- Color Transition -->
<button class="transition-colors duration-200">

<!-- Transform Transition -->
<div class="transition-transform duration-300">

<!-- All Properties -->
<div class="transition-all duration-200">
```

### Framer Motion Presets

```tsx
// Fade In
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.3 }}

// Slide Up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}

// Scale on Tap
whileTap={{ scale: 0.98 }}

// Hover Scale
whileHover={{ scale: 1.02 }}

// Stagger Children
transition={{ delay: index * 0.05 }}
```

---

## Layout Grid

### Responsive Breakpoints

| Breakpoint | Width | Tailwind Prefix |
|------------|-------|-----------------|
| Mobile | < 640px | (default) |
| Small | ≥ 640px | `sm:` |
| Medium | ≥ 768px | `md:` |
| Large | ≥ 1024px | `lg:` |
| XL | ≥ 1280px | `xl:` |

### Grid Patterns

```html
<!-- 2 Column on Mobile, 4 on Desktop -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

<!-- 2 Column Layout -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<!-- 3 Column Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
```

---

## Component Examples

### Header

```html
<header class="sticky top-0 z-40 bg-background border-b border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="text-h3 font-semibold text-text-primary">
        bydaniellealexzandra
      </a>
      <!-- Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#" class="text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
          Shop
        </a>
      </nav>
    </div>
  </div>
</header>
```

### Hero Section

```html
<section class="bg-background-warm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="text-display font-semibold text-text-primary mb-6">
          Premium Fashion Collection
        </h1>
        <p class="text-body-lg text-text-secondary mb-8">
          Description text here.
        </p>
        <div class="flex gap-4">
          <a href="#" class="bg-secondary text-white px-6 py-3 font-medium rounded-none hover:bg-secondary-hover transition-colors">
            Shop Now
          </a>
          <a href="#" class="border border-primary text-primary px-6 py-3 font-medium rounded-none hover:bg-primary hover:text-white transition-colors">
            Learn More
          </a>
        </div>
      </div>
      <div>
        <!-- Images -->
      </div>
    </div>
  </div>
</section>
```

### FAQ Card

```html
<div class="bg-background rounded-none p-6 border border-border">
  <h3 class="text-body font-semibold text-text-primary mb-2">
    Question here?
  </h3>
  <p class="text-body-sm text-text-secondary">
    Answer here.
  </p>
</div>
```

---

## Quick Reference

### Most Used Classes

| Purpose | Classes |
|---------|---------|
| Primary text | `text-text-primary` |
| Secondary text | `text-text-secondary` |
| Primary accent | `text-primary` or `bg-primary` |
| Warm background | `bg-background-warm` |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Section padding | `py-16` or `py-16 lg:py-24` |
| Sharp corners | `rounded-none` |
| Default border | `border border-border` |
| Primary button | `bg-secondary text-white px-6 py-3 font-medium rounded-none hover:bg-secondary-hover transition-colors` |
| Outline button | `border border-primary text-primary px-6 py-3 font-medium rounded-none hover:bg-primary hover:text-white transition-colors` |

---

## File Locations

- **Tailwind Config:** `/tailwind.config.ts`
- **Global Styles:** `/src/app/globals.css`
- **Button Component:** `/src/components/ui/button.tsx`
- **This Style Guide:** `/docs/STYLE-GUIDE.md`

---

*Last updated: December 2024*
