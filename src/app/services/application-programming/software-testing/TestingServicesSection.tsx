"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Cpu,
  Zap,
  Activity,
  Key,
  Globe,
  Smartphone,
  MonitorCheck,
  RefreshCw,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function TestingServicesSection() {
  const actions = [
    {
      title: "Manual Testing",
      desc: "Rigorous exploratory validation pathways mapping user paths.",
      icon: Eye,
    },
    {
      title: "Automation Testing",
      desc: "Deploying continuous automated regression scripts to maximize loop speed.",
      icon: Cpu,
    },
    {
      title: "Functional Testing",
      desc: "Validating user parameters against core capability bounds.",
      icon: MonitorCheck,
    },
    {
      title: "Performance Testing",
      desc: "Stress loading network instances to identify critical thresholds.",
      icon: Zap,
    },
    {
      title: "Security Testing",
      desc: "Deep vulnerability scans and penetration audits safeguarding assets.",
      icon: Shield,
    },
    {
      title: "API Testing",
      desc: "Isolating request payloads to optimize schema performance.",
      icon: Key,
    },
    {
      title: "Mobile App Testing",
      desc: "Cross-viewport device matrix logging ensuring native app stability.",
      icon: Smartphone,
    },
    {
      title: "Web Application Testing",
      desc: "Semantic cross-browser rendering loops for interface consistency.",
      icon: Globe,
    },
    {
      title: "Regression Testing",
      desc: "Continuous patch validation cycles preventing build logic breaks.",
      icon: RefreshCw,
    },
    {
      title: "Usability Testing",
      desc: "Ergonomic view checks tracking UX retention parameters flawlessly.",
      icon: Activity,
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Capabilities Hub
        </Text>
        <Text variant="h2">Targeted Testing Services</Text>
      </div>

      {/* Grid Configuration remains performant but inner card components wrap tightly */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.02 }}
              className="group bg-white border border-zinc-200/80 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer min-h-max"
            >
              <div>
                {/* Compact Top Navigation Metrics Bar */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-teal-50/50 transition-colors">
                    <Icon
                      className="text-zinc-800 group-hover:text-teal-600 transition-colors"
                      size={14}
                    />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all shrink-0">
                    <ArrowUpRight size={8} />
                  </div>
                </div>

                {/* Tight Typography Scaling */}
                <Text
                  variant="body"
                  className="text-xs sm:text-sm font-extrabold text-zinc-900 tracking-tight leading-snug"
                >
                  {act.title}
                </Text>

                <Text
                  variant="body"
                  className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight"
                >
                  {act.desc}
                </Text>
              </div>

              {/* Precise Bottom Interactive Highlight Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
