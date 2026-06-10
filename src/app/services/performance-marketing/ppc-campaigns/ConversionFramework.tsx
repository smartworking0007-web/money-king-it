"use client";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function ConversionFramework() {
  const steps = ["Analysis", "Research", "Strategy", "Ad Creation", "Launch", "Optimization", "Tracking", "Scaling"];

  return (
    <section className="py-16 bg-[#E5EBEB] overflow-hidden">
      <Text variant="h2" className="text-3xl font-bold text-center mb-10 text-[#0F172A]">
        Conversion Framework
      </Text>

      {/* Animation Container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-4" 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...steps, ...steps].map((s, i) => (
            <div 
              key={i} 
              className="min-w-140px md:min-w-180px p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center shrink-0"
            >
              <Text variant="body" className="text-teal-600 font-bold mb-1">
                0{(i % steps.length) + 1}
              </Text>
              <Text variant="body" className="font-semibold text-sm md:text-base text-[#0F172A]">
                {s}
              </Text>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}