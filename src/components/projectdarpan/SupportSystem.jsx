'use client';
import React, { useState } from 'react';

const supportCards = [
  {
    icon: '/assets/projectdarpan/1.svg',
    title: 'Emotional Support',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. ',
    gradient: 'bg-gradient-to-br from-[#002650]/[0.1] to-[#FFFFFF]/[0.1]',           
    hoverGradient: 'bg-gradient-to-br from-[#fff8e4] to-[#fffdf7]',       
  },
  {
    icon: '/assets/projectdarpan/2.svg',
    title: 'Open up without fear',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
    gradient: 'bg-gradient-to-br from-[#002650]/[0.1] to-[#FFFFFF]/[0.1]',
    hoverGradient: 'bg-gradient-to-br from-[#fff8e4] to-[#fffdf7]',
  },
  {
    icon: '/assets/projectdarpan/3.svg',
    title: 'Overcome challenges',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
    gradient: 'bg-gradient-to-br from-[#002650]/[0.1] to-[#FFFFFF]/[0.1]',
    hoverGradient: 'bg-gradient-to-br from-[#fff8e4] to-[#fffdf7]',
  },
  {
    icon: '/assets/projectdarpan/4.svg',
    title: 'Rise with confidence',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
    gradient: 'bg-gradient-to-br from-[#002650]/[0.1] to-[#FFFFFF]/[0.1]',
    hoverGradient: 'bg-gradient-to-br from-[#fff8e4] to-[#fffdf7]',
  },
];

function SupportSystem() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="max-w-[1417px] mx-auto px-4 pb-16 md:pt-16 md:pb-16">
      <h2 className="text-[32px] md:text-[40px] xl:text-[48px] font-semibold text-[#002650] text-left mb-12">
        The Support System Behind Every Student
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {supportCards.map((card, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={idx}
              className={`
                p-6 rounded-3xl shadow-xl transition-all duration-300 border-r border-b border-white
                ${isHovered ? card.hoverGradient : card.gradient}
              `}
              style={{ minHeight: 260 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex justify-start mb-4">
                <span
                  className={`
                    inline-block rounded-full border border-[#e4e7ec] shadow-md
                   
                  `}
                  style={{
                    width: 80, height: 80,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10"
                  />
                </span>
              </div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-2">{card.title}</h3>
              <p className="text-[#555555] leading-relaxed">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SupportSystem;
