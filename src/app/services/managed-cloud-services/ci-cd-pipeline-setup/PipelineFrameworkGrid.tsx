// File Name: PipelineFrameworkGrid.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const PIPELINE_STEPS = [
  {
    number: "01",
    title: "Code Commit",
    description:
      "Tracking source code changes, branch management, and triggering automated hooks.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Compiling code, resolving dependencies, and generating artifacts.",
  },
  {
    number: "03",
    title: "Quality Check",
    description:
      "Running linting, formatting audits, and code coverage reviews.",
  },
  {
    number: "04",
    title: "Security",
    description:
      "Executing automated SAST/DAST scanning and vulnerability testing.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Validating functional integrity through unit, integration, and E2E suites.",
  },
  {
    number: "06",
    title: "Approval",
    description:
      "Review gates, automated sign-offs, and deployment policy verification.",
  },
  {
    number: "07",
    title: "Release",
    description:
      "Deploying production artifacts using blue-green or canary strategies.",
  },
  {
    number: "08",
    title: "Monitoring",
    description:
      "Tracking live post-deployment health metrics, errors, and telemetry.",
  },
];

export default function PipelineFrameworkGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/services/4.png"
          alt="pipeline framework background"
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
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          >
            Pipeline Framework
          </Text>
        </div>

        {/* Responsive Grid layout matching the 8-step reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {PIPELINE_STEPS.map((step, index) => (
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
                  variant="h3"
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
