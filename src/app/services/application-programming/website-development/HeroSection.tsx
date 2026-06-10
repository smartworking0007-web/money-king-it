"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Shield, Layers, Zap } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { label: "Websites Delivered", value: "500+", icon: Code },
    { label: "Client Satisfaction", value: "99%", icon: Shield },
    { label: "Years Experience", value: "15+", icon: Layers },
    { label: "Support SLA", value: "24/7", icon: Zap },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,229,160,0.15),transparent_60%)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        {/* Top Micro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white border border-zinc-200/80 px-4 py-1.5 rounded-full mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-zinc-500 uppercase font-bold">
            Next-Gen Web Architecture
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 max-w-5xl mx-auto leading-tight sm:leading-none">
          Website Development <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00E5A0] to-emerald-500">
            Services
          </span>
        </h1>

        <p className="mt-6 text-sm sm:text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
          Build fast, scalable, SEO-friendly, and conversion-focused websites
          that help your business grow online. Engineered on enterprise
          parameters.
        </p>

        {/* Dynamic Buttons Layout */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
          <button className="w-full sm:w-auto bg-[#00E5A0] text-zinc-950 font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-400 shadow-md shadow-[#00E5A0]/20 transition-all cursor-pointer">
            Get Free Consultation <ArrowRight size={16} />
          </button>
          <button className="w-full sm:w-auto bg-zinc-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-zinc-800 transition-all cursor-pointer shadow-md">
            Start Your Website Project
          </button>
        </div>

        {/* FIXED: Dark boxes converted into crisp premium white box cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-2">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                className="bg-white border border-zinc-200/80 p-6 rounded-2xl flex flex-col items-center group text-center hover:border-[#00E5A0] shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center mb-4 group-hover:bg-[#00E5A0]/10 transition-colors">
                  <Icon
                    className="text-zinc-800 group-hover:text-[#00E5A0] transition-colors"
                    size={18}
                  />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-400 font-extrabold mt-1.5 font-mono uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
