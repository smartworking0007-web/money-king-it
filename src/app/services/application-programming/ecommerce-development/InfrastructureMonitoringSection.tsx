// File Name: InfrastructureMonitoringSection.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { Activity, Gauge, ShieldCheck, BarChart3 } from "lucide-react";

const MONITORING_METRICS = [
  {
    label: "TOTAL REQUEST VOLUME",
    labelVariant: "h4" as const,
    value: "142.8M",
    subtext: "↑ 14.5% execution trend",
    subtextIcon: Activity,
    keywords:
      "High-throughput API traffic, volume scaling metrics, system load telemetry.",
    icon: BarChart3,
  },
  {
    label: "AVG LATENCY PASS",
    labelVariant: "h3" as const,
    value: "14.2 ms",
    subtext: "P99 response benchmark",
    subtextIcon: Gauge,
    keywords:
      "Sub-second API response time, low-latency infrastructure, P99 performance benchmarking.",
    icon: Gauge,
  },
  {
    label: "GATEWAY ERROR RATE",
    labelVariant: "h3" as const,
    value: "0.002%",
    subtext: "Zero processing block drops",
    subtextIcon: ShieldCheck,
    keywords:
      "Enterprise API reliability, zero packet loss, 99.999% gateway uptime.",
    icon: ShieldCheck,
  },
];

export default function InfrastructureMonitoringSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-24 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/insights/3.png"
          alt="Real-Time Infrastructure Monitoring"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
          >
            Real-Time Infrastructure Monitoring & Analytics
          </Text>
          <Text
            variant="h4"
            className="text-gray-300! text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Our live telemetry dashboard provides real-time infrastructure
            analytics, tracking high-volume API requests, sub-15ms response
            latency benchmarks, and near-zero gateway error rates across active
            cluster nodes.
          </Text>
        </div>

        {/* Responsive Grid layout for metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {MONITORING_METRICS.map((metric, index) => {
            const IconComponent = metric.icon;
            const SubIconComponent = metric.subtextIcon;
            return (
              <div
                key={index}
                className="relative flex flex-col p-6 sm:p-7 rounded-2xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group shadow-xl hover:-translate-y-1"
              >
                {/* Header: Label & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Text
                    variant={metric.labelVariant}
                    className="text-gray-400! text-[11px] sm:text-xs font-bold tracking-widest uppercase group-hover:text-gray-300 transition-colors"
                  >
                    {metric.label}
                  </Text>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00D094] group-hover:bg-[#00D094]/10 transition-all">
                    <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Metric Value */}
                <div className="mb-3">
                  <Text
                    variant="h5"
                    className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {metric.value}
                  </Text>
                </div>

                {/* Subtext / Trend */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00D094]/10 text-[#00D094]">
                    <SubIconComponent className="h-3 w-3" />
                  </span>
                  <Text
                    variant="body"
                    className="text-[#00D094]! text-[11px] sm:text-xs font-medium"
                  >
                    {metric.subtext}
                  </Text>
                </div>

                {/* GEO Keywords Footer */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <Text
                    variant="body"
                    className="text-gray-500! text-[10px] font-mono tracking-tight leading-relaxed"
                  >
                    <span className="text-gray-400 font-semibold">GEO:</span>{" "}
                    {metric.keywords}
                  </Text>
                </div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
