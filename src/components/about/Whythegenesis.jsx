'use client';
import React, { useRef, useState, useEffect } from "react";

const cards = [
  {
    number: 1,
    title: "Future-Ready Curriculum",
    desc: "Genesis School is committed to providing a nurturing and innovative learning environment where every child feels valued and inspired."
  },
  {
    number: 2,
    title: "Innovative Teaching Methods",
    desc: "Genesis School is committed to providing a nurturing and innovative learning environment where every child feels valued and inspired."
  },
  {
    number: 3,
    title: "Holistic Development",
    desc: "Genesis School is committed to providing a nurturing and innovative learning environment where every child feels valued and inspired."
  },
  {
    number: 4,
    title: "Expert Faculty",
    desc: "Genesis School is committed to providing a nurturing and innovative learning environment where every child feels valued and inspired."
  },
  {
    number: 5,
    title: "Modern Infrastructure",
    desc: "Genesis School is committed to providing a nurturing and innovative learning environment where every child feels valued and inspired."
  },
  {
    number: 6,
    title: "Community Focus",
    desc: "Genesis School is committed to providing a nurturing and innovative learning environment where every child feels valued and inspired."
  }
];

export default function Whythegenesis() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  // Mouse drag scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    const cardWidth = 270 + 24; // card width + gap

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
    }
  };

  // Track active card
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = 270 + 24;
    const currentScroll = scrollRef.current.scrollLeft;
    const currentCard = Math.round(currentScroll / cardWidth);
    setActiveCard(currentCard);
  };

  // Navigation buttons
  const scrollToCard = (index) => {
    const cardWidth = 270 + 24;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  const scrollPrev = () => {
    const newIndex = Math.max(0, activeCard - 1);
    scrollToCard(newIndex);
  };

  const scrollNext = () => {
    const newIndex = Math.min(cards.length - 1, activeCard + 1);
    scrollToCard(newIndex);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="w-full flex flex-col items-center bg-white py-8">
      <div className="max-w-[1340px] w-full px-3">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-[32px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-semibold ">
            <span className="text-[#002650]">Why </span>
            <span className="text-[#F8B535]">The Genesis School?</span>
          </h1>
        </div>
        <div
          ref={scrollRef}
          tabIndex={0}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
          className="
            flex gap-6
            overflow-x-auto
            scrollbar-hide
            snap-x snap-mandatory
            touch-pan-x
            outline-none
            cursor-grab
            select-none
          "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollBehavior: 'smooth'
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`
                flex-shrink-0
                snap-center
                w-[280px]
                max-w-xs h-[280px]
                md:max-w-sm
                rounded-xl
                shadow-md
                border-l-4
                ${idx % 2 === 1
                  ? "bg-yellow-50 border-[#F8B535] "
                  : "bg-gray-100 border-[#002650]"}
                px-6 py-6
                relative
                transition-all duration-300
                hover:shadow-lg
                pointer-events-none
              `}
            >
              <div className="absolute left-6 -op-4">
                <div className="rounded-full bg-white shadow-md  flex items-center justify-center w-10 h-10 font-semibold text-gray-800">
                  {card.number}
                </div>
              </div>
              <h3 className="mt-14 mb-3 font-bold text-lg text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
