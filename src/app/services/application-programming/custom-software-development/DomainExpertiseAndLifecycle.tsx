import React from "react";
import {
  Landmark,
  Coins,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  Building2,
  Factory,
} from "lucide-react";

const INDUSTRY_VERTICALS = [
  { icon: Landmark, label: "Banking Operations" },
  { icon: Coins, label: "Fintech Systems" },
  { icon: HeartPulse, label: "Healthcare Platforms" },
  { icon: GraduationCap, label: "Digital Education" },
  { icon: ShoppingBag, label: "Smart E-Commerce" },
  { icon: Truck, label: "Logistics & Fleet" },
  { icon: Building2, label: "Real Estate Tech" },
  { icon: Factory, label: "Smart Manufacturing" },
];

export default function TargetIndustryVerticals() {
  return (
    <div className="w-full bg-black text-white font-sans">
      {/* Section: Target Industry Verticals */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="font-mono uppercase tracking-[0.2em] text-[#00D094] text-xs sm:text-sm font-semibold">
          Domain Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-3 mb-4">
          Target Industry Verticals
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-12">
          We engineer enterprise platforms dynamically adjusted for specific business horizontal architectures.
        </p>

        {/* Verticals Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {INDUSTRY_VERTICALS.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-3.5 px-5 rounded-full bg-zinc-900 border border-white/10 shadow-sm hover:border-[#00D094] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-300 group-hover:bg-[#00D094]/20 group-hover:text-[#00D094] transition-colors">
                <item.icon className="h-4 w-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 tracking-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}