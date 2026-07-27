"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Text";

const stats = [
  { value: "500+", label: "Articles" },
  { value: "100+", label: "Case Studies" },
  { value: "50+", label: "Reports" },
  { value: "1M+", label: "Readers" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Branding & CTA */}
        <div className="flex flex-col gap-6">
          <Text variant="h1" className="text-white! leading-[1.1]">
            Keep Every Project On-Brand
          </Text>
          <Text variant="body" className="text-zinc-400! max-w-md">
            We work invisibly under your agency&apos;s name with complete NDA protection.
          </Text>
          <div className="flex flex-col gap-3 mt-2">
            {/* Link component add kiya redirect ke liye */}
            <Link href="/contact">
              <Button variant="primary" size="md" className="w-fit">Book A Call</Button>
            </Link>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors underline text-sm">
              Or, Use this form to tell us about your needs.
            </a>
          </div>
        </div>

        {/* Right Side: Circular Stats Grid (Compact) */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              // p-8 ko p-4 kiya aur rounded-full rakha
              className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-full aspect-square bg-white/5 backdrop-blur-sm"
            >
              <Text variant="h3" className="text-emerald-400!">{stat.value}</Text>
              <Text variant="label" className="text-zinc-400! mt-1">{stat.label}</Text>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}