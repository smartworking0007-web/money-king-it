"use client";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Text";

export default function LuxuryCTA() {
  return (
    <section className="py-12 px-6 bg-[#E5EBEB]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[#0F172A] rounded-3xl p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-teal-500/10 to-transparent blur-3xl pointer-events-none" />
        
        <Text variant="h3" className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
          Ready To Scale Your Business With <br className="hidden md:block" /> 
          <span className="text-teal-400">High-Converting PPC Campaigns?</span>
        </Text>
        
        <Text variant="body" className="text-slate-400 text-sm md:text-base mb-8 max-w-lg mx-auto">
          Join industry leaders who have transformed their revenue trajectory with our data-backed advertising strategies.
        </Text>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="bg-[#14B8A6] hover:bg-teal-500 text-white font-bold rounded-full px-8 py-5 transition-all">
            Book Strategy Call
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold rounded-full px-8 py-5 transition-all">
            Get Free PPC Audit
          </Button>
        </div>
      </motion.div>
    </section>
  );
}