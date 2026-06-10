'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Network } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function LuxuryHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-40 pb-24 overflow-hidden">
      {/* FIXED: Replaced arbitrary syntax rules with canonical bg-size and mask properties */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-size-[5rem_5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        
        {/* Micro Tech Tag Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 bg-white/80 border border-zinc-200/80 px-4 py-1.5 rounded-full mb-8 shadow-xs backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping" />
          <Text variant="label" className="text-teal-600 font-black tracking-[0.25em] text-[10px] uppercase font-mono">Infrastructure V4 Engine</Text>
        </motion.div>

        {/* Mega Bold Giant Typography Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-900 tracking-tighter text-slate-950 max-w-5xl mx-auto leading-[0.95] mb-8"
        >
          Custom API <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 via-emerald-500 to-teal-500">Development Services</span>
        </motion.h1>

        {/* Elegant Minimal Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed mb-12 tracking-tight"
        >
          Architecting programmatic high-frequency data pipelines. We decouple enterprise resource routing parameters to enable millions of synchronized transactions with zero structural overhead.
        </motion.p>

        {/* Premium Core Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none mb-24"
        >
          <button className="w-full sm:w-auto bg-slate-950 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-slate-800 transition-all duration-300 cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99] text-sm tracking-tight">
            Connect Infrastructure <ArrowRight size={15} />
          </button>
          <button className="w-full sm:w-auto bg-white/90 border border-zinc-200 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-zinc-50 transition-all duration-300 cursor-pointer shadow-xs backdrop-blur-sm text-sm tracking-tight">
            Read Architecture Docs
          </button>
        </motion.div>

        {/* High-End Asymmetric Floating Visual Network Node Blocks */}
        <div className="relative max-w-4xl mx-auto mt-12 h-44 hidden md:block select-none">
          {/* Central Absolute Hub */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-zinc-200 p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
              <Cpu size={16} />
            </div>
            <div className="text-left">
              <div className="text-xs font-mono font-black text-slate-900">gateway_core.sys</div>
              <span className="text-[10px] text-emerald-500 font-mono font-bold">Status: Online</span>
            </div>
          </motion.div>

          {/* Node Link Left */}
          <motion.div
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute left-12 top-4 bg-white/70 backdrop-blur-md border border-zinc-200/80 p-3 rounded-xl flex items-center gap-2.5 shadow-sm z-20"
          >
            <Terminal size={14} className="text-zinc-600" />
            <span className="text-[11px] font-mono font-bold text-slate-800">GraphQL Request</span>
          </motion.div>

          {/* Node Link Right */}
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute right-12 bottom-2 bg-white/70 backdrop-blur-md border border-zinc-200/80 p-3 rounded-xl flex items-center gap-2.5 shadow-sm z-20"
          >
            <Network size={14} className="text-teal-600" />
            <span className="text-[11px] font-mono font-bold text-slate-800">Microservice Sync</span>
          </motion.div>

          {/* Spark Trace Element */}
          <motion.div 
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-teal-500/40 to-transparent z-10" 
          />
        </div>

      </div>
    </section>
  );
}