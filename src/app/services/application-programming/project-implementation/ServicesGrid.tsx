// src/app/services/application-programming/project-implementation/ServicesGrid.tsx
import React from "react";
import {
  Code,
  Layout,
  Smartphone,
  Cloud,
  GitFork,
  RefreshCcw,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function ServicesGrid() {
  const serviceCards = [
    {
      icon: Code,
      title: "Software Implementation",
      desc: "Deployment configurations for core multi-tenant backend ecosystems.",
    },
    {
      icon: Layout,
      title: "Website Implementation",
      desc: "High-performance interface systems leveraging edge framework cache configurations.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Implementation",
      desc: "Cross-compiled application logic optimized for native hardware performance loops.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      desc: "Infrastructure as Code blueprints setting up immutable system clusters.",
    },
    {
      icon: GitFork,
      title: "API Integration",
      desc: "Federated API gateway configurations stitching disparate microservice modules together.",
    },
    {
      icon: RefreshCcw,
      title: "Data Migration",
      desc: "Zero-loss ETL transformation handling validation structures seamlessly.",
    },
    {
      icon: ShieldAlert,
      title: "QA & Testing",
      desc: "Comprehensive continuous integration execution coverage running rigorous unit scripts.",
    },
    {
      icon: HelpCircle,
      title: "Go Live Support",
      desc: "Dedicated architectural hypercare keeping platform layers fully functional post-release.",
    },
  ];

  return (
    /* 
      RESPONSIVE CHANGES:
      - Section ke upar se duplicate global bounds hataye hain kyunki page.tsx ise global level par handle kar raha hai.
      - space-y-10 mobile par compact text adjustments dega aur md:space-y-16 desktops par breathing room manage karega.
    */
    <section className="w-full space-y-10 md:space-y-16 text-left">
      <div className="text-center space-y-3 md:space-y-4">
        <Text variant="label">Execution Portfolios</Text>
        <Text variant="h1" className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
          Targeted Integration Tracks
        </Text>
      </div>

      {/* 
        GRID MOBILE VIEW OPTIMIZATION:
        - `grid-cols-1`: Mobile phones par items full width vertical cards bankar aayenge (koi distortion nahi hoga).
        - `sm:grid-cols-2`: Small tablets par 2 columns distribution layers block hongi.
        - `lg:grid-cols-4`: Full screens desktop layout monitors par precise 4-column cards layer set ho jayegi.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {serviceCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="p-5 md:p-6 bg-white/80 border border-zinc-200 rounded-2xl flex flex-col justify-between group hover:border-emerald-600/30 transition-all shadow-sm w-full"
            >
              <div className="space-y-4 w-full">
                {/* Responsive Icon container layout map */}
                <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center border border-zinc-200 text-emerald-600 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                
                <div className="space-y-2">
                  <Text
                    variant="body"
                    className="text-base md:text-lg font-bold tracking-tight text-zinc-900 block"
                  >
                    {card.title}
                  </Text>
                  
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}