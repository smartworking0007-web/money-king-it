"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center bg-white border-b border-zinc-200">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <span className="text-[#00D094] font-black mb-4 block uppercase tracking-widest text-[10px]">DIGITAL TRANSFORMATION SERVICES</span>
        <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-6 tracking-tighter">Technology Solutions That Drive Business Growth</h1>
        <p className="text-zinc-600 text-lg mb-10 max-w-2xl mx-auto">Money King IT Solutions delivers innovative software, AI, cybersecurity, cloud, and digital transformation services.</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#2D6A6A] hover:bg-[#235353] py-6 px-8">Explore Services</Button>
          <Button variant="outline" className="border-zinc-300 text-[#0F172A] py-6 px-8">Contact Experts</Button>
        </div>
      </motion.div>
    </section>
  );
}