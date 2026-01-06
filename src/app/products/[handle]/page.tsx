import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/shopify";
import { ProductDetails } from "@/components/product/product-details";
import type { Metadata } from "next";

// Revalidate data every 60 seconds for dynamic Shopify content
export const revalidate = 60;

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description || `Shop ${product.title}`,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.featuredImage ? [product.featuredImage.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts(100);
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ProductDetails product={product} />
    </div>
  );
}
