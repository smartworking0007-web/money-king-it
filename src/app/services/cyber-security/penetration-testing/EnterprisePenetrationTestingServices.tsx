// File Name: EnterprisePenetrationTestingServices.tsx

import React from "react";
import Text from "@/components/ui/Text";
import {
  Globe,
  Server,
  Cloud,
  Smartphone,
  Cpu,
  ShieldAlert,
} from "lucide-react";

const PEN_TESTING_SERVICES = [
  {
    title: "Web App Security",
    description: "OWASP Top 10 Vulnerability Assessment & Exploitation",
    keywords:
      "Web Application Penetration Testing, OWASP Top 10 Security Audit, Cross-Site Scripting (XSS) & SQLi Defense",
    icon: Globe,
  },
  {
    title: "Network Testing",
    description: "Internal & External Infrastructure Penetration Audits",
    keywords:
      "Network Penetration Testing, Firewall & Router Vulnerability Assessment, Active Directory Security Audit",
    icon: Server,
  },
  {
    title: "Cloud Testing",
    description: "AWS, Azure & GCP Configuration & Storage Pen-Testing",
    keywords:
      "Cloud Infrastructure Pen-Testing, AWS Security Assessment, IAM Misconfiguration Testing",
    icon: Cloud,
  },
  {
    title: "Mobile Security",
    description: "iOS & Android Static & Dynamic App Analysis (MASVS)",
    keywords:
      "Mobile App Penetration Testing, OWASP MASVS Audit, Android & iOS Reverse Engineering",
    icon: Smartphone,
  },
  {
    title: "API Security",
    description: "REST, GraphQL & gRPC Endpoint Vulnerability Testing",
    keywords:
      "API Penetration Testing, OWASP API Top 10 Security, REST & GraphQL Vulnerability Audit",
    icon: Cpu,
  },
  {
    title: "Red Team",
    description: "Advanced Adversarial Simulation & Social Engineering",
    keywords:
      "Red Team Adversarial Operations, Simulated Cyber Attack Services, Social Engineering & Spear Phishing",
    icon: ShieldAlert,
  },
];

export default function EnterprisePenetrationTestingServices() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-[#00D094]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00D094]/10 border border-[#00D094]/30 text-[#00D094] text-[9px] font-mono font-semibold tracking-widest uppercase mb-2 shadow-sm">
            SECURITY ASSESSMENTS
          </div>

          <Text
            variant="h3"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Penetration Testing Services
          </Text>

          <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed max-w-md mx-auto">
            Proactive security audits and adversarial simulations to uncover
            critical vulnerabilities before malicious actors do.
          </p>

          <div className="w-8 h-0.5 bg-[#00D094] mx-auto mt-2 rounded-full" />
        </div>

        {/* Responsive Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PEN_TESTING_SERVICES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
              >
                <div>
                  {/* Card Top Icon & Indicator */}
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00D094] group-hover:bg-[#00D094]/10 transition-all">
                      <IconComponent className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:rotate-45">
                      <span className="text-[8px] font-bold">↗</span>
                    </div>
                  </div>

                  {/* Card Title (H3) */}
                  <Text
                    variant="h3"
                    className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1.5 group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>

                  {/* Subtext / Short Description */}
                  <Text
                    variant="body"
                    className="text-zinc-300 text-[11px] sm:text-xs font-normal leading-relaxed mb-3"
                  >
                    {item.description}
                  </Text>
                </div>

                {/* GEO Keywords Tag */}
                <div className="text-[10px] text-[#00D094]/80 font-mono bg-black/40 px-2 py-1 rounded border border-white/5 leading-snug">
                  {item.keywords}
                </div>

                {/* Ambient Motion Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
