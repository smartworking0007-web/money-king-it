import React from "react";
import Text from "@/components/ui/Text";
import { Layers, Server, Database, Globe, Cloud, CheckCircle2 } from "lucide-react";

/**
 * ModernTechStackSection.tsx
 * A responsive full-width dark theme section matching the reference layout, 
 * featuring a centered header/intro and a multi-column feature card grid with check icons and custom typography.
 */

const TECH_STACK_DATA = [
  {
    title: "Frontend Development",
    icon: Layers,
    items: [
      { name: "React", desc: "Interactive single-page UI components." },
      { name: "Next.js", desc: "Server-side rendering for peak SEO performance." },
      { name: "TypeScript", desc: "Type-safe code logic reducing runtime errors." },
      { name: "Tailwind CSS", desc: "Utility-first lightweight responsive styling." },
    ],
  },
  {
    title: "Backend Architecture",
    icon: Server,
    items: [
      { name: "Node.js", desc: "Fast, event-driven async backend execution." },
      { name: "NestJS", desc: "Scalable enterprise-level server structures." },
      { name: "Python", desc: "Complex business logic and data processing." },
      { name: "Laravel", desc: "Secure, structured PHP framework workflows." },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    items: [
      { name: "PostgreSQL", desc: "Advanced relational schema and data integrity." },
      { name: "MySQL", desc: "Proven high-speed relational query storage." },
      { name: "MongoDB", desc: "Flexible document-based NoSQL architecture." },
    ],
  },
  {
    title: "CMS Enablers",
    icon: Globe,
    items: [
      { name: "WordPress", desc: "Flexible content management and blogging systems." },
      { name: "Shopify", desc: "Conversion-focused e-commerce storefront setups." },
      { name: "Strapi", desc: "Omnichannel headless CMS for API delivery." },
    ],
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    items: [
      { name: "AWS", desc: "Enterprise serverless compute and cloud storage." },
      { name: "Azure", desc: "Secure hybrid-cloud environment architecture." },
      { name: "Google Cloud", desc: "High-availability hosting and analytics pipeline." },
    ],
  },
];

export default function ModernTechStackSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        
        {/* Header and Introductory Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Text
            variant="h2"
            className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Modern Technology Stack
          </Text>
          <Text
            variant="body"
            className="text-zinc-400! text-sm sm:text-base md:text-lg font-normal leading-relaxed"
          >
            We engineer high-performance, enterprise-grade digital solutions using cut-edge frameworks, secure databases, and cloud infrastructure. Our modular tech architecture is built to ensure ultra-fast speeds, dynamic scalability, and seamless user experiences for growing businesses.
          </Text>
        </div>

        {/* Feature Cards Grid (Responsive 1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK_DATA.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-zinc-900/85 border border-white/10 hover:border-[#00D094]/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Category Header with Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D094]/10 border border-[#00D094]/20 text-[#00D094]">
                      <IconComponent className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <Text
                      variant="h5"
                      className="text-white! text-lg font-bold tracking-tight"
                    >
                      {category.title}
                    </Text>
                  </div>

                  {/* List of Tech Items */}
                  <ul className="space-y-3.5">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00D094] shrink-0 mt-1" />
                        <div className="text-xs sm:text-sm leading-relaxed">
                          <span className="font-semibold text-white">
                            {item.name}:
                          </span>{" "}
                          <span className="text-zinc-400">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}