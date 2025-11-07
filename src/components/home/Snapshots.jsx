'use client';
import React, { useEffect, useState, useRef } from 'react';
import Marquee from 'react-fast-marquee';

const snapshotsData = [
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401368/ey4rterrbopejqwvlw1v_v4psoc.webp', alt: 'Art activity' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401365/kagwelcco00jnxbwsrr7_jsw6un.webp', alt: 'Student playing guitar' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401365/jgfsc78ab2zx6flgcopz_hojk5e.webp', alt: 'Painting class' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401370/ryaa0kwf5kwda0cow7ap_zmazpy.webp', alt: 'Group event' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401365/tsiqub1k0aan3382lnha_giw7sc.webp', alt: 'Workshop' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401407/fr3hppfio0sn3q4trkbj_zunnjc.webp', alt: 'Science fair' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401364/ixtpr3likojugbelgkog_pw5uw4.webp', alt: 'Music lesson' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762403876/jm7fyfmhdi22zjohuix6_m64cvt.webp', alt: 'Drama performance' }
];

const Snapshots = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  // Detect screen resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch scroll: enable horizontal scrolling by touch on mobile
  const horizontalScrollStyles = {
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    display: 'flex',
    scrollSnapType: 'x mandatory',
    paddingBottom: 8,
    width: '100%',
  };

  const slideStyle = {
    flex: '0 0 auto',
    scrollSnapAlign: 'start',
    width: 280, // reduce width for small screens
    height: 380,
    marginLeft: 9,
    marginRight: 9,
    background: '#fff',
    overflow: 'hidden',
  };

  return (
    <section className="pt-10 pb-10 box-border w-full bg-white">
      <div className="snapshots-container pl-6 xl:pl-0">
        <div className="w-full mb-5">
          <h2 className="text-[32px] md:text-[42px] xl:text-[48px] font-semibold text-[#1b365d] m-0">
            Snapshots from Campus
          </h2>
          <p className="text-gray-700 text-[16px] md:text-[18px] mt-2 mb-0">
            A glimpse into the activities, experiences, and community that make learning at Genesis dynamic and memorable.
          </p>
        </div>
        {!isMobile ? (
          // Desktop/Tablet Marquee
          <Marquee
            pauseOnHover
            speed={60}
            direction="right"
            gradient={false}
            style={{ width: '100%', gap: '0px' }}
          >
            {snapshotsData.map((snap, idx) => (
              <div
                key={idx}
                className="bg-white overflow-hidden flex-shrink-0 mx-[9px]"
                style={{ width: 360, height: 490 }}
              >
                <img
                  src={snap.imageUrl}
                  alt={snap.alt}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                />
              </div>
            ))}
          </Marquee>
        ) : (
          // Mobile: Touch scrollable horizontal row!
          <div ref={scrollRef} style={horizontalScrollStyles}>
            {snapshotsData.map((snap, idx) => (
              <div
                key={idx}
                style={slideStyle}
                className=""
              >
                <img
                  src={snap.imageUrl}
                  alt={snap.alt}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* ...your responsive <style jsx> for margins as before... */}
      <style jsx>{`
        .snapshots-container {
          width: 100%;
          margin-left: 0;
          margin-right: 0;
          max-width: none;
          transition: all 0.2s;
        }
        @media (min-width: 1440px) and (max-width: 1539px) {
          .snapshots-container {
            margin-left: 40px;
            width: calc(100vw - 40px);
          }
        }
        @media (min-width: 1540px) and (max-width: 2000px) {
          .snapshots-container {
            margin-left: 250px;
            width: calc(100vw - 250px);
          }
        }
        @media (min-width: 2001px) {
          .snapshots-container {
            max-width: 1440px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 48px;
            padding-right: 48px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Snapshots;
