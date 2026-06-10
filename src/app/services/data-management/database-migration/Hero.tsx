"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <span className="text-teal-600 font-bold mb-6 block uppercase tracking-widest text-xs">Database Migration Experts</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0F172A] mb-8 leading-[1.1]">Zero-Downtime Database Migration Engine</h1>
        <p className="text-zinc-600 mb-10 max-w-2xl mx-auto text-lg">Seamlessly migrate enterprise databases across cloud and on-premise environments with near-zero downtime and maximum reliability.</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#0F172A] hover:bg-zinc-800">Schedule Migration Assessment</Button>
          <Button variant="outline" className="border-zinc-300">Request Consultation</Button>
        </div>
      </motion.div>
    </section>
  );
}