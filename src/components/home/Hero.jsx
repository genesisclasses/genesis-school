import React from 'react'
import bannerImage from '../../assets/banner.png'; 
import centralLogo from '../../assets/Logo.svg';
import Banner from '../../assets/banner.png'
const Hero = () => {
  return (
    <div style={{
              backgroundImage: `url(${Banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '90vh',
              width: '100%'
            }} className='mt-[-70px] pt-[220px]'>  {/* Hero Text Content (Centered) */}
            <div className="relative z-10 text-center text-white p-4 max-w-7xl mx-auto">
              <img 
                className="mx-auto h-28 w-auto mb-5 drop-shadow-lg" 
                src={centralLogo} 
                alt="Genesis School Crest" 
              />
              
              {/* Kameron: Primary Title */}
              <h1 className="text-5xl tracking-wide text-[48px] font-extrabold mb-3 leading-tight  ">The Genesis School</h1>
              
              {/* Lato: Subtitle (Large Text) */}
              {/* <h2 className="text-xl font-normal tracking-wider mb-6 italic   "></h2> */}
              
              {/* Kameron: Tagline */}
              <h1 className="text-[48px] tracking-wide font-extrabold mb-5 leading-tight  ">
              Excellence in Education, Excellence in Life
              </h1>
              
              {/* Lato: Description (Para) */}
              <p className="max-w-5xl mx-auto text-base mb-8 font-light leading-relaxed px-2   ">
                From the first step in pre-primary to the final years of senior secondary, we guide every learner with a world-class curriculum, expert faculty, Olympiad and competitive exam training, and holistic support that ensures success in higher education and beyond.
              </p>
              
              {/* Lato: Button Text (Large Text) */}
              <button 
                className="bg-amber-500 text-[#001f3f] font-semibold px-8 py-3 rounded-4xl text-lg hover:bg-amber-400 transition duration-200 shadow-xl   "
              >
                Book Campus Tour
              </button>
            </div></div>
  )
}

export default Hero