"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  DollarSign,
  Heart,
  Lock,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Faster Releases",
      desc: "Accelerate time-to-market with optimized CI/CD automated test workflows.",
      icon: Rocket,
    },
    {
      title: "Improved Quality",
      desc: "Catch logic exceptions early with holistic exploratory validations.",
      icon: ShieldCheck,
    },
    {
      title: "Reduced Costs",
      desc: "Prevent expensive post-release production bug patches from reaching users.",
      icon: DollarSign,
    },
    {
      title: "Better User Experience",
      desc: "Ensure fluid transitions, zero lag spikes, and flawless interactions.",
      icon: Heart,
    },
    {
      title: "Enhanced Security",
      desc: "Secure vulnerable backends with rigorous threat isolation vectors.",
      icon: Lock,
    },
    {
      title: "High Performance",
      desc: "Scale structural throughput capacities to sustain traffic peaks.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Headline Sidebar */}
        <div className="lg:sticky lg:top-24">
          <Text variant="label" className="inline-block mb-1">
            Core Focus
          </Text>
          <Text variant="h2" className="text-zinc-900 leading-tight">
            Why Choose Our Testing Services
          </Text>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Money King Software embeds QA engineers directly within development
            pipelines, turning software verification from a roadblock into a
            structural asset.
          </p>
        </div>

        {/* FIXED: Compounded Grid with tight, small white cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                className="group bg-white border border-zinc-200/80 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer min-h-max"
              >
                <div>
                  {/* Compact Header Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-teal-50/50 transition-colors">
                      <Icon
                        className="text-zinc-800 group-hover:text-teal-600 transition-colors"
                        size={14}
                      />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
                      <ArrowUpRight size={8} />
                    </div>
                  </div>

                  {/* Tight Typography Settings */}
                  <Text
                    variant="h4"
                    className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight leading-snug"
                  >
                    {point.title}
                  </Text>

                  <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                    {point.desc}
                  </p>
                </div>

                {/* Micro Bottom Accent Strip */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
