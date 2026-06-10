// src/app/services/application-programming/project-implementation/IndustriesSection.tsx
import React from 'react';
import { Wallet, Landmark, Activity, GraduationCap, ShoppingBag, Truck, Building2, Factory } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function IndustriesSection() {
  const industrialSectors = [
    { icon: Wallet, name: "Fintech", metric: "Sub-millisecond Scale" },
    { icon: Landmark, name: "Banking", metric: "ISO 27001 Cryptography" },
    { icon: Activity, name: "Healthcare", metric: "HIPAA Compliant Vaults" },
    { icon: GraduationCap, name: "Education", metric: "High Concurrent Clusters" },
    { icon: ShoppingBag, name: "Ecommerce", metric: "Distributed Ledger Sync" },
    { icon: Truck, name: "Logistics", metric: "Realtime Asset Routing" },
    { icon: Building2, name: "Real Estate", metric: "Tokenized Schema Maps" },
    { icon: Factory, name: "Manufacturing", metric: "Deterministic IoT Logs" }
  ];

  return (
    <section className="w-full space-y-10 md:space-y-12 text-left">
      <div className="text-center space-y-3 md:space-y-4">
        <Text variant="label">Domain Mastery</Text>
        <Text variant="h3" className="text-3xl md:text-4xl  tracking-tight text-zinc-950">
          Industries We Calibrate
        </Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {industrialSectors.map((sector, i) => {
          const Icon = sector.icon;
          return (
            <div 
              key={i} 
              className="p-4 md:p-5 bg-white/80 border border-zinc-200 rounded-2xl flex items-center gap-4 shadow-sm w-full transition-all hover:border-emerald-600/10"
            >
              {/* Icon component vector limits set to shrink-0 to avoid distortion */}
              <div className="p-2.5 rounded-xl bg-zinc-100 border border-zinc-200 text-emerald-600 shrink-0 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="min-w-0 flex-1">
                <Text 
                  variant="body" 
                  className="text-base font-bold tracking-tight text-zinc-900 block truncate"
                >
                  {sector.name}
                </Text>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mt-0.5 font-bold truncate">
                  {sector.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}