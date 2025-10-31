import React from 'react';
import Image from 'next/image';

const toppers = [
  {
    name: "NAME OF THE PERSON",
    batch: "Genesis School Class of 2018",
    img: "/assets/home/topper.png"
  },
  {
    name: "NAME OF THE PERSON",
    batch: "Genesis School Class of 2018",
    img: "/assets/home/topper.png"
  },
  {
    name: "NAME OF THE PERSON",
    batch: "Genesis School Class of 2018",
    img: "/assets/home/topper.png"
  },
  {
    name: "NAME OF THE PERSON",
    batch: "Genesis School Class of 2018",
    img: "/assets/home/topper.png"
  }
];

const Toppers = () => (
  <section className="w-full bg-white py-16 sm:py-20 lg:py-28 flex items-center justify-center">
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-4xl font-bold text-center mb-12 mt-[-1px]">Toppers</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {toppers.map((topper, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center"
          >
            <Image
              src={topper.img}
              alt={topper.name}
              width={334}
              height={432}
              className="object-cover border border-gray-200"
              priority
            />
            <p className="text-[#ffc700] text-[16px] font-bold mt-6 mb-1 uppercase text-center">{topper.name}</p>
            <p className="text-gray-700 text-sm text-center">{topper.batch}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Toppers;
