"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoBox {
  id: number;
  src: string;
  name: string;
  initialX: number;
  delay: number;
  rotate: number;
  bottomOffset: number;
}

interface PartnerCardProps {
  badgeText: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  badgeText,
  title,
  description,
  children,
}) => (
  <div className="w-full max-w-xl mx-auto perspective-[1000px]">
    <div className="relative bg-[#0b1113]/50 border border-neutral-900 rounded-[40px] p-12 md:p-14 flex flex-col justify-between overflow-visible h-150 w-full group transition-all duration-500 hover:border-neutral-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#a3e635]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="space-y-6 text-center flex flex-col items-center relative z-20">
        <div className="inline-flex items-center gap-3 bg-[#121a1c] border border-neutral-800/60 px-6 py-2 rounded-full">
          <span className="w-3 h-3 rounded-full bg-[#a3e635]" />
          <span className="text-sm font-semibold text-neutral-400 tracking-widest uppercase">
            {badgeText}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {title}
          </h3>
          <p className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto">
            {description}
          </p>
        </div>

        <Link
          href="/contact"
          className="bg-[#a3e635] text-black px-10 py-4 rounded-full font-bold text-base transition-all duration-300 hover:bg-white flex items-center gap-3 hover:scale-105"
        >
          Get Started ↗
        </Link>
      </div>

      <div className="relative w-full h-72 mt-8 flex items-end overflow-visible">
        {children}
      </div>
    </div>
  </div>
);

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Investors bhi ab niche gir ke aayenge
  const investorLogos = [
    { id: 1, src: "/about/1.1.png", x: 10, delay: 0.1, rot: -10, bottom: 150 },
    { id: 2, src: "/about/2.png", x: 40, delay: 0.3, rot: 6, bottom: 150 },
    { id: 3, src: "/about/3.png", x: 70, delay: 0.5, rot: -8, bottom: 150 },
    { id: 4, src: "/about/4.png", x: 15, delay: 0.7, rot: 12, bottom: 50 },
    { id: 5, src: "/about/5.png", x: 45, delay: 0.9, rot: -12, bottom: 50 },
    { id: 6, src: "/about/6.png", x: 75, delay: 1.1, rot: 10, bottom: 50 },
  ];

  const fallingPartners: LogoBox[] = [
    {
      id: 1,
      src: "/partners/1.avif",
      name: "logoipsum",
      initialX: 5,
      delay: 0.1,
      rotate: -12,
      bottomOffset: 40,
    },
    {
      id: 2,
      src: "/partners/2.avif",
      name: "DataStack",
      initialX: 35,
      delay: 0.3,
      rotate: 10,
      bottomOffset: 40,
    },
    {
      id: 3,
      src: "/partners/3.avif",
      name: "PixelGrid",
      initialX: 65,
      delay: 0.5,
      rotate: -5,
      bottomOffset: 40,
    },
    {
      id: 4,
      src: "/partners/4.avif",
      name: "Overlay",
      initialX: 10,
      delay: 0.7,
      rotate: 16,
      bottomOffset: 120,
    },
    {
      id: 5,
      src: "/partners/5.avif",
      name: "DataStack",
      initialX: 40,
      delay: 0.9,
      rotate: -15,
      bottomOffset: 120,
    },
    {
      id: 6,
      src: "/partners/6.avif",
      name: "logoipsum",
      initialX: 70,
      delay: 1.1,
      rotate: 8,
      bottomOffset: 120,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#040809] py-32 px-6 md:px-20 flex flex-col items-center antialiased select-text"
    >
      <div className="w-full max-w-7xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Backers and Collaborators
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-12 w-full">
          <PartnerCard
            badgeText="Investors"
            title="Investor Spotlight"
            description="Visionary institutional backers driving innovation and success."
          >
            <div className="absolute inset-0 w-full h-full">
              {investorLogos.map((item) => (
                <div
                  key={item.id}
                  className="absolute w-24 h-24 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center shadow-2xl opacity-0"
                  style={
                    {
                      left: `${item.x}%`,
                      animationName: isVisible ? "stableDrop" : "none",
                      animationDuration: "1.5s",
                      animationFillMode: "forwards",
                      animationDelay: `${item.delay}s`,
                      "--target-bottom": `${item.bottom}px`,
                      "--rot": `${item.rot}deg`,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={item.src}
                    alt="Investor"
                    width={80}
                    height={80}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain p-4"
                    priority
                  />
                </div>
              ))}
            </div>
          </PartnerCard>

          <PartnerCard
            badgeText="Partners"
            title="Our Partners"
            description="Trusted partners driving growth and exceptional results globally."
          >
            <div className="absolute inset-0 w-full h-full">
              {fallingPartners.map((logo) => (
                <div
                  key={logo.id}
                  className="absolute bg-neutral-900 border border-neutral-700 px-6 py-4 rounded-full flex items-center gap-4 opacity-0 shadow-2xl"
                  style={
                    {
                      left: `${logo.initialX}%`,
                      animationName: isVisible ? "stableDrop" : "none",
                      animationDuration: "1.5s",
                      animationFillMode: "forwards",
                      animationDelay: `${logo.delay}s`,
                      "--target-bottom": `${logo.bottomOffset}px`,
                      "--rot": `${logo.rotate}deg`,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={40}
                    height={40}
                    style={{ width: "auto", height: "auto" }}
                    className="rounded-full"
                  />
                  <span className="text-base font-mono font-bold">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </PartnerCard>
        </div>
      </div>
      <style jsx global>{`
        @keyframes stableDrop {
          0% {
            opacity: 0;
            transform: translateY(-250px) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(var(--rot));
            bottom: var(--target-bottom);
          }
        }
      `}</style>
    </section>
  );
}
