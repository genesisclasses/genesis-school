import Image from 'next/image'
import Link from 'next/link';

import { Users, ListChecks, } from 'lucide-react'

const AdmissionsSection = () => (
  <section className="relative w-full h-[465px] flex items-center justify-center overflow-hidden py-[30px]">

    {/* Background image */}
    <Image
      src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762493016/banner_kahkom.webp"
      alt="School Banner"
      fill
      priority
      style={{ objectFit: 'cover', objectPosition: 'center 80%', zIndex: 0 }}
    />

    {/* Blue overlay */}
    <div className="absolute inset-0 bg-[#09254a] opacity-70 z-10 pointer-events-none" />

    {/* Content */}
    <div className="relative z-20 flex flex-col items-center md:items-center justify-center w-full text-white text-center md:text-center pt-9 sm:pt-1 px-0 sm:px-1">

      {/* Label */}
      <div className="flex gap-1 items-center mb-2 md:mb-3">
        <Image  alt="Admissions" width={26} height={26} className="mb-1" src="/assets/home/edu.svg" />
        <span className="text-amber-400 text-[10px] sm:text-[18px] font-semibold tracking-wide uppercase">
          ADMISSIONS OPEN
        </span>
      </div>

      {/* Title */}
      <h1 className="
        font-bold
        text-[22px] sm:text-2xl md:text-4xl
        leading-tight
        mb-3 md:mb-4
      ">
        Admissions for <br className="md:hidden" />
        2025-26 are now open!
      </h1>

      {/* Features */}
      <div className="
        flex flex-col md:flex-row
        items-center justify-center
        gap-1 md:gap-8
        mb-5 md:mb-6
        text-[13px] sm:text-sm md:text-base
        opacity-90
      ">
        <div className="flex items-center gap-2">
          <Users size={16} /> Limited seats per grade
        </div>

        <span className="hidden md:block text-white/50 text-xl">|</span>

        <div className="flex items-center gap-2">
          <ListChecks size={16} /> Easy 3-step process
        </div>
      </div>

      {/* Buttons */}
      <div className="
        flex flex-col md:flex-row
        gap-3 md:gap-4
        w-full md:w-auto
        px-5 md:px-0
      ">
      <Link href="/contact"> <button className="
          bg-amber-400 text-[#09254a] font-bold
          rounded-full
          w-full md:w-auto
          py-2.5 md:py-3
          md:px-5
          shadow-md hover:bg-amber-300
          text-sm md:text-base
          transition
        ">
          Apply Now
        </button></Link>
      <Link href="/contact">
        <button className="
          bg-white text-[#09254a] font-bold
          rounded-full
          w-full md:w-auto
          py-2.5 md:py-3
          md:px-5
          shadow-md hover:bg-gray-100
          border border-gray-200
          text-sm md:text-base
          transition
        ">
          Take Scholarship Test
        </button>
        </Link>
      </div>
    </div>
  </section>
);

export default AdmissionsSection;
