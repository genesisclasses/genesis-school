import React from 'react';

const placeholderIcons = {
  academics: '/assets/1.svg',
  athletics: '/assets/2.svg',
  artsCulture: '/assets/3.svg',
  campusLife: '/assets/4.svg',
  arrow: '/assets/arrow.svg',
};

const featureCards = [
  { title: 'Academics', iconPath: placeholderIcons.academics },
  { title: 'Athletics', iconPath: placeholderIcons.athletics },
  { title: 'Arts & Culture', iconPath: placeholderIcons.artsCulture },
  { title: 'Campus Life', iconPath: placeholderIcons.campusLife },
];

const Card = ({ title, iconPath }) => (
  <div className="
    flex flex-col bg-white shadow-xl p-6
    transition duration-300 hover:shadow-2xl cursor-pointer
    h-52 sm:h-56 lg:h-58 xl:h-59
    relative z-10
    min-w-[240px] xl:min-w-[240px]  sm:min-w-[260px]
  ">
    <h1 className="xl:text-3xl lg:text-xl font-bold mb-1 text-gray-900">{title}</h1>
    <div className="flex-1 min-h-[3px]"></div>
    <div className="flex flex-row items-end justify-between">
      <img src={iconPath} alt={`${title} Icon`} className="max-h-30 md:max-h-24 w-auto object-contain" />
      <img src={placeholderIcons.arrow} alt="Arrow" className="w-9 h-9 ml-2 transition hover:translate-x-1" />
    </div>
  </div>
);

const Herocard = () => (
  <>
    {/* ✅ Mobile / Tablet Horizontal Scroll */}
    <section className="lg:hidden block -mt-16 mb-10">
  <div
    className="
      overflow-x-auto overflow-y-visible no-scrollbar
      snap-x snap-mandatory scroll-smooth
      pb-6
    "
  >
    <div className="flex gap-4 pb-4">
      {featureCards.map((card, i) => (
        <div
          key={card.title}
          className={`
            snap-start
            ${i === 0 ? "pl-5" : ""}
            ${i === featureCards.length - 1 ? "pr-5" : ""}
          `}
        >
          <Card title={card.title} iconPath={card.iconPath} />
        </div>
      ))}
    </div>
  </div>
</section>


    {/* ✅ Desktop Grid */}
    <section
      className="
        lg:block hidden
        relative z-10
        -mt-16 sm:-mt-20 lg:-mt-24
        px-2 sm:px-6 lg:px-8 mb-[80px]
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 sm:gap-6">
          {featureCards.map(card => (
            <Card key={card.title} title={card.title} iconPath={card.iconPath} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Herocard;
