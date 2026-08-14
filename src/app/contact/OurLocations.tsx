// File Name: OurLocations.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Building2, MapPin } from "lucide-react";

const LOCATIONS_DATA = [
  {
    city: "Mumbai (HO)",
    address:
      "Office No. 502, 5th Floor, BKC Corporate Tower, Bandra Kurla Complex",
    region: "Mumbai – 400051",
  },
  {
    city: "Noida",
    address: "A-39, 2nd Floor, Sector 63",
    region: "Noida, Uttar Pradesh 201301",
  },
  {
    city: "Bangalore",
    address: "3rd Floor, Prestige Tech Park, Marathahalli – Sarjapur Ring Road",
    region: "Bangalore – 560103",
  },
  {
    city: "Jaipur",
    address: "2nd Floor, Pink Square Mall, Govind Marg, Raja Park",
    region: "Jaipur – 302004",
  },
  {
    city: "Patna",
    address: "4th Floor, Maurya Lok Complex, Dak Bungalow Road",
    region: "Patna – 800001",
  },
  {
    city: "Bhopal",
    address: "3rd Floor, DB City Corporate Park, MP Nagar Zone-1",
    region: "Bhopal – 462011",
  },
];

export default function OurLocations() {
  return (
    <section className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <Text
            variant="h3"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Our Locations
          </Text>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {LOCATIONS_DATA.map((loc, index) => (
            <div
              key={index}
              className="relative bg-[#121212] rounded-xl p-4 sm:p-5 border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D094]/10 border border-[#00D094]/20 flex items-center justify-center text-[#00D094] group-hover:scale-110 transition-transform">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                    Office 0{index + 1}
                  </span>
                </div>

                {/* City Title */}
                <Text
                  variant="h3"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-2 group-hover:text-[#00D094] transition-colors"
                >
                  {loc.city}
                </Text>

                {/* Address Details */}
                <div className="space-y-0.5 text-zinc-400 text-xs leading-relaxed mb-4">
                  <p>{loc.address}</p>
                  <p className="font-semibold text-zinc-200">{loc.region}</p>
                </div>
              </div>

              {/* Bottom Indicator */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-medium text-[#00D094]">
                <MapPin className="w-3 h-3" />
                <span>Verified Corporate Hub</span>
              </div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
