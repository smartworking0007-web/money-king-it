export default function IndustryProjects() {
  const projects = [
    { title: "Enterprise Software", desc: "Scalable cloud-based SaaS platforms." },
    { title: "AI Solutions", desc: "Custom ML-powered predictive engines." },
    { title: "Cloud Infrastructure", desc: "High-availability multi-cloud architecture." },
    { title: "Fintech Apps", desc: "Secure, real-time financial systems." },
    { title: "Cyber Security", desc: "Advanced threat detection protocols." },
    { title: "Data Engineering", desc: "Real-time large-scale data pipelines." }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Industry Projects</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200 hover:border-teal-400 transition-all">
            <h4 className="font-bold text-[#0F172A]">{p.title}</h4>
            <p className="text-xs text-zinc-500 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}