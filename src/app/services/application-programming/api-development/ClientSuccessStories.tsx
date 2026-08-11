// File Name: ClientSuccessStories.tsx

"use client";
import React, { useState } from "react";
import Text from "@/components/ui/Text";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    review:
      "Money King IT ke custom software solutions ne humare business operations ko totally transform kar diya hai. Unki team ka process bahut clear aur fast hai.",
    rating: 5,
  },
  {
    name: "Priya Kulkarni",
    review:
      "Fintech space mein scalability ek bada challenge tha, lekin Money King IT ne humein robust architecture provide kiya. Highly recommended for custom software development.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    review:
      "Unka logistics automation model kaafi precise hai. Humne implementation ke baad efficiency mein kaafi bada jump dekha hai. Great work!",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    review:
      "Education platforms ke liye high concurrency handle karna zaroori hai, aur Money King IT ne humare deployment ko bina kisi glitch ke poora kiya.",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    review:
      "Money King IT team's expertise in architecture is impressive. They delivered our project on time with total structural stability.",
    rating: 5,
  },
  {
    name: "Ananya Deshmukh",
    review:
      "We needed a custom software partner who understood our workflow needs. Money King IT exceeded our expectations with their automated deployment models.",
    rating: 5,
  },
  {
    name: "Rohan Gupta",
    review:
      "Their work on our IoT-integrated factory monitoring system was exceptional. Their ability to solve complex technical bottlenecks is unmatched.",
    rating: 5,
  },
  {
    name: "Neha Agarwal",
    review:
      "Looking for reliable software engineering services? Money King IT provided us with a scalable framework that grew with our user base seamlessly.",
    rating: 5,
  },
];

export default function ClientSuccessStories() {
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

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 m:w-125 h-75 sm:h-125 bg-[#00D094]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
          >
            Client Success Stories
          </Text>

          <Text
            variant="h4"
            className="text-gray-300! text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xl mx-auto"
          >
            We let our clients do the talking when it comes to results. Each
            story below highlights a direct improvement in performance, traffic,
            or ROI. Because in the end, marketing should pay off.
          </Text>
        </div>

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center p-6 sm:p-10 md:p-12 rounded-2xl bg-[#121212]/95 backdrop-blur-md border border-white/10 shadow-2xl">
          {/* Quote Icon watermark */}
          <Quote className="absolute top-6 left-6 h-12 w-12 text-white/5 pointer-events-none" />

          {/* Star Ratings */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#00D094] text-[#00D094]" />
            ))}
          </div>

          {/* Review Text */}
          <Text
            variant="body"
            className="text-gray-200! text-base sm:text-lg md:text-xl font-medium text-center leading-relaxed max-w-2xl mb-8 min-h-22.5 flex items-center justify-center"
          >
            &ldquo;{currentTestimonial.review}&rdquo;
          </Text>

          {/* Client Name */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-0.5 bg-[#00D094]"></div>
            <Text
              variant="h4"
              className="text-white! text-sm sm:text-base font-bold tracking-wide"
            >
              — {currentTestimonial.name}
            </Text>
            <div className="w-8 h-0.5 bg-[#00D094]"></div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-[#00D094]/10 hover:border-[#00D094]/40 hover:text-[#00D094] transition-all duration-300 cursor-pointer shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-[#00D094]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-[#00D094]/10 hover:border-[#00D094]/40 hover:text-[#00D094] transition-all duration-300 cursor-pointer shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
