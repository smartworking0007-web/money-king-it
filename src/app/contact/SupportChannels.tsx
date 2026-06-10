export default function SupportChannels() {
  const channels = [
    "Consultation",
    "Tech Support",
    "Product Inquiry",
    "Enterprise Sales",
    "Customer Success",
    "Strategic Partnership",
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-black mb-6 text-[#0F172A]">
        Our Support Channels
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {channels.map((c) => (
          <div
            key={c}
            className="group p-6 bg-white rounded-2xl border border-zinc-200 text-center hover:bg-zinc-900 transition-all cursor-pointer"
          >
            {/* Group-hover class ka use karke text color white kiya hai */}
            <h4 className="font-bold text-xs text-[#0F172A] group-hover:text-white transition-colors">
              {c}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
