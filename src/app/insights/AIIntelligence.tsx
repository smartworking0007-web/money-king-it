"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Text from "@/components/ui/Text";

const aiItems = [
  { title: "LLM Innovations", subtitle: "REAL-TIME ANALYTICS" },
  { title: "AI Automation", subtitle: "REAL-TIME ANALYTICS" },
  { title: "Predictive Analytics", subtitle: "REAL-TIME ANALYTICS" },
  { title: "ML Systems", subtitle: "REAL-TIME ANALYTICS" },
  { title: "AI Infra", subtitle: "REAL-TIME ANALYTICS" },
  { title: "Enterprise AI", subtitle: "REAL-TIME ANALYTICS" },
];

export default function AIIntelligence() {
  return (
    // 'min-h-screen' image ko poori screen height dega
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Full-screen Background Image */}
      <Image
        src="/insights/4.png"
        alt="Ocean with blue sky"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Main Content Container - Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-20 px-6 flex flex-col justify-center min-h-screen">
        
        {/* Section Heading */}
        <div className="mb-12">
          <Text variant="h3" className="text-white font-bold tracking-tight">
            AI Intelligence
          </Text>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.6)" }}
              className="bg-black/40 backdrop-blur-md p-8 rounded-2xl flex flex-col justify-center h-36 border border-white/10 shadow-lg transition-all"
            >
              <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}