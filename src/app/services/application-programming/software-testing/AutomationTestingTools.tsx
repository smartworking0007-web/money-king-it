import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { Globe, Terminal, Cpu, Smartphone, Gauge, Send } from "lucide-react";

const TESTING_TOOLS = [
  {
    title: "Selenium",
    description: "Web Browser Automation Framework",
    icon: Globe,
  },
  {
    title: "Cypress",
    description: "Frontend E2E Engine",
    icon: Terminal,
  },
  {
    title: "Playwright",
    description: "Cross-Browser Node Hub",
    icon: Cpu,
  },
  {
    title: "Appium",
    description: "Mobile Runtime Validation",
    icon: Smartphone,
  },
  {
    title: "JMeter",
    description: "API Performance Simulator",
    icon: Gauge,
  },
  {
    title: "Postman",
    description: "Payload Protocol Testing",
    icon: Send,
  },
];

export default function AutomationTestingTools() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 md:py-16 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Image using Next.js Image component with optimized mobile response */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/insights/3.png"
          alt="Heatwave in IT"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 px-2">
          <Text
            variant="h2"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2"
          >
            Automation Testing Tools
          </Text>
          <div className="w-10 h-0.5 bg-[#00D094] mx-auto rounded-full mt-3"></div>
        </div>

        {/* Responsive Grid layout optimized for mobile and desktop screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {TESTING_TOOLS.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={index}
                className="flex flex-row items-center justify-between p-3.5 sm:p-5 rounded-lg bg-[#121212]/95 backdrop-blur-sm border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group gap-3 sm:gap-4 shadow-lg"
              >
                {/* Left Side: Title & Description */}
                <div className="flex flex-col flex-1 min-w-0 pr-1">
                  <Text
                    variant="h3"
                    className="text-white! text-sm sm:text-base md:text-lg font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300 truncate"
                  >
                    {tool.title}
                  </Text>

                  <Text
                    variant="body"
                    className="text-gray-400! text-[11px] sm:text-xs leading-snug line-clamp-2"
                  >
                    {tool.description}
                  </Text>
                </div>

                {/* Right Side: Icon Badge */}
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300">
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-[#00D094]" strokeWidth={1.5} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}