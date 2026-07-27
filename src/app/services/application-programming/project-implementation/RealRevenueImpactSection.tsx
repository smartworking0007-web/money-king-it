"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Text from "@/components/ui/Text";

/**
 * ClientSuccessStoriesSection.tsx
 * Fully responsive client success stories / testimonial carousel section built with your custom typography component,
 * dark theme design, interactive slides, and negative margin adjustments for seamless layout integration.
 */

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    quote:
      "Money King IT ke custom software solutions ne humare business operations ko totally transform kar diya hai. Unki team ka process bahut clear aur fast hai.",
    highlight: "100%",
    subtext: "Business Operations Transformed",
  },
  {
    name: "Priya Kulkarni",
    quote:
      "Fintech space mein scalability ek bada challenge tha, lekin Money King IT ne humein robust architecture provide kiya. Highly recommended for custom software development.",
    highlight: "Scalable",
    subtext: "Robust Fintech Architecture",
  },
  {
    name: "Amit Verma",
    quote:
      "Unka logistics automation model kaafi precise hai. Humne implementation ke baad efficiency mein kaafi bada jump dekha hai. Great work!",
    highlight: "High ROI",
    subtext: "Optimized Supply Chain & Efficiency",
  },
  {
    name: "Sneha Iyer",
    quote:
      "Education platforms ke liye high concurrency handle karna zaroori hai, aur Money King IT ne humare deployment ko bina kisi glitch ke poora kiya.",
    highlight: "Glitch-free",
    subtext: "High-Concurrency EdTech Scaling",
  },
  {
    name: "David Miller",
    quote:
      "Money King IT team's expertise in HIPAA-compliant architecture is impressive. They delivered our project on time with total structural stability.",
    highlight: "100% Secure",
    subtext: "HIPAA-Compliant Vault Delivery",
  },
  {
    name: "Sarah Jenkins",
    quote:
      "We needed a custom software partner who understood our workflow needs. Money King IT exceeded our expectations with their automated deployment models.",
    highlight: "Automated",
    subtext: "Seamless Workflow Integration",
  },
  {
    name: "Mark Thompson",
    quote:
      "Their work on our IoT-integrated factory monitoring system was exceptional. Their ability to solve complex technical bottlenecks is unmatched.",
    highlight: "IoT Ready",
    subtext: "Deterministic Factory Logging",
  },
  {
    name: "Jessica Wilson",
    quote:
      "Looking for reliable software engineering services? Money King IT provided us with a scalable framework that grew with our user base seamlessly.",
    highlight: "Seamless",
    subtext: "Rapid User Base Expansion",
  },
];

export default function ClientSuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    /* 
      MOBILE & WEB POSITIONING ADJUSTMENT:
      -mt-12 or -mt-16 handles pulling the section up on mobile screens.
      md:-mt-24 or md:-mt-28 handles pulling the section up on desktop screens.
    */
    <section className="relative z-20 -mt-12 md:-mt-28 w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Main Container */}
      <div className="mx-auto max-w-300">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Text
            variant="h3"
            className="text-white! mb-4 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold tracking-tight"
          >
            Client Success Stories
          </Text>
          <Text
            variant="h4"
            className="text-gray-400! font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto"
          >
            We let our clients do the talking when it comes to results. Each
            story below highlights a direct improvement in performance, traffic,
            or ROI. Because in the end, marketing should pay off.
          </Text>
        </div>

        {/* Carousel Card Container */}
        <div className="relative rounded-[32px] border border-white/10 bg-[#121212] p-8 sm:p-12 md:p-16 flex flex-col justify-between shadow-2xl transition-all duration-300">
          {/* Navigation Controls: Left & Right Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 z-10">
            <button
              onClick={prevSlide}
              aria-label="Previous Story"
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 z-10">
            <button
              onClick={nextSlide}
              aria-label="Next Story"
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Testimonial Inner Content */}
          <div className="px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Left side: Star Rating, Quote, Client Name */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24]"
                  />
                ))}
              </div>

              <div className="relative pl-4 border-l-2 border-emerald-500">
                <Text
                  variant="body"
                  className="text-gray-300! text-[16px] md:text-[18px] leading-relaxed"
                >
                  &ldquo;{current.quote}&rdquo;
                </Text>
              </div>

              <Text
                variant="h5"
                className="text-gray-400! font-semibold text-[15px] pt-1"
              >
                – {current.name}
              </Text>
            </div>

            {/* Right side: Highlight metric badge */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left shrink-0 bg-white/5 border border-white/10 px-8 py-6 rounded-2xl w-full md:w-auto">
              <span className="text-[30px] sm:text-[38px] md:text-[46px] font-extrabold tracking-tight text-[#4ade80] leading-none mb-1">
                {current.highlight}
              </span>
              <Text
                variant="body"
                className="text-gray-400! text-[14px] sm:text-[15px] font-medium"
              >
                {current.subtext}
              </Text>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center space-x-2 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-emerald-500"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
