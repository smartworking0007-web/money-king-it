"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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

// 1. Premium 3D Compact Card Component
const PartnerCard: React.FC<PartnerCardProps> = ({ badgeText, title, description, children }) => {
  return (
    <div className="w-full max-w-md mx-auto [perspective:1000px]">
      <div className="relative bg-[#0b1113]/50 border border-neutral-900 rounded-[28px] p-6 md:p-8 flex flex-col justify-between overflow-hidden h-[540px] w-full group transition-all duration-500 ease-out hover:border-neutral-700/50 hover:bg-[#0d1618]/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),_0_0_30px_rgba(163,230,53,0.03)] hover:[transform:rotateX(4deg)_rotateY(-2deg)_translateY(-4px)]">
        
        {/* Glow Element For 3D depth */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#a3e635]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Top Half Contents */}
        <div className="space-y-4 text-center flex flex-col items-center relative z-20 [transform:translateZ(30px)] transition-transform duration-500">
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-1.5 bg-[#121a1c] border border-neutral-800/60 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
            <span className="text-xs font-medium text-neutral-400 tracking-wide">{badgeText}</span>
          </div>

          {/* Headings */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">{title}</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xs font-light">
              {description}
            </p>
          </div>

          {/* Premium Sliding-Text Button */}
          <button className="relative overflow-hidden inline-flex items-center gap-2 bg-[#a3e635] text-black font-semibold text-xs px-5 py-2.5 rounded-full transition-colors duration-500 hover:bg-white ease-in-out group/btn shadow-lg shadow-[#a3e635]/10">
            <div className="relative overflow-hidden h-4 flex flex-col justify-start">
              <span className="inline-block transition-transform duration-500 transform group-hover/btn:-translate-y-full">
                Lets Started
              </span>
              <span className="absolute inline-block transition-transform duration-500 transform translate-y-full group-hover/btn:translate-y-0 left-0">
                Lets Started
              </span>
            </div>
            <svg 
              className="w-3.5 h-3.5 transition-transform duration-500 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>

        {/* Bottom Container Display Area [Layered for 3D stack] */}
        <div className="relative w-full h-[210px] mt-4 flex items-end overflow-hidden rounded-xl bg-neutral-950/60 border border-neutral-900/80 shadow-[inset_0_4px_20px_rgba(0,0,0,0.6)] [transform:translateZ(15px)] transition-transform duration-500">
          {children}
        </div>
      </div>
    </div>
  );
};

// 2. Main Layout Section
export default function PartnersSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Card 1: Investors Logos Layout (Bigger Size & High Lighted)
  const investorLogos = [
    { id: 1, src: "/about/logos/logo1.jpeg", x: "8%", y: "12%", rot: "-10deg" },
    { id: 2, src: "/about/logos/logo2.jpeg", x: "42%", y: "22%", rot: "6deg" },
    { id: 3, src: "/about/logos/logo3.jpeg", x: "74%", y: "8%", rot: "-8deg" },
    { id: 4, src: "/about/logos/logo4.jpeg", x: "14%", y: "54%", rot: "12deg" },
    { id: 5, src: "/about/logos/logo5.jpeg", x: "46%", y: "48%", rot: "-12deg" },
    { id: 6, src: "/about/logos/logo6.jpeg", x: "75%", y: "58%", rot: "10deg" },
  ];

  // Card 2: Partners Expanded Pills Fixed Stack Layout (Slightly larger metrics)
  const fallingPartners: LogoBox[] = [
    // Bottom Base Row
    { id: 1, src: "/about/logos/logo1.jpeg", name: "logoipsum", initialX: 4, delay: 0.2, rotate: -12, bottomOffset: 12 },
    { id: 2, src: "/about/logos/logo2.jpeg", name: "DataStack", initialX: 52, delay: 0.5, rotate: 10, bottomOffset: 12 },
    { id: 3, src: "/about/logos/logo3.jpeg", name: "PixelGrid", initialX: 18, delay: 0.9, rotate: -5, bottomOffset: 60 },
    
    // Middle Layer Row
    { id: 4, src: "/about/logos/logo4.jpeg", name: "Overlay", initialX: 56, delay: 1.4, rotate: 16, bottomOffset: 60 },
    { id: 5, src: "/about/logos/logo5.jpeg", name: "DataStack", initialX: 6, delay: 1.8, rotate: -15, bottomOffset: 108 },
    
    // Top Stack Caps
    { id: 6, src: "/about/logos/logo6.jpeg", name: "logoipsum", initialX: 44, delay: 2.3, rotate: 8, bottomOffset: 108 },
    { id: 7, src: "/about/logos/logo7.jpeg", name: "PixelGrid", initialX: 26, delay: 2.8, rotate: -2, bottomOffset: 156 },
  ];

  return (
    <section className="w-full bg-[#040809] text-white py-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden antialiased select-none">
      <div className="w-full max-w-5xl mx-auto space-y-14">
        
        {/* UPPER MAIN HEADER */}
        <div className="w-full text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#121a1c] border border-neutral-800/60 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span className="text-xs font-medium text-neutral-300 tracking-wide">Partners & Investors</span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Backers and Collaborators
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-md mx-auto">
           Money King IT is backed by a robust ecosystem of financial technology innovators, enterprise architects, and global IT scale-up experts.
          </p>
        </div>

        {/* CARDS GRID SYSTEM */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 w-full">
          
          {/* CARD 1: INVESTOR SPOTLIGHT */}
          <PartnerCard
            badgeText="Investors"
            title="Investor Spotlight"
            description="Discover the visionary institutional investors and FinTech venture backers driving our technology roadmap forward. We connect strategic capital with cutting-edge software engineering to scale global enterprise infrastructure effectively."
          >
            <div className="absolute inset-0 w-full h-full p-4">
              {investorLogos.map((item) => (
                <div
                  key={item.id}
                  /* 🛠️ LOGO SIZE INCREASED: w-14 h-14 (md:w-16 md:h-16) for high-impact visibility */
                  className="absolute w-14 h-14 md:w-16 md:h-16 bg-neutral-900 border border-neutral-800/80 rounded-full flex items-center justify-center p-2.5 shadow-xl hover:scale-110 transition-all duration-300 transform ease-out"
                  style={{
                    left: item.x,
                    top: item.y,
                    transform: `rotate(${item.rot})`,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image src={item.src} alt="Investor Badge" fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </PartnerCard>

          {/* CARD 2: PARTNERS FIXED PILE STACK */}
          <PartnerCard
            badgeText="Partners"
            title="Our Technology Partners"
            description=" Meet our certified technology partners, cloud infrastructure providers, and security compliance allies who help us deliver seamless digital transformation. 
            Together, we build reliable, secure, and high-performance IT frameworks worldwide."
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {isMounted &&
                fallingPartners.map((logo) => {
                  const customStyle: React.CSSProperties & { [key: string]: string | number } = {
                    left: `${logo.initialX}%`,
                    transform: `rotate(${logo.rotate}deg)`,
                    animation: `stableDrop 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                    animationDelay: `${logo.delay}s`,
                    "--target-bottom": `${logo.bottomOffset}px`,
                  };

                  return (
                    /* 🛠️ PILL CARD EXPANDED: Better spacing (px-4 py-2) and highly robust borders */
                    <div
                      key={logo.id}
                      className="absolute bg-neutral-900/95 border border-neutral-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl opacity-0 transform"
                      style={customStyle}
                    >
                      <div className="relative w-4.5 h-4.5 rounded-full overflow-hidden">
                        <Image src={logo.src} alt={logo.name} fill className="object-cover" />
                      </div>
                      <span className="text-[12px] font-semibold tracking-wide text-neutral-200 font-mono">
                        {logo.name}
                      </span>
                    </div>
                  );
                })}
            </div>
          </PartnerCard>

        </div>

      </div>

      {/* STABLE DROP KEYFRAME ANIMATION */}
      <style jsx global>{`
        @keyframes stableDrop {
          0% {
            opacity: 0;
            margin-bottom: 240px;
          }
          30% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            margin-bottom: 0px;
            bottom: var(--target-bottom);
          }
        }
      `}</style>
    </section>
  );
}