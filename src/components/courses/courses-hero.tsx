"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CoursesHero() {
  return (
    <section className="relative bg-[#a89f94] min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image - uncomment when image is provided */}
      {/* <Image
        src="/images/courses-hero.jpg"
        alt="Hair Extension Courses"
        fill
        className="object-cover object-center"
        priority
      /> */}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#a89f94]/90 via-[#a89f94]/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="text-body-sm tracking-widest text-white/80 uppercase mb-4 block">
            Book a Course Today
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Hair Extension Courses
          </h1>
          <p className="text-body text-white/90 leading-relaxed mb-8">
            Are you looking to improve your knowledge of hair extensions? Not just how to
            apply them, but how to conduct professional consultations and offer a colour
            match service? We offer a wide range of hair extension courses, suitable for
            NVQ Level 2 qualified hairdressers, to take the next step in their careers.
            Find out more about what this involves and how to join our next course below.
          </p>
          <Link
            href="#courses"
            className="inline-block px-8 py-3 border-2 border-white text-white text-body-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[#a89f94] transition-colors duration-300"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
