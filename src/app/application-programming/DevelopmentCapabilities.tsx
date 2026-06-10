export default function DevelopmentCapabilities() {
  const caps = ["Web Apps", "Enterprise Software", "SaaS Engineering", "API Development", "Backend Arch", "Frontend Eng", "Cloud Native", "Automation"];
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black text-center mb-10 text-[#0F172A]">Development Capabilities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {caps.map((c) => (
          <div key={c} className="p-8 bg-white rounded-3xl border border-zinc-200 hover:border-teal-400 transition-all text-center">
            <h4 className="font-bold text-[#0F172A]">{c}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}