"use client";
import React, { useRef, useState, useEffect } from "react";

const placeholderIcons = {
  academics: "/assets/home/herocards/1.svg",
  athletics: "/assets/home/herocards/2.svg",
  artsCulture: "/assets/home/herocards/3.svg",
  campusLife: "/assets/home/herocards/4.svg",
  arrow: "/assets/home/herocards/arrow.svg",
};

const featureCards = [
  { title: "Academics", iconPath: placeholderIcons.academics },
  { title: "Athletics", iconPath: placeholderIcons.athletics },
  { title: "Arts & Culture", iconPath: placeholderIcons.artsCulture },
  { title: "Campus Life", iconPath: placeholderIcons.campusLife },
];

const Card = ({ title, iconPath }) => (
  <div
    id="herocards-section"
    className="
    flex flex-col bg-white shadow-xl p-6
    transition duration-300 hover:shadow-2xl cursor-pointer
    h-52 sm:h-56 lg:h-58 xl:h-59
    relative z-10 min-w-[260px]
    lg:min-w-[20px] xl:min-w-[240px]  
  "
  >
    <h1 className="xl:text-3xl lg:text-xl font-bold mb-1 text-gray-900">
      {title}
    </h1>
    <div className="flex-1 min-h-[3px]"></div>
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

const Herocard = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Detect active card on scroll (mobile/tablet)
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) setActiveIndex(index);
        });
      },
      {
        root: slider,
        threshold: 0.6,
      }
    );

    slider
      .querySelectorAll(".feature-card")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index) => {
    const slider = scrollRef.current;
    const card = slider.querySelector(`[data-index="${index}"]`);
    if (!card) return;
    slider.scrollTo({
      left: card.offsetLeft - 20,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ✅ Mobile / Tablet Horizontal Scroll */}
      <section className="lg:hidden block -mt-12 mb-6">
        <div
          ref={scrollRef}
          className="
            overflow-x-auto overflow-y-visible no-scrollbar
            snap-x snap-mandatory scroll-smooth
            pb-4
          "
        >
          <div className="flex gap-4 pb-4">
            {featureCards.map((card, i) => (
              <div
                key={card.title}
                data-index={i}
                className={`feature-card snap-start ${
                  i === 0 ? "pl-5" : ""
                } ${i === featureCards.length - 1 ? "pr-5" : ""}`}
              >
                <Card title={card.title} iconPath={card.iconPath} />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ DOT NAVIGATION */}
        <div className="flex justify-center gap-2 mt-2 mb-5">
          {featureCards.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all
                ${
                  activeIndex === i
                    ? "bg-[#09254A] scale-110"
                    : "bg-gray-300"
                }
              `}
            ></button>
          ))}
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
    </>
  );
};

export default Herocard;
