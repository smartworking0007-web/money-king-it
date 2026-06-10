import { Text } from "@/components/ui/Text";

export default function AppArchitecture() {
  const patterns = ["MVC", "MVVM", "Clean Arch", "Modular", "Dependency Inj.", "Offline-First"];
  
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Modern Architecture</Text>
      
      {/* Grid: 3 columns for desktop, 2 for mobile. Compact gap-3 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {patterns.map((p, i) => (
          <div 
            key={i} 
            className="p-4 bg-white rounded-xl border border-zinc-100 hover:border-teal-400 shadow-sm transition-all text-center"
          >
            <Text variant="body" className="font-bold text-zinc-900 text-xs">
              {p}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}