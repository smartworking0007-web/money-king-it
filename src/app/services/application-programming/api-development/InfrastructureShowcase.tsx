'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, RefreshCcw, Activity } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function InfrastructureShowcase() {
  const tiers = [
    { title: 'Edge Protocol Layer', code: 'GET /v4/telemetry HTTP/2', info: 'Globally distributed routing network resolving tokens parameters in sub-15ms.', icon: Layers },
    { title: 'Data Mutator Engine', code: 'cluster_mutation_handler.rs', info: 'Asynchronous event listeners scaling complex state records across shards safely.', icon: RefreshCcw },
    { title: 'Isolated Cache Core', code: 'redis://shards-001.aws.internal', info: 'Distributed memory caching matrix isolating heavy programmatic database read cycles.', icon: Database },
  ];

  return (
    <section className="w-full text-left relative py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Sticky System Statement Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Text variant="label" className="inline-block mb-1">Architecture Base</Text>
          <Text variant="h2" className="text-slate-950 leading-tight tracking-tight font-black">Modern Visual API Infrastructure</Text>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            We reject standard single-point topologies. Money King IT constructs isolated sandboxed transaction pipelines optimized specifically to eliminate execution latency.
          </p>
        </div>

        {/* Visual Layer Stacking Track */}
        <div className="lg:col-span-8 flex flex-col gap-4 w-full">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="group bg-white/80 border border-zinc-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200 flex items-center justify-center text-slate-800 shrink-0 group-hover:bg-teal-50 transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <Text variant="h4" className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight leading-tight">{tier.title}</Text>
                    <p className="text-xs text-slate-500 mt-1 font-light max-w-md leading-relaxed">{tier.info}</p>
                  </div>
                </div>

                {/* Simulated Script Capsule Code Badge */}
                <div className="w-full sm:w-auto bg-slate-950 rounded-lg px-3 py-1.5 border border-slate-800 font-mono text-[10px] text-teal-400 font-medium tracking-tight mt-3 sm:mt-0 flex items-center gap-2">
                  <Activity size={10} className="text-teal-500 animate-pulse" />
                  <span>{tier.code}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}