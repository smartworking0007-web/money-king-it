// src/app/services/application-programming/project-implementation/MethodologySection.tsx
import React from 'react';
import { Layers, Kanban, Infinity as InfIcon, GitMerge, FileCheck } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function MethodologySection() {
  const blueprints = [
    { icon: Layers, name: "Agile", desc: "Dynamic architecture planning maps updating core system deliverables continuously." },
    { icon: Kanban, name: "Scrum", desc: "Structured bi-weekly sprint checkpoints tracking core velocity loops." },
    { icon: InfIcon, name: "DevOps", desc: "Clean development alignment matrices managing server environment instances." },
    { icon: GitMerge, name: "CI/CD", desc: "Automated verification distribution workflows deploying features code cleanly." },
    { icon: FileCheck, name: "Quality Assurance", desc: "Rigorous execution parameters verifying runtime constraints under maximum strain." }
  ];

  return (
    /* 
      RESPONSIVE CHANGES:
      - Cleaned duplicate global max-width and background classes managed by page.tsx wrapper.
      - Scalable space-y elements for mobile viewport heights adjustment.
    */
    <section className="w-full space-y-10 md:space-y-16 text-left">
      <div className="text-center space-y-3 md:space-y-4">
        <Text variant="label">Engineering Delivery Models</Text>
        <Text variant="h3" className="text-3xl md:text-4xl  tracking-tight text-zinc-950">
          Our Implementation Methodology
        </Text>
      </div>

      {/* 
        GRID MOBILE VIEW OPTIMIZATION:
        - `grid-cols-1`: Mobile viewport dimensions par cards poori stretch matrix row use karenge.
        - `sm:grid-cols-2 md:grid-cols-3`: Mid-tier devices, tablets aur small monitors par fluid columns configuration break hogi.
        - `lg:grid-cols-5`: Balanced 5-column structure on regular wide desktop monitor arrays.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {blueprints.map((b, i) => {
          const Icon = b.icon;
          return (
            <div 
              key={i} 
              className="p-5 md:p-6 bg-white/80 border border-zinc-200 rounded-2xl space-y-4 hover:border-emerald-600/20 transition-colors flex flex-col justify-between shadow-sm w-full"
            >
              <div className="space-y-3 w-full">
                {/* Fixed container parameters for vector layout */}
                <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                
                <div className="space-y-1">
                  <Text 
                    variant="body" 
                    className="text-base md:text-lg font-bold tracking-tight text-zinc-900 block"
                  >
                    {b.name}
                  </Text>
                  
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}