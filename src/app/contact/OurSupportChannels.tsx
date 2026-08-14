// File Name: OurSupportChannels.tsx

import React from "react";
import Text from "@/components/ui/Text";
import {
  Headphones,
  Wrench,
  PackageSearch,
  Briefcase,
  Users,
  Handshake,
} from "lucide-react";

const SUPPORT_CHANNELS = [
  {
    title: "Consultation",
    icon: Headphones,
    description: "Connect with our experts for custom project guidance.",
  },
  {
    title: "Tech Support",
    icon: Wrench,
    description: "24/7 assistance for infrastructure & deployment.",
  },
  {
    title: "Product Inquiry",
    icon: PackageSearch,
    description: "Get detailed information about our enterprise solutions.",
  },
  {
    title: "Enterprise Sales",
    icon: Briefcase,
    description: "Talk to our sales team for tailored packages.",
  },
  {
    title: "Customer Success",
    icon: Users,
    description: "Dedicated management for your ongoing growth.",
  },
  {
    title: "Strategic Partnership",
    icon: Handshake,
    description: "Join our network and explore collaboration opportunities.",
  },
];

export default function OurSupportChannels() {
  return (
    <section className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <Text
            variant="h3"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Our Support Channels
          </Text>
        </div>

        {/* Support Channels Grid matching the reference image layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUPPORT_CHANNELS.map((channel, index) => {
            const IconComponent = channel.icon;
            return (
              <div
                key={index}
                className="relative bg-[#121212] rounded-2xl p-5 border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group flex items-center gap-4 shadow-lg"
              >
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-[#00D094]/10 border border-[#00D094]/20 flex items-center justify-center text-[#00D094] shrink-0 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content */}
                <div>
                  <Text
                    variant="h5"
                    className="text-white! text-sm sm:text-base font-bold tracking-tight group-hover:text-[#00D094] transition-colors"
                  >
                    {channel.title}
                  </Text>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    {channel.description}
                  </p>
                </div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
