import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function DataPipelines() {
  const pipelines = [
    "ETL Pipelines", 
    "ELT Workflows", 
    "Real-Time Streaming", 
    "Integration", 
    "Synchronization", 
    "Validation", 
    "Automation", 
    "Monitoring"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Data Pipelines
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {pipelines.map((p) => (
          <div 
            key={p} 
            className="group flex flex-col justify-between p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-teal-500 transition-all duration-300 cursor-default"
          >
            <span className="text-sm font-bold text-white mb-4">
              {p}
            </span>
            
            {/* Hover par icon appearance effect */}
            <ArrowRight className="w-5 h-5 text-zinc-700 group-hover:text-teal-400 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}