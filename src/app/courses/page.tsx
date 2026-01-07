import { Metadata } from "next";
import { getProducts } from "@/lib/shopify";
import { ProductGrid } from "@/components/product/product-grid";
import { CoursesHero } from "@/components/courses/courses-hero";
import { CoursesContent } from "@/components/courses/courses-content";
import { CoursesFAQ } from "@/components/courses/courses-faq";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Hair Extension Courses | by Danielle Alexandra",
  description:
    "Master the art of hair extensions with our professional training courses. Beginner to advanced courses available across the UK.",
};

export default async function CoursesPage() {
  const products = await getProducts(12);

  return (
    <main>
      {/* Hero Section */}
      <CoursesHero />

      {/* Courses Grid Section */}
      <section id="courses" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-light text-text-primary mb-4">
              Our Courses
            </h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Choose from our range of professional hair extension courses
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>

      {/* Content Section */}
      <CoursesContent />

      {/* FAQ Section */}
      <CoursesFAQ />
    </main>
  );
}
