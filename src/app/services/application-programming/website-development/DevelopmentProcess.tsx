"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DevelopmentProcess() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Analyzing existing pipeline constraints and setting metric targets.",
    },
    {
      step: "02",
      title: "Planning",
      desc: "Defining structural technology configurations and asset roadmaps.",
    },
    {
      step: "03",
      title: "Wireframing",
      desc: "Constructing semantic blueprints mapping user path layouts.",
    },
    {
      step: "04",
      title: "UI/UX Design",
      desc: "Generating premium responsive interactive user view components.",
    },
    {
      step: "05",
      title: "Development",
      desc: "Writing performant Next.js code matching clean code principles.",
    },
    {
      step: "06",
      title: "Testing",
      desc: "Executing deep diagnostic script audits across layout viewports.",
    },
    {
      step: "07",
      title: "Deployment",
      desc: "Launching applications into horizontal edge hosting platforms.",
    },
    {
      step: "08",
      title: "Maintenance",
      desc: "Continuous systems monitoring under automated patch protocols.",
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      {/* Section Typography Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00E5A0] font-extrabold block mb-2">
          System Workflows
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">
          The Engineering Pipeline
        </h2>
      </div>

      {/* FIXED: Removed dark blocks. Replaced with Solid Crisp White Cards with perfect text visibility */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="group bg-white border border-zinc-200/80 p-6 rounded-2xl relative flex flex-col justify-between min-h-44 hover:border-[#00E5A0] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div>
              {/* Micro Step Counter Badge */}
              <span className="text-[10px] font-mono font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                Step {step.step}
              </span>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight mt-4 group-hover:text-black transition-colors">
                {step.title}
              </h3>

              {/* Description Body Text */}
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-normal leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Backside Floating Absolute Blueprint Metric */}
            <div className="absolute top-4 right-4 text-3xl font-mono font-black text-zinc-100 group-hover:text-[#00E5A0]/10 transition-colors duration-300 select-none">
              {step.step}
            </div>

            {/* Premium Interactive Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
