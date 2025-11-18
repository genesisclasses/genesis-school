"use client";
import Image from "next/image";

// JSON data defined inside the same file, with a single quote field
const directorData = {
  image: {
    src: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762412294/director_hsl2nh.webp",
    alt: "Seema Sharma",
    width: 573,
    height: 612,
  },
  icons: {
    mobileIcon: {
      src: "/assets/about/quote-icon.svg",
      alt: "About Icon",
      width: 64,
      height: 64,
    },
    desktopQuoteIcon: {
      src: "/assets/about/quote-icon.svg",
      alt: "About Icon",
      width: 64,
      height: 64,
      style: {
        position: "absolute",
        left: "-80px",
        top: "-45px",
        rotate: "180deg",
      },
    },
  },
  quote:
    "Education is not confined to textbooks; it is the art of nurturing curiosity, compassion, and courage within every learner. True success lies in shaping individuals who think deeply, act wisely, and lead with integrity",
  directorInfo: {
    name: "Seema Sharma",
    title: "(Director) 36+ Years of Delivering Excellence",
    subtitle: "36+ years of compassion towards students and educational institutions",
    paragraphs: [
      "At Genesis, we believe education is not a destination but a lifelong journey of discovery and growth. Over the past three decades, I have seen how a nurturing environment built on care, curiosity, and courage can shape young learners into confident, compassionate, and capable individuals.",
      "Our goal has always been to maintain a balance between academic excellence and emotional wellbeing, ensuring that every child develops both intellect and empathy. At Genesis, we teach students not just to excel in exams, but to understand themselves and the world around them. We strive to awaken their potential, inspire purpose, and build values that last a lifetime — nurturing excellence with heart, vision, and unwavering dedication to holistic growth.",
    ],
  },
};

export default function DirectorMessage() {
  return (
    <section className="max-w-[1417px] -mt-28 md:-mt-0 xl:h-[820px] mx-auto px-4 lg:px-10 xl:px-4 py-10 md:py-10 xl:mt-16">
      <div className="director-section flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-16 mt-32 2xl:mt-40">
        {/* LEFT SIDE - IMAGE */}
        <div className="relative w-full lg:w-[65%] xl:w-[45%] xl:-ml-[176px]">
          <div className="overflow-hidden">
            <Image
              src={directorData.image.src}
              alt={directorData.image.alt}
              width={directorData.image.width}
              height={directorData.image.height}
              className="object-fill"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="w-full md:w-[35%] flex flex-col">
          {/* Quote Icon + Heading - visible on mobile/iPad, hidden on desktop */}
          <div className="md:hidden block flex flex-col items-start">
            <Image
              src={directorData.icons.mobileIcon.src}
              alt={directorData.icons.mobileIcon.alt}
              width={directorData.icons.mobileIcon.width}
              height={directorData.icons.mobileIcon.height}
              priority
              className="mb-2 rounded-lg"
            />
            <h2 className="text-[24px] mb-3 font-semibold text-[#0d1b50] md:leading-relaxed">
              <b>&quot;{directorData.quote}&quot;</b>
            </h2>
          </div>

          {/* Quote Icon + Heading - visible on desktop 1440px*/}
          <div className="hidden md:block relative h-[100px]">
            <Image
              src={directorData.icons.desktopQuoteIcon.src}
              alt={directorData.icons.desktopQuoteIcon.alt}
              width={directorData.icons.desktopQuoteIcon.width}
              height={directorData.icons.desktopQuoteIcon.height}
              priority
              className="absolute -left-70 -top-30 lg:-left-85 lg:-top-36 xl:-top-50 xl:-left-100 rounded-lg rotate-180"
            />
            <h3 className="text-[22px] lg:text-[26px] xl:text-[34px] font-medium text-[#002650] w-[440px] lg:w-[483px] xl:w-[688px]  relative -left-[210px] -top-18 lg:-left-58 lg:-top-20 xl:-top-34  2xl:-top-34 xl:-left-80 leading-tight tracking-wider">
              <b>&quot;{directorData.quote}&quot;</b>
            </h3>
          </div>

          {/* Paragraphs & Name Section for desktop */}
          <div className="director-para xl:mt-14 2xl:mt-20 xl:block hidden xl:w-[700px] 2xl:w-[758px] xl:-ml-16 2xl:-ml-10 ">
            {directorData.directorInfo.paragraphs.map((para, index) => (
              <p key={index} className="text-[18px] text-[#777777] font-normal leading-relaxed mb-3 ">
                {para}
              </p>
            ))}
            <h3 className="text-[20px] font-bold text-[#333333] mb-1">
              {directorData.directorInfo.name}
            </h3>
            <p className="text-[16px] font-medium font-bold text-[#333333] mb-3">
              {directorData.directorInfo.title}
            </p>
            <p className="text-[16px] font-medium text-[#333333] ">
              {directorData.directorInfo.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Paragraphs & Name Section for mobile, tablet and 1024px */}
      <div className="director-para mt-3 lg:mt-6 md:block xl:hidden md:px-4 lg:px-5">
        {directorData.directorInfo.paragraphs.map((para, index) => (
          <p key={index} className="text-[16px] md:text-[18px] text-[#777777] mb-3">
            {para}
          </p>
        ))}
        <h3 className="md:text-[20px] text-[18px] font-bold text-[#333333] mb-1">
          {directorData.directorInfo.name}
        </h3>
        <p className="text-[16px] font-bold text-[#333333] mb-0">
          {directorData.directorInfo.title}
        </p>
        <p className="text-[16px] font-medium text-[#333333] mb-0">
          {directorData.directorInfo.subtitle}
        </p>
      </div>
    </section>
  );
}
