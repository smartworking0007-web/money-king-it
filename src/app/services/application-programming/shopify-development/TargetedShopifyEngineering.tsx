// File Name: TargetedShopifyEngineering.tsx

import React from "react";
import Text from "@/components/ui/Text";
import {
  ShoppingBag,
  Store,
  Palette,
  Code,
  RefreshCw,
  Zap,
  Wrench,
  Search,
  Cpu,
  Layers,
} from "lucide-react";

const SHOPIFY_SERVICES = [
  {
    title: "Shopify Store Development",
    description:
      "Deploying robust storefront setups with localized rules mappings.",
    icon: ShoppingBag,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify Plus Development",
    description: "Engineering multi-store configurations for high volumes.",
    icon: Store,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify Theme Development",
    description:
      "Crafting lightweight Liquid custom themes optimized dynamically.",
    icon: Palette,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify App Development",
    description:
      "Compiling isolated app integrations through custom middleware.",
    icon: Code,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify Store Migration",
    description:
      "Executing secure variant data maps with zero downtime tracks.",
    icon: RefreshCw,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify Speed Optimization",
    description:
      "Refactoring script loads to clear Google Core Web Vitals criteria.",
    icon: Zap,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify Maintenance",
    description:
      "Sustaining high-fidelity storefront health monitors via technical SLAs.",
    icon: Wrench,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify SEO Optimization",
    description:
      "Injecting schema data layouts to maximize contextual discovery.",
    icon: Search,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify API Integration",
    description: "Wiring inventory feeds and enterprise systems seamlessly.",
    icon: Cpu,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Shopify Custom Features",
    description: "Formulating complex product builders and cart logic layers.",
    icon: Layers,
    span: "col-span-1 sm:col-span-2 lg:col-span-12",
  },
];

export default function TargetedShopifyEngineering() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Cyber Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,208,148,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,208,148,0.02)_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00D094]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00D094]/10 border border-[#00D094]/30 text-[#00D094] text-[9px] font-mono font-semibold tracking-widest uppercase mb-2.5 shadow-sm">
            CAPABILITIES HUB
          </div>
          <Text
            variant="h3"
            className="text-white! text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight mb-2"
          >
            Targeted Shopify Engineering
          </Text>
        </div>

        {/* Bento Grid Layout with Compact Boxes, Smaller Text, Typography Components, and Interactive Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {SHOPIFY_SERVICES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`${item.span} relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D094]/15`}
              >
                {/* Top Row: Icon & Action Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 group-hover:bg-[#00D094]/10 group-hover:text-[#00D094] group-hover:border-[#00D094]/30">
                    <IconComponent className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:rotate-45">
                    <span className="text-[9px] font-bold">↗</span>
                  </div>
                </div>

                {/* Content Box with Typography Component */}
                <div>
                  <Text
                    variant="h5"
                    className="text-white! text-xs sm:text-sm font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300 truncate"
                  >
                    {item.title}
                  </Text>
                  <Text
                    variant="body"
                    className="text-zinc-400! text-[10px] sm:text-[11px] leading-relaxed"
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
