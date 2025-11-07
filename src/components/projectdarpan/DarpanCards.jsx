"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DarpanCards() {
  const items = [
    {
      icon: "/assets/projectdarpan/1.svg",
      title: "Emotional Support",
      desc: "We help students express emotions safely.",
    },
    {
      icon: "/assets/projectdarpan/2.svg",
      title: "Open up without fear",
      desc: "A safe space to talk freely without judgement.",
    },
    {
      icon: "/assets/projectdarpan/3.svg",
      title: "Overcome challenges",
      desc: "Guiding students to solve real-life problems.",
    },
    {
      icon: "/assets/projectdarpan/4.svg",
      title: "Rise with confidence",
      desc: "Confidence-building through positive mentoring.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // ✅ Detect lg and up screens for enabling touch animation
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="max-w-7xl w-full px-4">
        <h2 className="text-4xl md:text-4xl lg:text-[40px] xl:text-[48px] font-semibold text-[#0C2738] mb-10">
          The Support System Behind Every Student
        </h2>

        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full
            lg:flex lg:flex-row lg:gap-4
          "
        >
          {items.map((item, i) => {
            const expanded = activeIndex === i;

            return (
              <div
                key={i}
                className={`
                  group relative overflow-hidden 
                  bg-linear-to-b from-[#0026500D] to-[#FFFFFF1A]
                  rounded-2xl shadow-sm border border-[#E8E4DB]
                  p-6 h-[260px] sm:h-[290px] lg:h-[240px] xl:h-[332px]
                  flex flex-col justify-between 
                  transition-all duration-500
                  lg:flex-1
                  ${expanded ? "lg:flex-2" : "lg:flex-1"}
                `}
                // ✅ HOVER animation for desktop
                onMouseEnter={() => isLargeScreen && setActiveIndex(i)}
                onMouseLeave={() => isLargeScreen && setActiveIndex(null)}
                // ✅ TOUCH animation for tablet / touchscreen laptops
                onClick={() => {
                  if (!isLargeScreen) return;
                  setActiveIndex(expanded ? null : i);
                }}
              >
                {/* ICON */}
                <div className="w-[60px] h-[60px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] rounded-full flex items-center justify-center border border-[#E8E4DB]">
                  <Image src={item.icon} alt={item.title} width={26} height={26} />
                </div>

                {/* Title */}
                <p
                  className={`
                    text-[24px] lg:text-[24px] xl:text-[24px] font-medium text-[#333333]
                    lg:transition-all lg:duration-300
                    ${expanded ? "lg:opacity-0" : "lg:opacity-100"}
                  `}
                >
                  {item.title}
                </p>

                {/* Mobile Description */}
                <p
                  className="
                    text-[25px] lg:text-[40px] xl:text-[40px] font-medium
                    text-[#0C2738] lg:text-black 
                    block lg:hidden leading-snug mt-[-58px]
                  "
                >
                  {item.desc}
                </p>

                {/* Desktop description popup */}
                <p
                  className={`
                    hidden lg:block absolute bottom-0 left-0 text-black
                    text-[25px] xl:text-[25px] font-medium p-6 
                    transition-all duration-300
                    ${expanded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
                    w-[390px]
                  `}
                >
                  <span className="font-bold block mb-1">{item.title}</span>
                  <span className="opacity-90">{item.desc}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
