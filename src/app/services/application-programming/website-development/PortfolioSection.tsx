'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const items = [
    { industry: 'Fintech Platform', title: 'Quantum Wealth Portal', desc: 'Secure enterprise banking dashboard handling asset movements.', results: '40% acceleration processing cycles achieved.' },
    { industry: 'Ecommerce Store', title: 'Apex Global Retail', desc: 'Decoupled Next.js shopping cart syncing product arrays cleanly.', results: '2.5x amplification transaction counts logged.' },
    { industry: 'Real Estate Portal', title: 'Horizon Property Space', desc: 'Interactive geo-query engine mapping distributed enterprise plots.', results: '90ms response metric benchmarks cleared.' },
    { industry: 'Healthcare Website', title: 'Omni Clinical Network', desc: 'Encrypted HIPAA compliant system framework routing inquiries safely.', results: 'Zero diagnostic data pipeline leakage events.' },
    { industry: 'Educational Portal', title: 'Vanguard Academy Web', desc: 'LMS cluster platform rendering dynamic concurrent payload streams.', results: '85k active structural concurrent users supported.' },
    { industry: 'Corporate Website', title: 'Stellar Logistics Group', desc: 'Multi-lingual business interface scaling enterprise footprint grids.', results: '60% acquisition trajectory spikes tracked.' },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">Case Deliveries</span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">Proven Track Record</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group bg-white border border-zinc-200/80 p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] shadow-xs hover:shadow-sm transition-all duration-300 relative min-h-60 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase text-zinc-500 bg-[#E5EBEB]/50 border border-zinc-200/60 px-2 py-0.5 rounded font-bold">
                  {item.industry}
                </span>
                <div className="w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all shrink-0">
                  <ArrowUpRight size={12} />
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-zinc-900 tracking-tight group-hover:text-black transition-colors">{item.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-2 font-light leading-relaxed">{item.desc}</p>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center gap-2 mt-5">
              <TrendingUp size={14} className="text-[#00E5A0] shrink-0" />
              <span className="text-[11px] sm:text-xs text-zinc-700 font-bold font-mono tracking-tight">{item.results}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}