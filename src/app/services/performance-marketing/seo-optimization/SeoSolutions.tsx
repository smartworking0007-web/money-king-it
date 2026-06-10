"use client";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

const solutions = [
  "Technical SEO", "Enterprise SEO", "Local SEO", "E-Commerce SEO", 
  "Keyword Research", "Content Optimization", "Link Building", 
  "SEO Audits", "Competitor Analysis", "Conversion-Focused SEO"
];

export default function SeoSolutions() {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-24 bg-[#E5EBEB]">
      <Text variant="h2" className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Comprehensive SEO Solutions
      </Text>
      
      {/* Mobile-First Grid: Mobile pe 2 columns, tablet pe 3, desktop pe 5 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {solutions.map((item) => (
          <motion.div 
            key={item} 
            whileHover={{ y: -3 }} 
            whileTap={{ scale: 0.95 }} // Mobile pe click feedback ke liye
            className="p-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm flex items-center justify-center text-center cursor-pointer hover:border-teal-400 transition-all"
          >
            <Text variant="body" className="font-medium text-[11px] md:text-xs lg:text-sm leading-tight text-slate-700">
              {item}
            </Text>
          </motion.div>
        ))}
      </div>
    </section>
  );
}