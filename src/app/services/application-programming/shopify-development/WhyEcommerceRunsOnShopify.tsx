// File Name: WhyEcommerceRunsOnShopify.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import {
  Rocket,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Layers,
  Globe2,
  TrendingUp,
  Building2,
} from "lucide-react";

const SHOPIFY_BENEFITS = [
  {
    title: "Fast Store Launch",
    description: "Accelerate timeframes with robust template blocks.",
    icon: Rocket,
  },
  {
    title: "High Security Core",
    description: "Enforcing native tier-1 hosting with SSL layers.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Store Management",
    description: "Simplified workspaces requiring zero coding knowledge.",
    icon: SlidersHorizontal,
  },
  {
    title: "Mobile Optimized",
    description: "Fluid responsive layouts engineered across viewports.",
    icon: Smartphone,
  },
  {
    title: "Scalable Infrastructure",
    description: "Sustain peak flash sale traffic without load drops.",
    icon: Layers,
  },
  {
    title: "Global Commerce Rails",
    description: "Multi-region checkout engines handling tax logic.",
    icon: Globe2,
  },
  {
    title: "Better Conversion Rates",
    description: "Friction-free single page checkouts limiting cart abandons.",
    icon: TrendingUp,
  },
  {
    title: "Enterprise Ready Matrix",
    description: "Shopify Plus automation scripts scale operations securely.",
    icon: Building2,
  },
];

export default function WhyEcommerceRunsOnShopify() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 md:py-16 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/shopify/2.png"
          alt="Why E-Commerce Runs On Shopify Background"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-90 contrast-105"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      {/* Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#00D094]/5 blur-[120px] rounded-full pointer-events-none z-1" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Layout with Left Sticky Title and Right Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Side: Header & Context Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 text-left">
            <Text
              variant="h3"
              className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-3 leading-tight"
            >
              Why E-Commerce <br /> Runs On Shopify
            </Text>

            <Text
              variant="body"
              className="text-zinc-300! text-[11px] sm:text-xs font-normal leading-relaxed max-w-sm"
            >
              Skky Loom Digital Technology Pvt. Ltd. integrates native platform hooks with custom
              theme scripts to achieve extreme load performance benchmarks.
            </Text>
          </div>

          {/* Right Side: 2-Column Grid of Compact Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {SHOPIFY_BENEFITS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col justify-between p-3.5 sm:p-4 rounded-lg bg-[#121212]/90 backdrop-blur-md border border-white/10 hover:border-[#00D094]/65 transition-all duration-300 ease-out group shadow-sm hover:-translate-y-0.5"
                >
                  {/* Top Row: Icon & Arrow Indicator */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 group-hover:bg-[#00D094]/10 group-hover:text-[#00D094] group-hover:border-[#00D094]/30">
                      <IconComponent
                        className="h-3.5 w-3.5"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:rotate-45">
                      <span className="text-[8px] font-bold">↗</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <Text
                      variant="h5"
                      className="text-white! text-[11px] sm:text-xs font-bold tracking-tight mb-0.5 group-hover:text-[#00D094] transition-colors duration-300 truncate"
                    >
                      {item.title}
                    </Text>
                    <Text
                      variant="body"
                      className="text-zinc-400! text-[9.5px] sm:text-[10px] leading-snug"
                    >
                      {item.description}
                    </Text>
                  </div>

                  {/* Ambient Subtle Motion Glow Effect */}
                  <div className="absolute inset-0 rounded-lg bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
