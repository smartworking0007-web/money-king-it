export default function ClientSuccessStories() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Client Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {[1,2,3].map((i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200">
            <h4 className="text-sm font-bold text-[#0F172A]">Global Client {i}</h4>
            <div className="text-xl font-black text-teal-600 mt-2">100% Success</div>
            <p className="text-[10px] uppercase font-bold text-[#334155] mt-1">Outcome</p>
          </div>
        ))}
      </div>
    </section>
  );
}