export default function CloudNativeInfrastructure() {
  const infra = ["Docker Containers", "K8s Clusters", "Helm Charts", "GitOps", "IaC", "Registry", "K8s Security", "Monitoring"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Cloud Native Infra</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {infra.map((i) => <div key={i} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{i}</div>)}
      </div>
    </section>
  );
}