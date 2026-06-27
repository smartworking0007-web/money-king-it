"use client";

import React from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  // Local public directory ka path string hoga
  imagePath: string; 
  badge?: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Diego Simone",
    role: "CO Founder",
    imagePath: "/team/diego-simone.jpg", 
  },
  {
    id: 2,
    name: "John Smith",
    role: "VP of Sales",
    imagePath: "/team/john-smith.jpg",
  },
  {
    id: 3,
    name: "Joe Elia",
    role: "Project Manager",
    imagePath: "/team/joe-elia.jpg",
  },
  {
    id: 4,
    name: "Paul Crish",
    role: "Sale Manager",
    imagePath: "/team/paul-crish.jpg",
  },
  {
    id: 5,
    name: "Alex Carter",
    role: "Creative Director",
    imagePath: "/team/alex-carter.jpg",
  },
  {
    id: 6,
    name: "Maya Bennett",
    role: "UX/UI Designer",
    imagePath: "/team/maya-bennett.jpg",
    badge: "Consultant",
  },
  {
    id: 7,
    name: "Liam Hayes",
    role: "Brand Strategist",
    imagePath: "/team/liam-hayes.jpg",
  },
  {
    id: 8,
    name: "Marcus Vance",
    role: "Sale Manager",
    imagePath: "/team/marcus-vance.jpg",
  },
];

export default function TeamShowcase() {
  return (
    <section className="w-full bg-[#090D0E] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 antialiased overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP HEADER SECTION */}
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#13191B] border border-neutral-800 px-4 py-1.5 rounded-full shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5714] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5714]"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-neutral-200">
              Team & Partners
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            Say hello to our team of experts
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
            Task AI Management was founded by a team of productivity hackers.
          </p>
        </div>

        {/* RESPONSIVE DYNAMIC TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 pt-6">
          {teamData.map((member) => (
            <div 
              key={member.id} 
              className="group flex flex-col items-center text-center relative"
            >
              {/* IMAGE WRAPPER WITH HOVER LIFT & YELLOW GLOW */}
              <div className="relative w-full aspect-square rounded-[32px] overflow-hidden bg-neutral-900 border border-neutral-800/40 transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:border-[#EAB308]/40 group-hover:shadow-[0_20px_50px_rgba(234,179,8,0.18)]">
                
                {/* Optimized Next.js Local Image */}
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                  className="object-cover grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  priority={member.id <= 4} // Pehle 4 members ko faster load karne ke liye
                />

                {/* Angled Ribbon Badge */}
                {member.badge && (
                  <div className="absolute top-5 -right-12 bg-[#FF5714] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-12 transform rotate-45 shadow-lg select-none z-10">
                    {member.badge}
                  </div>
                )}
                
                {/* Subtle inner dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* TEXT METADATA LABELS */}
              <div className="mt-5 space-y-1 transition-transform duration-300 group-hover:translate-y-0.5">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#EAB308] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-neutral-500 tracking-wide">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}