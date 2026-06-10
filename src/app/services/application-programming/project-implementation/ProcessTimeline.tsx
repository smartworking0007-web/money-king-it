// src/app/services/application-programming/project-implementation/ProcessTimeline.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function ProcessTimeline() {
  const steps = [
    {
      title: "Discovery",
      desc: "Deep technological validation auditing legacy dependencies and systems topologies.",
    },
    {
      title: "Requirement Analysis",
      desc: "Detailed breakdown mapping application limits alongside internal logical criteria.",
    },
    {
      title: "Planning",
      desc: "Configuring milestone sprints, data continuity paths, and emergency parameters.",
    },
    {
      title: "Architecture Design",
      desc: "Modeling high-concurrency data streaming blueprints and persistent database clusters.",
    },
    {
      title: "Development",
      desc: "Writing modular interface custom APIs, localization scripts, and core system loops.",
    },
    {
      title: "Testing",
      desc: "Processing exhaustive end-to-end regression validation suites under load conditions.",
    },
    {
      title: "Deployment",
      desc: "Executing canary delivery cutovers with zero downtime on operational pipelines.",
    },
    {
      title: "Support",
      desc: "Continuous L3 engineering tracking, database tuning, and routine code health adjustments.",
    },
  ];

  return (
    <section className="w-full space-y-10 md:space-y-16 text-left">
      <div className="text-center space-y-3 md:space-y-4">
        <Text variant="label">Milestone Blueprints</Text>
        <Text variant="h2" className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
          Implementation Process Timeline
        </Text>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* 
          RESPONSIVE TIMELINE AXIS:
          - Mobile par vertical line static left space (`left-2.5`) par stretch hogi.
          - Desktop viewports (`md:left-1/2`) par automated center split alignment follow karegi.
        */}
        <div className="absolute left-2.5 md:left-1/2 top-0 bottom-0 w-px bg-zinc-300 -translate-x-1/2" />

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className={`relative flex flex-col md:flex-row w-full ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-2.5 md:left-1/2 w-3 h-3 rounded-full bg-emerald-600 border-2 border-[#E5EBEB] -translate-x-1/2 z-10 top-7" />
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                <div className="p-5 md:p-6 bg-white/80 border border-zinc-200 rounded-2xl shadow-sm transition-all hover:border-emerald-600/10">
                  <span className="font-mono text-[10px] text-emerald-600 font-bold block mb-1 uppercase tracking-widest">
                    Phase 0{idx + 1}
                  </span>
                  <Text
                    variant="body"
                    className="text-lg md:text-xl font-bold mb-1 text-zinc-900 block"
                  >
                    {step.title}
                  </Text>
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              <div className="w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}