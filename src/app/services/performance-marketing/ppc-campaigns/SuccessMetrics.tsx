"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Text } from "@/components/ui/Text";

export default function SuccessMetrics() {
  const stats = [
    { v: "150", s: "Cr+", l: "Revenue Generated" }, 
    { v: "500", s: "+", l: "Campaigns" }, 
    { v: "10", s: "M+", l: "Clicks" }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 px-6 bg-[#E5EBEB]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <div 
            key={s.l} 
            className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm text-center hover:border-teal-400 transition-colors"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              <Text variant="h3" className="text-4xl font-bold text-[#0F172A] mb-1">
                {isInView ? s.v : "0"}
                <span className="text-teal-600">{s.s}</span>
              </Text>
              <Text variant="body" className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                {s.l}
              </Text>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}