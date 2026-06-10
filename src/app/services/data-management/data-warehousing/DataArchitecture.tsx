import React from 'react';

export default function DataArchitecture() {
  const steps = [
    "Collection", 
    "Integration", 
    "Transformation", 
    "Warehousing", 
    "Modeling", 
    "Processing", 
    "Visualization", 
    "BI"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Architecture Timeline
      </h2>

      {/* Steps Container */}
      <div className="flex flex-wrap gap-3 justify-center">
        {steps.map((step, i) => (
          <div 
            key={step} 
            className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-zinc-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all duration-300 cursor-default"
          >
            {/* Step Number */}
            <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded-full">
              0{i + 1}
            </span>
            
            {/* Step Name */}
            <span className="text-xs font-bold text-zinc-900">
              {step}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}