import { Metadata } from "next";
import Hero from "./Hero";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import OfficeLocations from "./OfficeLocations";
import SupportChannels from "./SupportChannels";
import BusinessHours from "./BusinessHours";
import WhyChooseUs from "./WhyChooseUs";
import PremiumFAQ from "./PremiumFAQ";
import CTA from "./CTA";

export const metadata: Metadata = {
  title: "Contact Us | Money King Software",
  description:
    "Get in touch with our experts for custom software, AI, and cloud solutions.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="space-y-8">
          <ContactInformation />
          <BusinessHours />
        </div>
      </div>
      <OfficeLocations />
      <WhyChooseUs />
      <SupportChannels />
      <PremiumFAQ />
      <CTA />
    </main>
  );
}
