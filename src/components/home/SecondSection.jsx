import React from 'react';

const statsData = [
  {
    title: "XY+",
    subtitle: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "XY+",
    subtitle: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "XY+",
    subtitle: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "XY+",
    subtitle: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const SecondSection = () => {
  return (
    <div className="w-full flex justify-center py-10 border-b border-t border-[#DDDDDD]">
      <div className="max-w-[1340px] w-full px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 lg:gap-x-10 xl:gap-x-20 gap-y-10">
          {statsData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col text-left"
            >
              <h2 className="text-[39px] lg:text-[49px] xl:text-[65px] text-left font-semibold text-[#002650] leading-none">
                {item.title}
              </h2>
              <p className="font-medium mb-1 lg:text-[17x] xl:text-[19px] text-[#636363] text-left tracking-wide">{item.subtitle}</p>
              <p className="text-[#777777] lg:text-[14px] xl:text-[16px] font-regular leading-5 tracking-wider">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
