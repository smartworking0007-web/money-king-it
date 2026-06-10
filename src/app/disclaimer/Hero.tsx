"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center relative overflow-hidden bg-white border-b border-zinc-200">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
        <span className="text-[#2D6A6A] font-black mb-4 block uppercase tracking-widest text-[10px]">LEGAL INFORMATION</span>
        <h1 className="text-5xl font-black text-[#0F172A] mb-6">Disclaimer</h1>
        <p className="text-zinc-600 text-lg">Please read this Disclaimer carefully before using our website and services.</p>
      </motion.div>
    </section>
  );
}