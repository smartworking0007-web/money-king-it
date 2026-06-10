"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Bell,
  RefreshCw,
  CreditCard,
  MapPin,
  BarChart3,
  Lock,
  WifiOff,
  Languages,
  Share2,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function CrossFeaturesGrid() {
  const modules = [
    {
      title: "Offline Support",
      text: "Local sync data nodes enabling total functional operation without active networks.",
      icon: WifiOff,
    },
    {
      title: "Push Notifications",
      text: "Firebase background transaction alert messages running smoothly.",
      icon: Bell,
    },
    {
      title: "Real-Time Updates",
      text: "Websocket protocol networks mapping immediate user field changes.",
      icon: RefreshCw,
    },
    {
      title: "Payment Integration",
      text: "Secure multi-currency token gateways passing regulatory compliance checks.",
      icon: CreditCard,
    },
    {
      title: "GPS Tracking",
      text: "Geographic coordinate matrix tracking background route logs explicitly.",
      icon: MapPin,
    },
    {
      title: "Analytics Dashboard",
      text: "Live telemetry data tracks charting critical retention KPIs.",
      icon: BarChart3,
    },
    {
      title: "Secure Authentication",
      text: "Biometric authorization loops alongside nested JWT token filters.",
      icon: Lock,
    },
    {
      title: "Cloud Sync Modules",
      text: "Asynchronous multi-tenant database synchronization operations.",
      icon: Cloud,
    },
    {
      title: "Multi-Language Support",
      text: "Dynamic localized dictionary engines mapping immediate interface changes.",
      icon: Languages,
    },
    {
      title: "API Integration Hub",
      text: "REST/GraphQL request validation handlers optimized to stream fast data.",
      icon: Share2,
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Core Architecture
        </Text>
        <Text variant="h3">Engineered Feature Specs</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {modules.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.01 }}
              className="group bg-white border border-zinc-200/80 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer min-h-max"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-teal-50/50 transition-colors">
                    <Icon
                      className="text-zinc-800 group-hover:text-teal-600 transition-colors"
                      size={14}
                    />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
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
                  {item.text}
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
