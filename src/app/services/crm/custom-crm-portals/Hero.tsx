"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <span className="text-teal-600 font-black mb-6 block uppercase tracking-widest text-[10px]">Custom CRM Dashboard Experts</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0F172A] mb-8">Custom Lead Management Dashboards & CRM Panels</h1>
        <p className="text-zinc-600 mb-10 max-w-2xl mx-auto text-lg">Design intelligent lead management systems with custom dashboards, real-time analytics, and enterprise-grade CRM experiences.</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#0F172A] hover:bg-zinc-800">Request CRM Demo</Button>
          <Button variant="outline" className="border-zinc-300 text-[#0F172A]">Schedule Consultation</Button>
        </div>
      </motion.div>
    </section>
  );
}