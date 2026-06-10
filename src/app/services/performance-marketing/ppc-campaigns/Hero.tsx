"use client";
import { motion } from "framer-motion";
import { Text, Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <Text variant="label" className="mb-6 block">AI-Powered Social Advertising Experts</Text>
        <h1 className="text-5xl md:text-7xl font-900 tracking-tighter text-zinc-950 mb-8 leading-[1.1]">
          Predictive Social Media Ads That Scale Revenue
        </h1>
        <Text variant="body" className="mb-10 max-w-2xl mx-auto">
          Leverage AI-driven audience intelligence, predictive analytics, and advanced social advertising strategies to maximize growth.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">Get Free Social Ads Audit</Button>
          <Button variant="outline" size="lg">Book Strategy Call</Button>
        </div>
      </motion.div>
    </section>
  );
}