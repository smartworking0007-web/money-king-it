"use client";

import React from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imagePath: string;
  badge?: string;
}

const teamData: TeamMember[] = [
  { id: 1, name: "Amrajeet Sir", role: "CEO", imagePath: "/employee/Sir.jpg" },
  {
    id: 2,
    name: "Sumit Shukla",
    role: "Software Engineer",
    imagePath: "/employee/Picture7.png",
  },
  {
    id: 3,
    name: "Ajeet Kumar Jha",
    role: "Project Manager",
    imagePath: "/employee/Picture8.png",
  },
  {
    id: 4,
    name: "Shivangi Verma",
    role: "SEO Specialist",
    imagePath: "/employee/Picture3.jpeg",
  },
  {
    id: 5,
    name: "Danish Shaikh",
    role: "Creative Director",
    imagePath: "/employee/Picture9.png",
  },
  {
    id: 6,
    name: "Amit Singhaniya",
    role: "Backend Developer",
    imagePath: "/employee/Amit1.webp",
  },
  {
    id: 7,
    name: "Namrata Mehra",
    role: "Social Media Manager",
    imagePath: "/employee/Picture11.png",
  },
  {
    id: 8,
    name: "Radhika Tyagi",
    role: "Digital Marketing Specialist",
    imagePath: "/employee/Picture6.jpeg",
  },
];

export default function TeamShowcase() {
  return (
    <section className="w-full bg-[#090D0E] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 antialiased">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col items-center text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#13191B] border border-neutral-800 px-4 py-1.5 rounded-full">
            <span className="text-xs font-semibold tracking-wider text-neutral-200">
              Team & Partners
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl">
            Say hello to our team of experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 pt-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col items-center text-center relative"
            >

              <div className="relative w-full aspect-4/5 rounded-[32px] overflow-hidden bg-neutral-900 border border-neutral-800/40 shadow-lg">
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* ROLE ON HOVER */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white font-bold text-lg">{member.role}</p>
                </div>

                {/* BADGE */} 
                {member.badge && (
                  <div className="absolute top-5 -right-12 bg-[#FF5714] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-12 transform rotate-45 z-10">
                    {member.badge}
                  </div>
                )}
              </div>

              <div className="mt-5 space-y-1">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF5714] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-neutral-500">
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
