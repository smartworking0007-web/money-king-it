import { Text } from "@/components/ui/Text";
export default function ModuleArchitecture() {
  const p = [
    "Monorepo",
    "Native Bridge",
    "Component Lib",
    "Modular Core",
    "Dependency Inj.",
    "Offline-First",
  ];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">
        Architecture
      </Text>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {p.map((x, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-xl border border-zinc-100"
          >
            <Text variant="body" className="text-zinc-900 font-bold text-xs">
              {x}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
