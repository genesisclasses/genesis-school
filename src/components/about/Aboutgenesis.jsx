'use client'

import Image from "next/image";

export default function Aboutgenesis() {
  return (
    <section className="max-w-[1417px] mx-auto px-4 py-8 md:py-10 mt-10 flex flex-col-reverse md:flex-row items-center lg:items-start gap-8">
      {/* Text Section */}
      <div className="md:w-[640px] lg:w-[60%]">
        <h2 className="text-[32px] md:text-[42px] lg:text-[40px] xl:text-[48px] font-semibold mb-4 text-[#000000] xl:mt-10">About Genesis</h2>
        <p className="text-[#222222] leading-relaxed font-lato font-medium text-[16px] md:text-[18px]">
          Genesis International School is a premier educational institution in Hyderabad,
          established in 2008, offering Nursery to Class 10 under the CBSE curriculum.
          The school focuses on academic excellence, holistic development, and
          values-based education, nurturing students to become confident, responsible,
          and compassionate learners. With multiple campuses in Miyapur, Kukatpally,
          Alwal, and Genesis, it provides modern infrastructure, well-equipped classrooms,
          laboratories, libraries, and sports facilities, along with a wide range of
          co-curricular activities. Guided by a dedicated faculty and a strong philosophy
          of character building, Genesis International...
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-[50%] xl:w-[40%]">
        <Image
          src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762411846/about-genesis_igjyoy.webp"
          alt="Genesis International School"
          width={400}
          height={400}
          className="rounded-lg object-cover lg:w-[428px] lg:h-[370px] h-auto"
        />
      </div>
    </section>
  );
}
