"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What will I learn on the course?",
    answer:
      "You'll learn professional hair extension application techniques, client consultation skills, colour matching, aftercare advice, and business tips to help you succeed. Each course focuses on specific methods so you can master each technique.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "Our courses cater to all skill levels. Beginner courses require no prior experience, while our advanced courses are designed for those who already have foundational knowledge in hair extensions.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Course duration varies depending on the technique being taught. Most of our courses run for 1-2 days, with full training manuals and ongoing support provided after completion.",
  },
  {
    question: "What's included in the price?",
    answer:
      "All courses include professional training, a starter kit with quality hair extensions and tools, a comprehensive training manual, certification upon completion, and ongoing support from our team.",
  },
  {
    question: "Where are the courses held?",
    answer:
      "We hold courses at various locations across the UK. Check our Locations page for upcoming course dates and venues near you. We also offer private training sessions for salons.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes! Upon successful completion of your course, you'll receive a professional certificate that you can display in your salon and use for insurance purposes.",
  },
];

export function CoursesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background-warm py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-h1 font-light text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body text-text-secondary">
            Everything you need to know about our hair extension courses
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-border"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-body font-medium text-text-primary group-hover:text-text-secondary transition-colors">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 flex-shrink-0 text-text-secondary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-body text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
