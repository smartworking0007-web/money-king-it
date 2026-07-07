"use client";

import Image from "next/image";
import { Text, Button } from "../../components/ui/Text";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#040809] py-24 px-6 md:px-20 overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Content */}
        <div className="flex-1 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 border border-[#305020] bg-[#1a2515] px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
            <Text variant="label" className="text-[#a3e635]! text-xs!">
              {" "}
              100M scaling roadmap{" "}
            </Text>
          </div>

          <Text
            variant="display"
            className="text-white! text-5xl! md:text-7xl! leading-[1.1]!"
          >
            Increase sales, <br /> elevate experience.
          </Text>

          <Text variant="body" className="text-neutral-400!">
            AI delivers advanced Search & Ads relevance solutions powered by
            world-class experts in search, recommendation, and machine learning.
          </Text>

          <div className="flex gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#a3e635]! text-black! rounded-xl!"
            >
              Get Started ↗
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white! text-black! rounded-xl!"
            >
              See Our Pricing
            </Button>
          </div>
        </div>

        {/* Right Side: The Pusal-style Layered UI */}
        <div className="relative flex-1 w-full h-125! flex items-center justify-center">
          {/* Man Image (Base) */}
          <div className="relative w-100! h-100!">
            <Image
              src="/insights/1.png"
              alt="Person"
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain" 
            />
          </div>

          {/* Floating Right Stats (1.4K & 18M) */}
          <div className="absolute top-20 right-0 space-y-10">
            <div>
              <h3 className="text-4xl font-bold">1.4K</h3>
              <p className="text-neutral-400 text-sm">
                active college students
                <br />
                and recent alumni
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">18M</h3>
              <p className="text-neutral-400 text-sm">
                active college students
                <br />
                and recent alumni
              </p>
            </div>
          </div>

          {/* Floating Stats Bar (Bottom Left) */}
          <div className="absolute bottom-10 left-0 bg-[#121212] border border-neutral-800 p-4 rounded-2xl w-48">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">Strategies</span>
              <span className="text-xs bg-[#1a2515] text-[#a3e635] px-2 py-1 rounded-full">
                22.8%
              </span>
            </div>
            <div className="flex items-end gap-2 h-16">
              {[40, 70, 50, 60, 40].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-full bg-[#a3e635] rounded-t-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
