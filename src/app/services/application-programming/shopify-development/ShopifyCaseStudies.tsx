"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function ShopifyCaseStudies() {
  const records = [
    {
      challenge: "Sluggish catalog query lags forcing high abandonment spikes.",
      solution:
        "Re-compiled Liquid script loops and compressed media file arrays cleanly.",
      growth: "+180% sales velocity logged",
    },
    {
      challenge:
        "Disjointed multi-region inventories breaking order dispatch rules.",
      solution:
        "Mapped centralized custom APIs synchronizing localized storefronts simultaneously.",
      growth: "2.4x revenue expansion",
    },
    {
      challenge: "Legacy checkout system blocks drop transactional milestones.",
      solution:
        "Migrated total stack architecture securely onto Shopify Plus parameters.",
      growth: "99.9% uptime safeguarded",
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Case Deliveries
        </Text>
        <Text variant="h3">Proven Commerce Deployments</Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {records.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden min-h-max cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] font-mono uppercase text-zinc-500 bg-[#E5EBEB]/50 border border-zinc-200/60 px-2 py-0.5 rounded font-bold">
                  Commerce Record
                </span>
                <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
                  <ArrowUpRight size={8} />
                </div>
              </div>
              <Text
                variant="body"
                className="text-sm font-black text-zinc-500 leading-tight"
              >
                Challenge: {item.challenge}
              </Text>
              <p className="text-[11px] text-zinc-900 mt-2 font-medium tracking-tight">
                Solution: {item.solution}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center gap-2 mt-4">
              <TrendingUp size={12} className="text-teal-500 shrink-0" />
              <span className="text-[11px] text-zinc-700 font-bold font-mono tracking-tight">
                {item.growth}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
