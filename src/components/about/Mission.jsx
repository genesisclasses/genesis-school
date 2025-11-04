"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-[1340px] mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">

      {/* Mission Card */}
      <div className="bg-[#FFFFFF] shadow-[0_4px_24px_rgba(0,0,0,0.1)] rounded-xl md:rounded-l-xl md:rounded-r-none
                      h-[370px] md:h-[500px] w-full md:w-[400px]
                      px-6 py-8 md:px-[50px] md:py-[50px]
                      flex flex-col justify-center text-left">
        <h1 className="text-[22px] md:text-[22px] font-semibold text-[#002650] mb-3 md:mb-4">
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
      <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_4pxrgba(0,0,0,0.15)]
                      w-full md:w-[536px] h-[350px] md:h-[700px] flex items-center justify-center">
        <Image
          src="/assets/about/aboutmission.png"
          alt="The Genesis School"
          width={536}
          height={700}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Vision Card */}
      <div className="bg-[#FFFFFF] shadow-[0_4px_24px_rgba(0,0,0,0.1)] rounded-xl md:rounded-r-xl md:rounded-l-none
                      h-[370px] md:h-[500px] w-full md:w-[400px]
                      px-6 py-8 md:px-[50px] md:py-[50px]
                      flex flex-col justify-center text-left">
        <h1 className="text-[22px] md:text-[22px] font-semibold text-[#002650] mb-3 md:mb-4">
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
  );
}
