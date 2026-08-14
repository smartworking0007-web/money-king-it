"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const industries = [
  {
    desc: "Convert Faster. Scale Smarter.",
    img: "/datawarehousing/1.png",
  },
  {
    desc: "Ship Faster. Retain Longer.",
    img: "/datawarehousing/2.png",
  },
  {
    desc: "Digitize. Engage. Close.",
    img: "/datawarehousing/3.png",
  },
  {
    desc: "Secure. Compliant. Patient-First.",
    img: "/datawarehousing/4.png",
  },
  {
    desc: "Build Trust. Automate Growth.",
    img: "/datawarehousing/5.png",
  },
  {
    desc: "Scale Outreach. Prove ROI.",
    img: "/datawarehousing/6.png",
  },
  {
    desc: "Data-Driven Insights & Growth.",
    img: "/datawarehousing/7.png",
  },
];

export default function EnterpriseIndustrySolutions() {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 md:px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading Section */}
        <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          <Text
            variant="h2"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 tracking-tight"
          >
            Industries We Cater to
          </Text>
          <Text
            variant="body"
            className="text-zinc-400! text-xs sm:text-sm md:text-base leading-relaxed"
          >
            We cater to a wide range of industries, helping businesses optimize
            operations and drive growth with technology.
          </Text>
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-48 sm:h-56 w-full overflow-hidden rounded-xl shadow-md border border-zinc-800 cursor-pointer bg-zinc-900"
            >
              {/* Background Image */}
              <Image
                src={item.img}
                alt={`Industry ${idx + 1}`}
                fill
                priority={idx < 3}
                className="object-cover z-0 transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Dark Glass Overlay for Text Contrast */}
              <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Card Text Content */}
              <div className="absolute inset-0 p-4 sm:p-5 z-20 flex items-center justify-center">
                <Text
                  variant="h3"
                  className="text-white! font-extrabold text-sm sm:text-base md:text-lg opacity-90 group-hover:opacity-100 group-hover:text-[#00D094] transition-all duration-300 text-center leading-snug drop-shadow-md"
                >
                  {item.desc}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}