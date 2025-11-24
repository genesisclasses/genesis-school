    import Image from "next/image";

    const DarpanStorySection = () => {
      return (
        <div className="flex justify-center py-12 sm:py-16 px-4 xl:px-6 relative overflow-hidden">
          <div className="relative w-full max-w-[1440px] flex items-start overflow-hidden rounded-xl">
    
            <div className="relative z-10 flex flex-col lg:flex-row-reverse w-full items-start">
    
              {/* IMAGE RIGHT */}
              <div className="w-full lg:w-[50%] flex items-start justify-center mb-6 lg:mb-0">
                <Image
                  src="/assets/projectdarpan/one.svg"
                  alt="Project Darpan"
                  width={580}
                  height={535}
                  className="object-contain w-full h-auto max-h-[500px]"
                  priority
                />
              </div>
    
              {/* TEXT LEFT */}
              <div className="w-full lg:w-[55%] px-2 lg:px-0 py-2 lg:py-10 flex flex-col justify-start items-start text-left lg:mt-0 xl:mt-18 ">
                <h1 className="text-[28px] sm:text-[32px] md:text-[35px] lg:text-[35px] xl:text-[45px] font-semibold mb-4 sm:mb-8 leading-tight text-black">
                  Every child carries a world within.
                </h1>
    
                <p className="text-[#555555] xl:text-[18px] sm:text-base w-full lg:w-[500px] xl:w-[770px] mb-2 sm:mb-4 tracking-wide">
                  At Genesis, we recognize that every child carries a unique story filled with experiences, emotions, and dreams. Project DARPAN honors these individual journeys by creating safe, nurturing spaces where students feel genuinely seen and valued. 
                </p>

                <p className="text-[#555555] xl:text-[18px] sm:text-base w-full lg:w-[379px] xl:w-[670px]  tracking-wide">
                  Through compassionate listening and guided support, children learn to reflect, express themselves without judgment, and heal at their own pace. In these spaces, students discover that their voices matter and develop the courage to navigate life's complexities with confidence.
                </p>
              </div>
    
            </div>
          </div>
        </div>
      );
    };
    
    export default DarpanStorySection;
    