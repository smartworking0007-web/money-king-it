// File Name: EnterpriseFlutterCapabilities.tsx

import React from "react";
import { Layers, Zap, Bell, RefreshCw, CreditCard, Cloud } from "lucide-react";
import Text from "@/components/ui/Text";

const FLUTTER_FEATURES = [
  {
    icon: Layers,
    title: "Single Base",
    desc: "Unified Codebase for iOS, Android, Web & Desktop",
    keywords:
      "Single Codebase Development, Flutter Cross-Platform Architecture, Multi-Platform Deployment",
  },
  {
    icon: Zap,
    title: "Native Perf",
    desc: "60fps/120fps Native Compiled Rendering via Impeller",
    keywords:
      "Native Performance Flutter, Impeller Rendering Engine, High FPS Mobile UI",
  },
  {
    icon: Bell,
    title: "Push Notifs",
    desc: "Targeted Cloud Notifications via Firebase FCM",
    keywords:
      "Firebase Push Notifications, Targeted In-App Messaging, Real-Time Alerts",
  },
  {
    icon: RefreshCw,
    title: "Offline Sync",
    desc: "Local Hive/Isar Caching with Automatic Re-Sync",
    keywords:
      "Offline-First Flutter Sync, Local Data Persistence, Background Data Synchronization",
  },
  {
    icon: CreditCard,
    title: "Pay Gateway",
    desc: "Secure Payment Processor & Checkout SDK Integration",
    keywords:
      "Payment Gateway Integration, Stripe & Razorpay Flutter SDK, PCI-DSS Compliant Transactions",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    desc: "Real-Time Cloud Storage & Database Integration",
    keywords:
      "Cloud Data Synchronization, Firebase & AWS Integration, Real-Time Data Streaming",
  },
];

export default function EnterpriseFlutterCapabilities() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Main Container */}
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <Text
            variant="h3"
            className="text-white! tracking-tight text-xl sm:text-2xl md:text-3xl font-extrabold"
          >
            Enterprise Flutter Features
          </Text>
          <div className="w-8 h-0.5 bg-[#00D094] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Timeline Grid Container */}
        <div className="relative">
          {/* Desktop Connecting Dashed Line */}
          <div className="hidden lg:block absolute top-5 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-white/20 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
            {FLUTTER_FEATURES.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Node Indicator with Glow */}
                <div className="relative mb-4 hidden sm:flex items-center justify-center">
                  <div className="absolute h-6 w-6 rounded-full bg-[#00D094]/25 blur-sm group-hover:bg-[#00D094]/50 transition-all duration-300" />
                  <div className="relative h-5 w-5 rounded-full bg-[#0a0a0a] border-2 border-[#00D094] flex items-center justify-center shadow-md">
                    <div className="h-1 w-1 rounded-full bg-white" />
                  </div>
                </div>

                {/* Compact Card Box */}
                <div className="w-full flex flex-col rounded-xl border border-white/10 bg-[#121212] p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00D094]/40 hover:bg-[#161616] shadow-md h-full justify-between">
                  <div>
                    {/* Feature Icon */}
                    <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#00D094]/10 border border-[#00D094]/20 text-[#00D094]">
                      <item.icon className="h-4 w-4" strokeWidth={2} />
                    </div>

                    <Text
                      variant="h3"
                      className="text-white! mb-1.5 tracking-tight leading-snug text-sm sm:text-base font-bold"
                    >
                      {item.title}
                    </Text>

                    <Text
                      variant="body"
                      className="text-gray-300 text-[11px] sm:text-xs font-normal leading-relaxed mb-3"
                    >
                      {item.desc}
                    </Text>
                  </div>

                  {/* GEO Keywords Tag */}
                  <div className="text-[10px] text-[#00D094]/80 font-mono bg-black/40 px-2 py-1 rounded border border-white/5 leading-snug mt-auto">
                    {item.keywords}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
