// src/app/services/application-programming/project-implementation/page.tsx
import React from 'react';
import { Metadata } from 'next';
import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import ServicesGrid from './ServicesGrid';
import ProcessTimeline from './ProcessTimeline';
import MethodologySection from './MethodologySection';
import IndustriesSection from './IndustriesSection';
import TechnologyStack from './TechnologyStack';
import BenefitsSection from './BenefitsSection';
import CaseStudies from './CaseStudies';
import Testimonials from './Testimonials';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import ContactSection from './ContactSection';

export const metadata: Metadata = {
  title: 'Project Implementation Services | Money King IT',
  description: 'Enterprise structural software migrations and application rollouts driven by Money King IT.',
};

export default function ProjectImplementationPage() {
  return (
    <div className="w-full bg-[#E5EBEB] text-zinc-900 flex flex-col pb-24 overflow-x-hidden antialiased">
      <HeroSection />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-28 md:gap-32">
        <div className="-mt-5 md:-mt-32 relative z-20 w-full">
        <OverviewSection />
        </div>
        <ServicesGrid />
        <ProcessTimeline />
        <MethodologySection />
        <IndustriesSection /> 
        <TechnologyStack />
        <BenefitsSection />
        <CaseStudies />
        <Testimonials />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </div>
    </div>
  );
}