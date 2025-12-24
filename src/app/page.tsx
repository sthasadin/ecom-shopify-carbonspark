import Link from "next/link";
import { getProducts, getCollections } from "@/lib/shopify";
import { ProductGrid } from "@/components/product/product-grid";

export default async function Home() {
  const [products, collections] = await Promise.all([
    getProducts(8),
    getCollections(),
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              bydaniellealexzandra
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Premium fashion for the modern individual. Discover our curated collection of contemporary pieces.
            </p>
            <Link
              href="/collections"
              className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {collections.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
            <Link
              href="/collections"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.slice(0, 3).map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.handle}`}
                className="group relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden"
              >
                {collection.image ? (
                  <img
                    src={collection.image.url}
                    alt={collection.image.altText || collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">
                    {collection.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link
            href="/collections"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            View All
          </Link>
        </div>
        <ProductGrid products={products} />
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Subscribe to receive updates on new arrivals, special offers, and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
