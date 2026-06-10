'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function ShopifyPlusSolutions() {
  const models = [
    { title: 'B2B Wholesale Commerce', data: 'Integrating tiered custom corporate contract pricing grids natively.' },
    { title: 'Wholesale Buyer Portals', data: 'Self-service dashboard pipelines handling automatic purchase invoicing fields.' },
    { title: 'Multi-Store Management', data: 'Centralizing regional storefront configurations under one operational master pane.' },
    { title: 'Custom Checkout Scripts', data: 'Writing bespoke checkout lines to reduce cart abandonment parameters safely.' },
    { title: 'Enterprise System Sync', data: 'Wiring real-time inventory feeds directly onto active ERP clusters.' },
    { title: 'Global Commerce Expansion', data: 'Automating multi-currency tax mapping definitions cleanly across regions.' },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="bg-slate-950 border border-slate-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1 rounded-md mb-4">
              <ShoppingBag size={12} className="text-teal-400" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-teal-300">Shopify Plus Solutions</span>
            </span>
            <Text variant="h2" className="text-white font-black tracking-tight leading-tight">High-Volume Enterprise Systems</Text>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              We engineer scalable multi-store layouts designed explicitly to streamline inventory operations and protect massive conversion milestones.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            {models.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500/50 transition-colors group cursor-pointer"
              >
                <div>
                  <div className="text-xs sm:text-sm font-bold tracking-tight text-white flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight size={12} className="text-slate-500 group-hover:text-teal-400" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 font-light leading-normal">{item.data}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}