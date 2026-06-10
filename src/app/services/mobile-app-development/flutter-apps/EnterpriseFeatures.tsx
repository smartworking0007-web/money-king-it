import { Text } from "@/components/ui/Text";

export default function EnterpriseFeatures() {
  const features = [
    "Single Base", 
    "Native Perf", 
    "Push Notifs", 
    "Offline Sync", 
    "Pay Gateway", 
    "Cloud Sync"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Enterprise Features</Text>
      
      {/* Grid tight aur compact */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {features.map((item, i) => (
          <div 
            key={i} 
            className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm hover:border-teal-400 transition-all text-center"
          >
            {/* Text color set kiya hai taaki saaf dikhe */}
            <Text variant="body" className="text-zinc-900 font-bold text-xs">
              {item}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}