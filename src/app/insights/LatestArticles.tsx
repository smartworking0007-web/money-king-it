export default function LatestArticles() {
  const articles = [
    { title: "Enterprise AI Adoption", cat: "AI", time: "5m read" },
    { title: "Next.js 15 Performance", cat: "Dev", time: "8m read" },
    { title: "Cloud Cost Strategies", cat: "Cloud", time: "6m read" }
  ];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black mb-8 text-[#0F172A]">Latest Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200">
            <span className="text-[10px] font-bold text-teal-600 uppercase">{a.cat}</span>
            <h4 className="font-bold text-[#0F172A] mt-2 mb-4">{a.title}</h4>
            <div className="flex justify-between items-center text-[10px] text-zinc-400">
              <span>{a.time}</span>
              <button className="font-bold text-[#0F172A]">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}