// File Name: CloudNativeInfrastructureGrid.tsx

import Text from "@/components/ui/Text";

const CLOUD_NATIVE_SOLUTIONS = [
  {
    number: "01",
    title: "Docker Containerization Architecture",
    description:
      "Lightweight Application Packaging, Portable Environment Standardization & Multi-Stage Builds",
    keywords:
      "Enterprise Docker Containerization, Container Package Standardization, Multi-Stage Docker Architecture",
  },
  {
    number: "02",
    title: "Production Kubernetes (K8s) Clusters",
    description:
      "Automated Node Provisioning, High Availability Cluster Orchestration & Self-Healing Workloads",
    keywords:
      "Kubernetes Cluster Management, High Availability K8s Infrastructure, Managed Kubernetes Cluster Services",
  },
  {
    number: "03",
    title: "Helm Package Management",
    description:
      "Declarative K8s Manifest Templates, Version-Controlled Application Releases & One-Click Upgrades",
    keywords:
      "Kubernetes Helm Chart Management, Helm Package Deployment Architecture, Automated K8s Templating",
  },
  {
    number: "04",
    title: "GitOps Infrastructure Automation",
    description:
      "Git-Driven State Synchronization, Automated Continuous Delivery & Configuration Drift Protection",
    keywords:
      "GitOps Cloud Native Infrastructure, Declarative Cluster Sync ArgoCD, Automated GitOps CD Pipelines",
  },
  {
    number: "05",
    title: "Infrastructure as Code (IaC)",
    description:
      "Multi-Cloud Provisioning via Terraform & CloudFormation with Automated Drift Remediation",
    keywords:
      "Infrastructure as Code Provisioning, Automated Terraform Cloud Infrastructure, Declarative Infrastructure Management",
  },
  {
    number: "06",
    title: "Secure Container Registries",
    description:
      "Private Artifact Storage, Vulnerability Image Scanning & Role-Based Access Controls",
    keywords:
      "Private Container Image Registry, Enterprise Artifact Repository Management, Container Registry Vulnerability Scanning",
  },
  {
    number: "07",
    title: "Hardened Kubernetes Security",
    description:
      "Role-Based Access Control (RBAC), Pod Security Standards, Runtime Threat Monitoring & Network Policies",
    keywords:
      "Kubernetes Security Posture Management, K8s RBAC Network Policy Guardrails, Container Runtime Threat Protection",
  },
  {
    number: "08",
    title: "Full-Stack Cloud Native Monitoring",
    description:
      "Prometheus Metrics Collection, Grafana Dashboards & Distributed Tracing Telemetry",
    keywords:
      "Cloud Native Prometheus Monitoring, Kubernetes Grafana Observability, Container Metrics Telemetry",
  },
];

export default function CloudNativeInfrastructureGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Balanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <Text
            variant="h4"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Cloud Native Infrastructure & Container Architecture
          </Text>
        </div>

        {/* Responsive Grid layout (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {CLOUD_NATIVE_SOLUTIONS.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#121212]/80 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Item Number */}
                <span className="text-xs font-mono font-bold text-[#00D094] mb-1.5 tracking-wider block">
                  {item.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h5"
                  className="text-white! text-base sm:text-lg font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {item.title}
                </Text>

                {/* Subtext / Description */}
                <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              {/* GEO Keyword Association */}
              <div className="text-[10px] text-[#00D094]/80 font-mono bg-black/40 px-2 py-1.5 rounded border border-white/5 leading-snug">
                {item.keywords}
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br` from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
