"use client";

import React from "react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function CrossProcessTimeline() {
  const modules = [
    {
      phase: "01",
      name: "Discovery",
      data: "Deconstructing features maps to isolate multi-device scope lines.",
    },
    {
      phase: "02",
      name: "Planning",
      data: "Formulating cross-viewport engine specifications and framework assets.",
    },
    {
      phase: "03",
      name: "UI/UX Design",
      data: "Drafting fluid design prototypes optimized natively across canvas bounds.",
    },
    {
      phase: "04",
      name: "Development",
      data: "Compiling clean unified source code tracks through strict pipelines.",
    },
    {
      phase: "05",
      name: "Testing",
      data: "Executing complete device-matrix simulator automation tests safely.",
    },
    {
      phase: "06",
      name: "Deployment",
      data: "Transitioning operational workloads onto fast edge hosting networks.",
    },
    {
      phase: "07",
      name: "Store Publishing",
      data: "Navigating Google Play and Apple App Store review cycles cleanly.",
    },
    {
      phase: "08",
      name: "Maintenance",
      data: "Persistent runtime package tracking loops under secure corporate SLAs.",
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          System Workflows
        </Text>
        <Text variant="h3">The App Engineering Pipeline</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 relative">
        {modules.map((item, idx) => (
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
                Phase {item.phase}
              </span>
              <Text
                variant="body"
                className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight mt-3 leading-tight"
              >
                {item.name}
              </Text>
              <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                {item.data}
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
