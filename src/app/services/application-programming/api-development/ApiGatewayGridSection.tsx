// File Name: ApiGatewayGridSection.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Terminal, Cpu, Network } from "lucide-react";

export default function ApiGatewayGridSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/10">
      {/* Background Dark Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-6xl min-h-auto sm:min-h-75 flex items-center justify-center">
        {/* Fully responsive layout: stacked vertically on mobile, horizontal on desktop */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-16">
          
          {/* Node 1: GraphQL Request */}
          <div className="w-full sm:w-auto flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-gray-300">
              <Terminal className="h-4 w-4" />
            </div>
            <Text
              variant="body"
              className="text-white! text-xs sm:text-sm font-semibold tracking-tight"
            >
              GraphQL Request
            </Text>
          </div>

          {/* Node 2: Gateway Core Sys (Center Highlighted Node) */}
          <div className="w-full sm:w-auto flex items-center gap-4 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#121212] backdrop-blur-md border border-white/15 shadow-2xl shadow-black/60 transform hover:-translate-y-1 transition-all duration-300 ring-2 ring-[#00D094]/30">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#00D094]/10 text-[#00D094]">
              <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex flex-col">
              <Text
                variant="h4"
                className="text-white! text-sm sm:text-base font-bold tracking-tight"
              >
                gateway_core.sys
              </Text>
              <Text
                variant="body"
                className="text-[#00D094]! text-[11px] sm:text-xs font-medium"
              >
                Status: Online
              </Text>
            </div>
          </div>

          {/* Node 3: Microservice Sync */}
          <div className="w-full sm:w-auto flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#00D094]">
              <Network className="h-4 w-4" />
            </div>
            <Text
              variant="body"
              className="text-white! text-xs sm:text-sm font-semibold tracking-tight"
            >
              Microservice Sync
            </Text>
          </div>

        </div>
      </div>
    </section>
  );
}