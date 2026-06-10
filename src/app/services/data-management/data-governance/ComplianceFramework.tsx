export default function ComplianceFramework() {
  const steps = [
    "Discovery", 
    "Classification", 
    "Policy Design", 
    "Access Control", 
    "Validation", 
    "Security", 
    "Audit", 
    "Continuous Governance"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      {/* Title ko dark color diya hai */}
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Compliance Framework
      </h2>
      
      <div className="flex flex-wrap gap-3 justify-center">
        {steps.map((step, i) => (
          <div 
            key={step} 
            className="px-6 py-3 bg-white rounded-full border border-zinc-200 shadow-sm flex items-center gap-2 hover:border-teal-400 transition-all cursor-default"
          >
            {/* Number ko highlight karne ke liye teal color */}
            <span className="text-[10px] font-black text-teal-600">
              0{i + 1}.
            </span>
            
            {/* Main text ko explicit zinc-900 diya hai taaki ye hamesha dark dikhe */}
            <span className="text-xs font-bold text-zinc-900 uppercase tracking-tight">
              {step}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}