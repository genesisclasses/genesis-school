"use client";
import Image from "next/image";

// JSON data defined inside the same file
const directorData = {
  image: {
    src: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762412294/director_hsl2nh.webp",
    alt: "Seema Sharma",
    width: 520,
    height: 520,
  },
  icons: {
    mobileIcon: {
      src: "/assets/about/Icon.png",
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
  quotes: {
    mobile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    desktop:
      "Education is not confined to textbooks; it is the art of nurturing curiosity, compassion, and courage within every learner. True success lies in shaping individuals who think deeply, act wisely, and lead with integrity.",
  },
  directorInfo: {
    name: "Seema Sharma",
    title: "(Director) 36+ Years of Delivering Excellence",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    ],
  },
};

export default function DirectorMessage() {
  return (
    <section className="max-w-[1417px] mx-auto px-4 py-10 md:py-14 md:mt-36 lg:mt-16 xl:mt-28">
      <div className="director-section flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-16">
        {/* LEFT SIDE - IMAGE */}
        <div className="relative w-full lg:w-[65%] xl:w-[45%]">
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
              className="mb-2 rounded-lg"
            />
            <h2 className="text-[24px] mb-3 font-semibold text-[#0d1b50] md:leading-relaxed">
              {directorData.quotes.mobile}
            </h2>
          </div>

          {/* Quote Icon + Heading - visible on desktop only */}
          <div className="hidden md:block relative h-[100px]">
            <Image
              src={directorData.icons.desktopQuoteIcon.src}
              alt={directorData.icons.desktopQuoteIcon.alt}
              width={directorData.icons.desktopQuoteIcon.width}
              height={directorData.icons.desktopQuoteIcon.height}
              className="absolute -left-80 -top-45 lg:-left-85 lg:-top-36 xl:-top-40 xl:-left-100 rounded-lg rotate-180"
            />
            <h2 className="text-[22px] lg:text-[24px] font-semibold text-[#0d1b50] w-[440px] lg:w-[550px] xl:leading-relaxed xl:tracking-wider relative -left-[250px] -top-32 lg:-left-70 lg:-top-20  xl:-top-30 xl:-left-80">
              {directorData.quotes.desktop}
            </h2>
          </div>

          {/* Paragraphs & Name Section for desktop */}
          <div className="director-para lg:mt-6 xl:block hidden w-[758px] -ml-40 ">
            <h3 className="md:text-[20px] text-[18px] font-extrabold text-gray-900 mb-1">
              {directorData.directorInfo.name}
            </h3>
            <p className="md:text-[18px] text-[16px] font-extrabold text-gray-700 mb-3">
              {directorData.directorInfo.title}
            </p>

            {directorData.directorInfo.paragraphs.map((para, index) => (
              <p key={index} className="text-[18px] text-gray-700 leading-relaxed mb-3 ">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Paragraphs & Name Section for mobile */}
      <div className="director-para mt-3 lg:mt-6 block md:hidden xl:hidden">
            

            {directorData.directorInfo.paragraphs.map((para, index) => (
              <p key={index} className="text-[16px] text-[#777777]  mb-3">
                {para}
              </p>
              
            ))}
            <h3 className="md:text-[20px] text-[18px] font-extrabold text-gray-900 mb-1">
              {directorData.directorInfo.name}
            </h3>
            <p className="md:text-[18px] text-[16px] font-extrabold text-gray-700 mb-3">
              {directorData.directorInfo.title}
            </p>
          </div>
      

      {/* Paragraphs & Name Section for desktop */}
      <div className="director-para mt-3 lg:mt-6 md:block xl:hidden hidden px-4 lg:px-5">
        <h3 className="md:text-[20px] text-[18px] font-extrabold text-gray-900 mb-1">
          {directorData.directorInfo.name}
        </h3>
        <p className="md:text-[18px] text-[16px] font-extrabold text-gray-700 mb-3">
          {directorData.directorInfo.title}
        </p>

        {directorData.directorInfo.paragraphs.map((para, index) => (
          <p key={index} className="text-[18px] text-gray-700 leading-relaxed mb-3">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
