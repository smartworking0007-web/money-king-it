"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  ShoppingCart,
  Store,
  Landmark,
  Layers,
  Users,
  Cpu,
  Smartphone,
  CreditCard,
  Box,
  Archive,
  LifeBuoy,
  ArrowUpRight,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function EcommerceServices() {
  const actions = [
    {
      title: "Custom eCommerce Development",
      desc: "Engineering modular custom architectures from scratch matching dynamic operational scopes.",
      icon: ShoppingBag,
    },
    {
      title: "Shopify Development",
      desc: "Deploying high-performance custom Shopify templates and secure checkout customizations.",
      icon: ShoppingCart,
    },
    {
      title: "WooCommerce Development",
      desc: "Building scalable WordPress-integrated commerce pipelines utilizing lean extension models.",
      icon: Store,
    },
    {
      title: "Magento Development",
      desc: "Constructing robust open-source enterprise layouts tailored to support massive SKU matrices.",
      icon: Landmark,
    },
    {
      title: "Multi-Vendor Marketplace",
      desc: "Designing multi-tenant digital spaces complete with automated split payout logic tracks.",
      icon: Layers,
    },
    {
      title: "B2B eCommerce Solutions",
      desc: "Integrating bulk trade pricing tiers, instant quote generators, and sub-account logs.",
      icon: Users,
    },
    {
      title: "Headless Commerce",
      desc: "Decoupling frontends with Next.js arrays to achieve sub-second catalog renders safely.",
      icon: Cpu,
    },
    {
      title: "Mobile Commerce Apps",
      desc: "Compiling high-fidelity iOS & Android React Native commerce applications.",
      icon: Smartphone,
    },
    {
      title: "Payment Gateway Integration",
      desc: "Syncing PCI-compliant multi-currency transaction networks seamlessly.",
      icon: CreditCard,
    },
    {
      title: "Inventory Management Systems",
      desc: "Automating multi-warehouse real-time product counts across sales nodes.",
      icon: Box,
    },
    {
      title: "Order Management Systems",
      desc: "Streamlining cross-channel fulfillment protocols from purchase logs to dispatch tracks.",
      icon: Archive,
    },
    {
      title: "eCommerce Maintenance & Support",
      desc: "Securing continuous uptime parameters with dedicated infrastructure support lines.",
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Capabilities Hub
        </Text>
        <Text variant="h3">Targeted Commerce Services</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {actions.map((act, idx) => {
          const Icon = act.icon;
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
                  {act.title}
                </Text>
                <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                  {act.desc}
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
