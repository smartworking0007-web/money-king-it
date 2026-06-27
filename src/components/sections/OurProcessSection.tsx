"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Target,
  ClipboardList,
  Code2,
  Search,
  Rocket,
  Zap,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    id: "Kickoff",
    icon: Target,
    title: "Kickoff",
    desc: "Every great partnership starts with clarity. We take time to understand your world before we build in it.",
    points: ["Goal Alignment", "Context Mapping", "Brief to Blueprint"],
    image: "/process/1.png",
    alt: "Goal mapping with money king",
  },
  {
    id: "Scoping",
    icon: ClipboardList,
    title: "Scoping",
    desc: "Before we code or design, we define the boundaries, milestones, and metrics that ensure predictable outcomes.",
    points: [
      "Milestone Planning",
      "Resource Mapping",
      "Risk & Metric Definition",
    ],
    image: "/process/2.png",
    alt: "Scoping process",
  },
  {
    id: "Build",
    icon: Code2,
    title: "Build",
    desc: "Our cross-functional pods execute in parallel – design, development, and marketing working in sync to deliver momentum.",
    points: ["Agile Collaboration", "Integrated Delivery", "Faster Iterations"],
    image: "/process/3.png",
    alt: "Build phase",
  },
  {
    id: "Review",
    icon: Search,
    title: "Review",
    desc: "We don’t present slides; we show you working versions of what your clients will actually use.",
    points: ["Hands-On Demos", "Feedback Loops", "Transparent Reporting"],
    image: "/process/4.png",
    alt: "Review phase",
  },
  {
    id: "Launch",
    icon: Rocket,
    title: "Launch",
    desc: "When it’s go-time, everything – code, creatives, and campaigns – is ready for seamless rollout.",
    points: ["Final QA", "Unified Rollout", "Post-Launch Support"],
    image: "/process/5.png",
    alt: "Launch phase",
  },
  {
    id: "Evolve",
    icon: Zap,
    title: "Evolve",
    desc: "We don’t disappear after delivery. The same team continues optimizing, adapting, and scaling with your client’s growth.",
    points: [
      "Continuous Optimization",
      "Growth Iterations",
      "Long-Term Partnership",
    ],
    image: "/process/6.png",
    alt: "Evolve phase",
  },
];

export default function OurProcessSection() {
  const [activeTab, setActiveTab] = useState(processSteps[0].id);
  const activeContent = processSteps.find((item) => item.id === activeTab)!;

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Process: Clarity At Every Step
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            You’ll always know the progress, the people, and the next milestone.
          </p>
        </div>

        {/* Tab Navigation - Mobile friendly */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-16">
          {processSteps.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all text-sm md:text-base ${
                activeTab === item.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <item.icon size={16} />
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
          {/* Image */}
          <div className="relative aspect-video lg:h-100 w-full rounded-xl md:rounded-2xl overflow-hidden">
            <Image
              src={activeContent.image}
              alt={activeContent.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {activeContent.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {activeContent.desc}
            </p>
            <div className="space-y-3 pt-2">
              {activeContent.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm md:text-base"
                >
                  <div className="bg-blue-100 p-1 rounded-full text-blue-600 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-semibold text-gray-800">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
