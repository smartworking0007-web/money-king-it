"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, ShieldCheck, Activity, Users } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function LuxuryStats() {
  const counters = [
    { value: "500+", label: "APIs Delivered Layer", icon: Network },
    { value: "99.99%", label: "Uptime Maintained SLA", icon: ShieldCheck },
    { value: "100M+", label: "Calls Processed Loops", icon: Activity },
    { value: "50+", label: "Enterprise Clients Sync", icon: Users },
  ];

  return (
    <section className="py-4 w-full text-left">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-2">
        {counters.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col items-center group text-center hover:border-teal-500 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center mb-3 group-hover:bg-teal-50/50 transition-colors">
              <metric.icon
                className="text-zinc-800 group-hover:text-teal-600 transition-colors"
                size={14}
              />
            </div>
            <span className="text-xl sm:text-2xl font-black text-zinc-900 font-mono tracking-tight">
              {metric.value}
            </span>
            <Text
              variant="body"
              className="text-[10px] text-zinc-400 font-extrabold mt-1 font-mono uppercase tracking-wider"
            >
              {metric.label}
            </Text>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
