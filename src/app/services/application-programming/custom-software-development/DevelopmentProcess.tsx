'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function DevelopmentProcess() {
  const steps = [
    { title: 'Discovery', desc: 'Parsing target objectives, business models, and high-level operational requirements.' },
    { title: 'Requirement Analysis', desc: 'Drafting precise specifications, user mapping logic, and system scope criteria.' },
    { title: 'Planning', desc: 'Formulating systemic structural design choices, microservice dependencies, and data flow plans.' },
    { title: 'UI/UX Design', desc: 'Producing responsive, user-friendly high-fidelity product layouts and operational wireframes.' },
    { title: 'Development', desc: 'Writing clean code using modern frameworks backed by automated integration tests.' },
    { title: 'Testing', desc: 'Executing extensive QA cycles testing cross-platform compatibility, security edge cases, and performance spikes.' },
    { title: 'Deployment', desc: 'Launching applications into target infrastructure staging and production pipelines securely.' },
    { title: 'Maintenance & Support', desc: 'Providing active runtime infrastructure tracking, regular updates, and ongoing optimizations.' },
  ];

  return (
    <section className="py-12 relative w-full">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00E5A0] font-bold block">Execution Blueprint</span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mt-2">
          The Lifecycle Framework
        </h2>
      </div>

      <div className="relative border-l-2 border-zinc-300 max-w-3xl mx-auto pl-5 sm:pl-8 space-y-10 sm:space-y-12">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative group text-left"
          >
            {/* Positioned Canonical Coordinates */}
            <div className="absolute -left-6.5 sm:-left-9.5 top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-zinc-400 group-hover:border-[#00E5A0] group-hover:scale-110 transition-all z-10" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <span className="text-[10px] font-mono text-zinc-900 bg-[#00E5A0] px-2 py-0.5 rounded font-bold shadow-xs w-fit">
                Phase 0{idx + 1}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-black transition-colors">
                {step.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-light leading-relaxed max-w-2xl">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}