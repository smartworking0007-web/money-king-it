"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Cloud, 
  Layers,  
  Cpu, 
  ShieldCheck, 
  Database, 
  Settings 
} from "lucide-react";
import Text from "@/components/ui/Text";

const trends = [
  { icon: Bot, title: "AI Agents", desc: "Autonomous task execution." },
  { icon: Sparkles, title: "Generative AI", desc: "Creative content generation." },
  { icon: Cloud, title: "Multi-Cloud", desc: "Scalable distributed infrastructure." },
  { icon: Layers, title: "Platform Eng", desc: "Developer experience optimization." },
  { icon: Cpu, title: "Edge Computing", desc: "Low latency data processing." },
  { icon: ShieldCheck, title: "Security", desc: "Robust protection frameworks." },
  { icon: Database, title: "Data", desc: "Insights driven decision making." },
  { icon: Settings, title: "Automation", desc: "Streamlined operational workflows." },
];

export default function CoreValues() {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="max-w-xl">
            <Text variant="label" className="text-emerald-400">Core Values</Text>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 tracking-tight">Our Core Values</h2>
          </div>
          <p className="max-w-sm text-zinc-500 text-sm leading-relaxed">
            We see randomness not as noise, but as a source of insight unlocking paths that structured thinking often overlooks.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Values Grid - Compact/Chota Box Layout */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
            {trends.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -2 }}
                className="bg-[#111111] p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <item.icon className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-0.5">{item.title}</h3>
                  <p className="text-zinc-500 text-[10px] leading-tight">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side Image */}
          <div className="relative w-full h-75 lg:h-auto rounded-2xl overflow-hidden border border-white/5">
            <Image 
              src="/insights/3.png" 
              alt="Person working" 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}