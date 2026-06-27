"use client";

import { useState } from "react";
import { Text } from "@/components/ui/Text";
import { CheckCircle2, LayoutGrid, Cpu, BarChart3, Palette } from "lucide-react";
import Image from "next/image";

const tabs = [
  {
    id: "marketing",
    title: "Marketing",
    icon: BarChart3,
    heading: "Results-Driven Dedicated Marketing Pods",
    desc: "We help your clients grow faster with done for you execution that converts.",
    points: ["Paid media (meta, google, linkedin)", "Funnel optimization & CRO", "Email & Automation workflows", "Reporting & Attribution dashboard"],
    alt: "Marketing solution with money king",
    image: "/hero/first1.png"
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: Cpu,
    heading: "Outsourced Fintech Engineering Teams",
    desc: "Build secure, enterprise-grade, and lightning-fast digital platforms specifically engineered.",
    points: ["Web, Mobile & eCommerce Development", "Frontend, Backend, CMS, API & Integration", "QA CI & CD Delivery", "Legacy Modernization"],
    alt: "Information technology solution with money king",
    image: "/hero/first2.png"
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: LayoutGrid,
    heading: "Enterprise Data Analytics Solutions",
    desc: "We fill your delivery gaps with specialized pods that integrate into your workflows – invisible to clients, indispensable to you.",
    points: ["GA4 Setup and event tracking", "Attribution modeling & Dashboards", "CRM & Ad platform integration"],
    alt: "Analysis solution with money king",
    image: "/hero/first3.png"
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
    heading: "Premium UI/UX Design for Financial Services",
    desc: "We fill your delivery gaps with specialized pods that integrate into your workflows – invisible to clients, indispensable to you.",
    points: ["User Research & Prototyping", "Financial Dashboard Design", "Brand Identity & Visual Design"],
    alt: "Design solution with money king",
    image: "/hero/first4.png"
  }
];

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  
  // Error solve karne ke liye yaha define kiya gaya hai
  const activeContent = tabs.find((t) => t.id === activeTab.id) || tabs[0];

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <Text variant="h2" className="text-[#2D6A6A] mb-4 text-3xl md:text-4xl">What We Do?</Text>
          <Text variant="h5" className="text-gray-600 font-normal mb-8 max-w-lg text-base md:text-lg">
            We fill your delivery gaps with specialized pods that integrate into your workflows – invisible to clients, indispensable to you.
          </Text>

          {/* Tabs - Responsive flex-wrap */}
          <div className="flex flex-wrap bg-white p-1 rounded-xl mb-8 w-full md:w-fit border border-gray-100 shadow-sm gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 font-bold transition-all text-sm md:text-base flex-1 md:flex-none ${
                  activeTab.id === tab.id 
                    ? "bg-[#2D6A6A] text-white" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <tab.icon className="w-4 h-4" /> {tab.title}
              </button>
            ))}
          </div>

          {/* Active Content */}
          <Text variant="h3" className="text-gray-900 mb-2 text-2xl">{activeContent.heading}</Text>
          <Text variant="body" className="text-gray-600 mb-6">{activeContent.desc}</Text>
          
          <ul className="space-y-4 mb-8">
            {activeContent.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="text-[#2D6A6A] shrink-0 mt-1" /> {point}
              </li>
            ))}
          </ul>
          
          <button className="text-[#2D6A6A] font-bold underline underline-offset-8">
            Learn More →
          </button>
        </div>

        {/* Right Visuals - Responsive Height */}
        <div className="order-1 lg:order-2 relative h-64 sm:h-96 lg:h-125 w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-4">
          <Image 
            key={activeContent.image}
            src={activeContent.image} 
            alt={activeContent.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain rounded-3xl transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}