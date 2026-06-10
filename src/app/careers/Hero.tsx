"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center bg-white border-b border-zinc-200">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <span className="text-[#00D094] font-black mb-4 block uppercase tracking-widest text-[10px]">JOIN OUR TEAM</span>
        <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-6 tracking-tighter">Build the Future With Us</h1>
        <p className="text-[#2D6A6A] font-bold text-xl mb-2">Our Careers Portal Is Launching Soon</p>
        <p className="text-zinc-600 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">At Money King IT Solutions, we believe exceptional people build exceptional technology. We are preparing a dedicated platform to showcase opportunities across Software Development, AI, Cyber Security, and more.</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#0F172A] hover:bg-zinc-800 py-6 px-8">Coming Soon</Button>
          <Button variant="outline" className="border-zinc-300 text-[#0F172A] py-6 px-8">Contact HR</Button>
        </div>
      </motion.div>
    </section>
  );
}