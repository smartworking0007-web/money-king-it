"use client";

import Text from "@/components/ui/Text";

const industries = [
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Government",
  "News",
  "Real Estate",
  "Electronics",
  "Green Energy",
  "Travel",
  "Education",
  "Finance",
  "Automobile",
  "Consultancy",
  "Entertainment",
  "Logistics",
  "Hospitality",
  "Telecom",
  "Sports & Fitness",
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#E5EBEB] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <Text
            variant="h1"
            className="text-[#2D6A6A]! mb-4 text-4xl! md:text-6xl!"
          >
            Driving Success in Every Sector We Touch
          </Text>
          <Text
            variant="body"
            className="text-gray-700! max-w-5xl mx-auto text-sm! md:text-lg! leading-relaxed"
          >
            We are a versatile IT company delivering Web development, CRM, ERP,
            Mobile App Development, and Software Development, along with
            branding, SEO, SMO, and SMM, to help businesses grow faster.
          </Text>
        </div>

        {/* Dynamic Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {industries.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-linear-to-br from-[#4A7A7A] to-[#2D6A6A]
                text-white 
                py-6 px-3 
                rounded-xl 
                shadow-lg
                flex 
                items-center 
                justify-center 
                border border-white/10
                transition-all
                duration-500
                ease-out
                /* Hover Effects */
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-[#2D6A6A]/50
                /* Flicker/Shimmer Effect on hover */
                hover:animate-pulse
                cursor-pointer
              "
            >
              <Text
                variant="label"
                className="text-white! text-[10px]! md:text-xs! font-bold tracking-wider! text-center uppercase"
              >
                {item}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
