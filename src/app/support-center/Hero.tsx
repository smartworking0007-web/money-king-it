"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 bg-white text-center border-b border-zinc-200">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <span className="text-[#00D094] font-black mb-4 block uppercase tracking-widest text-[10px]">24/7 CUSTOMER SUPPORT</span>
        <h1 className="text-5xl font-black text-[#0F172A] mb-6 tracking-tighter">How Can We Help You Today?</h1>
        <p className="text-zinc-600 text-lg mb-10">Get expert assistance and business guidance from the Money King IT team.</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#2D6A6A] hover:bg-[#235353] py-6 px-8">Contact Support</Button>
          <Button variant="outline" className="text-[#2D6A6A] border-zinc-300 py-6 px-8">Submit Request</Button>
        </div>
      </motion.div>
    </section>
  );
}