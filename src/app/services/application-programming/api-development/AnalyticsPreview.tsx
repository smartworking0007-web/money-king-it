"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Activity, Zap, CheckCircle2 } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function AnalyticsPreview() {
  return (
    <section className="py-8 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Text variant="label" className="inline-block mb-1">
          Telemetry Dashboard
        </Text>
        <Text variant="h3" className="text-slate-950 font-black">
          Fake Enterprise Analytics Panel
        </Text>
      </div>

      {/* Modern High-End Simulated Operational Dashboard Panel Container */}
      <div className="w-full max-w-4xl mx-auto bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-xl relative overflow-hidden">
        {/* Top Header Metrics Panel Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-100 pb-4 mb-5 gap-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="text-teal-600" size={16} />
            <span className="text-xs font-mono font-black text-slate-900">
              live_metrics_workspace
            </span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Cluster Node: Active
          </div>
        </div>

        {/* Dashboard Analytics Numbers Metrics Columns Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Stat Item 1 */}
          <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <Activity size={12} />
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                Total Request Volume
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
              142.8M
            </div>
            <span className="text-[9px] font-mono font-bold text-emerald-600 mt-1 inline-block">
              ↑ 14.5% execution trend
            </span>
          </div>

          {/* Stat Item 2 */}
          <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <Zap size={12} />
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                Avg Latency Pass
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
              14.2 ms
            </div>
            <span className="text-[9px] font-mono font-bold text-teal-600 mt-1 inline-block">
              P99 response benchmark
            </span>
          </div>

          {/* Stat Item 3 */}
          <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <CheckCircle2 size={12} />
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                Gateway Error Rate
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
              0.002%
            </div>
            <span className="text-[9px] font-mono font-bold text-zinc-400 mt-1 inline-block">
              Zero processing block drops
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
