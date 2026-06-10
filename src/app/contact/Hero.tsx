"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-teal-600 font-black mb-4 block uppercase tracking-widest text-[10px]">
          Let s Build Something Great Together
        </span>
        <h1 className="text-5xl font-black text-[#0F172A] mb-6">
          Talk To Our Technology Experts
        </h1>
        <p className="text-zinc-600 max-w-2xl mx-auto mb-10 text-lg">
          Whether you re planning a custom software project or cloud migration,
          our team is ready to help.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#0F172A] hover:bg-zinc-800">
            Schedule Consultation
          </Button>
          <Button variant="outline" className="border-zinc-300 text-[#0F172A]">
            Request Proposal
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
