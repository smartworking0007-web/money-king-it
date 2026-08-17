"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface MiniCounterProps {
  endValue: number;
  suffix?: string;
}

const MiniCounter: React.FC<MiniCounterProps> = ({ endValue, suffix = "" }) => {
  const [count, setCount] = useState(1);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 1;
          const duration = 1500;
          const totalFrames = 45;
          const increment = (endValue - start) / totalFrames;
          const frameDuration = duration / totalFrames;

          const counterInterval = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(counterInterval);
            } else {
              setCount(Math.floor(start));
            }
          }, frameDuration);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [endValue]);

  return (
    <span ref={elementRef} className="text-4xl font-semibold text-white">
      {count}
      {suffix}
    </span>
  );
};

export default function JourneyShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
          1,
        );
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCardStyle = (index: number) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const factor = isMobile ? scrollProgress * 1.5 : scrollProgress * 2.5;
    const currentProgress = Math.min(factor, 1);

    const baseRotations = [-20, -10, 0, 10, 20];
    const baseTranslates = isMobile
      ? [-80, -40, 0, 40, 80]
      : [-360, -180, 0, 180, 360];
    const baseYOffsets = isMobile ? [10, 5, 0, 5, 10] : [55, 20, 0, 20, 55];

    return {
      transform: `translateX(${baseTranslates[index] * currentProgress}px) translateY(${baseYOffsets[index] * currentProgress}px) rotate(${baseRotations[index] * currentProgress}deg)`,
      zIndex: 10 + index,
    };
  };

  const dummyImages = [
    "/about/suffle1.jpeg",
    "/about/suffle2.jpeg",
    "/about/suffle3.jpeg",
    "/about/suffle4.jpeg",
    "/about/suffle5.jpeg",
  ];

  return (
    /* 
       RESPONSIVE PULL-UP SYNTAX:
       - Default '-mt-20': Ye Mobile ke liye hai (section ko 20 units upar khichega).
       - 'md:-mt-40': Ye Desktop/Tablet (md) ke liye hai (section ko 40 units upar khichega).
       - Aap ise yahan 'className' mein add kar sakte hain:
    */
    <section
      ref={sectionRef}
      className="relative w-full h-auto  text-white py-24 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-between antialiased -mt-40 md:-mt-30"
    >
      {/* Upper Grid Split */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-start mb-10">
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            First Chapter: The <br className="hidden md:inline" />
            start of our journey
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-12">
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
            With Skky Loom Digital Technology Pvt. Ltd., our specialized tech pods operate in perfect
            sync. We automatically allocate software engineers and marketing
            experts based on your sprint deadlines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="bg-[#0b1113] border border-neutral-900/80 rounded-2xl p-6 flex flex-col justify-between min-h-32.5">
              <div className="flex items-center justify-between">
                <MiniCounter endValue={90} suffix="%" />
                <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded-full flex items-center gap-1">
                  📦 Product
                </span>
              </div>
              <p className="text-xs text-neutral-500 font-light mt-4">
                Average selling product
              </p>
            </div>

            <div className="bg-[#0b1113] border border-neutral-900/80 rounded-2xl p-6 flex flex-col justify-between min-h-32.5">
              <div className="flex items-center justify-between">
                <MiniCounter endValue={50} suffix="+" />
                <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded-full flex items-center gap-1">
                  👥 Team
                </span>
              </div>
              <p className="text-xs text-neutral-500 font-light mt-4">
                Expert team members
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Motion Images */}
      <div className="w-full flex justify-center items-center mt-10 pb-2 pt-0 overflow-visible">
        <div className="relative w-full max-w-7xl h-72 sm:h-96 md:h-125 flex justify-center items-center overflow-visible">
          {dummyImages.map((src, index) => (
            <div
              key={index}
              style={getCardStyle(index)}
              className="absolute w-40 sm:w-56 md:w-75 aspect-4/5 bg-neutral-900 rounded-[24px] overflow-hidden shadow-2xl border border-neutral-800 transition-all duration-300"
            >
              <Image
                src={src}
                alt="Shadow Team"
                fill
                sizes="(max-width: 640px) 180px, 300px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
