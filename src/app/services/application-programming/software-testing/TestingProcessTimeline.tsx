"use client";

import React from "react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function TestingProcessTimeline() {
  const roadmap = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "Deconstructing infrastructure features to isolate test boundaries.",
    },
    {
      step: "02",
      title: "Test Planning",
      desc: "Drafting core resource distributions, scope paths, and schedule frames.",
    },
    {
      step: "03",
      title: "Test Case Creation",
      desc: "Writing comprehensive step sequences covering cross-platform data vectors.",
    },
    {
      step: "04",
      title: "Environment Setup",
      desc: "Configuring precise sandbox environments mimicking production loads.",
    },
    {
      step: "05",
      title: "Test Execution",
      desc: "Running active automated script loops alongside manual validation grids.",
    },
    {
      step: "06",
      title: "Bug Reporting",
      desc: "Logging structural failure points securely into clean triage systems.",
    },
    {
      step: "07",
      title: "Retesting",
      desc: "Re-verifying path integrity matrices once software patches deploy.",
    },
    {
      step: "08",
      title: "Final Quality Assurance",
      desc: "Signing off on deployment readiness under premium exit benchmarks.",
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Execution Pipeline
        </Text>
        <Text variant="h2">Software Testing Process Timeline</Text>
      </div>

      {/* FIXED: Reconfigured to strict gap-3.5 matrix with tight max-content wrappers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 relative">
        {roadmap.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200/80 p-4 rounded-xl relative flex flex-col justify-between min-h-max hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div>
              {/* Micro Status Track Counter */}
              <span className="text-[9px] font-mono font-black text-teal-600 bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md">
                Step {item.step}
              </span>

              {/* Tightened Title Header */}
              <Text
                variant="h4"
                className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight mt-3 leading-snug"
              >
                {item.title}
              </Text>

              {/* Tight Typography Subtext Block */}
              <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                {item.desc}
              </p>
            </div>

            {/* Backside Floating Absolute Blueprint Counter */}
            <div className="absolute top-3 right-3 text-xl font-mono font-black text-zinc-100 group-hover:text-teal-500/10 transition-colors duration-300 select-none">
              {item.step}
            </div>

            {/* Micro Bottom Interactive Highlight Line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
