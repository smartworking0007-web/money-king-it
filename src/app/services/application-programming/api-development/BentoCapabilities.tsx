"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Workflow, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function BentoCapabilities() {
  return (
    <section className="py-8 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Text variant="label" className="inline-block mb-1">
          Capabilities Grid
        </Text>
        <Text variant="h3" className="text-slate-950 font-black">
          Asymmetric Bento Matrix
        </Text>
      </div>

      {/* Modern High-End Bento Configuration Block */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[13rem]">
        {/* Card 1: Large Asymmetric Block (GraphQL Core) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 flex items-center justify-center text-zinc-700 mb-3">
              <Cpu size={14} />
            </div>
            <Text
              variant="body"
              className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight"
            >
              GraphQL Schema Federation
            </Text>
            <p className="text-xs text-slate-500 mt-1.5 font-light max-w-md leading-relaxed">
              Consolidate distributed data systems under a single robust graph
              interface. Prevent data over-fetching parameters cleanly.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-teal-600 font-bold flex items-center gap-1">
            Headless Core <ArrowUpRight size={10} />
          </span>
        </motion.div>

        {/* Card 2: Small Block (REST) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 flex items-center justify-center text-zinc-700 mb-3">
              <Globe size={14} />
            </div>
            <Text
              variant="body"
              className="text-base font-extrabold text-slate-950 tracking-tight"
            >
              RESTful Protocol Hub
            </Text>
            <p className="text-xs text-slate-500 mt-1 font-light leading-relaxed">
              Stateless JSON endpoints mapped cleanly around predictable routing
              logic guidelines.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
            Standard JSON API
          </span>
        </motion.div>

        {/* Card 3: Small Block (Microservices) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 flex items-center justify-center text-zinc-700 mb-3">
              <Workflow size={14} />
            </div>
            <Text
              variant="body"
              className="text-base font-extrabold text-slate-950 tracking-tight"
            >
              Microservice Mesh Networks
            </Text>
            <p className="text-xs text-slate-500 mt-1 font-light leading-relaxed">
              Deconstruct structural monolith platforms into highly scalable
              autonomous cloud clusters.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
            gRPC Supported
          </span>
        </motion.div>

        {/* Card 4: Large Block (Fintech Layer) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 flex items-center justify-center text-zinc-700 mb-3">
              <ShieldCheck size={14} />
            </div>
            <Text
              variant="body"
              className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight"
            >
              Fintech & Banking Rails
            </Text>
            <p className="text-xs text-slate-500 mt-1.5 font-light max-w-md leading-relaxed">
              Strict multi-currency validation pipelines built natively to
              support programmatic cross-border asset transfers with instant
              transaction matching logs.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold flex items-center gap-1">
            Compliance Secure <ArrowUpRight size={10} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
