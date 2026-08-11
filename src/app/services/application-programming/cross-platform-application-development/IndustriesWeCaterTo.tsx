// File Name: IndustriesWeCaterTo.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const INDUSTRIES_DATA = [
  {
    title: "ECOMMERCE",
    image: "/custom/3.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "SaaS",
    image: "/custom/4.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "HEALTHCARE",
    image: "/custom/5.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "FINANCIAL SERVICES",
    image: "/custom/6.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "EDUCATION",
    image: "/custom/7.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "TRAVEL",
    image: "/custom/8.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "REAL ESTATE",
    image: "/custom/9.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "LOGISTICS",
    image: "/custom/10.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
];

export default function IndustriesWeCaterTo() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#00D094]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <Text
            variant="h2"
            className="text-white! text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight mb-2"
          >
            Industries We Cater to
          </Text>
         
          <Text
            variant="body"
            className="text-gray-300! text-[11px] sm:text-xs font-normal leading-relaxed max-w-md mx-auto"
          >
            We cater to a wide range of industries, helping businesses optimize
            operations and drive growth with technology.
          </Text>
        </div>

        {/* Responsive Grid Layout with Smaller Compact Boxes & Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {INDUSTRIES_DATA.map((item, index) => (
            <div
              key={index}
              className={`${item.span} relative group overflow-hidden rounded-lg bg-[#121212] border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 shadow-md hover:-translate-y-0.5`}
            >
              {/* Image Container (Reduced Height for Smaller Box Feel) */}
              <div className="relative w-full h-36 sm:h-40 md:h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Title Positioned at Bottom-Left over Image with Smaller Font */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-3.5 z-10 flex items-end justify-between">
                <Text
                  variant="h3"
                  className="text-white! text-xs sm:text-sm font-bold tracking-wide uppercase drop-shadow-md group-hover:text-[#00D094] transition-colors duration-300 truncate pr-2"
                >
                  {item.title}
                </Text>

                {/* Compact Action Arrow Indicator */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/60 border border-white/20 text-[#00D094] group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5">
                  <span className="text-[9px] font-bold">↗</span>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 rounded-lg bg-linear-to-brr from-[#00D094]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
