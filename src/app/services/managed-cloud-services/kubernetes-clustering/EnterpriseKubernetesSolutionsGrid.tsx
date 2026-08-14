// File Name: EnterpriseKubernetesSolutionsGrid.tsx
import Text from "@/components/ui/Text";

const KUBERNETES_SOLUTIONS = [
  {
    number: "01",
    title: "Production K8s Cluster Management",
    description:
      "Automated Cluster Lifecycle Provisioning, Upgrades, Node Pool Management & Infrastructure Health",
  },
  {
    number: "02",
    title: "Container Workload Orchestration",
    description:
      "Automated Container Scheduling, StatefulSet Management, Rolling Updates & Health Self-Healing",
  },
  {
    number: "03",
    title: "Enterprise Service Mesh Integration",
    description:
      "Advanced Traffic Management, mTLS Encryption & Microservice Observability via Istio/Linkerd",
  },
  {
    number: "04",
    title: "Microservices Architecture & Management",
    description:
      "Decoupled Application Architecture, API Gateway Routing & Service Discovery Protocols",
  },
  {
    number: "05",
    title: "Multi-Cluster & Hybrid Governance",
    description:
      "Centralized Fleet Management, Cross-Cluster Failover & Unified Policy Enforcement across AWS, Azure, GCP",
  },
  {
    number: "06",
    title: "Cloud Native Ecosystem Integration",
    description:
      "CNCF Certified Standards, Serverless Knative Extensions & Cloud-Native Storage Drivers",
  },
  {
    number: "07",
    title: "Hardened K8s Security & Compliance",
    description:
      "Role-Based Access Control (RBAC), Pod Security Standards (PSS), Runtime Threat Detection & Image Scanning",
  },
  {
    number: "08",
    title: "Dynamic Pod & Cluster Auto Scaling",
    description:
      "Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA) & Cluster Autoscaler (Karpenter)",
  },
  {
    number: "09",
    title: "Declarative GitOps Continuous Delivery",
    description:
      "Automated Repository Synchronization, Environment Drift Reconciliation & One-Click Rollbacks using ArgoCD/Flux",
  },
];

export default function EnterpriseKubernetesSolutionsGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Balanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Kubernetes Solutions & Container Orchestration Platform
          </Text>
        </div>

        {/* Responsive Grid layout optimized for mobile view and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {KUBERNETES_SOLUTIONS.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-3.5 sm:p-4 md:p-5 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Item Number */}
                <span className="text-[11px] font-mono font-bold text-[#00D094] mb-1 tracking-wider block">
                  {item.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h5"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1.5 group-hover:text-[#00D094] transition-colors duration-300"
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
