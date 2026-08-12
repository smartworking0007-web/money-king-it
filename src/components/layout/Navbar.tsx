"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const servicesMegaData = {
  "Application Programming": {
    subtitle: "Crafting Website, Creating Application, Connecting World.",
    slug: "application-programming",
    points: [
      { name: "Project Implementation", subslug: "project-implementation" },
      { name: "Custom Software Development", subslug: "custom-software-development" },
      { name: "Website Development", subslug: "website-development" },
      { name: "Software Testing", subslug: "software-testing" },
      { name: "eCommerce Development", subslug: "ecommerce-development" },
      { name: "API Development", subslug: "api-development" },
      { name: "Cross-Platform Application Devel...", subslug: "cross-platform-application-development" },
      { name: "Shopify Development", subslug: "shopify-development" },
    ],
  },
  "Performance Marketing": {
    subtitle: "Data-Driven Marketing to Maximize ROI and Brand Scaling.",
    slug: "performance-marketing",
    points: [
      { name: "ROI-Focused SEO Optimization", subslug: "seo-optimization" },
      { name: "PPC Target Conversion Campaigns", subslug: "ppc-campaigns" },
      { name: "Social Media Ads Predictive Models", subslug: "social-media-ads" },
      { name: "Scalable Enterprise Lead Generation", subslug: "lead-generation" },
    ],
  },
  "Mobile App Development": {
    subtitle: "Native and Hybrid high-performance mobile architectures.",
    slug: "mobile-app-development",
    points: [
      { name: "Native iOS App Architectures", subslug: "ios-app-development" },
      { name: "Enterprise Grade Android Systems", subslug: "android-app-development" },
      { name: "Flutter High-Fidelity App Engines", subslug: "flutter-apps" },
      { name: "React Native Module Packaging", subslug: "react-native" },
    ],
  },
  "Cyber Security": {
    subtitle: "Enterprise grade proactive security algorithms monitoring.",
    slug: "cyber-security",
    points: [
      { name: "Vulnerability Assessment & Audit Scans", subslug: "vulnerability-assessment" },
      { name: "Exploit Penetration Testing Frameworks", subslug: "penetration-testing" },
      { name: "Instant Automated Incident Isolation", subslug: "incident-response" },
      { name: "Cloud Infrastructure Compliance Validation", subslug: "cloud-security" },
    ],
  },
  "Data Management": {
    subtitle: "High scale relational data models warehousing strategies.",
    slug: "data-management",
    points: [
      { name: "Enterprise Data Warehousing Architecture", subslug: "data-warehousing" },
      { name: "Big Data Realtime Analytics Pipelines", subslug: "big-data-analytics" },
      { name: "Zero-Downtime Database Migration Engine", subslug: "database-migration" },
      { name: "Strict Governance & Structural Data Security", subslug: "data-governance" },
    ],
  },
  "Customer Relationship Management (CRM)": {
    subtitle: "Custom customer management workflows development.",
    slug: "crm",
    points: [
      { name: "Hubspot Pipeline Integration", subslug: "hubspot-integration" },
      { name: "Salesforce Custom Customization", subslug: "salesforce-customization" },
      { name: "Custom UI Lead Management Panels", subslug: "custom-crm-portals" },
    ],
  },
  "Enterprise Resource Planning (ERP)": {
    subtitle: "Automating organizational infrastructure tasks securely.",
    slug: "erp",
    points: [
      { name: "Supply Chain Operations Modules", subslug: "supply-chain-systems" },
      { name: "HR Management Systems & Portals", subslug: "hr-management-portals" },
      { name: "Financial Automation Ledgers", subslug: "financial-modules-integration" },
    ],
  },
  "Artificial Intelligence": {
    subtitle: "Next Gen Deep Learning and LLM Fine-Tuning Models.",
    slug: "artificial-intelligence",
    points: [
      { name: "Generative AI System Integrations", subslug: "gen-ai-integrations" },
      { name: "Predictive Analytics & Forecasting", subslug: "predictive-analytics" },
      { name: "NLP Classification Architectures", subslug: "nlp-architectures" },
      { name: "Custom LLM Weight Tuning Pipelines", subslug: "custom-llm-training" },
    ],
  },
  "Managed Cloud Services": {
    subtitle: "AWS, Azure and GCP DevOps structural management.",
    slug: "managed-cloud-services",
    points: [
      { name: "Cloud Infrastructure Auto-Scaling", subslug: "cloud-infrastructure-scaling" },
      { name: "Continuous CI/CD Automation Pipelines", subslug: "ci-cd-pipeline-setup" },
      { name: "Kubernetes Microservices Mesh Control", subslug: "kubernetes-clustering" },
    ],
  },
};

type MegaKeys = keyof typeof servicesMegaData;

export default function Navbar() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState<MegaKeys | null>(null);
  const [activeTab, setActiveTab] = useState<MegaKeys>("Application Programming");
  
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMainTabClick = (tabKey: MegaKeys) => {
    setActiveTab(tabKey);
  };

  const handleSubItemClick = (slug: string, subslug: string) => {
    setIsMegaOpen(false);
    setIsMobileMenuOpen(false);

    router.push(`/services/${slug}/${subslug}`);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950 border-b border-zinc-800">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-black text-emerald-400 shrink-0 select-none no-underline">
          MONEY KING IT
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-8 text-zinc-300 font-medium ml-auto mr-8">
          <li>
            <Link href="/" className="hover:text-emerald-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-emerald-400 transition">
              About
            </Link>
          </li>

          {/* SERVICES MEGA DROPDOWN (DESKTOP) */}
          <li ref={dropdownRef} className="relative py-2">
            <button
              onClick={() => setIsMegaOpen(!isMegaOpen)}
              className={`hover:text-emerald-400 transition cursor-pointer flex items-center gap-1 bg-transparent border-none text-zinc-300 font-medium focus:outline-none select-none ${isMegaOpen ? "text-emerald-400" : ""}`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isMegaOpen ? "rotate-180 text-emerald-400" : ""}`}
              />
            </button>
            {isMegaOpen && (
              <div
                className="absolute top-full -left-115 md:-left-147.5 lg:-left-172.5 mt-3 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-100 flex overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200"
                style={{ width: "940px", height: "490px" }}
              >
                {/* Left Sidebar Main Tabs */}
                <div className="w-[38%] bg-slate-50/90 border-r border-slate-100 p-4 flex flex-col space-y-1 overflow-y-auto">
                  {Object.keys(servicesMegaData).map((tabName) => {
                    return (
                      <button
                        key={tabName}
                        onClick={() => handleMainTabClick(tabName as MegaKeys)}
                        onMouseEnter={() => setActiveTab(tabName as MegaKeys)}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer focus:outline-none bg-transparent border-none text-slate-600 hover:bg-slate-100"
                        style={{
                          backgroundColor: activeTab === tabName ? "rgba(45, 106, 106, 0.1)" : "",
                          color: activeTab === tabName ? "#2D6A6A" : "",
                        }}
                      >
                        <span className="truncate pr-2">{tabName}</span>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-opacity ${activeTab === tabName ? "opacity-100 text-[#2D6A6A]" : "opacity-0"}`}
                        />
                      </button>
                    );
                  })}
                </div>
                {/* Right Sub-Items Interactive Panel */}
                <div className="w-[62%] p-8 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 text-left">
                      {activeTab}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 mb-6 font-normal tracking-wide text-left">
                      {servicesMegaData[activeTab].subtitle}
                    </p>
                    <div className="w-full h-px bg-slate-100 mb-6" />
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-left">
                      {servicesMegaData[activeTab].points.map(
                        (point, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSubItemClick(
                                servicesMegaData[activeTab].slug,
                                point.subslug,
                              )
                            }
                            className="flex items-center space-x-2 text-xs md:text-sm text-slate-600 font-medium hover:text-[#2D6A6A] transition-colors bg-transparent border-none text-left w-full focus:outline-none group/item cursor-pointer"
                            style={{ cursor: "pointer" }}
                          >
                            <span className="w-1.5 h-1.5 bg-slate-300 group-hover/item:bg-teal-500 rounded-full shrink-0 transition-colors" />
                            <span className="truncate">{point.name}</span>
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between mt-auto">
                    <div className="text-left">
                      <span className="block text-xs md:text-sm font-bold text-slate-800">
                        Growth Unlock{" "}
                        <span className="text-red-500 mx-1">•</span> Innovation
                        Delivered
                      </span>
                    </div>
                    <Link
                      href={`/services/${servicesMegaData[activeTab].slug}`}
                      onClick={() => setIsMegaOpen(false)}
                      className="bg-[#2D6A6A] hover:bg-[#1E4D4D] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center space-x-1.5 transition-all"
                    >
                      <span>Find Out More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link href="/industries" className="hover:text-emerald-400 transition">
              Campuses
            </Link>
          </li>
          <li>
            <Link href="/insights" className="hover:text-emerald-400 transition">
              Insights
            </Link>
          </li>
        </ul>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          href="/contact"
          className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-zinc-900 px-5 py-2 rounded-full font-bold transition text-center text-sm"
        >
          Contact Us
        </Link>

        {/* MOBILE MENU TRIGGER BUTTON (Only visible on mobile screens) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="block md:hidden text-zinc-300 hover:text-emerald-400 transition focus:outline-none bg-transparent border-none cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* RESPONSIVE MOBILE DRAWER MENU */}
      {isMobileMenuOpen && (
        <div className="block md:hidden w-full bg-zinc-950 border-t border-zinc-900 max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-5 duration-300">
          <div className="px-6 py-6 flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-zinc-300 font-semibold text-base py-2 border-b border-zinc-900 block hover:text-emerald-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-zinc-300 font-semibold text-base py-2 border-b border-zinc-900 block hover:text-emerald-400"
            >
              About
            </Link>

            {/* MOBILE ACCORDION FOR SERVICES */}
            <div className="border-b border-zinc-900 py-2">
              <button
                onClick={() => setMobileActiveTab(mobileActiveTab ? null : "Application Programming")}
                className="w-full flex items-center justify-between text-zinc-300 font-semibold text-base bg-transparent border-none text-left focus:outline-none py-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileActiveTab ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              {mobileActiveTab && (
                <div className="mt-3 pl-2 space-y-4 animate-in fade-in duration-200">
                  {Object.keys(servicesMegaData).map((category) => {
                    const data = servicesMegaData[category as MegaKeys];
                    return (
                      <div key={category} className="space-y-2 bg-zinc-900/40 p-3 rounded-xl border border-zinc-900">
                        <span className="block text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          {category}
                        </span>
                        <div className="grid grid-cols-1 gap-2 pt-1">
                          {data.points.map((point, index) => (
                            <button
                              key={index}
                              onClick={() => handleSubItemClick(data.slug, point.subslug)}
                              className="w-full text-left bg-transparent border-none text-zinc-400 hover:text-white transition-colors py-1.5 text-xs font-medium flex items-center gap-2 focus:outline-none"
                            >
                              <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                              <span className="truncate">{point.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/industries"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-zinc-300 font-semibold text-base py-2 border-b border-zinc-900 block hover:text-emerald-400"
            >
              Campuses
            </Link>
            <Link
              href="/insights"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-zinc-300 font-semibold text-base py-2 border-b border-zinc-900 block hover:text-emerald-400"
            >
              Insights
            </Link>

            {/* MOBILE CONTACT BUTTON */}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-900 py-3 rounded-xl font-bold text-center text-sm transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );   
}