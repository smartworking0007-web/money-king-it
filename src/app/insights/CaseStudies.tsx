export default function CaseStudies() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black mb-8 text-[#0F172A]">Case Studies</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200 flex justify-between items-center">
            <div>
              <p className="text-[10px] text-zinc-400 font-bold uppercase">ROI Growth</p>
              <h4 className="font-bold text-[#0F172A]">Project Alpha {i}</h4>
            </div>
            <div className="text-xl font-black text-teal-600">300%</div>
          </div>
        ))}
      </div>
    </section>
  );
}