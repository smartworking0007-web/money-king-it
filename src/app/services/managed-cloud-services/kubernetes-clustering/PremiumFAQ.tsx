export default function PremiumFAQ() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">FAQs</h2>
      <div className="space-y-2">
        {["Why Kubernetes for microservices?", "Is Service Mesh mandatory?", "How to handle multi-cluster?", "What is GitOps workflow?"].map((q, i) => (
          <details key={i} className="p-4 bg-white rounded-xl border border-zinc-200">
            <summary className="font-bold text-xs text-[#0F172A] cursor-pointer">{q}</summary>
            <p className="text-[11px] pt-3 text-zinc-600">Our cloud-native infrastructure is built for enterprise-scale reliability, security, and extreme automation.</p>
          </details>
        ))}
      </div>
    </section>
  );
}