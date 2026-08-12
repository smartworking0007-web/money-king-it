// File Name: CateredIndustries.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const INDUSTRIES_DATA = [
  {
    title: "Fashion",
    image: "/shopify/Fashion.png",
    desc: "Optimizing inventory and modernizing digital storefronts.",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Electronics",
    image: "/shopify/Electronics.png",
    desc: "Scalable systems and tech solutions for gadget retailers.",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Beauty & Cosmetics",
    image: "/shopify/Beauty & Cosmetics.png",
    desc: "Enhancing customer experience and product tracking.",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Grocery Systems",
    image: "/shopify/Grocery Systems.png",
    desc: "Fast checkout integrations and automated supply chain tracking.",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Healthcare Logistics",
    image: "/shopify/Healthcare Logistics.png",
    desc: "Secure, compliant, and precise tracking mechanisms.",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Furniture Spaces",
    image: "/shopify/Furniture Spaces.png",
    desc: "Robust management platforms for bulky goods inventory.",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Automotive Parts",
    image: "/shopify/Automotive Parts.png",
    desc: "Precise cataloging and quick-search database systems.",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "B2B Wholesale",
    image: "/shopify/B2B Wholesale.png",
    desc: "Bulk ordering portals and customized pricing tiers.",
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
];

export default function CateredIndustries() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading Section */}
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

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {INDUSTRIES_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} group relative h-36 sm:h-40 md:h-44 w-full overflow-hidden rounded-lg bg-[#121212] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-md cursor-pointer`}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 p-3 sm:p-3.5 z-20 flex flex-col justify-end">
                <Text
                  variant="h3"
                  className="text-white! text-xs sm:text-sm font-bold tracking-wide uppercase drop-shadow-md group-hover:text-zinc-200 transition-colors duration-300 truncate pr-2 mb-0.5"
                >
                  {item.title}
                </Text>
                <p className="text-zinc-300 font-normal text-[10px] sm:text-[11px] leading-tight line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}