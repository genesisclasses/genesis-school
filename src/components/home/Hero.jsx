import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="hero-section"   // ✅ Required for navbar transparency
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dluulfzrc/image/upload/v1762493016/banner_kahkom.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%'
      }}
      className="
        relative
        flex items-center justify-center
        w-full
        
        min-h-[90vh] sm:min-h-[90vh] lg:min-h-[90vh]
        
      "
    >

      {/* Black opacity overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 text-center text-white px-2 sm:px-4 max-w-7xl mx-auto pb-16 lg:pb-28">
        <Image
          className="mx-auto h-30 sm:h-30 md:h-40 lg:h-36 xl:h-30 2xl:h-50 w-auto  xl:w-120 drop-shadow-lg"
          src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762494438/logo_offgkb.svg"
          alt="Genesis School Crest"
          width={96}
          height={126}
          priority
        />

        <Image
          className="mx-auto w-[295px] md:w-[382px] xl:w-[482px] h-[39px] drop-shadow-lg my-3 md:my-5"
          src="/assets/new-logo.svg"
          alt="New Genesis School Logo"
          width={482}
          height={39}
          priority
        />

        {/* Main Title */}
        <h1 className="text-[32px] sm:text-4xl lg:text-4xl tracking-wide font-extrabold  mb-2 md:mb-2 leading-tight">
          Excellence in Education, Excellence in Life
        </h1>

        {/* Description */}
        <p className="max-w-2xl sm:max-w-xl lg:max-w-4xl mx-auto text-xs sm:text-sm lg:text-base mb-6 md:mb-2  leading-relaxed px-1 tracking-wide">
          From the first step in pre-primary to the final years of senior secondary, we guide every learner
          with a world-class curriculum, expert faculty, Olympiad and competitive exam training, and holistic
          support that ensures success in higher education and beyond.
        </p>

        {/* Action Button */}
        <button
          className="
            bg-[#F8B535]   text-[#001f3f] border-[#001f3f] font-semibold px-5 sm:px-6 py-4
            rounded-4xl text-sm sm:text-base
            hover:bg-black hover:text-white active:bg-[#333333] transition duration-300 shadow-lg cursor-pointer
          "
        >
          Book Campus Tour
        </button>

        <button
          className="
            bg-white mt-4 sm:mt-3 ml-3 text-[#001f3f] border-[#001f3f] font-semibold px-5 sm:px-6 py-4
            rounded-4xl text-sm sm:text-base
            hover:bg-black hover:text-white active:bg-[#333333] transition duration-300 shadow-lg cursor-pointer
          "
        >
          Take Scholarship Test
        </button>
      </div>

      {/* Bottom Padding for Overlap */}
      <div className="absolute bottom-0 w-full" style={{ height: '42px' }}></div>
    </section>
  )
}

export default Hero
