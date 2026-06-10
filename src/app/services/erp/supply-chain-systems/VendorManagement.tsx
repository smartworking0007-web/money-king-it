export default function VendorManagement() {
  const vendors = ["Supplier Onboarding", "Performance Track", "Contract Mgmt", "Risk Assessment", "Collaboration", "Purchase Tracking", "Scorecards", "Compliance"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Vendor Management</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {vendors.map((v) => (
          <div key={v} className="p-5 bg-zinc-900 rounded-xl text-white font-bold text-xs">
            {v}
          </div>
        ))}
      </div>
    </section>
  );
}