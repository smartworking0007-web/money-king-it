export default function ArchitectureFramework() {
  const arch = [
    "Microservices",
    "Event Driven",
    "API First",
    "Serverless",
    "Cloud Native",
    "Scalable Infra",
  ];
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black mb-10 text-[#0F172A]">
        Architecture Framework
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {arch.map((a) => (
          <div key={a} className="p-8 bg-zinc-900 rounded-3xl text-white">
            <h4 className="font-bold text-lg">{a}</h4>
            <p className="text-[11px] opacity-70 mt-2 uppercase tracking-widest">
              Enterprise Standard
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
