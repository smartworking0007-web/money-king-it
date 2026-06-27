
// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import Image from "next/image";

// interface MiniCounterProps {
//   endValue: number;
//   suffix?: string;
// }

// // 1. Mini Dynamic Counter Segment for Stats Cards
// const MiniCounter: React.FC<MiniCounterProps> = ({ endValue, suffix = "" }) => {
//   const [count, setCount] = useState(1);
//   const elementRef = useRef<HTMLSpanElement>(null);
//   const hasAnimated = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
//           let start = 1;
//           const duration = 1500; 
//           const totalFrames = 45;
//           const increment = (endValue - start) / totalFrames;
//           const frameDuration = duration / totalFrames;

//           const counterInterval = setInterval(() => {
//             start += increment;
//             if (start >= endValue) {
//               setCount(endValue);
//               clearInterval(counterInterval);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, frameDuration);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (elementRef.current) observer.observe(elementRef.current);
//     return () => observer.disconnect();
//   }, [endValue]);

//   return (
//     <span ref={elementRef} className="text-4xl font-semibold text-white">
//       {count}{suffix}
//     </span>
//   );
// };

// export default function JourneyShowcase() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;
      
//       const rect = sectionRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
      
//       if (rect.top <= windowHeight && rect.bottom >= 0) {
//         const totalScrollableArea = rect.height + windowHeight;
//         const currentScrolled = windowHeight - rect.top;
        
//         const progress = Math.min(Math.max(currentScrolled / totalScrollableArea, 0), 1);
//         setScrollProgress(progress);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); 
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const getCardStyle = (index: number) => {
//     const baseRotations = [-20, -10, 0, 10, 20];
//     // Spreading distance is optimized to match the new larger card widths
//     const baseTranslates = [-360, -180, 0, 180, 360]; 
//     const baseYOffsets = [55, 20, 0, 20, 55];

//     const factor = scrollProgress * 2.5;
//     const currentProgress = Math.min(factor, 1);

//     const rotation = baseRotations[index] * currentProgress;
//     const translateX = baseTranslates[index] * currentProgress;
//     const translateY = baseYOffsets[index] * currentProgress;

//     return {
//       transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`,
//       zIndex: 10 + index,
//     };
//   };

//   const dummyImages = [
//     "/about/suffle1.jpeg", 
//     "/about/suffle2.jpeg",
//     "/about/suffle3.jpeg",
//     "/about/suffle4.jpeg",
//     "/about/suffle5.jpeg",
//   ];

//   return (
//     <section 
//       ref={sectionRef} 
//       className="relative w-full min-h-screen bg-[#040809] text-white py-24 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-between overflow-hidden antialiased select-none"
//     >
//       {/* Upper Grid Split - "First Chapter Block" */}
//       <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-start mb-20">
        
//         {/* Left Side Bold Header */}
//         <div className="lg:col-span-5 space-y-4">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
//             First Chapter : The <br className="hidden md:inline" />
//             start of our journey
//           </h2>
//         </div>

//         {/* Right Side Descriptions */}
//         <div className="lg:col-span-7 space-y-12">
//           <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
//             With Task AI, our growing team stayed in sync. AI auto-assigned tasks based on bandwidth and deadlines, focus on shipping, not managing. Our campaigns delivered on time thanks to AI-prioritized sprints and real-time nudges for overdue tasks.
//           </p>

//           {/* Sub-Stats Card Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
//             <div className="bg-[#0b1113] border border-neutral-900/80 rounded-2xl p-6 flex flex-col justify-between min-h-[130px]">
//               <div className="flex items-center justify-between">
//                 <MiniCounter endValue={90} suffix="%" />
//                 <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded-full flex items-center gap-1">
//                   📦 Product
//                 </span>
//               </div>
//               <p className="text-xs text-neutral-500 font-light mt-4">Average selling product</p>
//             </div>

//             <div className="bg-[#0b1113] border border-neutral-900/80 rounded-2xl p-6 flex flex-col justify-between min-h-[130px]">
//               <div className="flex items-center justify-between">
//                 <MiniCounter endValue={40} suffix="+" />
//                 <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded-full flex items-center gap-1">
//                   👥 Team
//                 </span>
//               </div>
//               <p className="text-xs text-neutral-500 font-light mt-4">Expert team members</p>
//             </div>
//           </div>

//           <div className="space-y-6 text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
//             <p>Our campaigns delivered on time thanks to AI-prioritized sprints and real-time nudges for overdue tasks.</p>
//             <p>With Task AI, our growing team stayed in sync. AI auto-assigned tasks based on bandwidth and deadlines, focus on shipping, not managing. Our campaigns delivered on time thanks to AI-prioritized sprints and real-time nudges for overdue tasks.</p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Fan-Out Dynamic Motion Images Container */}
//       {/* Container aspect and sizes increased to prevent clipping of the bigger cards */}
//       <div className="w-full flex justify-center items-center pt-14 pb-32 overflow-visible">
//         <div className="relative w-full max-w-7xl h-[380px] sm:h-[460px] md:h-[500px] flex justify-center items-center overflow-visible">
//           {dummyImages.map((src, index) => (
//             <div
//               key={index}
//               style={getCardStyle(index)}
//               className="absolute w-[180px] sm:w-[260px] md:w-[285px] lg:w-[300px] aspect-[4/5] bg-neutral-900 rounded-[24px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.95)] border border-neutral-800/50 transition-all duration-300 ease-out will-change-transform"
//             >
//               <Image
//                 src={src}
//                 alt={`Shadow Team Member Frame ${index + 1}`}
//                 fill
//                 sizes="(max-w-640px) 180px, (max-w-1024px) 260px, 300px"
//                 className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                 priority={index === 2}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }


"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface MiniCounterProps {
  endValue: number;
  suffix?: string;
}

// 1. Mini Dynamic Counter Segment for Stats Cards (Hydration Fixed)
const MiniCounter: React.FC<MiniCounterProps> = ({ endValue, suffix = "" }) => {
  const [count, setCount] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 1;
          const duration = 1500; 
          const totalFrames = 45;
          const increment = (endValue - start) / totalFrames;
          const frameDuration = duration / totalFrames;

          const counterInterval = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(counterInterval);
            } else {
              setCount(Math.floor(start));
            }
          }, frameDuration);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [endValue, isMounted]);

  // Server render par hum direct target value ya base value safe rakh sakte hain bina mismatch ke
  if (!isMounted) {
    return <span className="text-4xl font-semibold text-white">1{suffix}</span>;
  }

  return (
    <span ref={elementRef} className="text-4xl font-semibold text-white">
      {count}{suffix}
    </span>
  );
};

export default function JourneyShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalScrollableArea = rect.height + windowHeight;
        const currentScrolled = windowHeight - rect.top;
        
        const progress = Math.min(Math.max(currentScrolled / totalScrollableArea, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const getCardStyle = (index: number) => {
    // Agar client mount nahi hua, toh default initial stacked state do
    if (!isMounted) return {};

    const baseRotations = [-20, -10, 0, 10, 20];
    const baseTranslates = [-360, -180, 0, 180, 360]; 
    const baseYOffsets = [55, 20, 0, 20, 55];

    const factor = scrollProgress * 2.5;
    const currentProgress = Math.min(factor, 1);

    const rotation = baseRotations[index] * currentProgress;
    const translateX = baseTranslates[index] * currentProgress;
    const translateY = baseYOffsets[index] * currentProgress;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`,
      zIndex: 10 + index,
    };
  };

  const dummyImages = [
    "/about/suffle1.jpeg", 
    "/about/suffle2.jpeg",
    "/about/suffle3.jpeg",
    "/about/suffle4.jpeg",
    "/about/suffle5.jpeg",
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-[#040809] text-white py-24 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-between overflow-hidden antialiased select-none"
    >
      {/* Upper Grid Split - "First Chapter Block" */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-start mb-20">
        
        {/* Left Side Bold Header */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            First Chapter: The <br className="hidden md:inline" />
            start of our journey
          </h2>
        </div>

        {/* Right Side Descriptions */}
        <div className="lg:col-span-7 space-y-12">
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
            With Money King IT, our specialized tech pods operate in perfect sync. 
            We automatically allocate software engineers and marketing experts based on your sprint deadlines, allowing your agency to focus on shipping premium digital products rather than managing talent overheads.
          </p>

          {/* Sub-Stats Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="bg-[#0b1113] border border-neutral-900/80 rounded-2xl p-6 flex flex-col justify-between min-h-[130px]">
              <div className="flex items-center justify-between">
                <MiniCounter endValue={90} suffix="%" />
                <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded-full flex items-center gap-1">
                  📦 Product
                </span>
              </div>
              <p className="text-xs text-neutral-500 font-light mt-4">Average selling product</p>
            </div>

            <div className="bg-[#0b1113] border border-neutral-900/80 rounded-2xl p-6 flex flex-col justify-between min-h-[130px]">
              <div className="flex items-center justify-between">
                <MiniCounter endValue={50} suffix="+" />
                <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded-full flex items-center gap-1">
                  👥 Team
                </span>
              </div>
              <p className="text-xs text-neutral-500 font-light mt-4">Expert team members</p>
            </div>
          </div>

          <div className="space-y-6 text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
            <p>Our dedicated tech pods ensure your enterprise applications and performance marketing campaigns are delivered on time. </p>
            <p>By deploying custom-built software pods under the Money King IT framework, fast-growing agencies scale operations effortlessly. We structurally protect client trust by delivering flawless technical execution behind the scenes, ensuring your digital products stay secure, compliant, and highly competitive in modern web ecosystems.</p>
          </div>
        </div>
      </div>

      {/* Bottom Fan-Out Dynamic Motion Images Container */}
      <div className="w-full flex justify-center items-center pt-14 pb-32 overflow-visible">
        <div className="relative w-full max-w-7xl h-[380px] sm:h-[460px] md:h-[500px] flex justify-center items-center overflow-visible">
          {dummyImages.map((src, index) => (
            <div
              key={index}
              style={getCardStyle(index)}
              className="absolute w-[180px] sm:w-[260px] md:w-[285px] lg:w-[300px] aspect-[4/5] bg-neutral-900 rounded-[24px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.95)] border border-neutral-800/50 transition-all duration-300 ease-out will-change-transform"
            >
              <Image
                src={src}
                alt={`Shadow Team Member Frame ${index + 1}`}
                fill
                sizes="(max-w-640px) 180px, (max-w-1024px) 260px, 300px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority={index === 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}