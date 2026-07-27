"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Text from "@/components/ui/Text";

const caseStudies = [
  { label: "ROI GROWTH", title: "Project Alpha 1", value: "300%" },
  { label: "ROI GROWTH", title: "Project Alpha 2", value: "300%" },
  { label: "ROI GROWTH", title: "Project Alpha 3", value: "300%" },
  { label: "ROI GROWTH", title: "Project Alpha 4", value: "300%" },
  { label: "ROI GROWTH", title: "Project Alpha 5", value: "300%" },
  { label: "ROI GROWTH", title: "Project Alpha 6", value: "300%" },
];

export default function CaseStudies() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <Image
        src="/insights/5.png"
        alt="blue geometrical shapes connection ai"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-20 px-6">
        
        {/* Section Heading - Force White Text */}
        <div className="mb-10">
          <Text variant="h3" className="text-white! font-bold tracking-tight">
            Case Studies
          </Text>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center transition-all"
            >
              <div>
                <p className="text-zinc-400 text-[8px] font-bold tracking-[0.2em] uppercase mb-0.5">
                  {item.label}
                </p>
                <h3 className="text-white text-base font-bold">
                  {item.title}
                </h3>
              </div>
              <div className="text-emerald-400 text-lg font-black">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}