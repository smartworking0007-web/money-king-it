"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Gauge,
  Eye,
  Lock,
  Target,
  Server,
  BarChart4,
  FileSliders,
  ArrowUpRight,
} from "lucide-react";

export default function FeaturesSection() {
  const specs = [
    {
      title: "Mobile First Design",
      icon: Smartphone,
      desc: "Responsive layer priority layouts matching layout constraints cleanly.",
    },
    {
      title: "SEO Friendly",
      icon: Eye,
      desc: "Structured schema injection tags ensuring peak search indexing crawler logic.",
    },
    {
      title: "Lightning Fast Speed",
      icon: Gauge,
      desc: "Edge compilation optimizations returning content sub-second payloads.",
    },
    {
      title: "SSL Security",
      icon: Lock,
      desc: "Rigorous isolated end-to-end routing security profiles parameter assets.",
    },
    {
      title: "Conversion Optimization",
      desc: "Precision UX pathways driving explicit action triggers.",
      icon: Target,
    },
    {
      title: "Scalable Architecture",
      desc: "Auto-scaling framework allocations built around asset logic expansion.",
      icon: Server,
    },
    {
      title: "Analytics Integration",
      desc: "Real-time pipeline usage telemetry nodes mapping user interaction profiles.",
      icon: BarChart4,
    },
    {
      title: "Easy Content Management",
      desc: "Decoupled system fields empowering seamless content publishing parameters.",
      icon: FileSliders,
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">
          Core Architecture
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">
          Engineered Feature Specs
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {specs.map((spec, idx) => {
          const Icon = spec.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] transition-all relative overflow-hidden shadow-xs cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-[#00E5A0]/10 transition-colors">
                    <Icon className="text-zinc-800" size={18} />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all shrink-0">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 font-light leading-relaxed">
                  {spec.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
