"use client";

import React from "react";
import { motion } from "framer-motion";
import { Share2, ArrowRight } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function EnterpriseIntegrations() {
  const connections = [
    { provider: "Stripe Custom Engine", class: "Financial Payments Layer" },
    { provider: "Razorpay Pro Sync", class: "Instant Checkouts Rail" },
    { provider: "Salesforce API Cluster", class: "Enterprise CRM Sync" },
    { provider: "Zoho Workspace Module", class: "Data Process Matrix" },
    { provider: "HubSpot Logic Node", class: "Marketing Automation Loop" },
    {
      provider: "WhatsApp Business V4",
      class: "Asynchronous Notification Engine",
    },
  ];

  return (
    <section className="py-8 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Text variant="label" className="inline-block mb-1">
          Ecosystem Scope
        </Text>
        <Text variant="h3" className="text-slate-950 font-black">
          Connected Enterprise Integrations
        </Text>
      </div>

      {/* Asymmetric Connection Node Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {connections.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="group bg-white/70 backdrop-blur-md border border-zinc-200/80 p-4.5 rounded-xl flex items-center justify-between gap-4 hover:border-teal-500 shadow-xs transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 group-hover:bg-teal-50/50 transition-colors shrink-0">
                <Share2 size={13} />
              </div>
              <div>
                <Text
                  variant="body"
                  className="text-xs sm:text-sm font-extrabold text-slate-950 leading-tight group-hover:text-teal-600 transition-colors"
                >
                  {item.provider}
                </Text>
                <p className="text-[10px] text-zinc-400 font-mono mt-0.5 tracking-tight font-medium">
                  {item.class}
                </p>
              </div>
            </div>

            <div className="w-5 h-5 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300 shrink-0">
              <ArrowRight size={10} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
