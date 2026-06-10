"use client";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

const stories = [
  { client: "Fintech Leader", challenge: "High CPA in market.", strategy: "AI segmentation.", growth: "240%", roas: "9.2x" },
  { client: "E-Commerce Giant", challenge: "Low conversion rates.", strategy: "Dynamic remarketing.", growth: "310%", roas: "12.5x" },
  { client: "SaaS Enterprise", challenge: "Stagnant lead volume.", strategy: "Intent retargeting.", growth: "180%", roas: "7.8x" }
];

export default function ClientSuccessStories() {
  return (
    <section className="py-12 px-6 bg-[#E5EBEB]">
      <Text variant="h2" className="text-2xl font-bold mb-8 text-center text-[#0F172A]">
        Success Stories
      </Text>
      
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {stories.map((story, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -3 }}
            className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-teal-400 transition-all"
          >
            <Text variant="body" className="font-bold text-base mb-4 text-[#0F172A] border-b border-slate-100 pb-3">
              {story.client}
            </Text>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <Text variant="body" className="text-[10px] font-bold uppercase text-teal-600 mt-0.5">CH</Text>
                <Text variant="body" className="text-xs text-slate-600 leading-tight">{story.challenge}</Text>
              </div>
              <div className="flex gap-2">
                <Text variant="body" className="text-[10px] font-bold uppercase text-teal-600 mt-0.5">ST</Text>
                <Text variant="body" className="text-xs text-slate-600 leading-tight">{story.strategy}</Text>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-2 rounded-lg">
                  <Text variant="body" className="text-lg font-bold text-[#0F172A]">{story.growth}</Text>
                  <Text variant="body" className="text-[9px] text-slate-400 uppercase tracking-wider">Growth</Text>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg">
                  <Text variant="body" className="text-lg font-bold text-[#0F172A]">{story.roas}</Text>
                  <Text variant="body" className="text-[9px] text-slate-400 uppercase tracking-wider">ROAS</Text>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}