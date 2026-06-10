'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, Terminal } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function EcommercePlatforms() {
  const items = [
    { name: 'Shopify Plus', scope: 'Cloud Managed Scale' },
    { name: 'WooCommerce', scope: 'WordPress Integration' },
    { name: 'Magento Enterprise', scope: 'Open-Source SKU Core' },
    { name: 'BigCommerce', scope: 'SaaS Architecture Hub' },
    { name: 'OpenCart Engine', scope: 'Modular PHP Storefront' },
    { name: 'Custom Next.js Commerce', scope: 'Headless React System' },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">Ecosystem Scope</Text>
        <Text variant="h3">Platforms We Work With</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((platform, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200/80 p-3.5 rounded-xl flex items-center justify-between gap-3 hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer min-h-max"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 group-hover:bg-teal-50/50 transition-colors shrink-0">
                <Store size={14} />
              </div>
              <div>
                <Text variant="body" className="text-xs sm:text-sm font-extrabold text-zinc-900 group-hover:text-teal-600 transition-colors leading-tight">
                  {platform.name}
                </Text>
                <p className="text-[10px] text-zinc-400 font-mono mt-0.5 tracking-tight font-medium">
                  {platform.scope}
                </p>
              </div>
            </div>
            <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
              <Terminal size={8} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}