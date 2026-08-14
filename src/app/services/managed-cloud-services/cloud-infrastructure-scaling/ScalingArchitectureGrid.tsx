// File Name: ScalingArchitectureGrid.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const SCALING_STEPS = [
  {
    number: "01",
    title: "Assessment",
    description:
      "Evaluating current cloud resource usage, traffic spikes, and bottleneck limits.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Designing horizontal and vertical auto-scaling infrastructure roadmaps.",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "Configuring metric thresholds, CPU/Memory triggers, and failover policies.",
  },
  {
    number: "04",
    title: "Configuration",
    description:
      "Setting up load balancers, container orchestration, and serverless clusters.",
  },
  {
    number: "05",
    title: "Load Testing",
    description:
      "Simulating high-traffic volume to verify auto-scaling response and stability.",
  },
  {
    number: "06",
    title: "Monitoring",
    description:
      "Tracking real-time infrastructure performance, node health, and latency.",
  },
  {
    number: "07",
    title: "Deployment",
    description:
      "Launching production-grade auto-scaling policies securely across cloud environments.",
  },
  {
    number: "08",
    title: "Optimization",
    description:
      "Fine-tuning resource allocation rules to minimize cost and maximize uptime.",
  },
];

export default function ScalingArchitectureGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/services/2.png"
          alt="scaling architecture background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Balanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <Text
            variant="h4"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          >
            Scaling Architecture
          </Text>
        </div>

        {/* Responsive Grid layout matching the 8-step reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {SCALING_STEPS.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#121212]/80 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Step Number & Title */}
                <span className="text-xs font-mono font-bold text-[#00D094] mb-1.5 tracking-wider block">
                  {step.number}.
                </span>

                <Text
                  variant="h5"
                  className="text-white! text-base sm:text-lg font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {step.title}
                </Text>

                <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
