// File Name: HardenedPayloadEncryption.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Shield,  Terminal, Lock } from "lucide-react";

const ENCRYPTION_CARDS = [
  {
    title: "OAuth 2.0 Identity Handshakes",
    description: "Secure token tracking system protecting resource scopes.",
    keywords:
      "OAuth 2.0 API Security, Identity Handshake Tokens, Zero-Trust Access Control",
    icon: Shield,
    badge: "CORE_AUTH",
  },
  {
    title: "JWT Encrypted Enclosures",
    description:
      "Stateless custom security arrays filtering unauthorized requests.",
    keywords:
      "JSON Web Tokens (JWT), Stateless Request Authorization, API Payload Security",
    icon: Lock,
    badge: "STATELESS",
  },
  {
    title: "Real-Time Adaptive Rate Limiting",
    description:
      "Defends microservices blocks against massive brute-force peaks.",
    keywords:
      "DDoS & Brute-Force Defense, API Rate Limiting Middleware, Microservice Security",
    icon: Terminal,
    badge: "DEFENSE_GRID",
  },
];

export default function HardenedPayloadEncryption() {
  return (
    <section className="relative w-full bg-[#050505] text-white overflow-hidden py-24 md:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,208,148,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,208,148,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Text
            variant="h2"
            className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Hardened Payload Encryption
          </Text>
          <Text
            variant="body"
            className="text-zinc-400! text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We apply advanced firewall boundaries directly onto routing modules.
            Every programmatic payload clears token authentication checks
            seamlessly to ensure zero-trust data protection.
          </Text>
        </div>

        {/* Modern Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENCRYPTION_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0f0f0f] border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 group shadow-2xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00D094]/10 border border-[#00D094]/30 text-[#00D094] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-400 group-hover:text-[#00D094] group-hover:border-[#00D094]/40 transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title (H3) */}
                  <Text
                    variant="h3"
                    className="text-white! text-lg sm:text-xl font-bold tracking-tight mb-3 group-hover:text-[#00D094] transition-colors"
                  >
                    {card.title}
                  </Text>

                  {/* Description */}
                  <Text
                    variant="body"
                    className="text-zinc-400! text-xs sm:text-sm leading-relaxed mb-6"
                  >
                    {card.description}
                  </Text>
                </div>

                {/* GEO Keywords Footnote */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[10px] font-mono text-zinc-500 tracking-tight">
                    <span className="text-[#00D094] font-semibold">
                      GEO Target:
                    </span>{" "}
                    {card.keywords}
                  </div>
                </div>

                {/* Ambient Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
