"use client";
import Image from "next/image";

export default function DirectorMessage() {
  return (
    <section className="max-w-[1340px] mx-auto px-4 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16">
        {/* LEFT SIDE - IMAGE */}
        <div className="relative w-full lg:w-[45%]">
          <div className=" overflow-hidden">
            <Image
              src="/assets/about/Directorimg.png"
              alt="Seema Sharma"
              width={520}
              height={520}
              className="w-full h-auto object-fill"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Quote Icon + Heading - visible on mobile/iPad, hidden on desktop */}
          <div className="lg:hidden flex flex-col items-start ">
            <Image
              src="/assets/about/Icon.png"
              alt="About Icon"
              width={64}
              height={64}
              className="mb-2 rounded-lg"
            />
            <h2 className="text-[24px] md:text-[34px] mb-3 font-bold text-[#0d1b50] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </h2>
          </div>

          {/* Quote Icon + Heading - visible on desktop only, absolute positioned */}
          <div className="hidden lg:block relative ">
            <Image
              src="/assets/about/Icon.png"
              alt="About Icon"
              width={64}
              height={64}
              className="absolute -left-56 -top-26 rounded-lg"
            />
            <h2 className="text-[24px] font-bold text-[#0d1b50] leading-relaxed relative -left-40 -top-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </h2>
          </div>

          {/* Content paragraphs */}
          <div>
            <p className="text-[18px] text-gray-700 leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
              pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
              aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
              aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>

            <p className="text-[18px] text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
              pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
              aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
              aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>

          {/* Name and Designation */}
          <div className="mt-3 lg:mt-6">
            <h3 className="md:text-[20px] text-[18px]  font-extrabold text-gray-900 mb-1">Seema Sharma</h3>
            <p className="md:text-[18px] text-[16px] font-extrabold text-gray-700">
              (Director) 36+ Years of Delivering Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
