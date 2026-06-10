"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Smartphone, Search, Lock, ArrowUpRight } from "lucide-react";

export default function OverviewSection() {
  const benefits = [
    {
      title: "Fast Performance",
      desc: "Sub-second rendering processing structural speed logic layout parameters.",
      icon: Zap,
    },
    {
      title: "Mobile Responsive",
      desc: "Fluid framework scaling configurations cross dynamic screen modules.",
      icon: Smartphone,
    },
    {
      title: "SEO Optimized",
      desc: "Clean indexing configurations structures ensuring peak semantic layout visibility.",
      icon: Search,
    },
    {
      title: "Secure Architecture",
      desc: "Rigorous sandboxed firewall schemas matching isolated encryption parameters.",
      icon: Lock,
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Headline Column */}
        <div className="lg:sticky lg:top-28">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00E5A0] font-extrabold block mb-2">
            Corporate Mandate
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 leading-tight">
            Professional Website <br className="hidden lg:inline" /> Solutions
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Money King IT engineers high-performance web spaces mapping asset
            values explicitly for startups, growing systems, and global
            corporate giants. We construct solid infrastructure components
            tailored dynamically.
          </p>
        </div>

        {/* FIXED: Dark background removed completely. Converted into premium white box cards with crisp clear text */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Top Interactive Bar */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Premium Light Icon Container */}
                    <div className="w-10 h-10 rounded-xl bg-[#E5EBEB]/60 border border-zinc-200/80 flex items-center justify-center group-hover:bg-[#00E5A0]/10 transition-colors duration-300">
                      <Icon
                        className="text-zinc-800 group-hover:text-zinc-900 transition-colors"
                        size={18}
                      />
                    </div>
                    {/* Action Circle Arrow Trigger */}
                    <div className="w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all duration-300 shrink-0">
                      <ArrowUpRight size={12} />
                    </div>
                  </div>

                  {/* Card Typography Content */}
                  <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight transition-colors group-hover:text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-normal leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                {/* Bottom Premium Accent Glow Strip */}
                <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
