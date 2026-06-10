export default function MigrationFramework() {
  const steps = [
    "Discovery", 
    "Planning", 
    "Design", 
    "Replication", 
    "Validation", 
    "Cutover", 
    "Monitoring", 
    "Optimization"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Migration Framework
      </h2>
      
      {/* Container ensure karta hai ki styling conflict na ho */}
      <div className="flex flex-wrap gap-3 justify-center">
        {steps.map((step, i) => (
          <div 
            key={step} 
            className="px-6 py-3 bg-white border border-zinc-200 rounded-full shadow-sm flex items-center gap-2 hover:border-teal-400 transition-all cursor-default"
          >
            {/* Number ka color Teal set kiya hai taaki contrast achha rahe */}
            <span className="text-[10px] font-black text-teal-600">
              0{i + 1}.
            </span>
            
            {/* Text ko explicit text-zinc-900 diya hai taaki ye hamesha dark dikhe */}
            <span className="text-xs font-bold text-zinc-900 uppercase tracking-tight">
              {step}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}