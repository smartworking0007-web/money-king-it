import Hero from "./Hero";
import FAQCategories from "./FAQCategories";
import FAQAccordion from "./FAQAccordion";
import PopularQuestions from "./PopularQuestions";
import CTA from "./CTA";

export const metadata = {
  title: "FAQs | Money King IT Solutions",
  description: "Find answers to frequently asked questions about software development, AI, cloud services, cybersecurity, CRM, ERP, and support.",
  keywords: ["FAQ", "Frequently Asked Questions", "Software Development FAQ", "AI FAQ", "Cyber Security FAQ", "Cloud Services FAQ", "CRM FAQ", "ERP FAQ"]
};

export default function FAQPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <FAQCategories />
      <FAQAccordion />
      <PopularQuestions />
      <CTA />
    </main>
  );
}