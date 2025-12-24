import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ecom-shopify-carbonspark.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "bydaniellealexzandra | Premium Fashion",
    template: "%s | bydaniellealexzandra",
  },
  description: "Discover premium fashion for the modern individual. Shop our curated collection of contemporary pieces at bydaniellealexzandra.",
  keywords: ["fashion", "premium fashion", "contemporary fashion", "clothing", "accessories", "bydaniellealexzandra"],
  authors: [{ name: "bydaniellealexzandra" }],
  creator: "bydaniellealexzandra",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "bydaniellealexzandra",
    title: "bydaniellealexzandra | Premium Fashion",
    description: "Discover premium fashion for the modern individual. Shop our curated collection of contemporary pieces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "bydaniellealexzandra | Premium Fashion",
    description: "Discover premium fashion for the modern individual.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
