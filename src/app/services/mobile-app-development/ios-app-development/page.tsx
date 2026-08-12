// File Name: page.tsx

import React from "react";
import Image from "next/image";
import IosDevelopmentSolutions from "./iosDevelopmentSolutions";
import IndustriesWeCaterTo from "../../application-programming/cross-platform-application-development/IndustriesWeCaterTo";
import StatsCircularSection from "@/app/industries/StatsCircularSection";
import TrustedWebsiteDesignHero from "../../application-programming/project-implementation/TrustedWebsiteDesignHero";
import FaqSection from "@/app/industries/FaqSection";

export default function Page() {
  return (
    <section className="relative w-full bg-black overflow-hidden p-0 m-0">
      <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
        <Image
          src="/ios/1.png"
          alt="ios application with money king"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <IosDevelopmentSolutions />
      <IndustriesWeCaterTo />
      <StatsCircularSection />
      <TrustedWebsiteDesignHero />
      <FaqSection />
    </section>
  );
}
