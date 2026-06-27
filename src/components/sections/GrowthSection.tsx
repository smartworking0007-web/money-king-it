"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text"; 

const leftPoints = [
  "Performance Marketing with a Data-Driven Approach",
  "In-depth Brand & Creative Strategy for Best Outcomes",
  "Organic Traffic Growth",
  "Tech to Scale and Automate", 
];

const rightPoints = [
  "Premier Google Partner and Meta Business Partner",
  "Manage high-performance digital and ad spends for elite financial scale",
  "Expert team of marketing analysts, software engineers, and UI specialists",
  "Curate hyper-scale strategies and automated pipelines for your brand",
];

export default function GrowthSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <Text variant="h2" className="mb-4 text-zinc-950">
            About <span className="text-emerald-600">Money King IT</span>
          </Text>
          <Text variant="body" className="max-w-3xl mx-auto mb-8 text-zinc-600"> 
            Learn how Money King IT drives business expansion. As premier digital growth partners, 
            we deliver data-driven performance marketing, SEO, and robust tech scaling solutions. 
          </Text>
          <Text variant="h4" className="text-emerald-600 font-bold">
            We are growth partners that drive results
          </Text>
        </div>
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">       
          
          {/* Left Column */}                   
          <div className="space-y-8">
            {leftPoints.map((point, i) => (
              <div key={i} className="border-b border-dashed border-zinc-300 pb-4">
                <Text variant="h5" className="text-zinc-900 leading-snug">{point}</Text>
              </div>      
            ))}       
          </div>         

          {/* Middle Image - "image_88fa6c.jpg" */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-emerald-50">
              <Image
                src="/hero/social-beat.jpeg"
                alt="Growth Strategy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8"> 
            {rightPoints.map((point, i) => (
              <div key={i} className="border-b border-dashed border-zinc-300 pb-4">
                <Text variant="h5" className="text-zinc-900 leading-snug">{point}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}