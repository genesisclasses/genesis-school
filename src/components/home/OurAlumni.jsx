'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import QuoteIcon from "../../../public/assets/home/quote-icon.svg"; // adjust path if needed

const alumniData = [
  {
    img: "/assets/home/alumni1.png",
    name: "Priya Sharma",
    batch: "Batch of 2023",
    description:
      "The faculty here truly cares about each student's success. The personalized attention and rigorous curriculum prepared me exceptionally well for university. I'm grateful for the foundation I received.",
  },
  {
    img: "/assets/home/alumni1.png",
    name: "Rohit Singh",
    batch: "Batch of 2022",
    description:
      "The environment at this university allowed me to grow both academically and personally. Every teacher inspired us to aim higher each day.",
  },
  {
    img: "/assets/home/alumni1.png",
    name: "Anita Verma",
    batch: "Batch of 2021",
    description:
      "I found lifelong friends and mentors here. The advanced courses and practical workshops gave me a head start in my career.",
  },
  {
    img: "/assets/home/alumni1.png",
    name: "Sameer Khan",
    batch: "Batch of 2023",
    description:
      "Supportive faculty and excellent resources made my learning journey enjoyable and fruitful. The alumni network is a great advantage.",
  },
  {
    img: "/assets/home/alumni1.png",
    name: "Sneha Patel",
    batch: "Batch of 2020",
    description:
      "The focus on holistic development helped me gain confidence. Extracurricular activities balanced our studies well.",
  },
  {
    img: "/assets/home/alumni1.png",
    name: "Harsh Vora",
    batch: "Batch of 2022",
    description:
      "Career guidance and placement support were fantastic. I felt prepared for industry challenges thanks to my experiences here.",
  },
  {
    img: "/assets/home/alumni1.png",
    name: "Vikram Mehta",
    batch: "Batch of 2021",
    description:
      "From fascinating lectures to group projects, every aspect of college life motivated me to push my limits.",
  },
  {
    img: "/assets/home/alumni1.png",
    name: "Ruchi Agarwal",
    batch: "Batch of 2020",
    description:
      "The administration genuinely cares about the students. The study abroad programs broadened my horizons tremendously.",
  },
];

const OurAlumni = () => (
  <div className="w-full flex flex-col items-center py-10  md:py-14 bg-white px-4 md:px-10">
    <style jsx>{`
      @media (max-width: 480px) {
        .fixed-mobile-height {
          height: 540px !important;
          min-height: 540px !important;
          max-height: 540px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          overflow: hidden;
        }
        .fixed-mobile-content-center {
          flex: 1 0 auto;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
        }
      }
    `}</style>
    <div className="max-w-[1240px] w-full flex flex-col items-center">
      <h2 className="text-[32px] md:text-[42px] xl:text-[48px] font-semibold text-center text-[#002650]">
        What Our Alumni Say
      </h2>
      <p className="mb-5 text-[#4A5565] text-center text-[16px] md:text-[18px] lg:text-[16px]">
        Hear from our students who&apos;ve gone on to achieve great things
      </p>
      <div className="relative w-full max-w-[1072px] h-auto sm:h-[404px] flex items-center justify-center">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-swiper-prev",
            nextEl: ".custom-swiper-next",
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={24}
          speed={500}
          className="w-full h-full"
        >
          {alumniData.map((alum, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl px-10 py-10 md:h-[404px] border border-[#DDDDDD] flex flex-col items-center relative w-full xl:max-w-[1072px] mx-auto fixed-mobile-height">
                {/* Top Left Quote */}
                <div className="absolute top-6 left-6">
                  <Image src={QuoteIcon} alt="Quote Icon" width={64} height={64} />
                </div>
                <div className="flex flex-col items-center fixed-mobile-content-center">
                  <img
                    src={alum.img}
                    alt={alum.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <div className="font-medium text-[#333333] text-[16px] lg:text-lg">{alum.name}</div>
                  <div className="text-[#777777] text-[14px] lg:text-[16px] mb-2 md:mb-4">{alum.batch}</div>
                  <p className="italic xl:mt-5 xl:w-3xl text-[16px] lg:text-[20px] leading-relaxed tracking-wide text-center text-[#555555]">
                    "{alum.description}"
                  </p>
                </div>
                {/* Bottom Right Quote */}
                <div className="absolute bottom-6 right-6">
                  <Image src={QuoteIcon} alt="Quote Icon" width={64} height={64} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Centered Navigation Buttons Below Card */}
      <div className="flex justify-center gap-5 mt-8">
        <div
          className="custom-swiper-prev bg-[#002650] text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <svg width="20" height="20" fill="none">
            <path
              d="M13 16L9 10L13 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className="custom-swiper-next bg-[#002650] text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <svg width="20" height="20" fill="none">
            <path
              d="M7 4L11 10L7 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default OurAlumni;
