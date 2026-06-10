import { Text } from "@/components/ui/Text";
export default function RealtimeDashboard() {
  const stats = [{ l: "Events/sec", v: "1.2M" }, { l: "Uptime", v: "99.99%" }, { l: "Pipelines", v: "45" }];
  return (
    <section className="py-8 px-6">
      <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl border border-zinc-100 shadow-sm grid grid-cols-3 gap-2">
        {stats.map((s, i) => (<div key={i} className="p-3 bg-zinc-50 rounded-xl text-center border border-zinc-100"><Text variant="label" className="text-[9px]">{s.l}</Text><div className="text-lg font-black text-teal-600 mt-1">{s.v}</div></div>))}
      </div>
    </section>
  );
}