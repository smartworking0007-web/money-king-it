"use client";

import Link from "next/link";
import { Mail, Phone, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const footerData = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/our-services" },
    { label: "Blogs & News", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "FAQs", href: "/faqs" },
    { label: "Support Center", href: "/support-center" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1528] text-gray-400 py-16 font-lexend">
      <div className="max-w-1400px mx-auto px-8 md:px-16 lg:px-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-1 text-3xl font-bold">
              <span className="text-white">Money</span>
              <span className="text-[#4DB6AC]">King</span>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-gray-400">
              <p className="font-semibold text-gray-500 uppercase tracking-wider">
                Head Office :
              </p>
              <p className="max-w-xs">
                Office No. 502, 5th Floor, BKC Corporate Tower, Bandra Kurla
                Complex, Mumbai – 400051
              </p>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-[#4DB6AC]" />
                <a href="mailto:info@moneykingfinancial.com">
                  info@moneykingfinancial.com
                </a>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-[#4DB6AC]" />
                <a href="tel:+9101204206832">+91 1204206832</a>
              </div>
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Company", links: footerData.company },
            { title: "Quick Links", links: footerData.quickLinks },
            { title: "Legal", links: footerData.legal },
          ].map((section) => (
            <div key={section.title} className="space-y-6">
              <div className="text-white font-bold text-sm uppercase border-b-2 border-[#4DB6AC] pb-2 w-fit">
                {section.title}
              </div>
              <ul className="space-y-4">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 hover:text-[#4DB6AC] transition-all text-sm"
                    >
                      <span className="text-[#4DB6AC] text-[8px]">●</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Money King IT Solutions. All Rights
            Reserved.
          </div>

          <div className="flex gap-6 text-gray-400">
            <Link
              href="https://www.facebook.com/people/Money-King-Financial-Services-PVT-LTD/100094636427010/"
              target="_blank"
              className="hover:text-[#4DB6AC] transition-all"
            >
              <FaFacebook size={22} />
            </Link>
            <Link
              href="https://www.instagram.com/money.king.official/"
              target="_blank"
              className="hover:text-[#4DB6AC] transition-all"
            >
              <FaInstagram size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/moneyking/"
              target="_blank"
              className="hover:text-[#4DB6AC] transition-all"
            >
              <FaLinkedin size={22} />
            </Link>
            <Link
              href="https://www.youtube.com/@moneykingf"
              target="_blank"
              className="hover:text-[#4DB6AC] transition-all"
            >
              <FaYoutube size={22} />
            </Link>
            <Link
              href="https://x.com/services9871"
              target="_blank"
              className="hover:text-[#4DB6AC] transition-all"
            >
              <X size={22} />
            </Link>
          </div>
        </div>
      </div> 
    </footer>
  );
}
