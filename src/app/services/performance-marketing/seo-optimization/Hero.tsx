"use client";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-6 md:px-12 lg:px-24 bg-[#E5EBEB]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
        <span className="px-4 py-1 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-6 inline-block">Enterprise SEO Growth Experts</span>
        <Text variant="h1" className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#0F172A]">ROI-Focused SEO Optimization That Drives Revenue</Text>
        <Text variant="body" className="text-xl text-[#334155] mb-10 max-w-2xl mx-auto">Increase search visibility, dominate rankings, generate qualified leads, and transform organic traffic into measurable business growth through enterprise-grade SEO strategies.</Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#14B8A6] hover:bg-teal-600 rounded-full px-8">Get Free SEO Audit</Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-300">Book Strategy Call</Button>
        </div>
      </motion.div>
    </section>
  );
}