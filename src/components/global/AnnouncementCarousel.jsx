'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const announcements = [
  {
    id: 1,
    icon: '🗓️',
    title: 'UPDATE',
    message: 'The Genesis School students excel at State-Level Science Olympiad 2025.'
  },
  {
    id: 2,
    icon: '🏅',
    title: 'EVENT',
    message: 'Annual Sports Meet 2025 held at The Genesis School Campus.'
  }
];

const ZOOM_REPEAT = 4;
const ZOOM_DURATION = 1200;
const SLIDE_SPEED = 700;

export default function AnnouncementCarousel() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCycles, setZoomCycles] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    let zoomCount = 0;
    let zoomDirection = true;

    const interval = setInterval(() => {
      setIsZoomed(prev => !prev);
      zoomDirection = !zoomDirection;

      if (!zoomDirection) {
        zoomCount++;
        setZoomCycles(zoomCount);
      }

      if (zoomCount >= ZOOM_REPEAT) {
        clearInterval(interval);
        // Move to next slide after a tiny delay
        setTimeout(() => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        }, 30);
      }
    }, ZOOM_DURATION);

    return () => clearInterval(interval);
  }, [currentIndex]);

  /**
   * Handler for Swiper slide change
   * @param {object} swiper - Swiper instance
   */
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
    setIsZoomed(false);
    setZoomCycles(0);
  };

  return (
    <div className="w-full bg-[#DDDDDD] flex justify-center items-center shadow-inner px-1 sm:px-2 h-9 md:h-[30px] max-[400px]:h-[33px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={SLIDE_SPEED}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        style={{ width: '100%' }}
      >
        {announcements.map((item, idx) => (
          <SwiperSlide key={item.id}>
            <motion.div
              animate={{ scale: currentIndex === idx && isZoomed ? 1.15 : 1 }}
              transition={{
                type: 'spring',
                stiffness: 20,
                damping: 14,
                duration: ZOOM_DURATION / 1000,
              }}
              className="flex flex-nowrap items-start sm:items-center justify-center w-full gap-x-1 sm:gap-x-1 max-[400px]:gap-x-0.5 px-2 sm:px-3 md:px-5 max-[400px]:px-1 py-1 sm:py-0 max-[400px]:py-0"
              style={{ minHeight: '24px' }}
            >
              <span className="text-[10px] max-[400px]:text-[11px] sm:text-[20px] md:text-[14px] mt-0.5">{item.icon}</span>
              <p className="font-semibold tracking-wide text-[13px] sm:text-[14px] max-[400px]:text-[12px] text-black -mr-3 sm:mr-px max-[400px]:mr-0 leading-none whitespace-nowrap mt-0.5 text-center">
                {item.title} :
              </p>
              <p
                className="text-[13px] sm:text-[14px] max-[400px]:text-[12px] font-medium tracking-wide wrap-break-words w-[60vw] xs:w-[50vw] sm:w-auto max-[400px]:w-[72vw] leading-tight text-black text-center md:mt-1"
                style={{ whiteSpace: 'normal', lineHeight: '1.17' }}
              >
                {item.message}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
