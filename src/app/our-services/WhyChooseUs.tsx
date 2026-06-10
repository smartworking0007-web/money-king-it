export default function WhyChooseUs() {
  const benefits = ["Expert Team", "Enterprise Security", "Scalable Solutions", "Faster Delivery", "24/7 Support", "Innovation-Driven"];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black text-center mb-16 text-[#0F172A]">Why Businesses Choose Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {benefits.map((b) => (
          <div key={b} className="p-6 bg-[#2D6A6A] rounded-2xl text-white font-bold">{b}</div>
        ))}
      </div>
    </section>
  );
}