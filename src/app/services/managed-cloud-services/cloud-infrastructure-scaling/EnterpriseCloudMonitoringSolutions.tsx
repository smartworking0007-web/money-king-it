// File Name: EnterpriseCloudMonitoringSolutions.tsx
import Text from "@/components/ui/Text";

const CLOUD_MONITORING_SOLUTIONS = [
  {
    number: "01",
    title: "Real-Time Metrics & Dashboards",
    description:
      "High-Frequency CPU, Memory, I/O & Application Telemetry Ingestion with Interactive Dashboards",
  },
  {
    number: "02",
    title: "Intelligent Infrastructure Alerts",
    description:
      "Threshold & Anomaly-Based Alerting via Slack, PagerDuty, Email, and Webhooks",
  },
  {
    number: "03",
    title: "System & Application Performance Tracking",
    description:
      "APM Latency Auditing, Database Query Profiling & Network Throughput Benchmarking",
  },
  {
    number: "04",
    title: "Continuous Uptime & Availability Tracking",
    description:
      "Global Synthetic Pings, Multi-Region Health Probes & SLA Compliance Reporting",
  },
  {
    number: "05",
    title: "Advanced Traffic Analytics",
    description:
      "Deep Packet Analysis, Bandwidth Utilization & Ingress/Egress Network Flow Monitoring",
  },
  {
    number: "06",
    title: "Automated Incident Management",
    description:
      "Automated Root Cause Analysis (RCA), Incident Triage & Self-Healing Workflow Triggers",
  },
  {
    number: "07",
    title: "Proactive System Health Monitoring",
    description:
      "Endpoint Health Diagnostics, Microservice Readiness Probes & Dependency Verification",
  },
  {
    number: "08",
    title: "Unified Cloud Observability",
    description:
      "Distributed Tracing, Centralized Log Aggregation & Unified Metrics for Hybrid-Cloud Environments",
  },
];

export default function EnterpriseCloudMonitoringSolutions() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Balanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Cloud Monitoring & Full-Stack Telemetry
          </Text>
        </div>

        {/* Responsive Grid layout with compact boxes and concise text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {CLOUD_MONITORING_SOLUTIONS.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Item Number */}
                <span className="text-[11px] font-mono font-bold text-[#00D094] mb-1 tracking-wider block">
                  {item.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h5"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {item.title}
                </Text>

                {/* Short Description */}
                <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
