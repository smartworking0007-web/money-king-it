"use client";
import { motion } from "framer-motion";
import { Text, Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <Text variant="label" className="text-teal-600 mb-6 block">Google Android Development Experts</Text>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0F172A] mb-8 leading-[1.1]">Build Enterprise-Grade Android Applications That Scale</h1>
        <Text variant="body" className="mb-10 max-w-2xl mx-auto">Design and develop secure, high-performance Android applications using Kotlin, Jetpack Compose, and modern Android architectures.</Text>
        <div className="flex gap-4 justify-center"><Button variant="primary">Start Android Project</Button><Button variant="outline">Book Consultation</Button></div>
      </motion.div>
    </section>
  );
} 