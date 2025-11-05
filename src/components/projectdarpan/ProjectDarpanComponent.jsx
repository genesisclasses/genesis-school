'use client'
import Image from "next/image";
import Link from "next/link";

const ProjectDarpan = () => {
  return (
    <div
      className={`projectdarpan-container projectdarpan-bg flex justify-center py-16 px-4 xl:px-6 relative overflow-hidden
        bg-no-repeat
        bg-[url('/assets/home/young-minds/young-mind-bg-mobile.svg')] bg-contain bg-bottom
        lg:bg-[url('/assets/home/young-minds/young-mind-bg.svg')] `}
    >
      <style jsx>{`
        @media (min-width: 1440px) {
          .projectdarpan-bg {
            background-size: 90% auto !important; /* Adjust this % as needed */
          }
        }
        @media (min-width: 1920px) {
          .projectdarpan-bg {
            background-size: 70% auto !important; /* Optional: further reduce width above 1920px */
          }
        }
              @media (max-width: 1024px) {
          .projectdarpan-container {
            background-position: top 210px left 0px !important;
          }
        }
        @media (max-width: 425px) {
          .projectdarpan-container {
            background-position: bottom -12px left 50px !important;
          }
        }
      `}</style>

      {/* Main container */}
      <div className="relative w-full max-w-[1417px] flex items-center overflow-hidden rounded-xl">
        <div className="relative z-10 flex flex-col lg:flex-row w-full items-center">
          <div className="w-full h-auto lg:w-[530px] lg:h-[450px] xl:w-[550px] xl:h-[540px] p-0 sm:p-4 flex items-center justify-center mb-6 lg:mb-0">
            <Image
              src="/assets/home/darpan/project-darpan.svg"
              alt="Project Darpan"
              width={420}
              height={320}
              className="object-contain w-full lg:w-[530px] h-auto lg:h-[520px]"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 px-2 lg:px-8 py-2 lg:py-10 flex flex-col justify-center items-start text-left">
            <div className="text-[#F8B535] text-[14px] sm:text-lg font-medium tracking-wide mb-1 sm:mb-0 w-full sm:w-auto">
              PROJECT
            </div>
            <h1 className="text-[32px] sm:text-[32px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-semibold mb-4 sm:mb-8 leading-tight text-black w-full sm:w-auto">
              DARPAN
            </h1>
            <p className="text-[#777777] text-[15px] lg:text-[14px] sm:text-base xl:text-[16px] xl:w-[800px] mb-2 sm:mb-4 tracking-wide w-full sm:w-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempos leu eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </p>
            <p className="text-[#777777] text-[15px] lg:text-[14px] sm:text-base xl:text-[16px] xl:w-[800px] mb-4 sm:mb-6 tracking-wide w-full sm:w-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempos leu eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </p>
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
