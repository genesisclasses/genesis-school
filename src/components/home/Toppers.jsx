import React from 'react';
import Image from 'next/image';

const toppers = [
  {
    name: "Arsh Gandhi",
    batch: "Genesis School Class of 2018",
    img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762409771/Frame_63_2_fvyqvx.png"
  },
  {
    name: "Priyam Gupta",
    batch: "Genesis School Class of 2018",
    img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762424447/flkvv0z3vjxjvcusbh2t_zxepuz.webp"
  },
  {
    name: "Ayush Arora",
    batch: "Genesis School Class of 2018",
    img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762424667/t3_pgmzeb.png"
  },
  {
    name: "Rhythm Gupta",
    batch: "Genesis School Class of 2018",
    img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762424728/t4_es8vcc.png"
  }
];

const Toppers = () => (
  <section className="w-full bg-white py-6  md:py-14 flex items-center justify-center">
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-[32px] md:text-[42px] xl:text-[48px] font-semibold text-center mb-2.5 -mt-1">Toppers</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {toppers.map((topper, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center "
          >
            <Image
              src={topper.img}
              alt={topper.name}
              width={334}
              height={432}
              className="object-cover border h-[200px] md:h-[390px] border-gray-200 "
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority
            />
            <p className="text-[#F8B535] text-[16px] font-bold mt-2 mb-1 uppercase text-center">{topper.name}</p>
            {/* <p className="text-gray-700 text-sm text-center">{topper.batch}</p> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Toppers;
