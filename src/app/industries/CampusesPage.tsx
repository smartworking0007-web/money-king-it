import React from "react";
import Text from "@/components/ui/Text";
import {
  Briefcase,
  GraduationCap,
  Code,
  Video,
  Award,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Briefcase,
    title: "HIRING DRIVES",
    desc: "Connect directly with top corporate recruiters through structured on-campus hiring drives and mega placement events.",
  },
  {
    icon: GraduationCap,
    title: "GRADUATE PROGRAMS",
    desc: "Comprehensive talent pipeline initiatives designed to transition fresh graduates seamlessly into core engineering roles.",
  },
  {
    icon: Code,
    title: "TECHNICAL ASSESS.",
    desc: "Rigorous coding evaluations, automated technical screening tests, and multi-round algorithmic assessments.",
  },
  {
    icon: Video,
    title: "VIRTUAL EVENTS",
    desc: "Host interactive virtual career fairs, employer branding webinars, and live panel discussions with industry experts.",
  },
  {
    icon: Award,
    title: "PLACEMENT SUPPORT",
    desc: "End-to-end recruitment lifecycle administration, interview scheduling, offer rollout, and onboarding coordination.",
  },
  {
    icon: TrendingUp,
    title: "CAREER DEV",
    desc: "Targeted skill-building modules, professional resume workshops, and portfolio development mentoring.",
  },
  {
    icon: Users,
    title: "LEADERSHIP DEV",
    desc: "Mentorship frameworks and management track programs grooming high-potential students for future leadership roles.",
  },
  {
    icon: Zap,
    title: "FAST TRACK HIRING",
    desc: "Expedited recruitment channels and priority shortlisting pipelines for high-performing technical candidates.",
  },
];

export default function CampusesPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden">
      {/* Feature Section Inspired by Pusal Webflow Design with Vertical/Horizontal Lines & Motion Effects */}
      <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-10 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/10">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-12 sm:mb-16">
          <Text
            variant="h2"
            className="text-white! text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Campus Recruitment
          </Text>
        </div>

        {/* Main Grid Container with Responsive Layout */}
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-y-12 relative">
            {FEATURES.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:py-8 relative group transition-all duration-500 hover:-translate-y-2 rounded-2xl bg-white/2 border border-white/5 hover:border-emerald-500/30 hover:bg-white/4 shadow-lg"
                >
                  {/* Subtle top glowing line effect on hover */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-linear-to-r from-transparent via-[#a3e635] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Container with Lime color accent */}
                  <div className="mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#a3e635]/50 group-hover:bg-[#a3e635]/10 transition-all duration-300 shadow-inner">
                    <IconComponent
                      className="h-5 w-5 sm:h-6 sm:w-6 text-[#a3e635] transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <Text
                    variant="h4"
                    className="text-white! text-base sm:text-[18px] md:text-[20px] font-bold tracking-tight mb-2 sm:mb-3 group-hover:text-[#a3e635] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>

                  {/* Description */}
                  <Text
                    variant="body"
                    className="text-gray-400! text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6]"
                  >
                    {item.desc}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 