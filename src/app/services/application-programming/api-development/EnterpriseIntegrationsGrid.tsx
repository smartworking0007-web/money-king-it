// File Name: EnterpriseIntegrationsGrid.tsx

"use client";
import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import {
  Code2,
  CreditCard,
  ShieldCheck,
  Database,
  Cpu,
  MessageSquare,
} from "lucide-react";

const INTEGRATIONS_DATA = [
  {
    title: "Stripe Custom Engine",
    desc: "Financial Payments Layer",
    icon: CreditCard,
  },
  {
    title: "Razorpay Pro Sync",
    desc: "Instant Webhooks Rails",
    icon: Code2,
  },
  {
    title: "Salesforce API Cluster",
    desc: "Enterprise CRM Sync",
    icon: ShieldCheck,
  },
  {
    title: "Zoho Workspace Module",
    desc: "Data Process Matrix",
    icon: Database,
  },
  {
    title: "HubSpot Logic Node",
    desc: "Marketing Automation Link",
    icon: Cpu,
  },
  {
    title: "WhatsApp Business V4",
    desc: "Asynchronous Notification Engine",
    icon: MessageSquare,
  },
];

export default function EnterpriseIntegrationsGrid() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/api/2.png"
          alt="Connected Enterprise Integrations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay for perfect contrast & readability */}
        <div className="absolute inset-0 bg-black/80 sm:bg-black/75 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
          >
            Connected Enterprise Integrations
          </Text>
        </div>

        {/* Responsive Grid Layout (1 col on mobile, 2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {INTEGRATIONS_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group shadow-lg"
              >
                {/* Left Icon / Badge */}
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 text-gray-300 group-hover:text-[#00D094] transition-all duration-300">
                  <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                </div>

                {/* Center Content */}
                <div className="flex flex-col grow mx-4 overflow-hidden">
                  <Text
                    variant="h5"
                    className="text-white! text-xs sm:text-sm font-bold tracking-tight truncate group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>
                  <Text
                    variant="body"
                    className="text-zinc-400! text-[10px] sm:text-xs tracking-tight truncate"
                  >
                    {item.desc}
                  </Text>
                </div>

                {/* Right Action Arrow Indicator */}
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:border-[#00D094]/40 group-hover:text-[#00D094] transition-all duration-300">
                  <span className="text-xs font-bold">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
