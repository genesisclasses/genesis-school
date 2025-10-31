import React from 'react';
// import GenesisPathSVG from '../../assets/home/genesis-path.svg';
import Image from 'next/image';
const genesisCards = [
  {
    title: 'Dhruvshilla',
    subtitle: 'Nursery to 3rd Grade',
    description: `Rooted in the spirit of constancy, Dhruvshilla builds the emotional and intellectual base for every child. Here, curiosity blossoms through joyful learning, play, and imagination — forming values that stay lifelong.`
  },
  {
    title: 'Gyanshila',
    subtitle: '4th to 8th Grade',
    description: `"उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत" Inspired by the Upanishadic call – "Arise, awake, and seek knowledge" – this stage empowers students to think critically, explore widely, and embrace knowledge as a journey, not a destination. Every question is celebrated, every idea nurtured.`
  },
  {
    title: 'Dhruvshilla',
    subtitle: '9th to 12th Grade',
    description: `सम्पाद्य स्वम् तद्वद हि तत्र सम्पद्यम् भूयात् | The final stage transforms insight into action. KarmShilla cultivates discipline, integrity, and determination — guiding students to lead with purpose, wisdom, and confidence in the real world.`
  }
];

// MUCH smaller top margins for close spacing
const cardMarginTops = [
  'mt-[30px] md:mt-[38px] lg:mt-[45px] xl:mt-[150px] 2xl:mt-[] xl:ml-[120px] ',    // Card 1
  'mt-[16px] md:mt-[24px] lg:mt-[35px] xl:mt-[70px] 2xl:mt-[] xl:ml-[65px]',    // Card 2
  'mt-[8px] md:mt-[15px] lg:mt-[23px] xl:mt-[-65px]'     // Card 3
];

const GenesisPath = () => {
  return (
    <div className="relative w-full overflow-x-hidden py-10 min-h-[620px]">
      {/* SVG Background - prevent cropping and adjust top as needed */}
      <Image
        src='/assets/home/genesis-path.svg'
        alt="Genesis Path"
        width={0}
        height={0}
        className="w-full h-auto absolute top-0 left-0 z-0 pointer-events-none"
        style={{ objectFit: 'contain', marginTop: '10px' }} // negative margin if SVG itself is clipped at top
      />

      {/* Heading */}
      <div className="relative z-10 pt-12 pl-12 w-[328px] sm:w-[458px] md:w-[528px] xl:w-[540px]">
        <h2 className="text-[28px] sm:text-[29px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-semibold leading-tight">
          The Genesis Path to <span className="text-[#EE9C00] font-bold">Academic Excellence</span>
        </h2>
        <p className="mt-2 text-gray-600 text-[16px] sm:text-[18px]">Where every stage shapes character, wisdom, and purpose.</p>
      </div>

      {/* Cards Timeline using grid */}
      <div className="relative z-10 w-full h-[510px] grid grid-cols-1 md:grid-cols-3">
        {genesisCards.map((card, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-start p-6 w-full md:w-[300px] ${cardMarginTops[idx]}`}
          >
            <h3 className="text-[32px] font-semibold text-left">{card.title}</h3>
            <div className="text-[20px] font-medium text-[#777777] text-left">
              {card.subtitle}
            </div>
            <div className="text-[16px] text-[#777777] whitespace-pre-line text-justify">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenesisPath;
