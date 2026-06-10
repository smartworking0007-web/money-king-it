"use client";

import React from "react";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function ShopifyIntegrations() {
  const integrations = [
    "Razorpay",
    "Stripe",
    "PayPal",
    "Shiprocket",
    "Zoho CRM",
    "HubSpot",
    "Google Analytics",
    "Meta Pixel",
    "WhatsApp Business",
    "Klaviyo Engine",
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Ecosystem Links
        </Text>
        <Text variant="h3">Supported Shopify Integrations Hub</Text>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {integrations.map((name, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200 p-4 rounded-xl flex items-center gap-3.5 hover:border-teal-500 shadow-xs transition-colors duration-300 cursor-pointer relative overflow-hidden min-h-max"
          >
            <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 group-hover:bg-teal-50/50 transition-colors shrink-0">
              <Share2 size={13} />
            </div>
            <Text
              variant="body"
              className="text-xs sm:text-sm font-extrabold text-zinc-900 tracking-tight leading-none group-hover:text-teal-600 transition-colors"
            >
              {name}
            </Text>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
