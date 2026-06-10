"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  HeartPulse,
  Home,
  Coins,
  Box,
  ArrowUpRight,
} from "lucide-react";
// FIXED: Path alias configured to pinpoint the component explicitly
import { Text } from "@/components/ui/Text";

export default function WebsiteTypesSection() {
  const items = [
    {
      title: "Corporate Websites",
      icon: Landmark,
      desc: "Enterprise positioning systems architectural components.",
    },
    {
      title: "Ecommerce Websites",
      icon: ShoppingCart,
      desc: "Multi-vendor dynamic conversion engines checkout rails.",
    },
    {
      title: "Portfolio Websites",
      icon: FolderKanban,
      desc: "Ultra-clean high-fidelity showcase interfaces.",
    },
    {
      title: "Educational Websites",
      icon: GraduationCap,
      desc: "LMS data models structured courses sync logs.",
    },
    {
      title: "Healthcare Websites",
      icon: HeartPulse,
      desc: "HIPAA compliant data processing secure forms layers.",
    },
    {
      title: "Real Estate Websites",
      icon: Home,
      desc: "Interactive geographic query engines mapping assets.",
    },
    {
      title: "Fintech Websites",
      icon: Coins,
      desc: "High-security banking level micro-transaction pipelines.",
    },
    {
      title: "SaaS Platforms",
      icon: Box,
      desc: "Multi-tenant product spaces application modules.",
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Text variant="label" className="inline-block mb-2">
          Product Matrices
        </Text>
        <Text variant="h2">Tailored Configurations</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] group transition-all shadow-xs relative overflow-hidden cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-[#00E5A0]/10 transition-colors">
                    <Icon size={16} className="text-zinc-700" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all shrink-0">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
                <Text
                  variant="body"
                  className="text-sm sm:text-base font-extrabold text-zinc-900"
                >
                  {item.title}
                </Text>
                <Text
                  variant="body"
                  className="text-xs sm:text-sm text-zinc-500 mt-1.5 leading-relaxed"
                >
                  {item.desc}
                </Text>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
