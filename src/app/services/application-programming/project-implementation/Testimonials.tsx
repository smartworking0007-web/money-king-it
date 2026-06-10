// src/app/services/application-programming/project-implementation/Testimonials.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "Julian Vance", desk: "CTO, Vanguard Logistics", text: "Money King IT executed our entire cluster deployment model three weeks early with absolute structural stability. Exceptional software engineers." },
    { name: "Alina Kova", desk: "VP Systems, CoreFin Global", text: "The DevOps transition pipelines they engineered mitigated our database cutover vulnerabilities flawlessly. Unmatched post-launch architecture hypercare." }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 relative bg-[#E5EBEB]">
      {/* Precise structural shortcut constraint set to min-h-55 */}
      <div className="p-8 md:p-12 bg-white/80 border border-zinc-200 rounded-3xl min-h-55 flex flex-col justify-between relative shadow-sm">
        <MessageSquare className="absolute top-6 right-8 w-10 h-10 text-zinc-300/30 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex} 
            initial={{ opacity: 0, x: 12 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -12 }} 
            transition={{ duration: 0.25 }} 
            className="space-y-4"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              ))}
            </div>
            <p className="text-base sm:text-lg text-zinc-700 font-medium leading-relaxed">
              {reviews[activeIndex].text}
            </p>
            <div>
              <h4 className="font-bold text-sm text-zinc-900">{reviews[activeIndex].name}</h4>
              <span className="text-xs font-mono text-zinc-400 font-bold">{reviews[activeIndex].desk}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-end gap-1.5 mt-6">
          <button 
            onClick={() => setActiveIndex(activeIndex === 0 ? reviews.length - 1 : activeIndex - 1)} 
            className="p-2 bg-zinc-100 border border-zinc-200 rounded-lg hover:text-emerald-600 transition-colors cursor-pointer text-zinc-500"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setActiveIndex(activeIndex === reviews.length - 1 ? 0 : activeIndex + 1)} 
            className="p-2 bg-zinc-100 border border-zinc-200 rounded-lg hover:text-emerald-600 transition-colors cursor-pointer text-zinc-500"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}