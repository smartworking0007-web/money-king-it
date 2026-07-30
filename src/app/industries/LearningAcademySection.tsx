// src/app/industries/LearningAcademySection.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ACADEMY_FEATURES = [
  { title: "Bootcamps" },
  { title: "AI Certs" },
  { title: "Cloud Certs" },
  { title: "Full Stack Dev" },
  { title: "Tech Workshops" },
  { title: "Leadership" },
  { title: "Mentorship" },
  { title: "Career Readiness" },
];

export default function LearningAcademySection() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-black overflow-hidden flex flex-col justify-between py-6 sm:py-10 md:py-16 px-3 sm:px-5 md:px-8 lg:px-12">
      {/* Background Image with Alt tag "Galaxy Theme" */}
      <div className="absolute inset-0">
        <Image
          src="/industries/4.png"
          alt="Galaxy Theme"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-100 contrast-110"
        />

        {/* Strong Dark Overlay for crystal clear visibility on both mobile and PC */}
        <div className="absolute inset-0 bg-black/80 sm:bg-black/75" />
      </div>

      {/* Top Header Content Over Image */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto my-auto px-2 py-4">
        <h3 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          Learning Academy
        </h3>

        <div>
          <Link href="/contact">
            <button className="bg-[#00D094] text-black px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm hover:bg-[#00b07d] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[#00D094]/30 cursor-pointer">
              Explore Programs
            </button>
          </Link>
        </div>
      </div>

      {/* Feature Cards Grid - Fully Responsive for Mobile, Tablet & Desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-auto pt-2 pb-2">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4">
          {ACADEMY_FEATURES.map((item, index) => (
            <div 
              key={index}
              className="relative flex flex-col justify-center items-center sm:items-start rounded-xl border border-white/20 bg-black/70 backdrop-blur-md p-3.5 sm:p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#00D094] hover:bg-black/90 group shadow-2xl overflow-hidden min-h-17.5 sm:min-h-21.25 text-center sm:text-left"
            >
              {/* Subtle top glowing line effect on hover */}
              <div className="absolute top-0 left-4 right-4 h-0.5 bg-linear-to-r from-transparent via-[#00D094] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title - Fully responsive typography */}
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#00D094] transition-colors duration-300 drop-shadow">
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
