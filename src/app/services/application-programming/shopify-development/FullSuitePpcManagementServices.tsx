// File Name: EngineeredFeatureSpecs.tsx

import React from "react";
import Text from "@/components/ui/Text";
import {
  Package,
  Search,
  Boxes,
  Truck,
  Users,
  ShieldCheck,
  Tag,
  Coins,
  Globe2,
  BarChart3,
} from "lucide-react";

const FEATURE_SPECS = [
  {
    title: "Product Management",
    description:
      "Granular variant setups mapping complex inventory attributes seamlessly.",
    icon: Package,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Smart Search Filters",
    description:
      "Instant predictive catalog index searches resolving results dynamically.",
    icon: Search,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Inventory Management",
    description:
      "Multi-warehouse stock balancing against live shipping logistics datas.",
    icon: Boxes,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Order Tracking Rails",
    description:
      "Asynchronous shipping telemetry feeds updating dispatch milestones.",
    icon: Truck,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Customer Dashboard",
    description:
      "Self-service account profiles tracking transactional historical items.",
    icon: Users,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Secure Checkout Blocks",
    description:
      "PCI-compliant architecture routing single-token purchase flows safely.",
    icon: ShieldCheck,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Coupon Rules Engine",
    description:
      "Calculates structural scripted discounts against checkout parameters.",
    icon: Tag,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Multi-Currency Support",
    description: "Live exchange rates formatting checkout parameters globally.",
    icon: Coins,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Multi-Language Support",
    description:
      "Localized semantic language translation engines mapping on the fly.",
    icon: Globe2,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Unified workspace layout tracking conversions and cart margins.",
    icon: BarChart3,
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
];

export default function EngineeredFeatureSpecs() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87 sm:w-125 h-87 sm:h-125 bg-[#00D094]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <Text
            variant="h2"
            className="text-white! text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight mb-2"
          >
            Engineered Feature Specs
          </Text>
          <Text
            variant="body"
            className="text-gray-300! text-[11px] sm:text-xs font-normal leading-relaxed max-w-md mx-auto"
          >
            Delivering high-performance architecture specs tailored for scalable
            performance.
          </Text>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {FEATURE_SPECS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`${item.span} relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/65 transition-all duration-300 ease-out group shadow-md hover:-translate-y-0.5`}
              >
                {/* Top Row: Icon & Arrow Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 group-hover:bg-[#00D094]/10 group-hover:text-[#00D094] group-hover:border-[#00D094]/30">
                    <IconComponent className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:rotate-45">
                    <span className="text-[9px] font-bold">↗</span>
                  </div>
                </div>

                {/* Content */}
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
