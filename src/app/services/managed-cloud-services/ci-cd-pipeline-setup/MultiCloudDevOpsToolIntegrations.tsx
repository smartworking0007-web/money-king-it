// File Name: MultiCloudDevOpsToolIntegrations.tsx

import Text from "@/components/ui/Text";

const CLOUD_TOOL_INTEGRATIONS = [
  {
    number: "01",
    title: "Amazon Web Services (AWS) Integration",
    description:
      "Seamless Pipeline Connections with AWS CodePipeline, ECS, EKS, Lambda & CloudFormation",
    keywords:
      "AWS DevOps Integration Services, Amazon Web Services CI/CD Integration, AWS Cloud Infrastructure Automation",
  },
  {
    number: "02",
    title: "Microsoft Azure DevOps Integration",
    description:
      "Direct Pipeline Synchronization with Azure Repos, Azure Pipelines, AKS & Enterprise Security Policies",
    keywords:
      "Azure DevOps Pipeline Integration, Microsoft Cloud Integration Services, Azure Kubernetes Service Integration",
  },
  {
    number: "03",
    title: "Google Cloud Build & GCP Integration",
    description:
      "Automated Native CI/CD Workflows for Google Cloud Engine, GKE & Serverless Cloud Run",
    keywords:
      "GCP Cloud Build Automation, Google Cloud Platform Integration, GKE Container Pipeline Integration",
  },
  {
    number: "04",
    title: "GitHub Actions Workflow Integration",
    description:
      "Automated Developer Workflows, Pull Request Triggers & Custom GitHub Action Marketplace Tools",
    keywords:
      "GitHub Actions Pipeline Automation, Git Workflow Integration Services, Automated GitHub CI/CD Actions",
  },
  {
    number: "05",
    title: "GitLab CI/CD Platform Integration",
    description:
      "End-to-End DevSecOps Pipelines, Auto DevOps Triggers & Built-In Container Registries",
    keywords:
      "GitLab CI/CD Pipeline Integration, Automated GitLab DevSecOps Workflows, GitLab Enterprise Integration",
  },
  {
    number: "06",
    title: "Enterprise Jenkins Orchestration",
    description:
      "Distributed Build Agent Integration, Custom Pipeline Scripting & Legacy CI Migration",
    keywords:
      "Jenkins Automation Pipeline Integration, Enterprise Jenkins Server Setup, Jenkins CI/CD Orchestration",
  },
  {
    number: "07",
    title: "Native Kubernetes (K8s) Orchestration",
    description:
      "Automated Helm Deployments, Custom Resource Definition (CRD) Management & Multi-Cluster Sync",
    keywords:
      "Kubernetes Cluster Integration, K8s Container Deployment Automation, Helm Chart Pipeline Integration",
  },
  {
    number: "08",
    title: "Docker Containerization Integration",
    description:
      "Automated Multi-Stage Image Builds, Vulnerability Scanning & Private Registry Distribution",
    keywords:
      "Docker Container Integration, Automated Docker Image Pipelines, Container Registry Management",
  },
];

export default function MultiCloudDevOpsToolIntegrations() {
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
            Multi-Cloud & Enterprise CI/CD Tool Integrations
          </Text>
        </div>

        {/* Responsive Grid layout (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {CLOUD_TOOL_INTEGRATIONS.map((item, index) => (
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
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
