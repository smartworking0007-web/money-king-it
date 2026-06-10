"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 bg-white border-b border-zinc-200 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
        <span className="text-[#00D094] font-black mb-4 block uppercase tracking-widest text-[10px]">HELP CENTER</span>
        <h1 className="text-5xl font-black text-[#0F172A] mb-6 tracking-tighter">Frequently Asked Questions</h1>
        <p className="text-zinc-600 mb-10">Find answers to common questions about our services, support, pricing, and technology solutions.</p>
        <div className="relative max-w-lg mx-auto">
          <Search className="absolute left-4 top-4 text-zinc-400" />
          <input type="text" placeholder="Search for answers..." className="w-full py-4 pl-12 pr-6 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2D6A6A]" />
        </div>
      </motion.div>
    </section>
  );
}