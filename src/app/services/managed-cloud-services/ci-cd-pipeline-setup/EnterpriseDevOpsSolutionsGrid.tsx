// File Name: EnterpriseDevOpsSolutionsGrid.tsx

import Text from "@/components/ui/Text";

const DEVOPS_SOLUTIONS = [
  {
    number: "01",
    title: "Continuous Integration & Continuous Delivery (CI/CD)",
    description:
      "Automated Pipeline Architecture, Code Integration & Zero-Downtime Deployment Workflows",
  },
  {
    number: "02",
    title: "High-Speed Automated Builds",
    description:
      "Dependency Resolution, Artifact Generation & High-Throughput Compilation Engines",
  },
  {
    number: "03",
    title: "Automated Continuous Testing",
    description:
      "Shift-Left Unit, Integration, API & End-to-End Regression Test Execution",
  },
  {
    number: "04",
    title: "Intelligent Release Automation",
    description:
      "Blue-Green Deployments, Canary Rollouts & Automated Rollback Guardrails",
  },
  {
    number: "05",
    title: "Declarative Infrastructure as Code (IaC)",
    description:
      "Multi-Cloud Provisioning via Terraform, CloudFormation, Ansible & Version-Controlled Infra",
  },
  {
    number: "06",
    title: "Scalable Container Deployment",
    description:
      "Docker Containerization & Production Kubernetes Cluster Orchestration",
  },
  {
    number: "07",
    title: "Integrated DevSecOps Architecture",
    description:
      "Automated SAST/DAST Code Scanning, Container Vulnerability Audits & Compliance Guardrails",
  },
  {
    number: "08",
    title: "Pipeline & Infrastructure Observability",
    description:
      "Real-Time Build Analytics, Application Telemetry & Distributed Pipeline Logging",
  },
  {
    number: "09",
    title: "Multi-Cloud Infrastructure Orchestration",
    description:
      "Unified Hybrid Cloud Deployment Across AWS, Azure, GCP & On-Premises Environments",
  },
 
];

export default function EnterpriseDevOpsSolutionsGrid() {
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
            Enterprise DevOps Solutions & Automated Delivery Infrastructure
          </Text>
        </div>

        {/* Responsive Grid layout optimized for mobile view and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {DEVOPS_SOLUTIONS.map((item, index) => (
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
