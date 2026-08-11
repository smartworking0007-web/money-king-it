// File Name: EcommercePlatformsGrid.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const PLATFORMS_DATA = [
  {
    title: "Shopify Plus",
    desc: "Cloud Managed Scale",
    active: false,
  },
  {
    title: "WooCommerce",
    desc: "WordPress Integration",
    active: false,
  },
  {
    title: "Magento Enterprise",
    desc: "Open-Source SKU Core",
    active: false,
  },
  {
    title: "BigCommerce",
    desc: "SaaS Architecture Hub",
    active: false,
  },
  {
    title: "OpenCart Engine",
    desc: "Modular PHP Storefront",
    active: false,
  },
  {
    title: "Custom Next.js Commerce",
    desc: "Headless React System",
    active: true,
  },
];

export default function EcommercePlatformsGrid() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Side: Single Clean Image Container (5 Cols on Desktop, Full width on Mobile) */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-2">
            <div className="absolute inset-0 bg-[#00D094]/5 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-md flex items-center justify-center">
              <div className="relative w-full h-64 sm:h-80 md:h-88 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src="/website/3.png"
                  alt="coding terms"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Side: Platform Service Cards Grid (7 Cols on Desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {/* Meta Title (H3) */}
            <div>
              <Text
                variant="h3"
                className="text-white! text-2xl sm:text-3xl font-extrabold tracking-tight mb-2"
              >
                Platforms We Work With
              </Text>
            </div>

            {/* Cards Grid: Fully responsive for mobile (1 col) and tablets/desktops (2 cols) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PLATFORMS_DATA.map((platform, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-between rounded-xl p-4 sm:p-5 transition-all duration-300 shadow-lg ${
                    platform.active
                      ? "bg-zinc-900/85 border border-[#00D094]/40 hover:bg-zinc-900"
                      : "bg-zinc-900/85 border border-white/10 hover:border-[#00D094]/40 hover:bg-zinc-900"
                  }`}
                >
                  <div>
                    <Text
                      variant="h4"
                      className="text-white! text-sm sm:text-base font-bold mb-1.5 tracking-tight"
                    >
                      {platform.title}
                    </Text>
                    <Text
                      variant="body"
                      className="text-zinc-400! text-xs sm:text-sm leading-relaxed"
                    >
                      {platform.desc}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
