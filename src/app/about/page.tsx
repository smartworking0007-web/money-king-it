"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AboutSection from "./AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";
import WorldwideConnections from "./GlobeSection";
import JourneyShowcase from "./JourneyShowcase";
import LogoCarousel from "./LogoCarousel";
import CoreValues from "./CoreValues";
import PartnersSection from "./PartnersSection";
import VideoTestimonialSection from "./VideoTestimonialSection";
import TeamShowcase from "./TeamShowcase";

export default function AboutPage() {
  return (
    <main
      className="w-full min-h-screen bg-[#040809] overflow-x-hidden antialiased selection:bg-teal-500 selection:text-white"
      style={{ display: "block" }}
    >
      {/* RESPONSIVE FIX 1: 
        - Mobile par padding-top ko thoda kam kiya (`pt-[120px]`) aur badi screens par `md:pt-[160px]`.
        - Height ko mobile par `min-h-[600px]` rakha hai taaki content squeeze na ho, aur badi screens par `lg:min-h-[85vh]`.
      */}
      <section
        className="relative w-full min-h-[600px] sm:min-h-[650px] md:min-h-[750px] lg:min-h-[85vh] pt-[120px] md:pt-[160px] pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center z-10"
        style={{ display: "flex" }}
      >
        {/* Background Image: 'object-cover' ensures it scales beautifully on all aspect ratios */}
        <div className="absolute inset-0 w-full h-full -z-20 select-none overflow-hidden">
          <Image
            src="/about/HeroSection1.jpeg"
            alt="Funny girl with financial knowledge"
            fill
            priority
            className="object-cover object-center" 
          />
          {/* RESPONSIVE FIX 2: Mobile par image ke upar thoda dark gradient layer add kiya hai 
              taaki jab text image ke upar aaye (left side me), to text easily readable ho. */}
          <div className="absolute inset-0 bg-black/50 lg:bg-transparent" />
        </div>

        {/* Background Subtle Glows */}
        <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-teal-900/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-purple-900/10 blur-[120px]" />

        {/* RESPONSIVE FIX 3:
          - `justify-center lg:justify-end` -> Mobile/Tablet par content center me rahega, 
            aur sirf badi desktop screens (`lg`) par right side (black box ke upar) shift hoga.
        */}
        <div className="mx-auto max-w-7xl w-full flex justify-center lg:justify-end items-center">
          
          {/* RESPONSIVE FIX 4:
            - Mobile par text alignment center ki hai (`text-center lg:text-left`) aur margin standard kiya hai.
            - `max-w-md sm:max-w-xl lg:max-w-2xl` lagaya hai taaki har screen size ke mutabik box stretch ho.
          */}
          <div className="w-full max-w-md sm:max-w-xl lg:max-w-2xl flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left py-6 md:py-8 z-20 lg:mr-6">
            
            {/* RESPONSIVE FIX 5: Heading sizes are now fluid (`text-3xl sm:text-4xl md:text-5xl lg:text-6xl`) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight block">
              Earning the Trust of{" "}
              <span className="text-teal-400 block sm:inline">1500+ Clients</span>
            </h1>

            {/* Paragraph Text adjustments for clean readability */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-prose mx-auto lg:mx-0 block">
              Since 2008, we have been empowering businesses with cutting-edge Gen AI
            </p>

            {/* Button alignment switches from center (mobile) to left (desktop) */}
            <div className="pt-2 flex justify-center lg:justify-start block">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-800/40 to-teal-950/40 hover:from-teal-700/50 hover:to-teal-900/50 text-white text-sm md:text-base font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-lg border border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <span>Start a Project</span>
                <div className="flex items-center justify-center bg-white/10 rounded-full p-0.5">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Other sections below */}
      {/* <AboutSection /> */}
      <WorldwideConnections/>
      <JourneyShowcase/>
      <CoreValues/>
      <PartnersSection/>
      <VideoTestimonialSection/>
      <TeamShowcase/>
      <LogoCarousel/>
      {/* <StatsSection />
      <MissionVision />
      <WhyChooseUs /> */}
    </main>
  );
}