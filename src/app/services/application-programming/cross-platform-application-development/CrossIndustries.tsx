"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Coins,
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  Building,
  ShieldAlert,
  Palmtree,
  Factory,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function CrossIndustries() {
  const sectors = [
    { title: "Fintech", icon: Coins },
    { title: "Banking", icon: Landmark },
    { title: "Healthcare", icon: HeartPulse },
    { title: "Education", icon: GraduationCap },
    { title: "Logistics", icon: Truck },
    { title: "E-Commerce", icon: ShoppingBag },
    { title: "Real Estate", icon: Building },
    { title: "Insurance", icon: ShieldAlert },
    { title: "Travel Systems", icon: Palmtree },
    { title: "Manufacturing", icon: Factory },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Target Sectors
        </Text>
        <Text variant="h3">Industries We Serve</Text>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {sectors.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.02 }}
              className="group bg-white border border-zinc-200/80 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 cursor-pointer transition-all relative overflow-hidden shadow-xs min-h-max"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-teal-50/50 transition-colors">
                    <Icon size={14} className="text-zinc-800" />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
                    <ArrowUpRight size={8} />
                  </div>
                </div>
                <Text
                  variant="body"
                  className="text-xs sm:text-sm font-extrabold text-zinc-900 tracking-tight leading-tight"
                >
                  {ind.title}
                </Text>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
