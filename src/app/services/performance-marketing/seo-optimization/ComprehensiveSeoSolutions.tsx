// File Name: ComprehensiveSeoSolutions.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import {
  Settings,
  Building,
  MapPin,
  ShoppingBag,
  Key,
  FileText,
  Link2,
  ShieldCheck,
  BarChart2,
  TrendingUp,
} from "lucide-react";

const SEO_SOLUTIONS = [
  {
    title: "Technical SEO",
    description:
      "Optimize architecture, crawlability, and core web vitals for performance.",
    icon: Settings,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Enterprise SEO",
    description: "Scalable organic strategies designed for large web spaces.",
    icon: Building,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Local SEO",
    description:
      "Dominate local map listings to capture high-intent nearby customers.",
    icon: MapPin,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "E-Commerce SEO",
    description: "Boost product visibility and optimize category structures.",
    icon: ShoppingBag,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Keyword Research",
    description:
      "Uncover commercial search intent and content gaps effectively.",
    icon: Key,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Content Optimization",
    description: "Refine on-page content using semantic SEO strategies.",
    icon: FileText,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Link Building",
    description: "Acquire high-authority backlinks to boost domain strength.",
    icon: Link2,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "SEO Audits",
    description:
      "Technical and backlink health checks to identify growth blockers.",
    icon: ShieldCheck,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Competitor Analysis",
    description:
      "Reverse-engineer top competitors to capitalize on market gaps.",
    icon: BarChart2,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Conversion-Focused SEO",
    description:
      "Align traffic strategies with UX optimization to turn visitors to leads.",
    icon: TrendingUp,
    span: "col-span-1 sm:col-span-2 lg:col-span-12",
  },
];

export default function ComprehensiveSeoSolutions() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/seo/2.png"
          alt="core product in seo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 contrast-105"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      {/* Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#00D094]/5 blur-[120px] rounded-full pointer-events-none z-1" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
        
          <Text
            variant="h3"
            className="text-white! text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight mb-2 uppercase"
          >
            Comprehensive SEO Solutions
          </Text>

          <div className="w-8 h-0.5 bg-[#00D094] mx-auto rounded-full mb-3"></div>

          <Text
            variant="body"
            className="text-gray-300! text-[11px] sm:text-xs font-normal leading-relaxed max-w-md mx-auto"
          >
            Scale your digital presence and outrank competitors with our
            full-suite search engine optimization architecture.
          </Text>
        </div>

        {/* Responsive Grid Layout with Compact Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {SEO_SOLUTIONS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`${item.span} relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1`}
              >
                <div>
                  {/* Card Header with Icon and Arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00D094] group-hover:bg-[#00D094]/10 transition-all">
                      <IconComponent className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:rotate-45">
                      <span className="text-[9px] font-bold">↗</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <Text
                    variant="h3"
                    className="text-white! text-xs sm:text-sm font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300 truncate"
                  >
                    {item.title}
                  </Text>

                  <Text
                    variant="body"
                    className="text-gray-300! text-[10px] sm:text-[11px] leading-relaxed"
                  >
                    {item.description}
                  </Text>
                </div>

                {/* Ambient Subtle Motion Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
