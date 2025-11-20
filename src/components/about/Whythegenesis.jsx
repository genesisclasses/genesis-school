'use client';
import React, { useRef, useState, useEffect } from "react";

// Card data
const cards = [
  { number: 1, title: "Future-Ready Curriculum", desc: "Our progressive curriculum integrates academics with real-world skills, empowering students to think critically, adapt confidently, and lead responsibly." },
  { number: 2, title: "Expert & Caring Faculty", desc: "A team of passionate educators mentors every child with patience, personal attention, and a deep commitment to excellence." },
  { number: 3, title: "Holistic Development ", desc: "Beyond academics, we nurture creativity, confidence, and character through co-curricular programmes that inspire balanced growth." },
  { number: 4, title: "Culture of Values & Integrity", desc: "Rooted in respect, empathy, and discipline, The Genesis School fosters an environment where learning builds both intellect and integrity." },
  { number: 5, title: "Modern Infrastructure", desc: "Smart classrooms, advanced laboratories, and spacious activity zones provide a stimulating environment for innovation and discovery." },
  { number: 6, title: "Personalised Learning", desc: "We recognise that every child learns differently. Our approach ensures individual attention, guidance, and growth at every step." }
];

// Card styles with responsive width/height
const cardBase =
  "flex-shrink-0 snap-center rounded-xl shadow-md border-l-4 px-6 py-6 relative transition-all duration-300 hover:shadow-lg flex flex-col items-start justify-center text-left";
const cardColors = (idx) =>
  idx % 2 === 1
    ? "bg-[#F8B535]/10 border-[#F8B535]"
    : "bg-[#002650]/10 border-[#002650]";
const cardSize =
  "w-[302px] h-[300px] md:w-[320px] md:h-[340px] lg:w-[352px] lg:h-[350px]";

// Card component
function WhyGenesisCard({ card, idx }) {
  return (
    <div className={`${cardBase} ${cardColors(idx)} ${cardSize} pointer-events-none`}>
      <div className="mb-4">
        <div className="rounded-full bg-white shadow-md flex items-center justify-center w-10 h-10 font-semibold text-gray-800">
          {card.number}
        </div>
      </div>
      <h2 className="mb-3 font-semibold text-[22px] text-[#333333]">{card.title}</h2>
      <p className="text-[#777777] text-[16px]">{card.desc}</p>
    </div>
  );
}

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
    const cardWidth = 352 + 24; // match lg:w-[352px] + gap-6(~24px)
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
    const cardWidth = 352 + 24; // sync with lg:w-[352px]
    const currentScroll = scrollRef.current.scrollLeft;
    const currentCard = Math.round(currentScroll / cardWidth);
    setActiveCard(currentCard);
  };

  // Navigation buttons (for future use if needed)
  const scrollToCard = (index) => {
    const cardWidth = 352 + 24;
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
    <section className="flex flex-col items-center bg-white px-0 py-10 md:py-16">
      <div className="max-w-[1417px] w-full px-4 md:px-6 xl:px-[54px]">
        <div className="flex items-center justify-between mb-2.5">
          <h1 className="text-[32px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-semibold ">
            <span className="text-[#002650] mr-3">Why</span>
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
            <WhyGenesisCard key={card.number} card={card} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
