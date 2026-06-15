export default function DevelopmentProcess() {
  const steps = [
    "Discovery",
    "Planning",
    "Architecture",
    "Design",
    "Development", 
    "QA", 
    "Deployment",
    "Optimization", 
  ];
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">          
      <h2 className="text-3xl font-black text-center mb-10 text-[#0F172A]">     
        Development Process       
      </h2>  
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div
            key={s}
            className="p-6 bg-white border-l-4 border-teal-500 rounded-lg shadow-sm"         
          >
            <span className="text-teal-600 font-black text-xs">0{i + 1}</span>
            <h4 className="font-bold text-[#0F172A]">{s}</h4>

          </div>
        ))}
      </div>   
    </section>
  );
}
