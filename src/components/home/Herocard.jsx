import React from 'react';

// Paths for your SVG icons
const placeholderIcons = {
  academics: '/assets/1.svg',
  athletics: '/assets/2.svg',
  artsCulture: '/assets/3.svg',
  campusLife: '/assets/4.svg',
  arrow: '/assets/arrow.svg',
};

// Feature cards data
const featureCards = [
  { title: 'Academics', iconPath: placeholderIcons.academics },
  { title: 'Athletics', iconPath: placeholderIcons.athletics },
  { title: 'Arts & Culture', iconPath: placeholderIcons.artsCulture },
  { title: 'Campus Life', iconPath: placeholderIcons.campusLife },
];

// Card component with SVGs at bottom and tighter spacing
const Card = ({ title, iconPath }) => (
  <div className="
    flex flex-col bg-white shadow-xl rounded-lg p-6
    transition duration-300 hover:shadow-2xl cursor-pointer
    h-52 sm:h-56 lg:h-59
    relative
  ">
    <h1 className="xl:text-3xl lg:text-xl font-bold mb-1 text-gray-900">{title}</h1>
    {/* Small spacer to reduce gap */}
    <div className="flex-1 min-h-[3px] "></div>
    {/* Bottom row: main icon + arrow */}
    <div className="flex flex-row items-end justify-between">
      <img
        src={iconPath}
        alt={`${title} Icon`}
        className="max-h-30 md:max-h-24 w-auto object-contain"
      />
      <img
        src={placeholderIcons.arrow}
        alt="Arrow"
        className="w-9 h-9 ml-2 transition hover:translate-x-1"
      />
    </div>
  </div>
);

// Main section for homepage
const Herocard = () => (
  <section className="
    lg:block hidden
    relative z-10
    -mt-16 sm:-mt-20 lg:-mt-24
    px-2 sm:px-6 lg:px-8 mb-[80px]
  ">
    <div className="max-w-7xl mx-auto">
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-5 sm:gap-6
      ">
        {featureCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            iconPath={card.iconPath}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Herocard;
