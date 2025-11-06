'use client'
import Image from "next/image";
import Link from "next/link";

const paragraphs = [
  "At The Genesis School, we believe that true education begins with emotional wellbeing. Project DARPAN was created to provide every child with a safe, supportive space to understand themselves, express freely, and manage challenges with confidence.",
  "Through guided counselling sessions, interactive activities, and continuous emotional support, the initiative helps students strengthen resilience, empathy, and self-awareness. Our trained mentors and counsellors work closely with teachers and parents to ensure that no concern goes unheard.",
  "Project DARPAN is more than a programme — it is a promise to care for every student’s mind as deeply as we nurture their intellect, helping them grow into confident, compassionate, and balanced individuals."
];

const ProjectDarpan = () => {
  return (
    <div
      className={`projectdarpan-container projectdarpan-bg flex justify-center py-10 px-4 xl:px-6 relative overflow-hidden
        bg-no-repeat
        bg-[url('/assets/home/darpan/darpan-bg-mobile.svg')] bg-contain bg-bottom
        md:bg-[url('/assets/home/darpan/darpan-bg-768.svg')]
        lg:bg-[url('/assets/home/darpan/darpan-bg-desktop.svg')] `}
    >
      <style jsx>{`
        @media (min-width: 1440px) {
          .projectdarpan-bg {
            background-size: 90% auto !important;
            background-position: top 90px left 80px !important;
          }
        }
        @media (min-width: 1920px) {
          .projectdarpan-bg {
            background-size: 82% auto !important;
            background-position: top 50px left 80px !important;
          }
        }
        @media (max-width: 1024px) {
          .projectdarpan-container {
            background-position: top 210px left 0px !important;
          }
        }
        @media (max-width: 768px) {
          .projectdarpan-container {
            background-position: bottom 30px left 0px !important;
          }
        }
        @media (max-width: 425px) {
          .projectdarpan-container {
            background-position: bottom -30px left 0px !important;
          }
        }
      `}</style>

      {/* Main container */}
      <div className="relative w-full max-w-[1418px] flex items-center overflow-hidden rounded-xl">
        <div className="relative z-10 flex flex-col lg:flex-row w-full items-center">
          <div className="w-full h-auto lg:w-[530px] lg:h-[450px] xl:w-[550px] xl:h-[540px] p-0 sm:p-4 flex items-center justify-center mb-0 lg:mb-0">
            <Image
              src="/assets/projectdarpan/darpan/project-darpan.svg"
              alt="Project Darpan"
              width={420}
              height={320}
              className="object-contain w-full lg:w-[530px] h-auto lg:h-[520px]"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 md:px-4 lg:px-8 py-2 lg:py-10 flex flex-col justify-center items-start text-left">
            <div className="text-[#F8B535] text-[14px] sm:text-lg font-medium tracking-wide mb-1 sm:mb-0 w-full sm:w-auto">
              PROJECT
            </div>
            <h1 className="text-[32px] sm:text-[32px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-semibold mb-4 sm:mb-8 leading-tight text-black w-full sm:w-auto">
              DARPAN
            </h1>
            {paragraphs.map((text, idx) => (
              <p key={idx} className="text-[#777777] text-[15px] lg:text-[14px] sm:text-base xl:text-[16px] xl:w-[837px] mb-2 sm:mb-4 tracking-wide w-full sm:w-auto">
                {text}
              </p>
            ))}
            <Link
              href="/project-darpan"
              className="inline-flex w-[168px] text-[16px] sm:text-[18px] items-center gap-2 px-4 sm:px-4 py-3 bg-white border border-gray-400 rounded-md text-[#333333] font-medium transition hover:bg-gray-100 justify-center"
            >
              <p>Know More</p>
              <Image
                src="/assets/projectdarpan/darpan/know-more-btn.svg"
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
