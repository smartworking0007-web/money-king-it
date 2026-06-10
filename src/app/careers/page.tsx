import { Metadata } from "next";
import Hero from "./Hero";
import ComingSoon from "./ComingSoon";
import FutureOpportunities from "./FutureOpportunities";
import CTA from "./CTA";

export const metadata: Metadata = {
  title: "Careers | Money King IT Solutions",
  description: "Explore future career opportunities at Money King IT Solutions. Our careers portal is launching soon with exciting roles in software development, AI, cloud computing, and more.",
  keywords: ["Money King Careers", "IT Jobs", "Software Developer Jobs", "AI Engineer Careers", "Cloud Engineer Jobs", "Cyber Security Careers", "Technology Jobs", "Digital Marketing Careers", "Corporate Careers"]
};

export default function CareersPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <ComingSoon />
      <FutureOpportunities />
      <CTA />
    </main>
  );
}