"use client";
import Image from "next/image";

export default function DirectorMessage() {
  return (
    <section className="max-w-[1340px] mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
      {/* LEFT SIDE - IMAGE WITH HEADING OVERLAY INSIDE TOP RIGHT */}
      <div className="relative md:w-[40%] w-full">
        <div className="relative bg-white rounded-lg overflow-hidden">
          {/* Image */}
          <Image
            src="/assets/about/Directorimg.png" // Update this path if needed
            alt="Seema Sharma"
            width={520}
            height={520}
            className="w-full h-auto object-cover"
          />
          {/* Compact top right overlay */}
          <div className="absolute top-4 right-4 bg-black/60 px-5 py-3 rounded-md max-w-[75%]">
            <h2 className="text-white text-[18px] md:text-[20px] font-semibold leading-snug text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - TEXT CONTENT */}
      <div className="md:w-[50%] text-left relative">
        {/* Quote icon */}
        <div className="text-gray-400 text-[42px] font-serif mb-3 leading-none">“</div>
        {/* Paragraph 1 */}
        <p className="text-[14px] text-gray-600 leading-relaxed mb-5 max-w-[650px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
        </p>
        {/* Paragraph 2 */}
        <p className="text-[14px] text-gray-600 leading-relaxed mb-8 max-w-[650px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
        </p>
        {/* Name + Designation */}
        <div>
          <h3 className="text-[15px] font-semibold text-gray-900">Seema Sharma</h3>
          <p className="text-[14px] font-medium text-gray-800">
            (Director) 36+ Years of Delivering Excellence
          </p>
        </div>
      </div>
    </section>
  );
}
