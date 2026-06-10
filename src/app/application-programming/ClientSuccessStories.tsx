export default function ClientSuccessStories() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black mb-10 text-[#0F172A]">Client Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="p-8 bg-zinc-900 rounded-3xl text-white">
            <h4 className="font-black">Project Alpha {i}</h4>
            <p className="text-xs opacity-70 mt-2">Challenge: Scaling enterprise operations.</p>
            <div className="mt-6 text-teal-400 font-black text-xl">ROI: 300%</div>
          </div>
        ))}
      </div>
    </section>
  );
}