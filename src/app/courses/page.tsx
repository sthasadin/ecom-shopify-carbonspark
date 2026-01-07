import { Metadata } from "next";
import { getProducts } from "@/lib/shopify";
import { CoursesHero } from "@/components/courses/courses-hero";
import { CoursesGrid } from "@/components/courses/courses-grid";
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
          <CoursesGrid products={products} />
        </div>
      </section>

      {/* Content Section */}
      <CoursesContent />

      {/* FAQ Section */}
      <CoursesFAQ />
    </main>
  );
}
