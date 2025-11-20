// **************************** this component use in below 1024px screen 1023px to 768px screen ******************************** //
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

const YoungMinds768 = () => (
  <div className="youngminds-container w-full relative bg-no-repeat bg-[url('https://res.cloudinary.com/dluulfzrc/image/upload/v1762405678/young-mind-bg-768_njjqt9.svg')] bg-contain bg-bottom">
    <div className="xl:max-w-[1340px] 2xl:max-w-[1417px] h-[880px] mx-auto px-4 md:px-6 py-16 xl:mb-20 flex flex-col gap-7">
      {/* Top: image + heading side by side */}
      <div className="flex flex-row gap-8 items-center">
        {/* Image */}
        <div className="shrink-0 flex items-center justify-center min-h-[340px]">
          <img
            src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762405534/home-about_rdk9ld_mbmj8n.webp"
            alt="Young Minds Grid"
            className="w-[280px] h-auto"
            draggable={false}
            loading="eager"
          />
        </div>
        {/* Heading + desc */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-left text-[42px] font-semibold text-[#002650] mb-2">
            Inspiring Young Minds,
            Building <br /> Bright Futures
          </h2>
          <p className="text-left text-gray-600 mb-3 text-[18px]">
            At Genesis, we go beyond textbooks to create an environment where every child can learn, grow, and lead with confidence.
          </p>
        </div>
      </div>
      {/* Grid, full width below */}
      <div className="w-full mt-0">
        <div className="grid grid-cols-3 gap-x-4 gap-y-4">
          {glassBoxes.map((box, i) => (
            <div
              key={i}
              style={cardStyle}
              className="glass-card hover:scale-[1.025] transition mx-auto"
            >
              <div style={textBox}>
                <span className="youngminds-icon">{box.icon}</span>
                <div className="youngminds-title">{box.title}</div>
                <div className="youngminds-desc">{box.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default YoungMinds768;
