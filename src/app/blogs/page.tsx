import { Metadata } from "next";
import Hero from "./Hero";
import ComingSoon from "./ComingSoon";
import TopicsPreview from "./TopicsPreview";
import CTA from "./CTA";

export const metadata: Metadata = {
  title: "Blogs & News | Money King IT Solutions",
  description: "The Money King IT Solutions blog is launching soon. Discover future insights on AI, cybersecurity, cloud computing, software development, and digital transformation.",
  keywords: ["Technology Blog", "IT News", "Artificial Intelligence", "Cyber Security", "Cloud Computing", "Software Development", "Digital Transformation", "Business Technology"]
};

export default function BlogsPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <ComingSoon />
      <TopicsPreview />
      <CTA />
    </main>
  );
}