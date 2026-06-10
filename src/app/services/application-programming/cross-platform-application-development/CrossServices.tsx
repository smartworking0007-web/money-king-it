"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Smartphone,
  Globe,
  Monitor,
  ShieldCheck,
  Briefcase,
  Landmark,
  Users,
  Cpu,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function CrossServices() {
  const categories = [
    {
      title: "Flutter Development",
      info: "Compiling performant ARM-compiled native machine binaries.",
      icon: Layers,
      size: "large",
    },
    {
      title: "React Native Development",
      info: "Harnessing flexible component bridges with absolute native threads.",
      icon: Smartphone,
      size: "normal",
    },
    {
      title: "Progressive Web Apps",
      info: "Deploying high-speed cached offline-first web modules securely.",
      icon: Globe,
      size: "normal",
    },
    {
      title: "Desktop Applications",
      info: "Formulating robust multi-window platform tools cleanly.",
      icon: Monitor,
      size: "normal",
    },
    {
      title: "Enterprise Applications",
      info: "Structuring micro-tenant multi-role operations frameworks at scale.",
      icon: ShieldCheck,
      size: "large",
    },
    {
      title: "Business Applications",
      info: "Conversion priority CRM links mapping key functional metrics.",
      icon: Briefcase,
      size: "normal",
    },
    {
      title: "Fintech Applications",
      info: "Integrating high-security transactional loops under rigorous guidelines.",
      icon: Landmark,
      size: "normal",
    },
    {
      title: "CRM Applications",
      info: "Centralizing enterprise customer lifecycle data fields natively.",
      icon: Users,
      size: "normal",
    },
    {
      title: "ERP Applications",
      info: "Syncing complex factory resources tracking loops automatically.",
      icon: Cpu,
      size: "normal",
    },
    {
      title: "Custom Software Solutions",
      info: "Bespoke architectural logic pipelines designed completely from scratch.",
      icon: Code2,
      size: "normal",
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Capabilities Grid
        </Text>
        <Text variant="h3">Targeted Cross-Platform Services</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {categories.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.01 }}
              className={`group bg-white border border-zinc-200/80 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer min-h-max ${
                item.size === "large" ? "lg:col-span-2" : ""
              }`}
            >
              <div>
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
                <Text
                  variant="body"
                  className="text-sm font-extrabold text-zinc-900 tracking-tight leading-snug"
                >
                  {item.title}
                </Text>
                <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                  {item.info}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
