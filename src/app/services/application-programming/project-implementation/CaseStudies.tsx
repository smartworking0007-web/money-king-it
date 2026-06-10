// src/app/services/application-programming/project-implementation/CaseStudies.tsx
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function CaseStudies() {
  const caseProfiles = [
    {
      title: "Core Ledger Architecture Migration",
      ind: "Fintech",
      challenge:
        "Legacy pipeline degradation dropping parallel streaming requests.",
      solution:
        "Decoupled cloud-native pipeline setup built on persistent Kafka nodes.",
      metrics: "Zero transaction state failure records",
    },
    {
      title: "Omnichannel Warehouse Logistics Grid",
      ind: "Logistics",
      challenge:
        "High system latency causing stock mismatch variances across regions.",
      solution:
        "Optimized container caching layer tracking inventory changes via webhooks.",
      metrics: "Latency response compressed by 60%",
    },
    {
      title: "Consolidated ERP Resource Cluster",
      ind: "Manufacturing",
      challenge:
        "Isolated database nodes fragmenting real-time management reports.",
      solution:
        "Unified transactional schema mapping mapping data parameters continuously.",
      metrics: "Sub-second analytical sync",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-16 bg-[#E5EBEB]">
      <div className="text-center space-y-4">
        <Text variant="code">Production Realities</Text>
        <Text variant="h2">Enterprise Case Studies</Text>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {caseProfiles.map((item, i) => (
          <article
            key={i}
            className="bg-white/80 border border-zinc-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-emerald-600/20 transition-colors shadow-sm"
          >
            {/* Value Shortcut fixed dynamically to min-h-32.5 */}
            <div className="p-6 bg-zinc-100 min-h-32.5 flex flex-col justify-between border-b border-zinc-200">
              <span className="text-[10px] font-mono text-emerald-700 border border-emerald-600/20 bg-emerald-600/5 px-2.5 py-1 rounded w-max uppercase tracking-widest font-bold">
                {item.ind}
              </span>
              <Text
                variant="body"
                className="text-xl font-bold tracking-tight text-zinc-900 mt-2"
              >
                {item.title}
              </Text>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3 text-sm text-zinc-600">
                <p>
                  <strong>Challenge:</strong> {item.challenge}
                </p>
                <p>
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-bold text-emerald-600 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />{" "}
                Impact: {item.metrics}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
