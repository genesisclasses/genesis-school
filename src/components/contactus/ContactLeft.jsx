import Image from "next/image";

const ContactLeft = () => {
  return (
    <div className="flex w-[514px] flex-col items-start justify-center text-left pl-2 sm:pl-10 flex-1">
      <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-1 text-gray-900">
        Have Questions?
      </h2>
      <h2 className="font-bold text-[30px] sm:text-[34px] lg:text-[40px] leading-tight mb-4 text-gray-900">
        We’re Here to Help!
      </h2>

      <p className="text-gray-600 text-base sm:text-lg mt-2 font-medium mb-4 max-w-[350px]">
        Enquire about admissions or get answers to your doubts in one step.
      </p>

      <div className="w-full  flex lg:justify-start justify-center mt-2">
        <Image
          src="/assets/home/contactform.svg"
          alt="Contact Illustration"
          width={700}
          height={700}
          className="w-[260px] h-[230px] sm:w-[350px] sm:h-[300px] lg:w-[400px] lg:h-[350px]"
          priority
        />
      </div>
    </div>
  );
};

export default ContactLeft;
