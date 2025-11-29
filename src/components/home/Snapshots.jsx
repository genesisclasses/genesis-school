'use client';
import React, { useEffect, useState, useRef } from 'react';
import Marquee from 'react-fast-marquee';

const snapshotsData = [
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764237860/DSC_9979_ezxfyd.webp', alt: 'Art activity' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764239358/wdzezrlhxatytc2llgcl_p45rwn.webp', alt: 'Student playing guitar' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764239361/y61lsune3zppynrfgteo_j81krg.webp', alt: 'Painting class' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764239354/fd7et7facilpcou2zuqk_wi4vpi.webp', alt: 'Group event' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401365/tsiqub1k0aan3382lnha_giw7sc.webp', alt: 'Workshop' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401407/fr3hppfio0sn3q4trkbj_zunnjc.webp', alt: 'Science fair' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764239359/wtmzlydlnqijpkfcblty_rs0dsp.webp', alt: 'Music lesson' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401364/ixtpr3likojugbelgkog_pw5uw4.webp', alt: 'topper' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764239354/hnwl13wwxxcfxq8q6goy_vpj49e.webp', alt: 'Drama performance' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764239356/suxbxs7ckzzhagbb1ovs_umqkzo.webp', alt: 'Drama performance' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764239355/oxylpj4yifla6gwc0lzb_w2stjo.webp', alt: 'Drama performance' },
  { imageUrl: 'https://res.cloudinary.com/dluulfzrc/image/upload/v1764239357/uiwxmaxiqkedix5fqpuu_stszmf.webp', alt: 'Drama performance' }
];

const Snapshots = () => {
  // isMobile true when screen < 768 (mobile / small tablet)
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const total = snapshotsData.length;
  const slideWidth = 360; // desktop slide width for marquee
  const duplicated = [...snapshotsData, ...snapshotsData]; // duplicated for marquee to avoid jump
  const mobileItems = snapshotsData; // don't animate on mobile; single list is fine

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImgLoad = () => {
    setImagesLoaded((s) => s + 1);
  };

  return (
    <section className="pb-10 lg:pt-16 lg:pb-16 box-border w-full bg-white">
      <div className="snapshots-container pl-4 md:pl-6 xl:pl-0">
        <div className="w-full mb-5">
          <h2 className="text-[32px] md:text-[42px] xl:text-[48px] font-semibold text-[#1b365d] m-0">
            Snapshots from Campus
          </h2>
          <p className="text-gray-700 text-[16px] md:text-[18px] mt-2 mb-0">
            A glimpse into the activities, experiences, and community that make learning at Genesis dynamic and memorable.
          </p>
        </div>

        {/* For screens >= 768px: use Marquee (auto-slide). */}
        {!isMobile ? (
          <Marquee
            pauseOnHover
            pauseOnClick
            speed={80}
            direction="right"
            gradient={false}
            style={{ width: '100%', gap: '0px' }}
            // start marquee after initial images loaded to reduce jump risk
            play={imagesLoaded >= total}
          >
            {duplicated.map((snap, idx) => (
              <div
                key={idx}
                className="bg-white overflow-hidden shrink-0 mx-[9px]"
                style={{ width: slideWidth, height: 490, flex: '0 0 auto' }}
              >
                <img
                  src={snap.imageUrl}
                  alt={snap.alt}
                  width={slideWidth}
                  height={490}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                  loading="eager"
                  onLoad={handleImgLoad}
                />
              </div>
            ))}
          </Marquee>
        ) : (
          /* For mobile/tablet (<768): NO auto-slide. Pure touch-scrollable row with scroll-snap. */
          <div
            className="touch-row"
            style={{
              display: 'flex',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              gap: 18,
              paddingBottom: 8,
              scrollSnapType: 'x mandatory',
              // keep height consistent
            }}
          >
            {mobileItems.map((snap, idx) => (
              <div
                key={idx}
                style={{
                  flex: '0 0 auto',
                  width: 280,
                  height: 380,
                  scrollSnapAlign: 'start',
                  background: '#fff',
                  overflow: 'hidden',
                  borderRadius: 6,
                }}
                className="touch-slide"
              >
                <img
                  src={snap.imageUrl}
                  alt={snap.alt}
                  width={280}
                  height={380}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                  onLoad={handleImgLoad}
                />
              </div>
            ))}
          </div>
        )}
      </div>

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

        /* Hide scrollbars but keep scrollable on mobile (optional) */
        .touch-row {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .touch-row::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        /* small visual smoothing */
        .touch-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default Snapshots;
