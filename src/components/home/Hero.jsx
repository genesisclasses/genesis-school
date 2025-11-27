import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      id="hero-section"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dluulfzrc/image/upload/v1762493016/banner_kahkom.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
      className="
        relative flex items-center justify-center w-full
        min-h-[95vh] sm:min-h-[90vh]
      "
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10 text-center text-white px-2 sm:px-4 max-w-7xl mx-auto pb-16 lg:pb-28">
        {/* Crest and logo */}
        <Image
          src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762494438/logo_offgkb.svg"
          alt="Genesis School Crest"
          width={96}
          height={126}
          className="mx-auto h-30 w-auto drop-shadow-lg"
          priority
        />
        <Image
          src="/assets/new-logo.svg"
          alt="New Genesis School Logo"
          width={482}
          height={39}
          className="mx-auto w-[295px] md:w-[382px] xl:w-[482px] h-[39px] drop-shadow-lg my-3 md:my-5"
          priority
        />
        {/* Title */}
        <h1 className="text-[32px] sm:text-4xl lg:text-4xl tracking-wide font-extrabold mb-2 leading-tight">
          Excellence in Education, Excellence in Life
        </h1>
        {/* Description */}
        <p className="max-w-2xl sm:max-w-xl lg:max-w-4xl mx-auto text-xs sm:text-sm lg:text-base mb-6 md:mb-5 leading-relaxed px-1 tracking-wide">
          From the first step in pre-primary to the final years of senior secondary, we guide every learner
          with a world-class curriculum, expert faculty, Olympiad and competitive exam training, and holistic
          support that ensures success in higher education and beyond.
        </p>
        {/* Buttons: responsive width */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2">
          <Link
            href="/contact"
            className="
              bg-[#F8B535] text-[#001f3f] border-[#001f3f] font-semibold px-5 py-4
              rounded-4xl text-sm sm:text-base shadow-lg cursor-pointer
              w-[250px] sm:w-[210px]
              transition duration-300 hover:bg-black hover:text-white active:bg-[#333333]
            "
          >
            <p className='text-[16px]'>Book Campus Tour</p>
          </Link>
          <Link
            href="/contact"
            className="
              bg-white text-[#001f3f] border-[#001f3f] font-semibold px-5 py-4
              rounded-4xl text-sm sm:text-base shadow-lg cursor-pointer
              w-[250px] sm:w-[210px]
              transition duration-300 hover:bg-black hover:text-white active:bg-[#333333]
            "
          >
           <p className='text-[16px]'>Take Scholarship Test</p>
          </Link>
        </div>
      </div>
      {/* Bottom Padding */}
      <div className="absolute bottom-0 w-full" style={{ height: '42px' }}></div>
    </section>
  )
}

export default Hero
