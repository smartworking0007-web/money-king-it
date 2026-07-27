import React from "react";
import Link from "next/link";
import { Users, UserPlus, Layers } from "lucide-react";
import Text from "@/components/ui/Text";

/**
 * EngagementModelsSection.tsx
 * Fully responsive component built from the reference image, using your custom Text typography component,
 * updated route for 'Know More' pointing to http://localhost:3000/contact,
 * and negative margins to pull the section upward seamlessly on both web and mobile.
 */

const MODELS = [
  {
    icon: Users,
    title: "Dedicated Teams / Pods",
    subtitle: "Most Popular for Scaling Agencies",
    sections: [
      {
        label: "Best for:",
        desc: "Agencies with steady, high-volume client work",
      },
      {
        label: "What it is:",
        desc: "A full-time, dedicated team that works exclusively for your agency",
      },
    ],
    bulletTitle: "Why agencies choose this:",
    bullets: [
      "Long-term delivery stability",
      "In-depth knowledge of your processes",
      "Faster turnaround with strong ownership",
    ],
    commitment: "3–12 months",
    link: "/contact",
  },
  {
    icon: UserPlus,
    title: "Staff Augmentation",
    subtitle: "Fastest Way to Add Capacity",
    sections: [
      {
        label: "Best for:",
        desc: "Short-term skill gaps or urgent capacity needs",
      },
      {
        label: "What it is:",
        desc: "One or more specialists embedded directly into your team",
      },
    ],
    bulletTitle: "Why agencies choose this:",
    bullets: [
      "Quick onboarding",
      "No hiring overhead",
      "Easy to scale up or down",
    ],
    commitment: "1–6 months",
    link: "/contact",
  },
  {
    icon: Layers,
    title: "Other Engagement Options",
    subtitle: "Flexible Ways to Start or Adapt As Needs Change",
    subOptions: [
      {
        title: "Monthly Retainer",
        bestFor: "Ongoing but changing workloads.",
        whatItIs: "Predictable monthly cost with flexible task allocation",
      },
      {
        title: "Project-Based Engagement",
        bestFor: "One-time or clearly defined initiatives",
        whatItIs: "Fixed scope, timelines, and deliverables",
      },
      {
        title: "Hybrid Engagement",
        bestFor: "Agencies with mixed or evolving needs",
        whatItIs: "A tailored combination of two or more engagement models",
      },
    ],
    commitment: "1–6 months",
    link: "/contact",
  },
];

export default function EngagementModelsSection() {
  return (
    /* 
      MOBILE & WEB POSITIONING ADJUSTMENT:
      -mt-12 or -mt-16 handles pulling the section up on mobile devices.
      md:-mt-24 or md:-mt-32 handles pulling the section up on desktop screens.
    */
    <section className="relative z-20 mt-0  w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-28 px-6 md:px-10 lg:px-0">
      {/* Main Container */}
      <div className="mx-auto max-w-350">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Text
            variant="h2"
            className="text-white! mb-4 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold tracking-tight"
          >
            Our Engagement Models
          </Text>
          <div className="w-16 " />
          <Text
            variant="body"
            className="text-gray-400! text-[15px] md:text-[16px] leading-relaxed"
          >
            All engagement models are fully white-label, NDA-backed, and built
            to operate inside your tools, workflows, and communication style.
            You get clear reporting and accountability, with no direct client
            interaction, unless you request it.
          </Text>
        </div>

        {/* Cards Grid: 1 column on mobile, 3 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MODELS.map((model, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-[#121212] p-8 md:p-10 transition-all duration-300 hover:border-emerald-500/50 hover:bg-[#161616]"
            >
              <div>
                {/* Icon Header */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <model.icon className="h-6 w-6" strokeWidth={2} />
                </div>

                {/* Title & Subtitle */}
                <Text
                  variant="h4"
                  className="text-white! text-[22px] md:text-[24px] font-bold tracking-tight mb-1"
                >
                  {model.title}
                </Text>
                <p className="text-emerald-400 font-semibold text-[14px] mb-6">
                  {model.subtitle}
                </p>

                {/* Dynamic Content Structure */}
                {model.sections && (
                  <div className="space-y-4 mb-6">
                    {model.sections.map((sec, idx) => (
                      <div key={idx} className="text-[14px] md:text-[15px]">
                        <span className="font-semibold text-white">
                          {sec.label}{" "}
                        </span>
                        <span className="text-gray-400">{sec.desc}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points Section */}
                {model.bullets && (
                  <div className="mb-6">
                    <p className="font-semibold text-white text-[14px] md:text-[15px] mb-3">
                      {model.bulletTitle}
                    </p>
                    <ul className="space-y-2">
                      {model.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start text-[14px] text-gray-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 mr-2.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Other Engagement Sub-options layout */}
                {model.subOptions && (
                  <div className="space-y-5 mb-6">
                    {model.subOptions.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="border-b border-white/10 pb-4 last:border-none last:pb-0"
                      >
                        <p className="font-bold text-white text-[15px]">
                          {sub.title}
                        </p>
                        <p className="text-[13px] text-gray-400 mt-0.5">
                          <span className="font-medium text-gray-300">
                            Best for:
                          </span>{" "}
                          {sub.bestFor}
                        </p>
                        <p className="text-[13px] text-gray-400 mt-0.5">
                          <span className="font-medium text-gray-300">
                            What it is:
                          </span>{" "}
                          {sub.whatItIs}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer details: Commitment & Action Link */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <div className="text-[14px] text-gray-400 mb-4">
                  <span className="font-semibold text-white">
                    Typical commitment:
                  </span>{" "}
                  {model.commitment}
                </div>

                <Link
                  href={model.link}
                  className="inline-flex items-center text-emerald-400 font-semibold text-[15px] hover:text-emerald-300 transition-colors group"
                >
                  Know More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
