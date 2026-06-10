"use client";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function FunnelFramework() {
  const steps = ["Research", "Targeting", "Acquisition", "Qualification", "Nurturing", "Handoff", "Optimization"];
  
  return (
    <section className="py-12 overflow-hidden ">
      {/* Title Container */}
      <div className="max-w-5xl mx-auto px-6">
        <Text variant="h2" className="text-center mb-8">Lead Generation Framework</Text>
      </div>

      {/* Animation Container - Ismein bhi max-w-5xl rakha hai taaki steps title ke niche align rahein */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="flex gap-4" 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...steps, ...steps].map((s, i) => (
            <div 
              key={i} 
              className="min-w-150px p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-center shrink-0"
            >
              <Text variant="label" className="text-teal-600 text-[10px] block">0{(i % steps.length) + 1}</Text>
              <Text variant="body" className="font-bold text-sm text-zinc-900 mt-0.5">{s}</Text>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}