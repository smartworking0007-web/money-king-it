import React from 'react';

export default function WarehousingSolutions() {
  const items = [
    "Warehousing", 
    "Data Lake", 
    "Data Marts", 
    "ETL/ELT", 
    "Cloud DW", 
    "BI Integration", 
    "Modeling", 
    "Consolidation", 
    "MDM", 
    "Reporting"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Warehousing Solutions
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {items.map((x) => (
          <div 
            key={x} 
            className="group p-5 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all duration-300 text-center cursor-default"
          >
            {/* Added group-hover effect for more premium feel */}
            <span className="text-[11px] font-bold text-zinc-900 uppercase tracking-tight group-hover:text-teal-700 transition-colors">
              {x}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}