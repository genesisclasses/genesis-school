import Image from 'next/image'
import { Users, ListChecks } from 'lucide-react'

const AdmissionsSection = () => (
  <section className="relative w-full h-[465px] flex items-center justify-center overflow-hidden mb-[30px]">
    {/* Background image */}
    <Image
      src="/assets/banner.png"
      alt="School Banner"
      fill
      priority
      style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
    />
    {/* Overlay for blue tint */}
    <div className="absolute inset-0 bg-[#09254a] opacity-70 z-10 pointer-events-none" />

    {/* Content */}
    <div className="relative z-20 flex flex-col items-center justify-center w-full text-white text-center pt-12 sm:pt-16 px-2 sm:px-6">
      {/* Yellow icon and label */}
      <div className="flex gap-1 items-center mb-3">
        <span className="text-amber-400 text-lg mb-1">
         {/* Admission edu.svg icon */}
        <Image
          src="/assets/edu.svg" // If your actual path is /assets/edu.svg, use that path instead
          alt="Admissions Open Icon"
          width={28}
          height={28}
          className="mb-1"
          priority
        />
        </span>
        <span className="text-amber-400 text-2xs font-semibold tracking-wide uppercase">ADMISSIONS OPEN</span>
      </div>

      {/* Main Title */}
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 drop-shadow-lg">
        Admissions for 2025-26 are now open!
      </h1>

      {/* Features row */}
      <div className="flex flex-row items-center justify-center gap-8 mb-6 text-sm sm:text-base">
        <div className="flex items-center gap-2 opacity-80">
          <Users size={16} className="text-white" /> Limited seats per grade
        </div>
        <span className="text-white/50 text-xl">|</span>
        <div className="flex items-center gap-2 opacity-80">
          <ListChecks size={16} className="text-white" /> Easy 3-step process
        </div>
      </div>

      {/* Buttons row */}
      <div className="flex flex-row items-center justify-center gap-4">
        <button className="bg-amber-400 text-[#09254a] font-bold rounded-full px-6 py-3 text-base shadow-md hover:bg-amber-300 transition">
          Apply Now
        </button>
        <button className="bg-white text-[#09254a] font-bold rounded-full px-6 py-3 text-base shadow-md hover:bg-gray-100 border border-gray-200 transition">
          Take Scholarship Test
        </button>
      </div>
    </div>
  </section>
);

export default AdmissionsSection;
