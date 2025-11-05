'use client';
import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  {
    title: "15+",
    subtitle: "Years of Establishment",
    description:
      "Founded in 2010; a proven record of outstanding academic results and strong progression to higher education.",
  },
  {
    title: "6,000+",
    subtitle: "Students enrolled",
    description:
      "6,000+ learners follow our integrated curriculum and enrichment pathways, contributing to high student outcomes.",
  },
  {
    title: "500+",
    subtitle: "Faculty & staff members",
    description:
      "A dedicated faculty of 500+ provides specialised instruction and mentoring that underpin high student success.",
  },
  {
    title: "30 - 40",
    subtitle: "Average class size",
    description:
      "Class sizes are kept at 30–40 to ensure focused teaching, swift doubt resolution and measurable academic gains.",
  },
];

const parseNumber = (str) => {
  // Parse the first number from a string
  return parseInt(str.replace(/[^0-9]/g, ''), 10);
};

const formatNumber = (num, original) => {
  const suffix = original.match(/[^\d,]+$/) || '';
  return num.toLocaleString() + suffix;
};

// For the "30 - 40" range, we animate both numbers independently
const parseRange = (str) => {
  const match = str.match(/(\d+)\s*-\s*(\d+)/);
  return match
    ? { start: parseInt(match[1], 10), end: parseInt(match[2], 10) }
    : { start: 0, end: 0 };
};

const SecondSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // 4th stat uses a range, so keep state for two numbers for it
  const [counts, setCounts] = useState([0, 0, 0, { start: 0, end: 0 }]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let animationFrame;
    const duration = 2000;
    const startTime = performance.now();

    const range = parseRange(statsData[3].title);

    const animate = (time) => {
      const elapsed = time - startTime;
      if (elapsed > duration) {
        setCounts([
          parseNumber(statsData[0].title),
          parseNumber(statsData[1].title),
          parseNumber(statsData[2].title),
          { start: range.start, end: range.end },
        ]);
        cancelAnimationFrame(animationFrame);
        return;
      }
      const progress = elapsed / duration;

      setCounts([
        Math.floor(progress * parseNumber(statsData[0].title)),
        Math.floor(progress * parseNumber(statsData[1].title)),
        Math.floor(progress * parseNumber(statsData[2].title)),
        {
          start: Math.floor(progress * range.start),
          end: Math.floor(progress * range.end),
        },
      ]);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [startCount]);

  return (
    <div
      ref={sectionRef}
      className="w-full flex justify-center pb-10 md:pt-10 md:pb-10 lg:border-b lg:border-t border-[#DDDDDD]"
    >
      <div className="max-w-[1340px] w-full px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 lg:gap-x-10 xl:gap-x-20 gap-y-10">
          {statsData.map((item, idx) => (
            <div key={idx} className="flex flex-col text-left">
              <h2 className="text-[54px] md:text-[54px] xl:text-[65px] text-left font-semibold text-[#002650] leading-none">
                {idx < 3
                  ? formatNumber(counts[idx] ?? 0, item.title)
                  : `${counts[3].start} - ${counts[3].end}`}
              </h2>
              <p className="font-medium mb-1 text-[18px] lg:text-[18px] xl:text-[19px] text-[#636363] text-left tracking-wide">
                {item.subtitle}
              </p>
              <p className="text-[#777777] text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-regular leading-5 tracking-wider">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
