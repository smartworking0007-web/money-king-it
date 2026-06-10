"use client";

import React from "react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function WorkflowTimeline() {
  const blueprint = [
    {
      phase: "01",
      name: "Scope Analysis",
      details:
        "Deconstructing infrastructure routes to isolate data boundaries.",
    },
    {
      phase: "02",
      title: "OpenAPI Spec Design",
      name: "Spec Design",
      details:
        "Drafting explicit payload models before writing execution code.",
    },
    {
      phase: "03",
      name: "Backend Pipeline",
      details:
        "Compiling performant Rust/Node logic frameworks matching strict standards.",
    },
    {
      phase: "04",
      name: "Diagnostic StressQA",
      details:
        "Running isolated automation loops tracking transaction latencies.",
    },
  ];

  return (
    <section className="py-8 relative w-full text-left overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Text variant="label" className="inline-block mb-1">
          Workflow Roadmap
        </Text>
        <Text variant="h3" className="text-slate-950 font-black">
          Development Process Timeline
        </Text>
      </div>

      {/* Horizontal Flex Container wraps cleanly into columns on small screen sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {blueprint.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200/80 p-4 rounded-xl relative flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer overflow-hidden min-h-36"
          >
            <div>
              <span className="text-[9px] font-mono font-black text-teal-600 bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md">
                Phase {item.phase}
              </span>
              <Text
                variant="body"
                className="text-sm font-extrabold text-zinc-900 tracking-tight mt-3 leading-tight"
              >
                {item.name || item.title}
              </Text>
              <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                {item.details}
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
