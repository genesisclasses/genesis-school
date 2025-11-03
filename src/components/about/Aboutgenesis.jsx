'use client'

// pages/about.jsx
import Image from "next/image";

export default function Aboutgenesis() {
  return (
    <section className="max-w-[1340px] mx-auto px-4 py-3 md:py-16 flex flex-col lg:flex-row items-center lg:items-start gap-8">
      {/* Text Section */}
      <div className="lg:w-[60%]">
        <h2 className="text-[48px] font-semibold mb-4 text-[#000000]">About Genesis</h2>
        <p className="text-[#222222] leading-relaxed font-lato font-medium text-[18px]">
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

      {/* Single Image Collage Section */}
      <div className="lg:w-[40%] ">
        <Image
          src="/assets/about/aboutpagesgenesis.png" // <-- Correct path
          alt="Genesis International School"
          width={400}
          height={400}
          className="rounded-lg  object-cover lg:w-[428px] lg:h-[370px]  h-auto"
        />
      </div>
    </section>
  );
}
