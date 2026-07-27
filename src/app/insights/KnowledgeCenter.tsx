"use client";

import React from "react";
import { motion } from "framer-motion";
import Text from "@/components/ui/Text";
const knowledgeItems = [
  "Blogs", "Whitepapers", "eBooks", "Research", 
  "Blueprints", "Videos", "Analysis", "Learning"
];

export default function KnowledgeCenter() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <Text variant="h3" className="text-white! font-bold">Knowledge Center</Text>
        </div>

        {/* Knowledge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/10">
          {knowledgeItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="p-8 border-b border-r border-white/10 flex items-center justify-center group hover:bg-emerald-500/5 transition-all"
            >
              <Text variant="h5" className="text-zinc-400! group-hover:text-emerald-400! transition-colors">
                {item}
              </Text>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}