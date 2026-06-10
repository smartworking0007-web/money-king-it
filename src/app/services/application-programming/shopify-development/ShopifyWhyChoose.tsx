"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Settings,
  Smartphone,
  Maximize,
  Globe,
  TrendingUp,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function ShopifyWhyChoose() {
  const tracks = [
    {
      title: "Fast Store Launch",
      desc: "Accelerate market timeframes utilizing robust template processing blocks.",
      icon: Rocket,
    },
    {
      title: "High Security Core",
      desc: "Enforcing native tier-1 hosting frameworks complete with SSL layers.",
      icon: ShieldCheck,
    },
    {
      title: "Easy Store Management",
      desc: "Simplified administrative workspaces require zero programmatic knowledge.",
      icon: Settings,
    },
    {
      title: "Mobile Optimized",
      desc: "Fluid responsive layout render actions engineered cleanly across viewports.",
      icon: Smartphone,
    },
    {
      title: "Scalable Infrastructure",
      icon: Maximize,
      desc: "Sustain peak flash sale traffic anomalies without load drops.",
    },
    {
      title: "Global Commerce Rails",
      icon: Globe,
      desc: "Multi-region programmatic checkout engines handling international tax logic.",
    },
    {
      title: "Better Conversion Rates",
      icon: TrendingUp,
      desc: "Friction-free single page checkouts designed to limit cart abandons.",
    },
    {
      title: "Enterprise Ready Matrix",
      icon: Users,
      desc: "Shopify Plus custom automation scripts scale operations securely.",
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:sticky lg:top-24">
          <Text variant="label" className="inline-block mb-1">
            Strategic Asset
          </Text>
          <Text variant="h3" className="text-zinc-900 leading-tight font-black">
            Why E-Commerce Runs On Shopify
          </Text>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Money King Software integrates native platform hooks with custom
            theme scripts to achieve extreme load performance benchmarks.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {tracks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                className="group bg-white border border-zinc-200 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer min-h-max"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 group-hover:bg-teal-50/50 transition-colors">
                      <Icon
                        className="text-zinc-800 group-hover:text-teal-600 transition-colors"
                        size={14}
                      />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
                      <ArrowUpRight size={8} />
                    </div>
                  </div>
                  <Text
                    variant="body"
                    className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight leading-snug"
                  >
                    {item.title}
                  </Text>
                  <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
