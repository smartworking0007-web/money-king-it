"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  ShoppingCart,
  Globe,
  Server,
  Layers,
  Cpu,
  Paintbrush,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Corporate Website Development",
      desc: "High-end branding applications engineered explicitly for global corporate identities.",
      icon: Building2,
    },
    {
      title: "Business Website Development",
      desc: "Conversion-focused operational modules scaling localized systems footprints.",
      icon: Briefcase,
    },
    {
      title: "Ecommerce Website Development",
      desc: "Secure high-frequency checkout engines mapping dynamic payment rails cleanly.",
      icon: ShoppingCart,
    },
    {
      title: "CMS Website Development",
      desc: "Decoupled system portals empowering seamless cross-platform payload controls.",
      icon: Globe,
    },
    {
      title: "Web Portal Development",
      desc: "Multi-role application panels balancing secure authenticated cloud resources.",
      icon: Server,
    },
    {
      title: "Landing Page Development",
      desc: "Hyper-optimized single view structures driving peak client acquisition margins.",
      icon: Layers,
    },
    {
      title: "Custom Web Application Development",
      desc: "Tailor-made structural business algorithms constructed completely from scratch.",
      icon: Cpu,
    },
    {
      title: "Website Redesign Services",
      desc: "Architectural recovery actions translating old systems into modern code frameworks.",
      icon: Paintbrush,
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">
          Capabilities Grid
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">
          Comprehensive Web Capabilities
        </h2>
      </div>

      {/* Grid wraps automatically on mobile to 1 column, shifts to 2 on tablets, and 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer"
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
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-2 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <button className="text-xs font-mono font-bold mt-6 text-zinc-500 group-hover:text-[#00E5A0] flex items-center gap-1 transition-colors self-start cursor-pointer">
                Learn More <ArrowUpRight size={12} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
