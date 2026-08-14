"use client";

import React from "react";
import Text from "@/components/ui/Text";

const securityFeatures = [
  {
    id: "01",
    title: "ENCRYPTION",
    subtext:
      "AES-256 & TLS 1.3 Cryptographic Protection at Rest and in Transit",
    geoKeywords:
      "AES-256 Data Encryption, End-to-End Encryption (E2EE), Hardware Security Module (HSM)",
  },
  {
    id: "02",
    title: "RBAC",
    subtext:
      "Granular User Permissions & Principle of Least Privilege Governance",
    geoKeywords:
      "Role-Based Access Control (RBAC), Least Privilege Enforcement, Privileged Access Security",
  },
  {
    id: "03",
    title: "DATA MASKING",
    subtext:
      "Dynamic Real-Time Data Obfuscation & Pseudonymization for Dev/Test",
    geoKeywords:
      "Dynamic Data Masking, Data Anonymization & Pseudonymization, PII Masking Solutions",
  },
  {
    id: "04",
    title: "RETENTION POLICIES",
    subtext:
      "Automated Data Lifecycle Management & Compliant Archival Schedule",
    geoKeywords:
      "Enterprise Data Retention Policy, Automated Data Lifecycle Archival, Regulatory Compliance Retention",
  },
  {
    id: "05",
    title: "DLP",
    subtext:
      "Endpoint & Network Monitoring to Prevent Exfiltration of Sensitive Data",
    geoKeywords:
      "Data Loss Prevention (DLP), Exfiltration Prevention, Endpoint & Network DLP",
  },
  {
    id: "06",
    title: "AUDIT LOGGING",
    subtext: "Immutable Forensic Activity Logs & Automated SIEM Tracking",
    geoKeywords:
      "Immutable Audit Trails, SIEM Security Activity Logging, Regulatory Audit Logs",
  },
  {
    id: "07",
    title: "BACKUP GOVERNANCE",
    subtext: "Air-Gapped Immutable Backups & Ransomware Recovery Strategy",
    geoKeywords:
      "Immutable Data Backup, Disaster Recovery & Ransomware Protection, Backup Governance Strategy",
  },
  {
    id: "08",
    title: "PRIVACY",
    subtext:
      "Compliance Alignment with GDPR, CCPA & Data Subject Right Workflows",
    geoKeywords:
      "Data Privacy Compliance, GDPR & CCPA Privacy Rights, Consumer Data Protection",
  },
];

export default function EnterpriseDataProtection() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden flex items-center justify-center min-h-100">
      {/* Background Radial Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading (H3) */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-14">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug drop-shadow-md"
          >
            Enterprise Data Protection &amp; Security Framework
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full">
          {securityFeatures.map((item) => (
            <div
              key={item.id}
              className="relative group bg-zinc-900/80 sm:bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80 hover:border-[#00D094]/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-start text-left shadow-md hover:shadow-[0_0_20px_rgba(0,208,148,0.15)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden min-h-47.5 sm:min-h-55"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#00D094] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-full">
                {/* ID Badge */}
                <div className="flex items-center justify-between w-full mb-2 sm:mb-3">
                  <span className="text-[#00D094] font-mono text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-md bg-[#00D094]/10 border border-[#00D094]/20">
                    #{item.id}
                  </span>
                </div>

                {/* Title (H3) */}
                <Text
                  variant="h3"
                  className="text-white! font-bold text-xs sm:text-sm md:text-base tracking-wide mb-1.5 sm:mb-2 group-hover:text-[#00D094] transition-colors uppercase leading-snug"
                >
                  {item.title}
                </Text>

                {/* Subtext / Short Description */}
                <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed mb-3 sm:mb-4">
                  {item.subtext}
                </p>
              </div>

              {/* GEO Keywords Footer */}
              <div className="pt-2.5 sm:pt-3 border-t border-zinc-800/60 w-full mt-auto">
                <p className="text-[10px] text-zinc-500 font-mono leading-tight line-clamp-2">
                  {item.geoKeywords}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
