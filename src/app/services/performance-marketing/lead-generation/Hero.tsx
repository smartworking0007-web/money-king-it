"use client";
import { motion } from "framer-motion";
import { Text, Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <Text variant="label" className="mb-6 block text-teal-600">
          Enterprise Lead Generation Experts
        </Text>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0F172A] mb-8 leading-[1.1] max-w-4xl mx-auto">
          Scalable Lead Generation Systems That Drive Revenue Growth
        </h2>
        <Text variant="body" className="mb-10 max-w-2xl mx-auto">
          Build predictable sales pipelines, generate qualified prospects, and
          automate lead nurturing with enterprise-grade strategies.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Free Audit
          </Button>
          <Button variant="outline" size="lg">
            Book Strategy Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
