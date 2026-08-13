import React from "react";
 
export default function SecurityServicesGrid() {
  const services = [
    {
      title: "Incident Response",
      description: "Rapid Cyber Incident Mitigation & Breach Containment",
      geoKeywords:
        "Cyber Incident Response Team (CIRT), Emergency Security Response, Breach Containment Services",
    },
    {
      title: "Threat Detection",
      description: "24/7 Continuous SIEM/SOAR Monitoring & Anomaly Detection",
      geoKeywords:
        "Managed Detection and Response (MDR), SIEM & SOAR Analytics, Real-Time Threat Intelligence",
    },
    {
      title: "Auto-Isolation",
      description:
        "Automated Endpoint & Network Quarantine to Prevent Lateral Movement",
      geoKeywords:
        "Automated Threat Quarantine, EDR Endpoint Isolation, Zero Trust Network Containment",
    },
    {
      title: "Malware Response",
      description: "Sandbox Analysis, Ransomware Suppression & Removal",
      geoKeywords:
        "Ransomware Incident Mitigation, Malware Analysis & Triage, Dynamic Sandbox Inspection",
    },
    {
      title: "Digital Forensics",
      description:
        "Deep Forensic Investigation & Root-Cause Attack Reconstruction",
      geoKeywords:
        "Digital Forensics and Incident Response (DFIR), Attack Root Cause Analysis, Memory & Disk Forensics",
    },
    {
      title: "Managed SOC",
      description:
        "Fully Outsourced 24/7/365 Security Monitoring & Expert Defense",
      geoKeywords:
        "SOC as a Service (SOCaaS), 24/7 Managed Security Operations, Co-Managed Cyber Defense",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-14 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Next-Gen Security Operations Center (SOC) Services
          </h2>
          <p className="text-zinc-200 text-xs sm:text-sm max-w-xl">
            Protect your enterprise infrastructure with advanced AI-driven
            monitoring, rapid threat isolation, and expert defense mechanisms.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex flex-col justify-between shadow-lg"
            >
              <div>
                <h3 className="text-white text-base sm:text-lg font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-zinc-100 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-700">
                <span className="text-[10px] font-semibold text-[#00D094] uppercase tracking-wider block mb-0.5">
                  Key Capabilities:
                </span>
                <p className="text-[11px] text-zinc-300 leading-normal">
                  {service.geoKeywords}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
