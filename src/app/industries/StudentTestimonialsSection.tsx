// src/app/industries/StudentTestimonialsSection.tsx

"use client";

import React from "react";
import Image from "next/image";
import { Quote, User } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rahul S.",
    role: "SDE @ Global Tech",
    review: "Led AI integration project.",
  },
  {
    name: "Priya M.",
    role: "Cloud Eng @ Fintech",
    review: "Optimized cloud costs by 40%.",
  },
  {
    name: "Amit K.",
    role: "DevOps @ SaaS Firm",
    review: "Reduced deployment time by 60%.",
  },
];

export default function StudentTestimonialsSection() {
  return (
    <section className="relative z-25 w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/15">
      {/* Decorative Corner Graphics with sizes prop to resolve Next.js warning */}
      {/* Bottom-Left Woman / Illustration Graphic */}
      <div className="absolute bottom-0 left-0 w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 opacity-25 pointer-events-none z-0">
        <Image
          src="/industries/5.jpg"
          alt="Students Reviews"
          fill
          sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 256px"
          className="object-contain object-bottom-left"
        />
      </div>

      {/* Top-Right Corner Floral / Ornamental Graphic */}
      <div className="absolute top-0 right-0 w-32 sm:w-44 md:w-56 h-32 sm:h-44 md:h-56 opacity-25 pointer-events-none z-0">
        <Image
          src="/industries/6.jpg"
          alt="Galaxy Theme"
          fill
          sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 224px"
          className="object-contain object-top-right"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-350">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#00D094]/10 border border-[#00D094]/30 text-[#00D094] text-xs font-mono uppercase tracking-[0.2em] animate-pulse">
            Testimonials
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            What our clients say
          </h3>
        </div>

        {/* Testimonials Grid Cards Layout - Fully Responsive for Mobile & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-[24px] border border-white/15 bg-[#121212] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#00D094]/60 hover:bg-[#161616] group shadow-xl overflow-hidden"
            >
              {/* Top glowing line accent on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-linear-to-r from-transparent via-[#00D094] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote Icon & Review Text */}
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00D094]/40 group-hover:bg-[#00D094]/10 transition-all duration-300">
                  <Quote className="h-5 w-5 text-[#00D094]" />
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-normal not-italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Student Profile Info with Clean Avatar Icon matching requested design */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00D094] bg-[#00D094]/20 flex items-center justify-center shrink-0">
                  <User className="h-6 w-6 text-[#00D094]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#00D094] transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}