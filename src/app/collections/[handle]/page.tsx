import { notFound } from "next/navigation";
import { getCollection, getCollections } from "@/lib/shopify";
import { ProductGrid } from "@/components/product/product-grid";
import type { Metadata } from "next";

// Revalidate data every 60 seconds for dynamic Shopify content
export const revalidate = 60;

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const collection = await getCollection(handle);

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: collection.title,
    description: collection.description || `Shop ${collection.title} collection`,
  };
}

export async function generateStaticParams() {
  const collections = await getCollections();
  return collections.map((collection) => ({
    handle: collection.handle,
  }));
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  const collection = await getCollection(handle);

  if (!collection) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Collection Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{collection.title}</h1>
        {collection.description && (
          <p className="text-gray-600 mt-2 max-w-2xl">{collection.description}</p>
        )}
        <p className="text-sm text-gray-500 mt-4">
          {collection.products.length} product{collection.products.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Products Grid */}
      <ProductGrid products={collection.products} />
    </div>
  );
}
