// File Name: ThreatAnalysisAndIntelligenceManagement.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const THREAT_INTELLIGENCE_STEPS = [
  {
    number: "01",
    title: "Misconfiguration",
    description: "Cloud & Server Hardening Flaw Detection",
    keywords:
      "Cloud Misconfiguration Detection, CSPM Compliance Audits, Security Baseline Hardening",
  },
  {
    number: "02",
    title: "Access Risk",
    description:
      "Privileged Account Risk & Over-Permissioned Identity Detection",
    keywords:
      "Identity Access Risk Assessment, Privilege Escalation Detection, IAM Policy Over-Permissioning",
  },
  {
    number: "03",
    title: "Data Exposure",
    description: "Sensitive Data Leakage & Public Bucket Exposure Monitoring",
    keywords:
      "Data Leak Prevention (DLP), PVI & Financial Data Exposure, Public S3 Bucket Auditing",
  },
  {
    number: "04",
    title: "Insider Threat",
    description:
      "Behavioral Anomaly Detection & Compromised Account Monitoring",
    keywords:
      "User and Entity Behavior Analytics (UEBA), Insider Threat Mitigation, Data Exfiltration Prevention",
  },
  {
    number: "05",
    title: "Vulnerability",
    description:
      "Continuous Software Vulnerability Scanning & Exploit Tracking",
    keywords:
      "Vulnerability Management Program, CVE Threat Intelligence, Automated Vulnerability Assessment",
  },
  {
    number: "06",
    title: "Intelligence",
    description: "Real-Time Actionable Threat Feeds & Dark Web Monitoring",
    keywords:
      "Cyber Threat Intelligence (CTI), Dark Web Monitoring Services, Actionable IOC Feeds",
  },
];

export default function ThreatAnalysisAndIntelligenceManagement() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/cloud/2.png"
          alt="security framework"
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
            Threat Analysis & Intelligence Management
          </Text>
        </div>

        {/* 2x3 Grid layout optimized for mobile, tablet, and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {THREAT_INTELLIGENCE_STEPS.map((step, index) => (
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
