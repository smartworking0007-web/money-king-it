export default function ClientSuccessStories() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Client Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {[ 
          {
            c: "SaaS Platform", 
            challenge: "Traffic spike bottlenecks", 
            g: "70% Cost Savings", 
            outcome: "Automated scaling efficiency"
          }, 
          {
            c: "Fintech Enterprise", 
            challenge: "Slow manual provisioning", 
            g: "+95% Scaling Speed", 
            outcome: "Instant load balancing"
          }, 
          {
            c: "Global E-Commerce", 
            challenge: "High downtime costs", 
            g: "99.99% Uptime", 
            outcome: "Zero-latency performance"
          } 
        ].map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-[#0F172A]">{s.c}</h4>
            <p className="text-[10px] text-zinc-500 uppercase mt-1 mb-3">{s.challenge}</p>
            <div className="text-xl font-black text-teal-600">{s.g}</div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase mt-2">{s.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}