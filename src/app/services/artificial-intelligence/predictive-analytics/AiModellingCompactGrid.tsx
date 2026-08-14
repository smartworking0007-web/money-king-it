// File Name: AiModellingCompactGrid.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const AI_MODELLING_SOLUTIONS = [
  {
    number: "01",
    title: "Predictive Machine Learning",
    description: "Supervised & Unsupervised Learning for Predictive Analytics",
  },
  {
    number: "02",
    title: "Deep Learning & Neural Networks",
    description: "Multi-Layered ANNs/CNNs/RNNs for Unstructured Data",
  },
  {
    number: "03",
    title: "Time Series Forecasting",
    description: "Sequential Data Modeling & Predictive Trend Projections",
  },
  {
    number: "04",
    title: "Pattern Recognition",
    description: "Automated Signal Processing & Complex Anomaly Detection",
  },
  {
    number: "05",
    title: "Custom Algorithms",
    description: "Domain Logic Processing & Decision Tree Architectures",
  },
  {
    number: "06",
    title: "Behavioral AI",
    description: "Dynamic User Intent Modeling & Entity Profiling",
  },
  {
    number: "07",
    title: "Data Pipelines & MLOps",
    description: "ETL Ingestion & Scalable Model Training Workflows",
  },
  {
    number: "08",
    title: "Mathematical Optimization",
    description: "Resource Allocation & Process Efficiency Optimization",
  },
];

export default function AiModellingCompactGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/ai/2.png"
          alt="enterprise ai modelling background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Balanced Dark Gradient Overlay */}
        <div className="absolute inset-0bg-linear-to-b from-black/50 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise AI Modelling & Predictive Machine Learning
          </Text>
        </div>

        {/* Responsive Grid layout with compact boxes and concise text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {AI_MODELLING_SOLUTIONS.map((solution, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Solution Number */}
                <span className="text-[11px] font-mono font-bold text-[#00D094] mb-1 tracking-wider block">
                  {solution.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h5"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {solution.title}
                </Text>

                {/* Short Description */}
                <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
