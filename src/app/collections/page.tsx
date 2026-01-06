import Link from "next/link";
import { getCollections } from "@/lib/shopify";
import type { Metadata } from "next";

// Revalidate data every 60 seconds for dynamic Shopify content
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse all our collections",
};

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Collections</h1>

      {collections.length === 0 ? (
        <p className="text-gray-500">No collections found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
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
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4">
                <h2 className="text-xl font-semibold text-white text-center">
                  {collection.title}
                </h2>
                {collection.description && (
                  <p className="text-sm text-white/80 text-center mt-2 line-clamp-2">
                    {collection.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
