import React from 'react';

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
      {/* Title with explicit dark color */}
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Industries Served
      </h2>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {industries.map((ind) => (
          <div 
            key={ind} 
            className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm text-center hover:border-teal-400 hover:shadow-md transition-all duration-300 cursor-default group"
          >
            {/* Added group-hover for subtle text color transition */}
            <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest group-hover:text-teal-700 transition-colors">
              {ind}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}