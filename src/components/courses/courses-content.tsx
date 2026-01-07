"use client";

import { motion } from "framer-motion";
// import Image from "next/image"; // Uncomment when image is available
import Link from "next/link";

export function CoursesContent() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full bg-background-warm"
          >
            {/* Placeholder - replace with actual image when provided */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-text-muted text-body-sm">Image Coming Soon</span>
            </div>
            {/* Uncomment when image is available:
            <Image
              src="/images/courses-content.jpg"
              alt="Hair extension professional"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            */}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-4"
          >
            <span className="text-caption tracking-widest text-text-secondary uppercase mb-3 block">
              Book Today
            </span>
            <h2 className="text-h2 md:text-h1 font-light text-text-primary mb-4">
              What Hair Extension Courses Do We Offer?
            </h2>
            <div className="text-body-sm text-text-secondary leading-relaxed mb-6">
              <p>
                We currently offer three hair extension courses on our website.
                As part of each course, you&apos;ll have the opportunity to learn
                various techniques for different professional methods which include
                Flat Tip Bonds, Tiny Tip Bonds, Nano Bonds, Seamless Tape Weft,
                Seamless Flat Weft and Xtra Seamless Weft. Simply choose the course
                you would like to enrol in to get started!
              </p>
            </div>
            <Link
              href="#courses"
              className="inline-flex items-center text-body-sm font-medium text-text-primary hover:text-text-secondary transition-colors group uppercase tracking-wider"
            >
              Book a Course
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
