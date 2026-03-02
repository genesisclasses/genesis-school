import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const videoId = "CujvdBFfftM";
  const mobileBanner = "https://res.cloudinary.com/dluulfzrc/image/upload/v1762493016/banner_kahkom.webp";

  const HeroContent = ({ isMobile = false }) => (
    <div className={`relative z-20 text-center text-white px-2 sm:px-4 max-w-7xl mx-auto ${isMobile ? 'py-20' : ''}`}>
      {/* Crest and logo */}
      <Image
        src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762494438/logo_offgkb.svg"
        alt="Genesis School Crest"
        width={96}
        height={126}
        className="mx-auto h-20 md:h-24 lg:h-30 w-auto drop-shadow-lg"
        priority
      />
      <Image
        src="/assets/new-logo.svg"
        alt="New Genesis School Logo"
        width={482}
        height={39}
        className="mx-auto w-[250px] md:w-[350px] xl:w-[450px] h-auto drop-shadow-lg my-3 md:my-5"
        priority
      />
      {/* Title */}
      <h1 className="text-[24px] sm:text-3xl lg:text-4xl tracking-wide font-extrabold mb-2 leading-tight">
        Excellence in Education, Excellence in Life
      </h1>
      {/* Description */}
      <p className="max-w-2xl sm:max-w-xl lg:max-w-4xl mx-auto text-[10px] sm:text-xs lg:text-sm mb-6 md:mb-5 leading-relaxed px-1 tracking-wide opacity-90 hidden sm:block">
        From the first step in pre-primary to the final years of senior
        secondary, we guide every learner with a world-class curriculum,
        expert faculty, Olympiad and competitive exam training, and holistic
        support that ensures success in higher education and beyond.
      </p>
      {/* Buttons: responsive width */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mt-2">
        <Link
          href="https://youtu.be/CujvdBFfftM"
          target="_blank"
          rel="noopener noreferrer"
          className="
          bg-[#F8B535] text-[#001f3f] border-[#001f3f] font-semibold px-4 py-2 md:px-5 md:py-3
          rounded-4xl text-xs sm:text-sm shadow-lg cursor-pointer
          w-[200px] sm:w-[220px] tracking-wide
          transition duration-300 hover:bg-black hover:text-white active:bg-[#333333]">
          <p>Watch Full Documentation</p>
        </Link>

        <Link
          href="/contact"
          className="
            bg-white text-[#001f3f] border-[#001f3f] font-semibold px-4 py-2 md:px-5 md:py-3
            rounded-4xl text-xs sm:text-sm shadow-lg cursor-pointer
            w-[200px] sm:w-[200px] tracking-wide
            transition duration-300 hover:bg-black hover:text-white active:bg-[#333333]
          "
        >
          <p>Take Scholarship Test</p>
        </Link>
      </div>
    </div>
  );

  return (
    <section id="hero-section" className="relative w-full overflow-hidden">
      {/* Mobile Image Background Container */}
      <div 
        className="md:hidden relative w-full min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${mobileBanner}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <HeroContent isMobile />
      </div>

      {/* Desktop Video Background Container */}
      <div className="hidden md:block relative w-full aspect-video overflow-hidden bg-black">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[1.5]"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&disablekb=1`}
          title="Genesis School Hero Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/45 z-10"></div>

        {/* Hero Content Over Video */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <HeroContent />
        </div>
      </div>
      
      {/* Bottom Padding Decorator */}
      <div
        className="absolute bottom-0 w-full z-30"
        style={{ height: "42px" }}
      ></div>
    </section>
  );
};

export default Hero;
