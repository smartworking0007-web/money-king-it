"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-teal-600 font-black mb-6 block uppercase tracking-widest text-[10px]">
          Enterprise Software Engineering Excellence
        </span>

        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-[#0F172A] mb-8">
          Custom Application Programming For Modern Businesses
        </h1>

        <p className="text-zinc-600 mb-10 text-lg max-w-2xl mx-auto">
          Design, build, and scale enterprise-grade software applications
          with secure architectures, cloud-native development, API
          integrations, and high-performance systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#0F172A] hover:bg-zinc-800 text-white px-8 py-3 rounded-xl">
            Start Your Project
          </Button>

          <Button
            variant="outline"
            className="border-zinc-300 text-[#0F172A] px-8 py-3 rounded-xl"
          >
            Schedule Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}