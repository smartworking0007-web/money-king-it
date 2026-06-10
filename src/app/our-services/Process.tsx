export default function Process() {
  const steps = [
    "Discovery",
    "Planning",
    "Design",
    "Development",
    "Testing",
    "Deployment",
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black text-center mb-16 text-[#0F172A]">
        Our Delivery Process
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {steps.map((s, i) => (
          <div key={s} className="text-center p-4 flex flex-col items-center">
            {/* Step Number Circle */}
            <div className="w-12 h-12 bg-[#2D6A6A] text-white rounded-full flex items-center justify-center mb-4 font-black shadow-lg">
              0{i + 1}
            </div>
            {/* Step Title - Text Color Fixed */}
            <h4 className="font-bold text-xs text-[#0F172A] uppercase tracking-wider">
              {s}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
