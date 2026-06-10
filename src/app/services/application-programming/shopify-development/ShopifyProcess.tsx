"use client";

import React from "react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function ShopifyProcess() {
  const steps = [
    {
      phase: "01",
      name: "Discovery",
      info: "Mapping variant properties and system synchronization parameters.",
    },
    {
      phase: "02",
      name: "Store Planning",
      info: "Drafting structure sitemaps, checkout rules, and functional boundaries.",
    },
    {
      phase: "03",
      name: "UI/UX Design",
      info: "Formulating fluid user experience designs aligned to maximize revenue tracks.",
    },
    {
      phase: "04",
      name: "Shopify Development",
      info: "Writing clean Liquid code blocks structured under tight modular guidelines.",
    },
    {
      phase: "05",
      name: "Product Setup",
      info: "Configuring SKUs, tax definitions, and product properties securely.",
    },
    {
      phase: "06",
      name: "Payment Integration",
      info: "Syncing localized encrypted transactional pathways and accounting links.",
    },
    {
      phase: "07",
      name: "Testing",
      info: "Executing rigorous sandbox checkout checks tracking data properties.",
    },
    {
      phase: "08",
      name: "Launch & Support",
      info: "Transitioning domain names securely onto server arrays under active SLAs.",
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Execution Roadmap
        </Text>
        <Text variant="h3">Development Process Timeline</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 relative">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200 p-4 rounded-xl relative flex flex-col justify-between min-h-max hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div>
              <span className="text-[9px] font-mono font-black text-teal-600 bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md">
                Phase {item.phase}
              </span>
              <Text
                variant="body"
                className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight mt-3 leading-tight"
              >
                {item.name}
              </Text>
              <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                {item.info}
              </p>
            </div>
            <div className="absolute top-3 right-3 text-xl font-mono font-black text-zinc-100 group-hover:text-teal-500/10 transition-colors duration-300 select-none">
              {item.phase}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
