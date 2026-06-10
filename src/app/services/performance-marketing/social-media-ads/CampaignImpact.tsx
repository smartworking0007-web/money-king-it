import Text from '@/components/ui/Text';
export default function CampaignImpact() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      {["Brand Awareness", "Qualified Leads", "Revenue Acceleration"].map((i) => (
        <div key={i} className="p-8 bg-white rounded-3xl border"><Text variant="h4">{i}</Text></div>
      ))}
    </section>
  );
}