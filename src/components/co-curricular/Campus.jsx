import React from 'react';

const campusImages = [
  { src: "/assets/co-curricular/campus-1.png", alt: "Classroom", title: "Modern Science & Computer Labs", description: "Bright classrooms, modern labs, a quiet library, and open green spaces — all come together to create a safe, inspiring environment ." },
  { src: "/assets/co-curricular/campus-2.png", alt: "Library", title: "Modern Science & Computer Labs", description: "Bright classrooms, modern labs, a quiet library, and open green spaces — all come together to create a safe, inspiring environment ." },
  { src: "/assets/co-curricular/campus-3.png", alt: "Lab", title: "Modern Science & Computer Labs", description: "Bright classrooms, modern labs, a quiet library, and open green spaces — all come together to create a safe, inspiring environment ." },
  { src: "/assets/co-curricular/campus-4.png", alt: "Aerial", title: "Modern Science & Computer Labs", description: "Bright classrooms, modern labs, a quiet library, and open green spaces — all come together to create a safe, inspiring environment ." },
];

const GridItem = ({ img, large }) => (
  <div className="group relative w-full min-w-0 h-[414px] md:h-[280px] xl:h-[414px] rounded-lg overflow-hidden bg-gray-200">
    <img
      src={img.src}
      alt={img.alt}
      className="w-full h-full object-cover"
    />
    
    {/* Gradient overlay */}
    <div className="absolute left-0 right-0 bottom-0 h-[80%] lg:h-[40%] bg-gradient-to-t from-black/70 via-black/60 to-transparent pointer-events-none opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Text content */}
    <div className="absolute inset-0 flex flex-col justify-end px-4 lg:px-6 pb-4 lg:pb-12 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 transition-all duration-300">
      <div className="text-[16px] lg:text-lg font-medium mb-2 tracking-wide">{img.title}</div>
      <div className="text-[14px] lg:text-[16px] tracking-wide">{img.description}</div>
    </div>
  </div>
);

const Campus = () => (
  <div className="w-full flex justify-center py-12 px-4 lg:px-10">
    <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
      {/* Header */}
      <h2 className="text-[32px] sm:text-[32px] md:text-[36px] xl:text-[48px] font-semibold text-[#002650] mb-4 md:mb-6 text-center">
        A Campus That Inspires Learning
      </h2>
      
      {/* Description */}
      <p className="text-[#777777] text-[15px] md:text-[16px] max-w-[400px] md:max-w-[1313px] tracking-wide mb-6 md:mb-10 text-center">
        The Genesis School blends technology with real-life spaces. Classrooms, labs and studios allow all children to explore big ideas, as do dedicated libraries and collaborative project areas, providing the ideal blend of the old and new, with excellent access, resources and support from our expert teachers.
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