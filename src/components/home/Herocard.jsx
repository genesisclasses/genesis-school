// app/(your-route)/Herocard.jsx
"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const placeholderIcons = {
  academics: "/assets/home/herocards/1.svg",
  athletics: "/assets/home/herocards/2.svg",
  artsCulture: "/assets/home/herocards/3.svg",
  campusLife: "/assets/home/herocards/4.svg",
  arrow: "/assets/home/herocards/arrow.svg",
};

// NOTE: hrefs below: same-page anchors start with `#`
// page anchors include the path `/co-curricular#...` (adjust path if your route differs)
const featureCards = [
  { title: "Academics", iconPath: placeholderIcons.academics, href: "#academics-section" },
  { title: "Athletics", iconPath: placeholderIcons.athletics, href: "/co-curricular#events-sports" },
  { title: "Arts & Culture", iconPath: placeholderIcons.artsCulture, href: "/co-curricular#arts-culture" },
  { title: "Campus Life", iconPath: placeholderIcons.campusLife, href: "/co-curricular#campus-section" },
];

const Card = ({ title, iconPath, href, onActivate }) => {
  return (
    <button
      onClick={() => onActivate(href)}
      className="
        flex flex-col bg-white shadow-xl p-6
        transition duration-300 hover:shadow-2xl
        h-52 sm:h-56 lg:h-58 xl:h-59
        relative z-10 min-w-[260px]
        lg:min-w-5 xl:min-w-60
        text-left cursor-pointer
      "
      aria-label={`Go to ${title}`}
    >
      <h1 className="xl:text-3xl lg:text-xl font-bold mb-1 text-gray-900">
        {title}
      </h1>
      <div className="flex-1 min-h-[3px]" />
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
    </button>
  );
};

const Herocard = () => {
  const scrollRef = useRef(null);
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  // ---------- helper: smooth-scroll to element id with offset ----------
  const scrollToId = (id, customOffset) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;

    // attempt to find sticky header height
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    // offset: either custom passed, or headerHeight + spacing (20), or default 120
    const offset = typeof customOffset === "number" ? customOffset : (headerHeight ? headerHeight + 20 : 120);

    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop - offset;

    window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
  };

  // IntersectionObserver for mobile slider
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
      { root: slider, threshold: 0.6 }
    );

    slider.querySelectorAll(".feature-card").forEach((el) => observer.observe(el));
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

  // main activation handler for card clicks
  const handleActivate = async (href) => {
    try {
      // in-page anchor (same page)
      if (href.startsWith("#")) {
        const id = href.slice(1);
        // use our offset-aware scroll
        scrollToId(id);
        return;
      }

      // external page+anchor (e.g. /co-curricular#events-sports)
      if (href.includes("#")) {
        const [path, anchor] = href.split("#");
        // navigate to the page first
        router.push(path);

        // After navigation, give the DOM a moment then scroll to anchor with offset
        // small timeout is pragmatic for App Router pages
        setTimeout(() => {
          scrollToId(anchor);
        }, 150);
        return;
      }

      // fallback: navigate by router (no anchor)
      router.push(href);
    } catch (err) {
      console.error("Navigation error:", err);
      // fallback: simple location assign
      window.location.href = href;
    }
  };

  return (
    <>
      {/* Mobile / Tablet horizontal scroll */}
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
                className={`feature-card snap-start  ${i === 0 ? "pl-5" : ""} ${i === featureCards.length - 1 ? "pr-5" : ""}`}
              >
                <Card {...card} onActivate={handleActivate} />
              </div>
            ))}
          </div>
        </div>

        {/* DOT NAV */}
        <div className="flex justify-center gap-2 mt-2 mb-5">
          {featureCards.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all
                ${activeIndex === i ? "bg-[#09254A] scale-110" : "bg-gray-300"}
              `}
            />
          ))}
        </div>
      </section>

      {/* Desktop grid */}
      <section className="lg:block hidden relative z-10 -mt-16 sm:-mt-20 lg:-mt-24 px-2 sm:px-6 lg:px-8 mb-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 sm:gap-6">
            {featureCards.map((card) => (
              <Card key={card.title} {...card} onActivate={handleActivate} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Herocard;
