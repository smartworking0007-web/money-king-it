"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight,  BarChart3, } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function ShopifyHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.15),transparent_65%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-4 py-1.5 rounded-full mb-6 shadow-xs backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          <Text
            variant="label"
            className="text-teal-600 font-black tracking-wider text-[10px] uppercase font-mono"
          >
            Certified Shopify Development Experts
          </Text>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-900 tracking-tighter text-slate-950 max-w-5xl mx-auto leading-[0.95] mb-8">
          Build High-Converting <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-emerald-500">
            Shopify Stores
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-tight">
          Launch scalable, conversion-focused Shopify stores with seamless
          shopping experiences, advanced integrations, and enterprise-level
          performance metrics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none mb-20">
          <button className="w-full sm:w-auto bg-slate-950 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-slate-800 transition-all duration-300 cursor-pointer shadow-md text-sm">
            Start Your Shopify Store <ArrowRight size={15} />
          </button>
          <button className="w-full sm:w-auto bg-white/90 border border-zinc-200 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-zinc-50 transition-all duration-300 cursor-pointer shadow-xs backdrop-blur-sm text-sm">
            Get Free Consultation
          </button>
        </div>

        {/* Dashboard Analytics Preview Visual Node Wrapper */}
        <div className="relative max-w-3xl mx-auto bg-white border border-zinc-200 p-4 rounded-2xl shadow-xl select-none text-left">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="text-teal-600" size={15} />
              <span className="font-mono text-xs font-black text-slate-900">
                shopify_live_sales.dashboard
              </span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="bg-zinc-50/50 border border-zinc-100 p-3.5 rounded-xl">
              <span className="text-[10px] text-zinc-400 font-mono block uppercase font-bold tracking-tight">
                Live Gross Revenue
              </span>
              <div className="text-xl font-black font-mono mt-0.5 text-slate-950">
                ₹4,23,590.00
              </div>
              <span className="text-[9px] text-emerald-600 font-mono font-bold">
                ↑ 22.4% traffic surge today
              </span>
            </div>
            <div className="bg-zinc-50/50 border border-zinc-100 p-3.5 rounded-xl">
              <span className="text-[10px] text-zinc-400 font-mono block uppercase font-bold tracking-tight">
                Active Conversion Rate
              </span>
              <div className="text-xl font-black font-mono mt-0.5 text-slate-950">
                4.82%
              </div>
              <span className="text-[9px] text-teal-600 font-mono font-bold">
                P99 checkouts pipeline optimized
              </span>
            </div>
            <div className="bg-zinc-50/50 border border-zinc-100 p-3.5 rounded-xl">
              <span className="text-[10px] text-zinc-400 font-mono block uppercase font-bold tracking-tight">
                Fulfillment Status
              </span>
              <div className="text-xl font-black font-mono mt-0.5 text-slate-950">
                100% Passed
              </div>
              <span className="text-[9px] text-zinc-400 font-mono">
                PCI-DSS Gateway Enforced
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
