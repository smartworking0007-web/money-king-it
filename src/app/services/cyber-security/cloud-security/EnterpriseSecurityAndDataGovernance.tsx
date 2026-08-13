// File Name: EnterpriseSecurityAndDataGovernance.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const GOVERNANCE_STEPS = [
  {
    number: "01",
    title: "IAM Governance",
    description:
      "Role-Based Privilege Oversight & Lifecycle Identity Access Control",
    keywords:
      "Identity and Access Management Governance, Role-Based Access Control (RBAC), Privileged Identity Management",
  },
  {
    number: "02",
    title: "Data Policies",
    description:
      "Data Classification, Retention Policies & Regulatory Privacy Controls",
    keywords:
      "Data Governance Framework, Enterprise Data Retention Policy, Data Lifecycle Management",
  },
  {
    number: "03",
    title: "Encryption",
    description: "End-to-End AES-256 Data Protection at Rest and in Transit",
    keywords:
      "AES-256 Data Encryption, TLS 1.3 Transport Security, Hardware Security Module (HSM)",
  },
  {
    number: "04",
    title: "Network Controls",
    description:
      "Micro-Segmentation, Next-Gen Firewalls & Perimeter Security Rules",
    keywords:
      "Network Perimeter Controls, Virtual Private Cloud Security, Micro-Segmentation Policies",
  },
  {
    number: "05",
    title: "Audit Logs",
    description:
      "Immutable Event Logging, SIEM Integration & Forensics Tracking",
    keywords:
      "Immutable Audit Logging, SIEM Security Log Analysis, Regulatory Compliance Audit Trail",
  },
  {
    number: "06",
    title: "Automation",
    description: "Continuous Compliance Monitoring & Policy Enforcement Engine",
    keywords:
      "Automated Compliance Monitoring, Security Policy as Code, Continuous Security Auditing",
  },
];

export default function EnterpriseSecurityAndDataGovernance() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/cloud/2.png"
          alt="security data governance background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Dark Overlay Gradient for text and box clarity */}
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/80 to-black/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Security & Data Governance
          </Text>
        </div>

        {/* 2x3 Grid layout optimized for mobile, tablet, and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {GOVERNANCE_STEPS.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#121212]/85 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Step Number */}
                <span className="text-xs font-mono font-bold text-[#00D094] mb-1.5 sm:mb-2 tracking-wider block">
                  {step.number}
                </span>

                {/* Step Title (H3) */}
                <Text
                  variant="h3"
                  className="text-white! text-base sm:text-lg font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {step.title}
                </Text>

                {/* Subtext / Short Description */}
                <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed mb-3">
                  {step.description}
                </p>
              </div>

              {/* GEO Keywords Tag */}
              <div className="text-[10px] text-[#00D094]/80 font-mono bg-black/40 px-2 py-1 rounded border border-white/5 leading-snug">
                {step.keywords}
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
