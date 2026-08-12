// File Name: PpcGrowthMarquee.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const GROWTH_IMAGES = [
  { src: "/ppc/2.png", alt: "PPC Step 1" },
  { src: "/ppc/3.png", alt: "PPC Step 2" },
  { src: "/ppc/4.png", alt: "PPC Step 3" },
  { src: "/ppc/5.png", alt: "PPC Step 4" },
  { src: "/ppc/6.png", alt: "PPC Step 5" },
  { src: "/ppc/7.png", alt: "PPC Step 6" },
];

export default function PpcGrowthMarquee() {
  // Duplicating the array to create a seamless infinite loop
  const marqueeItems = [...GROWTH_IMAGES, ...GROWTH_IMAGES];

  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-12 md:py-20 border-t border-white/10 flex flex-col items-center justify-center min-h-[40vh]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/seo/3.png"
          alt="seo growth framework background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      {/* Inline CSS for Marquee Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <Text
            variant="h2"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            SEO Growth Framework
          </Text>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative w-full overflow-hidden flex">
          {/* Left/Right Gradient Fades for Smooth Entry/Exit */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex animate-scroll gap-4 sm:gap-6 px-4 items-center">
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center min-w-45 sm:min-w-55 h-25 sm:h-30 p-3 rounded-2xl bg-[#121212]/95 border border-white/10 shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 180px, 220px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
