import React from 'react';

/**
 * IndustrySolutions Component
 * Force-applied dark navy colors for guaranteed visibility.
 */
export default function IndustrySolutions() {
  const industries = [
    "Banking", 
    "Fintech", 
    "Healthcare", 
    "Insurance", 
    "Government", 
    "Education", 
    "Retail", 
    "Manufacturing", 
    "SaaS", 
    "Enterprise Tech"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      {/* Title with forced navy color */}
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Industries Served
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {industries.map((ind) => (
          <div 
            key={ind} 
            className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm text-center hover:border-teal-400 hover:shadow-md transition-all duration-300 group cursor-default"
          >
            {/* Forced visibility using !text-[#0F172A] */}
            <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider group-hover:text-teal-700 transition-colors duration-300">
              {ind}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}