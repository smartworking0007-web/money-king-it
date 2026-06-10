"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Monitor, Tablet } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function CrossHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-36 pb-20 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.12),transparent_65%)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Hero Left Content Text Block */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 border border-zinc-200 px-3.5 py-1.5 rounded-full mb-6 shadow-xs self-start backdrop-blur-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <Text
                variant="label"
                className="text-teal-600 font-bold tracking-wider text-[10px] uppercase font-mono"
              >
                Cross-Platform App Experts
              </Text>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 leading-[1.05] mb-6">
              Build Once, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-emerald-500">
                Run Everywhere
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-light leading-relaxed mb-8">
              Develop powerful applications for iOS, Android, Web, Desktop, and
              Tablets using a single codebase while reducing development costs
              and accelerating time-to-market.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
              <button className="w-full sm:w-auto bg-teal-600 text-white font-black px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-500 shadow-md shadow-teal-500/10 transition-all cursor-pointer">
                Get Free Consultation <ArrowRight size={14} />
              </button>
              <button className="w-full sm:w-auto bg-white border border-zinc-200 text-slate-800 font-bold px-7 py-3.5 rounded-xl hover:bg-zinc-50 transition-all cursor-pointer shadow-xs">
                Start Your Project
              </button>
            </div>
          </div>

          {/* Hero Right Visual Mesh Device Cluster Layout */}
          <div className="lg:col-span-5 relative h-72 flex items-center justify-center">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              {/* Desktop Mesh Wrapper */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-44 h-28 bg-white border border-zinc-200/90 rounded-xl shadow-xl flex flex-col items-center justify-center z-10 relative"
              >
                <Monitor className="text-slate-400 mb-1" size={24} />
                <span className="text-[9px] font-mono text-zinc-400">
                  Desktop View
                </span>
              </motion.div>

              {/* Mobile Device Offset Wrapper */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="absolute left-4 -bottom-4 bg-white border border-zinc-200 p-2.5 rounded-xl shadow-lg z-20 flex items-center gap-2"
              >
                <Smartphone size={14} className="text-teal-600" />
                <span className="text-[10px] font-mono font-bold text-slate-800">
                  iOS & Android
                </span>
              </motion.div>

              {/* Tablet Device Offset Wrapper */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute -right-4 -top-4 bg-white/90 backdrop-blur-md border border-zinc-200 p-2.5 rounded-xl shadow-md z-20 flex items-center gap-2"
              >
                <Tablet size={14} className="text-emerald-500" />
                <span className="text-[10px] font-mono font-bold text-slate-800">
                  Tablet Node
                </span>
              </motion.div>

              {/* Central Core Signal Path Trace line */}
              <div className="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-teal-500/20 to-transparent z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
