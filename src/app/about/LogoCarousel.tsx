"use client";
import React from "react";
import Image from "next/image";

interface LogoItem {
  id: number;
  src: string;
  alt: string;
}

export default function LogoCarousel() {
  const logos: LogoItem[] = [
    { id: 1, src: "/about/1.1.png", alt: "Partner Logo 1" }, 
    { id: 2, src: "/about/2.png", alt: "Partner Logo 2" },
    { id: 3, src: "/about/3.png", alt: "Partner Logo 3" },
    { id: 4, src: "/about/4.png", alt: "Partner Logo 4" },
    { id: 5, src: "/about/5.png", alt: "Partner Logo 5" },
    { id: 6, src: "/about/6.png", alt: "Partner Logo 6" },
  
  ];

  // Infinite scroll ke liye logos ko triple kiya hai
  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-[#040809] py-16 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4">
        
        {/* Title */}
        <h3 className="text-white text-base sm:text-lg md:text-xl font-medium tracking-wide mb-12 max-w-xl leading-relaxed">
          Empowered global sellers to reach{" "}
          <span className="text-[#a3e635] font-semibold font-mono">$1B</span> in total sales.
        </h3>

        {/* Masking Container */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-[#040809] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-linear-to-l after:from-[#040809] after:to-transparent">
          
          {/* Animated Track */}
          <div className="flex w-max items-center gap-8 sm:gap-12 md:gap-16 animate-infinite-scroll py-2">
            {doubledLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="relative flex items-center justify-center w-32 sm:w-48 md:w-60 h-20 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale brightness-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  // Performance warning hatane ke liye sahi sizes prop
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 192px, 240px"
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