import React from 'react';
export default function GovernanceSolutions() {
  const items = [
    "Strategy", 
    "Classification", 
    "Lineage", 
    "Master Data", 
    "Metadata", 
    "Data Quality", 
    "Compliance", 
    "Access", 
    "Lifecycle", 
    "Data Catalog"
  ];
  
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      {/* Title with forced high-contrast color */}
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Governance Solutions
      </h2>
      
      {/* Responsive Bento-style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {items.map((x) => (
          <div 
            key={x} 
            className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm hover:border-teal-400 hover:shadow-md transition-all duration-300 text-center group cursor-default"
          >
            {/* Forced visibility for inner text */}
            <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider group-hover:text-teal-700 transition-colors duration-300">
              {x}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}