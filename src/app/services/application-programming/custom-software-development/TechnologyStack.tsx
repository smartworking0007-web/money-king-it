'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, HardDrive, Layout, Server } from 'lucide-react';

export default function TechnologyStack() {
  const stack = [
    { title: 'Frontend', techs: ['React', 'Next.js', 'TypeScript'], icon: Layout },
    { title: 'Backend', techs: ['Node.js', 'NestJS', 'Python'], icon: Server },
    { title: 'Database', techs: ['PostgreSQL', 'MySQL', 'MongoDB'], icon: HardDrive },
    { title: 'Cloud', techs: ['AWS', 'Azure', 'Google Cloud'], icon: Cpu },
  ];

  return (
    <section className="py-16 sm:py-24 relative w-full text-left">
      {/* FIXED: Linter warning w-[400px] replaced with w-100 */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 bg-[#00E5A0]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">
          Architecture Hub
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">
          Modern Core Tech Stack
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 font-light max-w-xl mx-auto">
          Our specialized operational environments are engineered on performant, standard ecosystem microservices.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-4 px-4">
        {stack.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-white border border-zinc-200/80 p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:border-zinc-300 shadow-xs hover:shadow-md transition-all duration-300 relative"
            >
              <div className="md:w-40 flex items-center gap-3 shrink-0 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 flex items-center justify-center border border-zinc-200/60 text-zinc-700">
                  <Icon size={15} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-extrabold block">
                  {group.title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 flex-1">
                {group.techs.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="group/pill flex items-center bg-[#E5EBEB]/30 hover:bg-zinc-900 border border-zinc-200/60 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] mr-2.5 opacity-80 group-hover/pill:scale-110 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm font-bold text-zinc-800 group-hover/pill:text-white transition-colors duration-300 tracking-tight">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute right-4 top-4 md:static w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all duration-300 shrink-0">
                <ArrowUpRight size={13} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}