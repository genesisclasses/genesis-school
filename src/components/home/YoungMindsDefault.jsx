'use client';
import React from "react";

import "@/components/css/YoungMinds.css";

import { glassBoxes } from '@/data/young-mind';

const cardStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 17px',
  gap: '10px',
  position: 'relative',
  width: '100%',
  maxWidth: '280px',
  minWidth: '0',
  height: '170px',
  background: 'rgba(255, 255, 255, 0.2)',
  border: '1px solid #EFEFEF',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  borderRadius: '8px',
};

const textBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
};

const YoungMindsDefault = () => (
  <div
  className={
    `youngminds-container w-full relative
    bg-no-repeat
    bg-[url('https://res.cloudinary.com/dluulfzrc/image/upload/v1762405585/young-mind-bg-480_hepmhp.svg')] bg-contain bg-bottom
    lg:bg-[url('https://res.cloudinary.com/dluulfzrc/image/upload/v1762405585/young-mind-bg_jqlaka.svg')] lg:bg-cover`
  }
>
  <style jsx>{`
  .youngminds-container {
        background-position: center top -50px !important;
      }
      @media (max-width: 1440px) {
      .youngminds-container {
        background-position: center top 0px !important;
      }
    }
    @media (max-width: 1024px) {
      .youngminds-container {
        background-position: center top 0px !important;
      }
    }
      @media (max-width: 425px) {
      .youngminds-container {
        background-position: bottom -20px left 0px !important;
      }
    }
  `}</style>
    <div className="xl:max-w-[1340px] 2xl:max-w-[1417px] mx-auto px-4 md:px-6 py-14 lg:py-16 xl:mb-20 flex flex-col lg:flex-row items-stretch gap-12">
      {/* Image block */}
      <div className="shrink-0 flex items-center justify-center min-h-[340px]">
        <img
          src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762401431/home-about_rdk9ld.webp"
          alt="Young Minds Grid"
          className="w-[343px] sm:w-[260px] md:w-[400px] lg:w-[300px] xl:w-[450px] 2xl:w-[500px] h-auto"
          draggable={false}
          loading="eager" 
        />
      </div>
      {/* Content + Grid block */}
      <div className="flex-1 2xl:ml-12 flex flex-col justify-center">
        {/* Desktop Title */}
        <h2 className="text-left text-[32px] md:text-[35px] lg:text-[40px] 2xl:text-[48px] font-semibold text-[#002650] mb-6 sm:block hidden">
          Inspiring Young Minds,<br />
          Building Bright Futures
        </h2>
        {/* Mobile Title */}
        <h2 className="text-left text-[32px] md:text-[35px] lg:text-[40px] 2xl:text-[48px] font-semibold text-[#002650] mb-6 sm:hidden block">
          Inspiring Young <br />
          Minds,Building <br />
          Bright Futures
        </h2>
        <p className="text-left text-gray-600 mb-7 text-[16px] sm:text-[18px]">
          At Genesis, we go beyond textbooks to create an environment where every child can learn, grow, and lead with confidence.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-4 lg:gap-x-4 gap-y-4">
          {glassBoxes.map((box, i) => (
            <div
              key={i}
              style={cardStyle}
              className="glass-card hover:scale-[1.025] transition mx-auto"
            >
              <div style={textBox}>
                <span className="youngminds-icon">{box.icon}</span>
                <div className="youngminds-title text-[#333333] text-[18px]">{box.title}</div>
                <div className="youngminds-desc text-[#777777] text-[14px]">{box.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default YoungMindsDefault;
