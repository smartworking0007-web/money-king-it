export default function OfficeLocations() {
  const locs = ["Head Office", "Noida", "Gurgaon", "Bangalore", "Mumbai"];
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-black mb-8 text-[#0F172A]">Our Locations</h2>
      <div className="grid md:grid-cols-5 gap-4">
        {locs.map((l) => (
          <div
            key={l}
            className="p-6 bg-white rounded-2xl border border-zinc-200 text-center hover:shadow-md transition-all"
          >
            <h4 className="font-bold text-[#0F172A]">{l}</h4>
            <p className="text-[10px] text-zinc-500 mt-2">
              India Operations Hub
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
