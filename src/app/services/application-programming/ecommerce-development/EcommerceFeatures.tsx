"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  ShoppingBag,
  Lock,
  Heart,
  MapPin,
  User,
  Tag,
  Star,
  Box,
  Languages,
  BadgeDollarSign,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function EcommerceFeatures() {
  const parameters = [
    {
      title: "Product Management",
      desc: "Flexible product variables matrix supporting complex options.",
      icon: Package,
    },
    {
      title: "Shopping Cart",
      desc: "Sub-second local storage cart state syncing scripts dynamically.",
      icon: ShoppingBag,
    },
    {
      title: "Secure Checkout",
      desc: "Single-token checkout systems routing transactions safely.",
      icon: Lock,
    },
    {
      title: "Wishlist System",
      desc: "Saves user selections securely within dynamic customer logs.",
      icon: Heart,
    },
    {
      title: "Order Tracking",
      desc: "Real-time telemetry feeds trace tracking operations explicitly.",
      icon: MapPin,
    },
    {
      title: "Customer Dashboard",
      desc: "Self-service interface profiles managing download links and profiles.",
      icon: User,
    },
    {
      title: "Coupons & Discounts",
      desc: "Rules engine processing multi-tiered transactional discount promotions.",
      icon: Tag,
    },
    {
      title: "Reviews & Ratings",
      desc: "Authenticates feedback processing nodes filtering bot inputs cleanly.",
      icon: Star,
    },
    {
      title: "Inventory Management",
      desc: "Instant item level logging syncing warehouse locations simultaneously.",
      icon: Box,
    },
    {
      title: "Multi-Language Support",
      desc: "Dynamic localization maps switching content assets on the fly.",
      icon: Languages,
    },
    {
      title: "Multi-Currency Support",
      desc: "Live exchange tracking parameters computing global invoice balances.",
      icon: BadgeDollarSign,
    },
    {
      title: "Analytics Dashboard",
      desc: "Unified workspace mapping revenue growth and pipeline checkouts.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          System Architecture
        </Text>
        <Text variant="h2">Engineered Feature Specs</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {parameters.map((item, idx) => {
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
                  {item.desc}
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
