export default function SalesforceIntegrations() {
  const tools = ["HubSpot", "SAP", "Oracle ERP", "Dynamics", "Mailchimp", "Slack", "QuickBooks", "Shopify", "Stripe", "Workspace"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Seamless Integrations</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {tools.map((t) => (
          <div key={t} className="p-4 bg-white rounded-xl border border-zinc-200 text-center text-xs font-bold text-[#0F172A]">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}