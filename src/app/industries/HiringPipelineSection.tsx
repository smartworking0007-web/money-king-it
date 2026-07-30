import React from "react";
import {
  UserCheck,
  MessageSquare,
  ClipboardList,
  Cpu,
  FolderGit2,
  CheckCircle,
  GraduationCap,
  Briefcase,
} from "lucide-react";

/**
 * HiringPipelineSection.tsx
 * A clean, responsive workflow/pipeline section inspired by the reference style,
 * featuring structured cards with connected node-like flow details.
 */

const PIPELINE_STEPS = [
  {
    icon: UserCheck,
    title: "Registration",
    step: "01",
    desc: "Candidate profile creation, document verification, and initial database onboarding.",
  },
  {
    icon: MessageSquare,
    title: "Interview",
    step: "02",
    desc: "Initial HR screening and cultural fit alignment discussions with recruiters.",
  },
  {
    icon: ClipboardList,
    title: "Assessment",
    step: "03",
    desc: "Aptitude testing, logical reasoning evaluations, and basic skill profiling.",
  },
  {
    icon: Cpu,
    title: "Tech Eval",
    step: "04",
    desc: "Core technical round focusing on algorithms, frameworks, and system problem-solving.",
  },
  {
    icon: FolderGit2,
    title: "Project Review",
    step: "05",
    desc: "Hands-on code review, architecture evaluation, and practical task demonstration.",
  },
  {
    icon: CheckCircle,
    title: "Offer",
    step: "06",
    desc: "Compensation discussion, role finalization, and official offer letter rollout.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    step: "07",
    desc: "Pre-onboarding bootcamps, tech-stack sharpening, and corporate readiness grooming.",
  },
  {
    icon: Briefcase,
    title: "Placement",
    step: "08",
    desc: "Successful deployment into core client projects and professional team integration.",
  },
];

export default function HiringPipelineSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Header Row */}
        <div className="text-center max-w-2xl mx-auto mb-16">
         
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Hiring Pipeline
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Monitor, manage, and seamlessly transition candidates through our
            structured multi-stage recruitment pipeline.
          </p>
        </div>

        {/* Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PIPELINE_STEPS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-7 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#161616] group shadow-xl"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#a3e635]/50 group-hover:bg-[#a3e635]/10 transition-all duration-300">
                    <IconComponent
                      className="h-5 w-5 text-[#a3e635]"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="font-mono text-xs text-zinc-500 tracking-wider">
                    STEP {item.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#a3e635] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Glow Border Accent on Hover */}
                <div className="absolute inset-0 rounded-2xl border border-emerald-500/0 group-hover:border-emerald-500/20 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
