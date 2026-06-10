'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coins, Landmark, HeartPulse, GraduationCap, 
  ShoppingBag, Truck, Building, Factory 
} from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    { title: 'Banking Operations', icon: Landmark },
    { title: 'Fintech Systems', icon: Coins },
    { title: 'Healthcare Platforms', icon: HeartPulse },
    { title: 'Digital Education', icon: GraduationCap },
    { title: 'Smart E-Commerce', icon: ShoppingBag },
    { title: 'Logistics & Fleet', icon: Truck },
    { title: 'Real Estate Tech', icon: Building },
    { title: 'Smart Manufacturing', icon: Factory },
  ];

  return (
    <section className="py-16 sm:py-24 relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00E5A0] font-extrabold block mb-3">
          Domain Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">
          Target Industry Verticals
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-600 font-light max-w-xl mx-auto leading-relaxed">
          We engineer enterprise platforms dynamically adjusted for specific business horizontal architectures.
        </p>
      </div>

      {/* Pill-Badge Container: Grid wraps automatically on mobile and forms neat badges */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-4 px-2">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-900 border border-zinc-200/80 px-5 py-3 rounded-full shadow-xs hover:shadow-md hover:border-zinc-900 transition-all duration-300 cursor-pointer"
            >
              {/* Floating Pill Icon Frame */}
              <div className="w-8 h-8 rounded-full bg-[#E5EBEB]/60 group-hover:bg-[#00E5A0] flex items-center justify-center transition-colors duration-300 shrink-0">
                <Icon className="text-zinc-800 group-hover:text-zinc-950 transition-colors duration-300" size={15} />
              </div>

              {/* Clean Typography Label */}
              <span className="text-sm font-extrabold text-zinc-800 group-hover:text-white transition-colors duration-300 whitespace-nowrap tracking-tight">
                {ind.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}