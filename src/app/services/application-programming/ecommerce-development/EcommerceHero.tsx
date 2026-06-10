"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, ShieldCheck, Terminal } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function EcommerceHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.12),transparent_60%)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-zinc-200/80 px-4 py-1.5 rounded-full mb-6 shadow-xs self-start"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <Text
                variant="label"
                className="text-teal-600 font-bold tracking-wider"
              >
                eCommerce Solutions
              </Text>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 leading-tight">
              eCommerce Development <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r  from-teal-600 to-emerald-500">
                Services
              </span> 
            </h1>
            <p className="mt-6 text-sm sm:text-lg text-zinc-600 max-w-xl font-light leading-relaxed">
              Engineered for seamless monetization loops. We build elite digital
              storefronts and headless commerce platforms tracking fast
              transaction rails.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
              <button className="w-full sm:w-auto bg-teal-600 text-white font-black px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-500 shadow-md shadow-teal-500/10 transition-all cursor-pointer">
                Start Your Online Store <ArrowRight size={15} />
              </button>
              <button className="w-full sm:w-auto bg-white text-zinc-800 border border-zinc-200 font-bold px-7 py-3.5 rounded-xl hover:bg-zinc-50 transition-all cursor-pointer shadow-xs">
                Get Free Consultation
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full max-w-md bg-white border border-zinc-200/80 p-6 rounded-3xl shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-teal-600" />
                  <span className="font-mono text-xs text-zinc-400 font-bold">
                    storefront_sync.log
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-left">
                <div className="text-zinc-400">
                  # Compiling GraphQL headless schema catalog...
                </div>
                <div className="flex items-center gap-2 text-zinc-700 bg-zinc-50 p-2.5 rounded-lg border border-zinc-100">
                  <ShoppingCart size={14} className="text-teal-500" />
                  <span>Cart Execution Array: 45ms Payload Cache</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700 bg-zinc-50 p-2.5 rounded-lg border border-zinc-100">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>Stripe Gateway Sync: PCI-DSS Verified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
