import Link from "next/link";
import Image from "next/image";
import { getProducts, getCollections } from "@/lib/shopify";
import { ProductGrid } from "@/components/product/product-grid";
import { HeroSlider } from "@/components/home/hero-slider";

// Static hero slides with custom promotional images
const heroSlides = [
  {
    id: "slide-1",
    desktopImage: "/images/hero/slide-1-desktop.webp",
    mobileImage: "/images/hero/slide-1-mobile.webp",
    alt: "The Duet Collection - Shop Now",
    link: "/collections",
  },
  {
    id: "slide-2",
    desktopImage: "/images/hero/slide-2-desktop.webp",
    mobileImage: "/images/hero/slide-2-mobile.webp",
    alt: "End of Year Sale - Get Up To 50% Off",
    link: "/collections",
  },
];

export default async function Home() {
  const [products, collections] = await Promise.all([
    getProducts(8),
    getCollections(),
  ]);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} autoPlayInterval={5000} />

      {/* Intro Content Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h3 lg:text-h2 font-semibold text-primary uppercase tracking-widest mb-6">
            Curated For You
          </h2>
          <p className="text-body text-text-secondary leading-relaxed">
            At bydaniellealexzandra, we believe fashion is an expression of individuality.
            Our carefully curated collection blends contemporary design with timeless elegance,
            offering premium pieces crafted for those who appreciate refined style and exceptional quality.
          </p>
        </div>
      </section>

      {/* Full-Width Video Section */}
      <section className="w-full relative aspect-video overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://bydaniellealexandra.com/cdn/shop/videos/c/vp/e64902d70439445b8dd5faac18d55035/e64902d70439445b8dd5faac18d55035.HD-720p-1.6Mbps-25685719.mp4?v=0"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Collections Section */}
      {collections.length > 0 && (
        <section className="bg-background-warm py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-h3 lg:text-h2 font-semibold text-primary uppercase tracking-widest mb-6">
                Our Collections
              </h2>
              <p className="text-body text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Explore our carefully curated collections, each designed to complement your unique style.
                From everyday essentials to statement pieces, discover premium fashion that elevates your wardrobe.
              </p>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {collections.slice(0, 5).map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className="group relative aspect-[3/4] bg-background-light rounded-none overflow-hidden"
                >
                  {collection.image ? (
                    <Image
                      src={collection.image.url}
                      alt={collection.image.altText || collection.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-background-light" />
                  )}
                  {/* Title Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-secondary/80 py-3 px-2">
                    <h3 className="text-body-sm font-medium text-white text-center uppercase tracking-wider">
                      {collection.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section 1 - Image Left, Text Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-background-light rounded-none overflow-hidden">
            {products[2]?.featuredImage && (
              <Image
                src={products[2].featuredImage.url}
                alt="Our Collection"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <h2 className="text-h1 font-semibold text-text-primary mb-6">
              What We Offer
            </h2>
            <p className="text-text-secondary mb-4">
              At bydaniellealexzandra, we curate premium fashion pieces that blend contemporary
              design with timeless elegance. Each item in our collection is carefully selected
              to ensure the highest quality and style.
            </p>
            <p className="text-text-secondary mb-6">
              From everyday essentials to statement pieces, our collection caters to those who
              appreciate refined fashion and attention to detail.
            </p>
            <Link
              href="/collections"
              className="inline-block text-primary font-medium underline hover:no-underline transition-colors duration-200"
            >
              Explore Our Collections →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section 2 - Text Left, Image Right */}
      <section className="bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-h1 font-semibold text-text-primary mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-text-secondary mb-4">
                We believe in quality over quantity. Every piece in our collection undergoes
                rigorous quality checks to ensure it meets our high standards.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">Premium materials and craftsmanship</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">Ethically sourced and sustainable</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">Designed for comfort and style</span>
                </li>
              </ul>
              <Link
                href="/about"
                className="inline-block text-primary font-medium underline hover:no-underline transition-colors duration-200"
              >
                Learn More About Us →
              </Link>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] bg-background-light rounded-none overflow-hidden">
              {products[3]?.featuredImage && (
                <Image
                  src={products[3].featuredImage.url}
                  alt="Quality Fashion"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section 3 - Image Left, Text Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-background-light rounded-none overflow-hidden">
              {products[4]?.featuredImage && (
                <Image
                  src={products[4].featuredImage.url}
                  alt="Style 1"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="aspect-square bg-background-light rounded-none overflow-hidden">
              {products[5]?.featuredImage && (
                <Image
                  src={products[5].featuredImage.url}
                  alt="Style 2"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <div>
            <h2 className="text-h1 font-semibold text-text-primary mb-6">
              Style For Every Occasion
            </h2>
            <p className="text-text-secondary mb-4">
              Whether you&apos;re dressing for a casual day out or a special event, our collection
              has something for every occasion. Mix and match our pieces to create your perfect look.
            </p>
            <p className="text-text-secondary mb-6">
              Our team of stylists carefully curates each collection to ensure versatility
              and wearability without compromising on style.
            </p>
            <Link
              href="/collections"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-none font-medium hover:bg-secondary-hover transition-colors duration-200"
            >
              Shop All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-semibold text-text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover our most popular pieces, hand-picked for their exceptional quality and style.
            </p>
          </div>
          <ProductGrid products={products} />
          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-block bg-secondary text-white px-8 py-3 rounded-none font-medium hover:bg-secondary-hover transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-h1 font-semibold text-text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background rounded-none p-6 border border-border">
              <h3 className="font-semibold text-text-primary mb-2">What is your shipping policy?</h3>
              <p className="text-text-secondary">We offer free shipping on orders over $100. Standard shipping takes 3-5 business days, and express shipping is available for an additional fee.</p>
            </div>
            <div className="bg-background rounded-none p-6 border border-border">
              <h3 className="font-semibold text-text-primary mb-2">What is your return policy?</h3>
              <p className="text-text-secondary">We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in their original condition with tags attached.</p>
            </div>
            <div className="bg-background rounded-none p-6 border border-border">
              <h3 className="font-semibold text-text-primary mb-2">How do I find my size?</h3>
              <p className="text-text-secondary">Each product page includes a detailed size guide. If you need additional assistance, please contact our customer service team.</p>
            </div>
            <div className="bg-background rounded-none p-6 border border-border">
              <h3 className="font-semibold text-text-primary mb-2">Do you ship internationally?</h3>
              <p className="text-text-secondary">Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-h1 font-semibold mb-4">
            Join Our Community
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Subscribe to receive updates on new arrivals, special offers, and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-none text-text-primary bg-background placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-background text-text-primary font-medium rounded-none hover:bg-background-warm transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
