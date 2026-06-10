"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AboutSection from "./AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";

export default function AboutPage() {
  return (
    <main
      className="w-full min-h-screen bg-[#040809] overflow-x-hidden antialiased selection:bg-teal-500 selection:text-white"
      style={{ paddingTop: "160px", display: "block" }}
    >
      {/* Hero Content Grid */}
      <section
        className="relative w-full px-6 pb-20 md:px-12 lg:px-24 flex items-center z-10"
        style={{ display: "block" }}
      >
        {/* Background Subtle Glows */}
        <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-teal-900/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-purple-900/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight block">
              Earning the Trust of{" "}
              <span className="text-teal-400">1500+ Clients</span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl block">
              Since 2008, we have been empowering businesses with cutting-edge
              Gen AI, Cyber Security, Web Development, and Performance Marketing
              solutions. With a commitment to innovation and security, we help
              organizations stay ahead in the digital era by delivering
              scalable, AI-driven, and result-oriented IT services.
            </p>

            <div className="pt-2 block">
              <button className="inline-flex items-center gap-2 gradient-to-r from-teal-800/40 to-teal-950/40 hover:from-teal-700/50 hover:to-teal-900/50 text-white font-medium px-6 py-3 rounded-lg border border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <span>Start a Project</span>
                <div className="flex items-center justify-center bg-white/10 rounded-full p-0.5">
                  <ArrowUpRight className="h-4 w-4 text-white rotate-45" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Illustration Column */}
          <div
            className="lg:col-span-5 flex justify-center items-center w-full"
            style={{
              height: "450px",
              position: "relative",
              minHeight: "450px",
            }}
          >
            <div
              className="transition-transform duration-500 hover:scale-[1.01]"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "550px",
                position: "relative",
              }}
            >
              <Image
                src="/about/illustration.jpeg"
                alt="Illustration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <StatsSection />
      <MissionVision />
      <WhyChooseUs />
    </main>
  );
}
