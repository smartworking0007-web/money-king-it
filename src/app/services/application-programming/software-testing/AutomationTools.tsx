'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowUpRight } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function AutomationTools() {
  const tools = [
    { name: 'Selenium', category: 'Web Browser Automation Framework' },
    { name: 'Cypress', category: 'Frontend E2E Engine' },
    { name: 'Playwright', category: 'Cross-Browser Node Hub' },
    { name: 'Appium', category: 'Mobile Runtime Validation' },
    { name: 'JMeter', category: 'API Performance Simulator' },
    { name: 'Postman', category: 'Payload Protocol Testing' },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">Tool Integration</Text>
        <Text variant="h2">Automation Testing Tools</Text>
      </div>

      {/* FIXED: Tight gap-3 spacing with minimal content tracking layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200/80 p-3.5 rounded-xl flex items-center justify-between gap-3 hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer min-h-max"
          >
            <div className="flex items-center gap-3">
              {/* Compact Custom Light Icon Block */}
              <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 group-hover:bg-teal-50/50 transition-colors shrink-0">
                <Cpu size={14} />
              </div>
              
              <div>
                {/* Dense Header Font Scaling */}
                <Text variant="h4" className="text-xs sm:text-sm font-extrabold text-zinc-900 group-hover:text-teal-600 transition-colors leading-tight">
                  {tool.name}
                </Text>
                <p className="text-[10px] text-zinc-400 font-mono mt-0.5 tracking-tight font-medium">
                  {tool.category}
                </p>
              </div>
            </div>

            {/* Tiny Right Arrow Indicator for Action feedback */}
            <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
              <ArrowUpRight size={8} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}