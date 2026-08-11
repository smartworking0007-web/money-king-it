// File Name: PredictiveAnalyticsFeatures.tsx

import React from "react";
import Text from "@/components/ui/Text";
import {
  BrainCircuit,
  LayoutDashboard,
  Database,
  LineChart,
} from "lucide-react";

const PREDICTIVE_FEATURES = [
  {
    title: "AI-Driven Models",
    description:
      "Custom AI-driven algorithms that continuously learn, adapt, and deliver precise forecasts as your business evolves.",
    icon: BrainCircuit,
  },
  {
    title: "Real-Time Dashboards",
    description:
      "Intuitive dashboards that visualize key metrics and insights, transforming complex information into actionable insights.",
    icon: LayoutDashboard,
  },
  {
    title: "BI Integration",
    description:
      "Connect with leading business intelligence tools like Tableau, Power BI, and custom platforms effortlessly.",
    icon: Database,
  },
  {
    title: "Automated Insights",
    description:
      "Generate comprehensive reports in moments, accelerating your decision-making process.",
    icon: LineChart,
  },
];

export default function PredictiveAnalyticsFeatures() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <Text
            variant="h2"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-3"
          >
            Core Features of Predictive Analytics
          </Text>
          <div className="w-10 h-1 bg-[#00D094] mx-auto rounded-full mb-4"></div>
          <Text
            variant="body"
            className="text-gray-300! text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto"
          >
            Predictive analytics isn&apos;t just about looking at data;
            it&apos;s about understanding it deeply. With features like
            AI-driven models and real-time insights, we help businesses to make
            smart decisions that drive success.
          </Text>
        </div>

        {/* Responsive Grid layout with smaller, compact boxes and smaller typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PREDICTIVE_FEATURES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-sm border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group shadow-lg"
              >
                {/* Icon Container */}
                <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300">
                  <IconComponent
                    className="h-5 w-5 text-[#00D094]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Card Title */}
                <Text
                  variant="h4"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-2 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {item.title}
                </Text>

                {/* Description */}
                <Text
                  variant="body"
                  className="text-gray-400! text-[11px] sm:text-xs leading-relaxed"
                >
                  {item.description}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
