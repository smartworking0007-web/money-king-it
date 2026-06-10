import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function DataProtection() {
  const items = [
    "Encryption", 
    "RBAC", 
    "Data Masking", 
    "Retention Policies", 
    "DLP", 
    "Audit Logging", 
    "Backup Governance", 
    "Privacy"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Data Protection
      </h2>
      
      {/* Grid layout with explicit responsive gaps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div 
            key={item} 
            className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 flex flex-col items-center justify-center gap-3 hover:bg-teal-900 hover:border-teal-500 transition-all duration-300 cursor-default"
          >
            {/* Added an icon for better visual communication */}
            <ShieldCheck className="w-5 h-5 text-teal-500 group-hover:text-white transition-colors" />
            
            {/* Text visibility ensure karne ke liye white color */}
            <span className="text-[11px] font-bold text-white uppercase tracking-wider text-center">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}