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
              <div className="w-full lg:w-[55%] px-2 lg:px-0 py-2 lg:py-10 flex flex-col justify-start items-start text-left lg:mt-16 xl:mt-24 ml-">
                <h1 className="text-[28px] sm:text-[32px] md:text-[35px] lg:text-[35px] xl:text-[45px] font-semibold mb-4 sm:mb-8 leading-tight text-black">
                  Every child carries a world within.
                </h1>
    
                <p className="text-[#777777] xl:text-[24px] sm:text-base md:w-[500px] lg:w-[379px] xl:w-[670px] mb-2 sm:mb-4 tracking-wide">
                  At Genesis, we believe that every student has a unique story and a voice that deserves to be heard.
                  DARPAN creates safe spaces where children can reflect, express, and heal.
                </p>
              </div>
    
            </div>
          </div>
        </div>
      );
    };
    
    export default DarpanStorySection;
    