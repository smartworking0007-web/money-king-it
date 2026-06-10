export default function CloudIntegrations() {
  const clouds = ["AWS DevOps", "Azure DevOps", "GCP Build", "GitHub Actions", "GitLab CI", "Jenkins", "Kubernetes", "Docker"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Cloud Integrations</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {clouds.map((c) => <div key={c} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{c}</div>)}
      </div>
    </section>
  );
}