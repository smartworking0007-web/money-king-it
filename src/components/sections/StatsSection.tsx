"use client";

import Text from "@/components/ui/Text";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 16, suffix: "+", label: "Years Of Experience" },
  { number: 1500, suffix: "+", label: "Customers Worldwide" },
  { number: 5000, suffix: "+", label: "Projects Delivered" },
  { number: 20, suffix: "+", label: "Excellence Awards" },
];

export default function StatsSection() {
  // Yeh detect karta hai ki section screen par aaya ya nahi
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,    
  });

  return (
    <section ref={ref} className="bg-[#E5EBEB] py-12 px-4 md:py-20">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header */}
        <div className="mb-10 md:mb-14 px-2">
          <Text variant="label" className="mb-3 block">
            Our Strength in Numbers
          </Text>
          <Text
            variant="h1"
            className="text-[#2D6A6A]! mb-4 text-3xl md:text-6xl"
          >
            Proven Excellence
          </Text>
          <Text
            variant="body"
            className="text-gray-600! max-w-3xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Trusted by clients, proven by projects, and driven by purpose,
            every achievement shapes our identity and strengthens the legacy
            we’re building.
          </Text>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#2D6A6A] text-white py-8 px-4 md:py-10 md:px-6 rounded-2xl shadow-lg border-b-4 border-[#00D094] flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2"
            >
              <Text
                variant="h1"
                className="mb-2 text-4xl! md:text-5xl! leading-none"
              >
                {/* Animation Logic */}
                {inView ? (
                  <CountUp
                    start={1}
                    end={item.number}
                    duration={3} // Animation 3 seconds tak chalegi
                    separator="," // 1,500 mein comma lagane ke liye
                    suffix={item.suffix}
                  />
                ) : (
                  `1${item.suffix}`
                )}
              </Text>

              <Text
                variant="label"
                className="text-xs! md:text-sm! text-emerald-300! tracking-widest! text-center"
              >
                {item.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}