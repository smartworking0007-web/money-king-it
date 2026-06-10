'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Award } from 'lucide-react';

export default function HeroSection() {
  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { value: '99%', label: 'Client Satisfaction', icon: Shield },
    { value: '15+', label: 'Years Experience', icon: Award },
  ];

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-[#E5EBEB] pt-20 pb-12 overflow-hidden">
      {/* Dynamic Background Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,160,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.6),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-mono tracking-wider uppercase bg-[#00E5A0]/20 text-zinc-900 font-bold border border-[#00E5A0]/30 mb-6">
            Enterprise Grade Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 max-w-4xl mx-auto leading-tight"
        >
          Custom Software <br />
          <span className="bg-linear-to-r from-zinc-800 via-zinc-900 to-[#00E5A0] bg-clip-text text-transparent">
            Development Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-zinc-700 max-w-3xl mx-auto font-light leading-relaxed px-2 sm:px-0"
        >
          We build scalable, secure, and business-focused software solutions tailored to your unique requirements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-[#00E5A0] text-zinc-950 font-bold rounded-lg hover:bg-[#00E5A0]/90 transition-all shadow-lg shadow-[#00E5A0]/30 flex items-center justify-center gap-2 group cursor-pointer text-sm sm:text-base">
            Get Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center shadow-md cursor-pointer text-sm sm:text-base">
            Start Your Project
          </button>
        </motion.div>

        {/* Statistics Layer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/60 p-5 sm:p-6 rounded-xl flex flex-row sm:flex-col items-center sm:items-start justify-start text-left group transition-all gap-4 sm:gap-0 shadow-xs"
            >
              <stat.icon className="text-[#00E5A0] opacity-90 group-hover:scale-110 transition-transform sm:mb-3 shrink-0" size={24} />
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-600 font-medium mt-0.5 block">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}