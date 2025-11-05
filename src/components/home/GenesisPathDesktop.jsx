'use client';
import React from 'react';
import { genesisCards } from '@/data/genesis-path';

const cardMarginTops = [
  'mt-[30px] md:mt-[24px] lg:mt-[110px] lg:ml-[40px] xl:mt-[150px] xl:ml-[120px]  2xl:mt-[200px] 2xl:ml-[190px]',
  'mt-[16px] md:mt-[0px] lg:mt-[58px] lg:ml-[5px] xl:mt-[80px] xl:ml-[65px] 2xl:mt-[110px] 2xl:ml-[140px]',
  'mt-[16px] md:mt-[0px] lg:mt-[-50px] lg:ml-[10px] xl:mt-[-65px] xl:ml-[30px] 2xl:mt-[-80px] 2xl:ml-[90px]',
];

const GenesisPath = () => {
  return (
    <div className="genesis-path-section relative w-full overflow-x-hidden py-10 xl:min-h-[620px] px-4 lg:px-2">
      {/* Heading */}
      <div className="relative z-10 lg:pt-[-80px] xl:pt-12 2xl:pt-28 3xl:pt-0 xl:pl-32 2xl:pl-[205px] w-[328px] sm:w-[458px] md:w-[500px] lg:w-[500px] xl:w-[650px] 2xl:w-[750px]">
        <h2 className="text-[28px] sm:text-[32px] md:text-[35px] xl:text-[45px] 2xl:text-[48px] font-semibold leading-tight">
          The Genesis Path to <span className="text-[#EE9C00] font-bold">Academic Excellence</span>
        </h2>
        <p className="mt-2 text-gray-600 text-[16px] sm:text-[18px]">
          Where every stage shapes character, wisdom, and purpose.
        </p>
      </div>
      {/* SVG Background */}
      <img
        src="/assets/home/genesis-path/genesis-path-bg.svg"
        alt="Genesis Path"
        className="hidden lg:block w-full h-auto absolute top-0 left-0 z-0 pointer-events-none"
        style={{ objectFit: 'contain', marginTop: '10px' }}
      />

      {/* Responsive X-Large Screen Styles */}
      <style>
        {`
          @media (min-width: 2346px) {
            .card-xl-1 { position: relative; top: 180px; left: 140px; }
            .card-xl-2 { position: relative; top: 150px; left: 70px; }
            .card-xl-3 { position: relative; top: 60px; left: 30px; }
          }
        `}
      </style>

      {/* Responsive min-height for ultrawide screens */}
      <style jsx>{`
        @media (min-width: 1950px) {
          .genesis-path-section {
            min-height: 820px !important;
          }
        }
        @media (min-width: 2200px) {
          .genesis-path-section {
            min-height: 920px !important;
          }
        }
        @media (min-width: 2500px) {
          .genesis-path-section {
            min-height: 1090px !important;
          }
        }
      `}</style>

      {/* Cards Timeline using grid */}
      <div className="relative z-10 w-full xl:h-[550px] grid grid-cols-1 lg:grid-cols-3">
        {genesisCards.map((card, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-start lg:p-6 w-full lg:w-[250px] xl:w-[300px] ${cardMarginTops[idx]} card-xl-${idx + 1}`}
          >
            <h3 className="text-[22px] sm:text-[25px] xl:text-[32px] font-semibold text-left">{card.title}</h3>
            <div className="text-[16px] xl:text-[20px] font-medium text-[#777777] text-left">{card.subtitle}</div>
            {card.hindiText && (
            <div className="text-[16px] xl:text-[16px] font-semibold text-[#777777] mb-0">
              {card.hindiText}
            </div>
          )}
          <div className="text-[14px] xl:text-[16px] text-[#777777] whitespace-pre-line text-justify">
            {card.description}
          </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default GenesisPath;
