import Hero from "./Hero";
import SupportOptions from "./SupportOptions";
import ResourcesCenter from "./ResourcesCenter";
import FAQSection from "./FAQSection";
import ContactSupport from "./ContactSupport";
import CTA from "./CTA";

export default function SupportCenterPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <SupportOptions />
      <ResourcesCenter />
      <FAQSection />
      <ContactSupport />
      <CTA />
    </main>
  );
}