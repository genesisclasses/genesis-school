import React from 'react';

const campusImages = [
  { src: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762410353/campus-1_uzacv2.webp", alt: "Classroom", title: "Modern Science & Computer Labs", description: "Advanced, well-equipped labs encourage exploration, experimentation, and innovation, helping students connect scientific concepts with real-world applications effectively." },
  { src: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762410354/campus-2_undinh.webp", alt: "Library", title: "Sports & Activity Zones", description: "Expansive, safe sports areas encourage teamwork, discipline, and resilience,  building confident, active learners with balanced minds and healthy lifestyles." },
  { src: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762410353/campus-3_ef20ky.webp", alt: "Lab", title: "Smart & Spacious Classrooms", description: "Technology-enabled, airy classrooms promote engagement, collaboration, and focus; creating an environment where learning feels inspiring, interactive, and meaningful daily." },
  { src: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762410353/campus-4_vjevwa.webp", alt: "Aerial", title: "Library & Reading Hubs", description: "A peaceful reading space filled with knowledge, creativity, and inspiration; cultivating curiosity, imagination, and a lifelong passion for learning." },
];

const GridItem = ({ img, large }) => (
  <div className="group relative w-full min-w-0 h-[340px] md:h-[280px] xl:h-[414px] rounded-lg overflow-hidden bg-gray-200">
    <img
      src={img.src}
      alt={img.alt}
      className="w-full h-full object-cover"
    />
    {/* Text is always visible, gradient/fade removed */}
    <div className="absolute inset-0 flex flex-col justify-end px-4 lg:px-6 pb-4 lg:pb-12 text-white">
      <div className="text-[16px] lg:text-lg font-medium mb-2 tracking-wide">{img.title}</div>
      <div className="text-[14px] lg:text-[16px] tracking-wide">{img.description}</div>
    </div>
  </div>
);

const Campus = () => (
  <div className="w-full flex justify-center pb-12 px-4 lg:px-10">
    <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
      {/* Header */}
      <h2 className="text-[32px] md:text-[43px] xl:text-[48px] font-semibold text-[#002650] mb-4 md:mb-6 text-center">
        A Campus That Inspires Learning
      </h2>
      {/* Description */}
      <p className="text-[#777777] text-[15px] md:text-[16px] max-w-[400px] md:max-w-[1313px] tracking-wide mb-6 md:mb-10 text-center">
        The Genesis School blends modern design with academic purpose. Interactive smart boards, state-of-the-art science and computer labs, and multimedia-enabled classrooms ensure our students are ready for the digital age. With secure, green, and well-monitored premises, every detail supports focused, joyful learning.
      </p>
      {/* Grid Container */}
      <div className="w-full flex flex-col gap-4">
        {/* First row - Large left, Small right */}
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:flex-[2]">
            <GridItem img={campusImages[0]} large />
          </div>
          <div className="w-full md:flex-[1]">
            <GridItem img={campusImages[1]} />
          </div>
        </div>
        {/* Second row - Small left, Large right */}
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:flex-[1]">
            <GridItem img={campusImages[2]} />
          </div>
          <div className="w-full md:flex-[2]">
            <GridItem img={campusImages[3]} large />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Campus;
