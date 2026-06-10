"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-semibold text-xs uppercase tracking-widest mb-6 border border-teal-200">
          AI-Powered Social Advertising Experts
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-[#0F172A] mb-8 leading-[1.1] tracking-tight">
          Predictive Social Media Ads That Scale Revenue
        </h1>
        <p className="text-xl text-[#334155] mb-10 max-w-2xl mx-auto leading-relaxed">
          Leverage AI-driven audience intelligence, predictive analytics, and advanced social advertising strategies to maximize conversions, engagement, and long-term business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#14B8A6] hover:bg-teal-600 rounded-full px-8 py-6 text-lg">Get Free Social Ads Audit</Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-lg bg-white border-slate-300">Book Strategy Call</Button>
        </div>
      </motion.div>
    </section>
  );
}