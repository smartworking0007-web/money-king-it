import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { Zap, Smartphone, Search, ShieldCheck } from "lucide-react";

/**
 * ProfessionalWebsiteSolutionsHero.tsx
 * Full-width background image component with overlaid left-aligned text,
 * custom typography, action buttons, and four SEO-optimized core feature cards.
 */

const CORE_FEATURES = [
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Sub-second rendering processing structural speed logic layout parameters.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    desc: "Fluid framework scaling configurations cross dynamic screen modules.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    desc: "Clean indexing configurations structures ensuring peak semantic layout visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Architecture",
    desc: "Engineered on enterprise parameters ensuring maximum security and scalability.",
  },
];

export default function ProfessionalWebsiteSolutionsHero() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-20 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Background Image Container using next/image with Alt Tag "Al with humar" */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/website/2.png"
          alt="Al with humar"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-black/70 sm:bg-black/60 pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="flex flex-col space-y-12 lg:space-y-16">
          {/* Top Hero Content Area (Left-Aligned) */}
          <div className="max-w-3xl flex flex-col space-y-6 text-left items-start">
            <span className="font-mono uppercase tracking-[0.2em] text-[#00D094] text-xs sm:text-sm font-semibold">
              Enterprise Web Engineering
            </span>

            <Text
              variant="h1"
              className="text-white! text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md text-left"
            >
              Professional Website Solutions
            </Text>

            <Text
              variant="body"
              className="text-zinc-200! text-base sm:text-lg font-normal leading-relaxed drop-shadow text-left max-w-2xl"
            >
              Skky Loom Digital Technology Pvt. Ltd. engineers high-performance web spaces mapping asset
              values explicitly for startups, growing systems, and global
              corporate giants. We construct solid infrastructure components
              tailored dynamically.
            </Text>
          </div>

          {/* Bottom Four Core Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {CORE_FEATURES.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-white/15 bg-black/50 backdrop-blur-md p-6 transition-all duration-300 hover:border-[#00D094]/50 hover:bg-black/70 shadow-xl group"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00D094]/10 border border-[#00D094]/20 text-[#00D094] group-hover:bg-[#00D094]/20 transition-colors">
                  <item.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div>
                  <Text
                    variant="h5"
                    className="text-white! text-lg font-bold mb-2 tracking-tight"
                  >
                    {item.title}
                  </Text>
                  <Text
                    variant="body"
                    className="text-zinc-300! text-xs sm:text-sm leading-relaxed"
                  >
                    {item.desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
