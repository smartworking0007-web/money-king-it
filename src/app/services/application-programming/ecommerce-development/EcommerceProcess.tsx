"use client";

import React from "react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function EcommerceProcess() {
  const workflow = [
    {
      step: "01",
      title: "Business Analysis",
      desc: "Mapping user segmentation metrics and inventory models.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "Crafting pixel-perfect storefront checkouts for optimal conversion loops.",
    },
    {
      step: "03",
      title: "Store Development",
      desc: "Compiling clean codebase layers tracking functional system rules.",
    },
    {
      step: "04",
      title: "Product Setup",
      desc: "Configuring variants, pricing maps, and data properties securely.",
    },
    {
      step: "05",
      title: "Payment Integration",
      desc: "Syncing encrypted transactional pathways and accounting networks.",
    },
    {
      step: "06",
      title: "Testing & QA",
      desc: "Executing deep system end-to-end regression audit logs cleanly.",
    },
    {
      step: "07",
      title: "Launch",
      desc: "Transitioning traffic pipelines securely onto fast edge cloud relays.",
    },
    {
      step: "08",
      title: "Ongoing Support",
      desc: "Monitoring checkout stability logs under dedicated corporate SLAs.",
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
        {workflow.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200/80 p-4 rounded-xl relative flex flex-col justify-between min-h-max hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div>
              <span className="text-[9px] font-mono font-black text-teal-600 bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md">
                Phase {item.step}
              </span>
              <Text
                variant="body"
                className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight mt-3 leading-snug"
              >
                {item.title}
              </Text>
              <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                {item.desc}
              </p>
            </div>
            <div className="absolute top-3 right-3 text-xl font-mono font-black text-zinc-100 group-hover:text-teal-500/10 transition-colors duration-300 select-none">
              {item.step}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
