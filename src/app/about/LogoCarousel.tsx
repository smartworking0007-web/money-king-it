"use client";

import React from "react";
import Image from "next/image";

interface LogoItem {
  id: number;
  src: string;
  alt: string;
}

export default function LogoCarousel() {
  // Aapke saare 8 logos ka exact path array (public folder absolute pathing)
  const logos: LogoItem[] = [
    { id: 1, src: "/about/logos/logo1.jpeg", alt: "Partner Logo 1" },
    { id: 2, src: "/about/logos/logo2.jpeg", alt: "Partner Logo 2" },
    { id: 3, src: "/about/logos/logo3.jpeg", alt: "Partner Logo 3" },
    { id: 4, src: "/about/logos/logo4.jpeg", alt: "Partner Logo 4" },
    { id: 5, src: "/about/logos/logo5.jpeg", alt: "Partner Logo 5" },
    { id: 6, src: "/about/logos/logo6.jpeg", alt: "Partner Logo 6" },
    { id: 7, src: "/about/logos/logo7.jpeg", alt: "Partner Logo 7" },
    { id: 8, src: "/about/logos/logo8.jpeg", alt: "Partner Logo 8" },
  ];

  // Infinite animation bina lag ke chalne ke liye list ko duplicate kiya gaya hai
  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-[#040809] py-16 px-4 md:px-8 border-y border-neutral-900 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Top Header */}
        <h3 className="text-white text-base sm:text-lg md:text-xl font-medium tracking-wide mb-12 max-w-xl leading-relaxed">
          Empowered global sellers to reach{" "}
          <span className="text-[#a3e635] font-semibold font-mono">$1B</span> in
          total sales.
        </h3>

        {/* Outer Viewport Mask (Edges side-fade effect ke liye) */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#040809] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#040809] after:to-transparent">
          {/* Continuous Running Animation Track */}
          {/* Continuous Running Animation Track */}
          <div className="flex w-max items-center gap-6 sm:gap-10 md:gap-12 animate-infinite-scroll py-2">
            {doubledLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="relative flex items-center justify-center w-[180px] sm:w-[240px] md:w-[280px] aspect-[4/1] opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out grayscale brightness-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-w-768px) 240px, 280px"
                  className="object-contain"
                  priority={index < 8}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
