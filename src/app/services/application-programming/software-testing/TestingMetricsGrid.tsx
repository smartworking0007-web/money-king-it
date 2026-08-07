// src/app/services/application-programming/software-testing/TestingMetricsGrid.tsx

import React from "react";
import { Bug, CheckSquare, Heart, Clock } from "lucide-react";

const METRICS_DATA = [
  {
    icon: Bug,
    value: "99%",
    label: "BUG DETECTION RATE",
  },
  {
    icon: CheckSquare,
    value: "100+",
    label: "PROJECTS TESTED",
  },
  {
    icon: Heart,
    value: "50+",
    label: "HAPPY CLIENTS",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "SUPPORT SLA",
  },
];

export default function TestingMetricsGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-20 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center">
          {METRICS_DATA.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-6 relative ${
                index !== 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <item.icon className="h-6 w-6 text-[#a3e635]" strokeWidth={2} />
              </div>

              <h3 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                {item.value}
              </h3>

              <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
