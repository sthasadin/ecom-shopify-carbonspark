"use client";

import { motion } from "framer-motion";
// import Image from "next/image"; // Uncomment when image is available
import Link from "next/link";

export function CoursesContent() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] w-full bg-background-warm"
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
            className="lg:pl-8"
          >
            <span className="text-body-sm tracking-widest text-text-secondary uppercase mb-4 block">
              Book Today
            </span>
            <h2 className="text-h1 font-light text-text-primary mb-6">
              What Hair Extension Courses Do We Offer?
            </h2>
            <div className="space-y-4 text-body text-text-secondary leading-relaxed">
              <p>
                We currently offer a range of professional hair extension courses designed
                to suit all skill levels. From our beginner-friendly foundation courses to
                advanced masterclasses, you&apos;ll learn various techniques for different
                professional methods.
              </p>
              <p>
                Our courses cover techniques including Flat Tip Bonds, Tiny Tip Bonds,
                Nano Bonds, Seamless Tape Weft, Seamless Flat Weft, and Xtra Seamless Weft.
                Simply choose the course you would like to enrol in to get started!
              </p>
            </div>
            <Link
              href="#courses"
              className="inline-flex items-center mt-8 text-body font-medium text-text-primary hover:text-text-secondary transition-colors group"
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
