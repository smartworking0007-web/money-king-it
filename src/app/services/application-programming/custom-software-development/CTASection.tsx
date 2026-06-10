'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-12 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,229,160,0.1),transparent_50%)]" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900">
            Ready to Build Your <br className="hidden sm:inline" />
            <span className="bg-[#00E5A0]/20 px-2 py-0.5 rounded-md inline-block mt-1">Custom Software?</span>
          </h2>
          <p className="mt-4 text-xs sm:text-base text-zinc-600 font-light leading-relaxed px-2">
            Partner with engineered competence. Drop your exact specification profiles, and we will translate your goals into stable, scaling source code architecture.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#00E5A0] text-zinc-950 font-bold rounded-lg hover:bg-[#00E5A0]/90 transition-all shadow-lg shadow-[#00E5A0]/30 cursor-pointer text-sm">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all shadow-xs cursor-pointer text-sm">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}