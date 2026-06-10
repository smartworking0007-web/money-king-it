export default function BusinessHours() {
  return (
    <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm">
      <h3 className="font-black text-[#0F172A] mb-6 text-sm">Business Hours</h3>

      <div className="space-y-4 text-xs font-bold">
        {/* Mon - Fri */}
        <div className="flex justify-between items-center text-[#0F172A]">
          <span>Mon - Fri</span>
          <span className="text-teal-600">9:00 AM - 7:00 PM</span>
        </div>

        {/* Saturday */}
        <div className="flex justify-between items-center text-[#0F172A]">
          <span>Saturday</span>
          <span className="text-teal-600">10:00 AM - 4:00 PM</span>
        </div>

        {/* Sunday */}
        <div className="flex justify-between items-center text-zinc-400">
          <span>Sunday</span>
          <span>Closed</span>
        </div>
      </div>
    </div>
  );
}
