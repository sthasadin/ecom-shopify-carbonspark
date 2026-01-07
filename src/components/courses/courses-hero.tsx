"use client";

import { motion } from "framer-motion";

export function CoursesHero() {
  return (
    <section className="relative bg-background-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-display font-light text-text-primary mb-6">
            Hair Extension Courses
          </h1>
          <p className="text-body-lg text-text-secondary leading-relaxed">
            Master the art of hair extensions with our professional training courses.
            Whether you&apos;re a beginner or looking to advance your skills, our expert-led
            courses will give you the confidence and techniques to excel.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
