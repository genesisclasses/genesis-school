'use client'

import Image from "next/image";

export default function Aboutgenesis() {
  return (
    <section className="max-w-[1417px] mx-auto px-4 py-8 md:py-10 mt-10 flex flex-col-reverse md:flex-row items-center lg:items-start gap-8">
      {/* Text Section */}
      <div className="md:w-[640px] lg:w-[60%]">
        <h2 className="text-[32px] md:text-[42px] lg:text-[40px] xl:text-[48px] font-semibold mb-4 text-[#000000] xl:mt-10">About Genesis</h2>
        <p className="text-[#777777] leading-relaxed font-lato font-normal text-[16px] md:text-[18px]">
          Genesis was founded on the belief that education has the power to shape both intellect and character. Since 2010, we have nurtured young minds to think deeply, act with integrity, and lead with purpose. At Genesis, excellence extends beyond grades — it is reflected in curiosity, compassion, and courage. 
        </p>
        <p className="text-[#777777] leading-relaxed font-lato font-normal text-[16px] md:text-[18px] mt-2">
          With modern classrooms, advanced learning spaces, and dedicated mentors, we strive to create an environment where every student grows into a confident, balanced, and future-ready individual prepared to make a meaningful difference in the world.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-[50%] xl:w-[40%]">
        <Image
          src="https://res.cloudinary.com/dluulfzrc/image/upload/v1764241038/about-page-img_ljfamf.webp"
          alt="Genesis International School"
          width={400}
          height={400}
          className="rounded-lg object-cover lg:w-[428px] lg:h-[370px] h-auto"
        />
      </div>
    </section>
  );
}
