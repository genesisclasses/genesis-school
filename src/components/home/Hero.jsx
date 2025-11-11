import React from 'react'
import Image from 'next/image'
// import bannerImage from '../../../../public/assets/banner.png'
// import bannerImage from 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762493016/banner_kahkom.webp'

const Hero = () => {
  return (
    <section
      id="hero-section"   // ✅ Required for navbar transparency
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dluulfzrc/image/upload/v1762493016/banner_kahkom.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh', // Responsive minimum for mobile
        width: '100%'
      }}
      className="
        relative
        flex items-center justify-center
        w-full
        pt-20 sm:pt-28 lg:pt-40
        pb-14 sm:pb-24 lg:pb-28
        min-h-[70vh] lg:h-[90vh]
        mt-[-70px] lg:-mt-20
      "
    >

      {/* Black opacity overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 text-center text-white px-2 sm:px-4 max-w-7xl mx-auto">
        <Image
          className="mx-auto h-30 sm:h-30 md:h-40 lg:h-36 xl:h-30 2xl:h-50 w-auto  xl:w-120 drop-shadow-lg"
          src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762494438/logo_offgkb.svg"
          alt="Genesis School Crest"
          width={96}
          height={126}
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
            bg-white text-[#001f3f] border-[#001f3f] font-semibold px-5 sm:px-6 py-4
            rounded-4xl text-sm sm:text-base
            hover:bg-amber-400 transition duration-200 shadow-lg
          "
        >
          Book Campus Tour
        </button>
      </div>

      {/* Bottom Padding for Overlap */}
      <div className="absolute bottom-0 w-full" style={{ height: '42px' }}></div>
    </section>
  )
}

export default Hero
