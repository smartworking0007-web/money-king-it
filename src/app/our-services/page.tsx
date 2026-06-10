import Hero from "./Hero";
import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";
import IndustriesWeServe from "./IndustriesWeServe";
import Process from "./Process";
import TechnologyStack from "./TechnologyStack";
import CTA from "./CTA";

export const metadata = {
  title: "Our Services | Money King IT Solutions",
  description: "Explore software development, AI, cybersecurity, cloud, CRM, ERP, and digital transformation services from Money King IT Solutions.",
  keywords: ["IT Services", "Software Development", "Artificial Intelligence", "Cyber Security", "Cloud Services", "CRM", "ERP", "Digital Transformation"]
};

export default function ServicesPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <IndustriesWeServe />
      <Process />
      <TechnologyStack />
      <CTA />
    </main>
  );
}