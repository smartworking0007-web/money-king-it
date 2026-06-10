"use client";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

export default function SeoGrowthFramework() {
  const steps = ["Audit", "Research", "Strategy", "Technical", "Content", "Authority", "Tracking", "Growth"];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#E5EBEB] overflow-hidden">
      <Text variant="h2" className="text-3xl font-bold mb-10 text-center text-[#0F172A]">
        SEO Growth Framework
      </Text>

      {/* Hide scrollbar by using css class 'no-scrollbar' */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-4 no-scrollbar"
          animate={{ x: ["0%", "-50%"] }} // Ye auto-slide karega
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...steps, ...steps].map((step, i) => (
            <div 
              key={i} 
              className="min-w-160px md:min-w-200px p-6 bg-white rounded-2xl border border-slate-200 shadow-sm shrink-0"
            >
              <Text variant="body" className="font-bold text-teal-600 text-sm mb-1">
                0{(i % steps.length) + 1}
              </Text>
              <Text variant="h3" className="font-semibold text-base text-[#0F172A]">
                {step}
              </Text>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  ); 
}