import { MetadataRoute } from "next";
import { getProducts, getCollections } from "@/lib/shopify";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ecom-shopify-carbonspark.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, collections] = await Promise.all([
    getProducts(100),
    getCollections(),
  ]);

  const productUrls = products.map((product) => ({
    url: `${siteUrl}/products/${product.handle}`,
    lastModified: product.updatedAt ? new Date(product.updatedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const collectionUrls = collections.map((collection) => ({
    url: `${siteUrl}/collections/${collection.handle}`,
    lastModified: collection.updatedAt ? new Date(collection.updatedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...collectionUrls,
    ...productUrls,
  ];
}
