"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  ShoppingBag,
  Layout,
  AppWindow,
  RefreshCw,
  Zap,
  LifeBuoy,
  Search,
  Cpu,
  Code,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function ShopifyServices() {
  const actions = [
    {
      title: "Shopify Store Development",
      desc: "Deploying robust transactional storefront setups complete with localized rules mappings from scratch.",
      icon: Store,
      size: "large",
    },
    {
      title: "Shopify Plus Development",
      desc: "Engineering enterprise multi-store configurations built explicitly to sustain high programmatic volumes.",
      icon: ShoppingBag,
      size: "normal",
    },
    {
      title: "Shopify Theme Development",
      desc: "Crafting pixel-perfect lightweight Liquid custom themes optimized to load dynamically.",
      icon: Layout,
      size: "normal",
    },
    {
      title: "Shopify App Development",
      desc: "Compiling robust isolated app integrations through public or private custom middleware routers safely.",
      icon: AppWindow,
      size: "normal",
    },
    {
      title: "Shopify Store Migration",
      desc: "Executing secure variant data maps transferring customer histories cleanly with zero downtime tracks.",
      icon: RefreshCw,
      size: "large",
    },
    {
      title: "Shopify Speed Optimization",
      desc: "Refactoring script loads to clear Google Core Web Vitals criteria with sub-second values.",
      icon: Zap,
      size: "normal",
    },
    {
      title: "Shopify Maintenance",
      desc: "Sustaining high-fidelity storefront health monitors backed by continuous technical SLAs.",
      icon: LifeBuoy,
      size: "normal",
    },
    {
      title: "Shopify SEO Optimization",
      desc: "Injecting schema data layouts directly to maximize contextual platform discovery pipelines.",
      icon: Search,
      size: "normal",
    },
    {
      title: "Shopify API Integration",
      desc: "Wiring inventory feeds, accounting rails, and enterprise systems seamlessly.",
      icon: Cpu,
      size: "normal",
    },
    {
      title: "Shopify Custom Features",
      desc: "Formulating complex product builders and cart logic layers mapped cleanly.",
      icon: Code,
      size: "normal",
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Text variant="label" className="inline-block mb-1">
          Capabilities Hub
        </Text>
        <Text variant="h3">Targeted Shopify Engineering</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.01 }}
              className={`group bg-white border border-zinc-200 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer min-h-max ${
                act.size === "large" ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-teal-50/50 transition-colors">
                    <Icon
                      className="text-zinc-800 group-hover:text-teal-600 transition-colors"
                      size={14}
                    />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all shrink-0">
                    <ArrowUpRight size={8} />
                  </div>
                </div>
                <Text
                  variant="body"
                  className="text-sm font-extrabold text-zinc-900 tracking-tight leading-snug"
                >
                  {act.title}
                </Text>
                <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                  {act.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
