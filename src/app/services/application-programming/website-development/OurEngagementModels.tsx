import React from "react";
import Text from "@/components/ui/Text";
import { Users, UserPlus, Sliders } from "lucide-react";

/**
 * OurEngagementModels.tsx
 * Compact, responsive engagement models section with streamlined cards,
 * custom typography, and removed commitment and Know More links.
 */

const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Teams / Pods",
    subtitle: "Most Popular for Scaling Agencies",
    icon: Users,
    bestFor: "Agencies with steady, high-volume client work.",
    whatItIs:
      "A full-time, dedicated team that works exclusively for your agency.",
    whyChoose: ["Long-term delivery stability", "Strong process ownership"],
  },
  {
    title: "Staff Augmentation",
    subtitle: "Fastest Way to Add Capacity",
    icon: UserPlus,
    bestFor: "Short-term skill gaps or urgent capacity needs.",
    whatItIs: "Specialists embedded directly into your existing team.",
    whyChoose: ["Quick onboarding", "Easy to scale up or down"],
  },
  {
    title: "Other Engagement Options",
    subtitle: "Flexible Ways to Start or Adapt",
    icon: Sliders,
    options: [
      {
        name: "Monthly Retainer",
        desc: "Predictable monthly cost with flexible task allocation for changing workloads.",
      },
      {
        name: "Project-Based",
        desc: "Fixed scope, timelines, and deliverables for clearly defined initiatives.",
      },
      {
        name: "Hybrid",
        desc: "A tailored mix of two or more models for evolving agency needs.",
      },
    ],
  },
];

export default function OurEngagementModels() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-12 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Section Header & Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Text
            variant="h2"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Our Engagement Models
          </Text>
          <Text
            variant="body"
            className="text-zinc-400! text-xs sm:text-sm leading-relaxed"
          >
            All engagement models are fully white-label, NDA-backed, and built
            to operate inside your workflows with complete accountability.
          </Text>
        </div>

        {/* Engagement Cards Grid (3 Columns, Compact) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl p-5 sm:p-6 bg-zinc-900/85 border border-white/10 hover:border-[#00D094]/40 transition-all duration-300 shadow-lg"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D094]/10 border border-[#00D094]/20 text-[#00D094]">
                      <IconComponent className="h-4 w-4" strokeWidth={2.2} />
                    </div>
                    <Text
                      variant="h5"
                      className="text-white! text-base font-bold tracking-tight"
                    >
                      {model.title}
                    </Text>
                  </div>

                  <span className="inline-block text-[10px] font-semibold text-[#00D094] mb-4 uppercase tracking-wider">
                    {model.subtitle}
                  </span>

                  {/* Conditional Rendering for Options vs Details */}
                  {model.options ? (
                    <div className="space-y-3.5">
                      {model.options.map((opt, optIdx) => (
                        <div
                          key={optIdx}
                          className="border-l-2 border-[#00D094]/30 pl-2.5 space-y-0.5"
                        >
                          <Text
                            variant="h5"
                            className="text-white text-xs font-bold"
                          >
                            {opt.name}
                          </Text>
                          <Text
                            variant="body"
                            className="text-zinc-400 text-[11px] leading-tight"
                          >
                            {opt.desc}
                          </Text>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3 text-xs text-zinc-400">
                      <div>
                        <strong className="text-white">Best for:</strong>{" "}
                        {model.bestFor}
                      </div>
                      <div>
                        <strong className="text-white">What it is:</strong>{" "}
                        {model.whatItIs}
                      </div>
                      <div>
                        <strong className="text-white block mb-1">
                          Why agencies choose:
                        </strong>
                        <ul className="space-y-1 pl-3.5 list-disc">
                          {model.whyChoose?.map((point, pIdx) => (
                            <li key={pIdx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
