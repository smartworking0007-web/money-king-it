// src/app/services/application-programming/project-implementation/HeroSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Text";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-[#E5EBEB]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-137.5 h-137.5 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating Animated Cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-12 hidden lg:flex items-center gap-3 p-3.5 bg-white/90 backdrop-blur-md rounded-xl border border-zinc-200 shadow-sm"
      >
        <Sparkles className="w-4 h-4 text-emerald-600" />
        <span className="text-xs font-mono text-zinc-700">Agile Delivery</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-40 right-12 hidden lg:flex items-center gap-3 p-3.5 bg-white/90 backdrop-blur-md rounded-xl border border-zinc-200 shadow-sm"
      >
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span className="text-xs font-mono text-zinc-700">
          Secure Deployment
        </span>
      </motion.div>
      <div className="relative max-w-5xl mx-auto text-center space-y-10 z-10">
        <Text variant="label">Money King IT Engineering</Text>
        <Text variant="h1">
          Project Implementation <br />
          <span className="text-emerald-600">Services</span>
        </Text>
        <Text variant="body" className="max-w-2xl mx-auto text-zinc-600">
          From Planning to Successful Deployment. We manage complex technical
          dependencies, mitigate infrastructure integration risks, and drive
          continuous validation profiles.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <Button variant="primary">
            Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline">Book Consultation</Button>
        </div>
        {/* Checkpoints */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-16 border-t border-zinc-300 text-xs font-mono text-zinc-500">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Agile
            Delivery
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />{" "}
            Dedicated Team
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Secure
            Deployment
          </div>
        </div>
      </div>
    </section>
  );
}
