'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Key, Lock, Radio } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function SecurityCommandCenter() {
  const protocols = [
    { name: 'OAuth 2.0 Identity Handshakes', desc: 'Secure token tracking system protecting resources scopes.', icon: Key },
    { name: 'JWT Encrypted Enclosures', desc: 'Stateless custom security arrays filtering unauthorized requests.', icon: Lock },
    { name: 'Real-Time Adaptive Rate Limiting', desc: 'Defends microservices blocks against massive brute-force peaks.', icon: ShieldCheck },
  ];

  return (
    <section className="py-8 relative w-full text-left">
      <div className="bg-slate-950 border border-slate-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Panel Description Side */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1 rounded-md mb-4">
              <Radio size={12} className="text-teal-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-teal-300">Security Command Center</span>
            </span>
            <Text variant="h2" className="text-white font-black tracking-tight leading-tight">Hardened Payload Encryption</Text>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              We apply advanced firewall boundaries directly onto routing modules. Every programmatic payload clears token authentication checks seamlessly.
            </p>
          </div>

          {/* Interactive Core Protocol List Track */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 w-full">
            {protocols.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-4 hover:border-teal-500/50 transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-teal-400 shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-all">
                  <item.icon size={14} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold tracking-tight text-white">{item.name}</div>
                  <p className="text-[11px] text-slate-400 mt-1 font-light leading-normal">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}