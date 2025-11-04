import Image from 'next/image';
import Link from 'next/link';

const ProjectDarpan = () => {
  return (
    <div className="flex justify-center py-16 px-4 xl:px-6 bg-white relative overflow-hidden">
      {/* Main container */}
      <div className="relative w-full max-w-[1440px] flex items-center overflow-hidden rounded-xl">
        {/* Background SVG within container */}
        <div className="absolute left-1/2 -translate-x-1/2 w-full sm:w-[1340px] h-full z-0">
          <Image
            src="/assets/home/young-minds/young-mind-bg.svg"
            alt="Background"
            layout="fill"
            className="object-cover"
            priority
          />
          {/* White overlay with opacity */}
          <div className="absolute inset-0 bg-white/30" />
        </div>

        {/* Responsive flex: column on mobile/tablet, row left-right on lg+ */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full items-center">
          {/* Top (mobile/tablet) / Left (desktop): Project image/collage */}
          <div className="w-full h-auto lg:w-[530px] lg:h-[520px] xl:w-[550px] xl:h-[540px] p-0 sm:p-4 flex items-center justify-center mb-6 lg:mb-0">
            <Image
              src="/assets/home/darpan/project-darpan.svg"
              alt="Project Darpan"
              width={420}
              height={320}
              className="object-contain w-full lg:w-[530px] h-auto lg:h-[520px]"
              priority
            />
          </div>
          {/* Bottom (mobile/tablet) / Right (desktop): Text area */}
          <div className="w-full lg:w-1/2 px-2 lg:px-8 py-2 lg:py-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="text-[#F8B535] text-base sm:text-lg font-medium tracking-wide mb-1 sm:mb-0">
              PROJECT
            </div>
            <h1 className="text-[28px] sm:text-[32px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-semibold mb-4 sm:mb-8 leading-tight text-black">
              DARPAN
            </h1>
            <p className="text-[#777777] text-[15px] sm:text-base xl:w-[837px] mb-2 sm:mb-4 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempos leu eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <p className="text-[#777777] text-[15px] sm:text-base xl:w-[837px] mb-4 sm:mb-6 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempos leu eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
            {/* Updated Link component */}
            <Link
              href="/project-darpan"
              className="inline-flex w-[168px] text-[16px] sm:text-[18px] items-center gap-2 px-4 sm:px-4 py-3 border border-gray-400 rounded-md text-[#333333] font-medium transition hover:bg-gray-100 justify-center"
            >
              Know More
              <Image
                src="/assets/home/darpan/know-more-btn.svg"
                alt="External Link Icon"
                width={22}
                height={22}
                className="ml-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDarpan;