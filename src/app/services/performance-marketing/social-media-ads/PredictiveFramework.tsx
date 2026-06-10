"use client";
import { motion } from "framer-motion";

const steps = ["Discovery", "Data Modeling", "AI Strategy", "Creative", "Launch", "Predictive Opt.", "Scaling"];

export default function PredictiveFramework() {
  return (
    <section className="py-20 overflow-hidden bg-[#E5EBEB]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#0F172A]">Predictive Campaign Framework</h2>
      <motion.div className="flex gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }}>
        {[...steps, ...steps].map((s, i) => (
          <div key={i} className="min-w-180px p-8 bg-white rounded-2xl border border-slate-100 text-center shrink-0 shadow-sm">
            <div className="text-teal-600 font-bold mb-2">0{ (i % steps.length) + 1}</div>
            <div className="font-semibold text-[#0F172A]">{s}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}