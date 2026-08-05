import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

/**
 * ContentServicesGrid.tsx
 * A compact, responsive split layout featuring a single sleek image on the left 
 * and a streamlined 3x2 grid of content service cards without "Know More" links.
 */

const SERVICES_DATA = [
  {
    title: "Content Consulting",
    desc: "Build a content roadmap backed by audience research, search intent, and competitor analysis to maximize organic growth.",
    active: false,
  },
  {
    title: "Content Audits",
    desc: "Identify content gaps, outdated pages, and keyword opportunities to improve existing performance quickly.",
    active: false,
  },
  {
    title: "Content Writing",
    desc: "Create SEO-focused blogs, landing pages, and thought leadership copy designed to rank higher and convert visitors.",
    active: false,
  },
  {
    title: "Content Optimization",
    desc: "Improve existing content with better structure, keyword targeting, internal linking, and conversion opportunities.",
    active: true,
  },
  {
    title: "Content Promotion",
    desc: "Extend your content's reach through the right channels to increase visibility and attract qualified audiences.",
    active: false,
  },
  {
    title: "Content Reporting",
    desc: "Monitor rankings, traffic, engagement, and conversions with professional reporting for complete transparency.",
    active: false,
  },
];

export default function ContentServicesGrid() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-12 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Single Clean Image Container (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-2">
            <div className="absolute inset-0 bg-[#00D094]/5 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-md flex items-center justify-center">
              <div className="relative w-full h-72 sm:h-88 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src="/website/3.png"
                  alt="Team strategy session"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Side: Compact 3x2 Service Cards Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-xl p-4 sm:p-5 transition-all duration-300 shadow-lg ${
                  service.active
                    ? "bg-zinc-900/85 border border-white/10 hover:border-[#00D094]/40 hover:bg-zinc-900"
                    : "bg-zinc-900/85 border border-white/10 hover:border-[#00D094]/40 hover:bg-zinc-900"
                }`}
              >
                <div>
                  <Text
                    variant="h5"
                    className="text-white! text-base font-bold mb-1.5 tracking-tight"
                  >
                    {service.title}
                  </Text>
                  <Text
                    variant="body"
                    className="text-zinc-400! text-xs leading-relaxed"
                  >
                    {service.desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}