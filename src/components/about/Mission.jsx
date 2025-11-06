"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// ✅ Your existing screen range hook
function useScreenRange(min, max) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth;
      setMatch(w >= min && w <= max);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [min, max]);

  return match;
}

export default function AboutSection() {
  // ✅ Conditional screen detection
  const isTabletOrMobile = useScreenRange(0, 1023);
  const isDesktop = useScreenRange(1024, 9999);

  return (
    <>
      {/* 💻 Desktop UI (your first design) */}
      {isDesktop && (
 <section className="max-w-[1340px] mx-auto px-4 py-8 xl:py-14 flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 xl:mt-14">

      {/* Mission Card */}
      <div className="bg-[#FFFFFF] shadow-[0_4px_24px_rgba(0,0,0,0.1)] rounded-xl md:rounded-l-xl md:rounded-r-none
                      h-[500px] w-[400px]
                      px-[30px] xl:px-[50px]
                      flex flex-col justify-center text-left">
        <h1 className="text-[22px] font-semibold text-[#002650] mb-3 md:mb-4">
          Mission
        </h1>
        <p className="text-[16px] md:text-[16px] text-[#777777] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
      </div>

      {/* Center Image */}
      <div className="overflow-hidden rounded-3xl shadow-[0_4pxrgba(0,0,0,0.15)]
                     lg:w-[636px] lg:h-[700px] xl:w-[536px] xl:h-[700px] flex items-center justify-center">
        <Image
          src="/assets/about/aboutmission.png"
          alt="The Genesis School"
          width={536}
          height={700}
          className="object-cover "
        />
      </div>

      {/* Vision Card */}
      <div className="bg-[#FFFFFF] shadow-[0_4px_24px_rgba(0,0,0,0.1)] rounded-xl md:rounded-r-xl md:rounded-l-none
                      h-[500px] w-[400px]
                      px-[30px] xl:px-[50px]
                      flex flex-col justify-center text-left">
        <h1 className="text-[22px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold text-[#002650] mb-3 md:mb-4">
          Vision
        </h1>
        <p className="text-[16px] md:text-[16px] text-[#777777] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
      </div>
    </section>

      )}

      {/* 📱 Tablet/Mobile UI (your second design) */}
      {isTabletOrMobile && (
        <section className="max-w-[1340px] mx-auto lg:px-4 py-10 md:py-14 flex flex-col lg:flex-row items-center justify-center relative gap-8 lg:gap-0">

          {/* Mission Card */}
          <div className="relative z-0  shadow-[0_4px_24px_rgba(0,0,0,0.1)]
                          rounded-2xl px-6 py-8 md:px-10 md:py-10 
                          w-[85%] md:w-[643px] lg:w-[400px]
                          flex flex-col justify-center text-left
                          lg:rounded-l-2xl lg:rounded-r-none
                          lg:z-auto">
            <h1 className="text-[22px] font-semibold text-[#002650] mb-4">
              Mission
            </h1>
            <p className="text-[16px] text-[#777777] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Center Image for tablet*/}
          <div className="relative z-10 -my-20 md:-my-28 lg:my-0
                          w-[732px] h-[522px] overflow-hidden
                          flex items-center justify-center md:block hidden">
            <Image
              src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762420168/768-mission_ymems8.webp"
              alt="The Genesis School"
              width={800}
              height={700}
              className="object-cotain mt-16"
            />
          </div>

          {/* Center Image for mobile screen*/}
          <div className="relative z-10 -my-20 md:-my-28 lg:my-0
                          w-[100%] md:h-[422px] lg:w-[536px]
                          rounded-2xl lg:rounded-3xl overflow-hidden
                           flex items-center justify-center block md:hidden">
            <Image
              src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762412294/mission-vision_yvinec.webp"
              alt="The Genesis School"
              width={800}
              height={700}
              className="object-cover w-full h-full mt-5 md:mt-32 lg:mt-0"
            />
          </div>

          {/* Vision Card */}
          <div className="relative z-0  shadow-[0_4px_24px_rgba(0,0,0,0.1)]
                          rounded-2xl px-6 py-8 md:px-10 md:py-10
                          w-[85%] md:w-[643px] lg:w-[400px]
                          flex flex-col justify-center text-left
                          lg:rounded-r-2xl lg:rounded-l-none
                          lg:z-auto mt-6 md:mt-7 lg:mt-0">
            <h1 className="text-[22px] font-semibold text-[#002650] mb-4">
              Vision
            </h1>
            <p className="text-[16px] text-[#777777] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
