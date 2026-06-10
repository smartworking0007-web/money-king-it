"use client";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

const solutions = ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads", "Remarketing", "Display Ads"];

export default function PPCSolutions() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <Text variant="h2" className="text-center mb-12">Campaign Services</Text>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {solutions.map((s) => (
          <motion.div 
            key={s} 
            whileHover={{ y: -4 }} 
            className="p-4 bg-white rounded-2xl border border-zinc-200 text-center shadow-sm hover:border-emerald-500 transition-colors"
          >
            <Text variant="body" className="font-semibold text-sm text-zinc-900">{s}</Text>
          </motion.div>
        ))}
      </div>
    </section>
  );
}