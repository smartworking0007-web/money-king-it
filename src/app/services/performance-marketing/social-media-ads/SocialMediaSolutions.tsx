import Text from '@/components/ui/Text';

export default function SocialMediaSolutions() {
  return (
    <section className="py-20 px-6 bg-zinc-50 text-zinc-900 rounded-[3rem] max-w-7xl mx-auto">
      <Text variant="h2" className="text-zinc-900 text-center mb-16">
        Social Media Solutions
      </Text>
      
      {/* grid-cols-3 ko maintain rakha hai, cards ka size kam ho gaya hai */}
      <div className="grid md:grid-cols-3 gap-6">
        {["Facebook", "LinkedIn", "TikTok"].map((s) => (
          <div key={s} className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm max-w-xs mx-auto">
            <Text variant="h4" className="text-zinc-900 text-lg font-semibold">
              {s} Advertising
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}