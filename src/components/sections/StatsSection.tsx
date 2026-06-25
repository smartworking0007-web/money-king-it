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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-white py-12 px-4 md:py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-10 md:mb-14 px-2">
          <Text variant="label" className="mb-3 block text-black/60">
            Our Strength in Numbers
          </Text>

          {/* Suggested H1 */}
          <Text
            variant="h1"
            className="text-black mb-6 text-3xl md:text-6xl font-extrabold"
          >
            Proven Excellence
          </Text>

          {/* Suggested Meta Description (H3) */}
          <Text
            variant="h3"
            className="text-zinc-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-normal"
          >
            Trusted by clients, proven by projects, and driven by purpose, every
            achievement shapes our identity and strengthens the legacy we’re
            building.
          </Text>
        </div>

        {/* Stats Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black py-8 px-4 md:py-10 md:px-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Text
                variant="h1"
                className="mb-2 text-4xl! md:text-5xl! leading-none font-extrabold"
              >
                {inView ? (
                  <CountUp
                    start={1}
                    end={item.number}
                    duration={3}
                    separator=","
                    suffix={item.suffix}
                  />
                ) : (
                  `1${item.suffix}`
                )}
              </Text>

              <Text
                variant="label"
                className="text-xs! md:text-sm! text-zinc-500 tracking-widest! text-center font-medium"
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
