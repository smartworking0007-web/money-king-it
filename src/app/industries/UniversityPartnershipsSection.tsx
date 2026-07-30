// src/app/industries/UniversityPartnershipsSection.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";

const PARTNERSHIP_FEATURES = [
  { title: "Industry Collab" },
  { title: "Research" },
  { title: "Innovation Labs" },
  { title: "Skill Dev" },
  { title: "Curriculum" },
  { title: "Guest Lectures" },
  { title: "Hackathons" },
  { title: "Tech Workshops" },
];

export default function UniversityPartnershipsSection() {
  return (
    <section className="relative w-screen min-h-[90vh] md:min-h-[95vh] bg-black overflow-hidden flex flex-col justify-between pt-8 pb-8 md:pt-12 md:pb-12 left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
      {/* Background Image - Absolute full-bleed with object-top/object-cover so the head/face is fully visible */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/industries/3.png"
          alt="University Partnerships Hero"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-top brightness-100 contrast-110"
        />

        {/* Dark Overlay over the whole image */}
        <div className="absolute inset-0" />
      </div>

      {/* Top Header Content Over Image - Aligned left with proper spacing */}
      <div className="relative z-10 flex flex-col items-start justify-start text-left px-6 sm:px-10 md:px-16 max-w-7xl mx-auto w-full pt-6 sm:pt-10">
        <Text
          variant="h3"
          className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-[1.1] max-w-3xl"
        >
          University Partnerships
        </Text>

        <div>
          <Link href="/contact">
            <button className="oklch(82.3% 0.12 346.018) text-black px-7 py-2.5 md:px-9 md:py-3 rounded-full font-bold text-xs md:text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#00D094]/20 cursor-pointer">
              Explore Partnerships
            </button>
          </Link>
        </div>
      </div>

      {/* Feature Cards Container - Centered text inside cards */}
      <div className="relative z-10 w-full px-2 sm:px-4 mt-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          {PARTNERSHIP_FEATURES.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center text-center rounded-xl border border-white/15 bg-black/60 backdrop-blur-md px-5 py-3.5 transition-all duration-300 hover:bg-[#00D094]/20 oklch(82.3% 0.12 346.018) hover:-translate-y-1 group shadow-xl overflow-hidden min-h-16 w-full cursor-pointer"
            >
              {/* Subtle top glowing line effect on hover */}
              <div className="absolute top-0 left-4 right-4 h-0.5 bg-linear-to-r from-transparent oklch(82.3% 0.12 346.018) to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title Centered */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight oklch(82.3% 0.12 346.018) transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
