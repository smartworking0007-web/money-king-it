export default function LuxuryCTA() {
  return (
    <section className="py-16 px-6">
      {/* Background color hata diya hai */}
      <div className="max-w-3xl mx-auto p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 leading-tight text-zinc-900">
          Ready to scale revenue with <br /> predictive social advertising?
        </h2>
        <div className="flex gap-4 justify-center">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-emerald-700 transition-all shadow-md">
            Book Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}