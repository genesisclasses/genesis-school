import Image from 'next/image';

const ContactUs = () => (
  <section
    className="relative w-full bg-[#fafbfb] py-16 px-2 sm:px-6 flex justify-center items-center"
    // style={{
    //   backgroundImage: 'url(/assets/home/contactbg.svg)', // Correct public path usage
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    // }}
  >
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      {/* Left side: Text + Illustration */}
      <div className="flex flex-col items-center w-auto lg:items-start justify-center text-center lg:text-left px-10 lg:px-10">
        <h2 className="font-bold text-4xl sm:text-4xl lg:text-5xl leading-tight sm:leading-[-0.2] mb-4 text-gray-900">
          Have Questions?
        </h2>
        <h2 className="font-bold text-[38px] sm:text-3xl lg:text-[40px] leading-[0.1] mb-4 text-gray-900">
          We’re Here to Help!
        </h2>
        <p className="text-gray-600 text-xl mt-4 font-medium mb-4 max-w-[340px]">
          Enquire about admissions or get answers to your doubts in one step.
        </p>
        <div className=" h-full flex items-center justify-center lg:justify-start">
          <Image
            src="/assets/home/contactform.svg"
            alt="Contact Illustration"
            width={700}
            height={700}
            className=""
            style={{ width: "400px", height: "350px" }} // Maintains aspect ratio
            priority
          />
        </div>
      </div>

      {/* Right side: Form */}
      <div className="flex flex-col items-center justify-center w-full">
        <form className="w-full max-w-xl bg-white border border-gray-100 shadow-xl rounded-2xl px-7 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="text-[16px] font-semibold  text-gray-800 mb-1 block">Parent’s Name</label>
              <input type="text" placeholder="Enter your full name"
                className="w-full border-0 border-b border-gray-200 px-0 py-3 text-base outline-none focus:ring-0 placeholder:italic placeholder:text-sm focus:border-[#09254A] bg-transparent shadow-none" />
            </div>
            <div>
              <label className="text-[16px] font-semibold  text-gray-800 mb-1 block">Child’s Name</label>
              <input type="text" placeholder="Enter your child's name"
                className="w-full border-0 border-b border-gray-200 px-0 py-3 text-base outline-none focus:ring-0 placeholder:italic placeholder:text-sm focus:border-[#09254A] bg-transparent shadow-none" />
            </div>
          </div>
          <div className="mb-3">
            <label className="text-[16px] font-semibold  text-gray-800 mb-1 block">Class Interested For</label>
            <input type="text" placeholder="e.g., Pre-school, Class 5, Class 12"
              className="w-full border-0 border-b border-gray-200 px-0 py-3 text-base outline-none focus:ring-0 placeholder:italic placeholder:text-sm focus:border-[#09254A] bg-transparent shadow-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="text-[16px] font-semibold  text-gray-800 mb-1 block">Phone Number</label>
              <input type="tel" placeholder="Enter your mobile number"
                className="w-full border-0 border-b border-gray-200 px-0 py-3 text-base outline-none focus:ring-0 placeholder:italic placeholder:text-sm focus:border-[#09254A] bg-transparent shadow-none" />
            </div>
            <div>
              <label className="text-[16px] font-semibold  text-gray-800 mb-1 block">Email Address <span className="text-gray-400">(optional)</span></label>
              <input type="email" placeholder="Enter your email address"
                className="w-full border-0 border-b border-gray-200 px-0 py-3 text-base outline-none focus:ring-0 placeholder:italic placeholder:text-sm focus:border-[#09254A] bg-transparent shadow-none" />
            </div>
          </div>
          <div className="mb-3">
            <label className="text-[16px] font-semibold  text-gray-800 mb-1 block">Your Message</label>
            <textarea
              placeholder="Write your question or admission enquiry here"
              className="w-full border-0 border-b border-gray-200 px-0 py-3 text-base outline-none focus:ring-0 placeholder:italic placeholder:text-sm focus:border-[#09254A] bg-transparent shadow-none"
              rows={3}
            />
          </div>
          <div className="mb-5">
            <label className="text-[16px] font-semibold  text-gray-800 block mb-2">Preferred Contact Method</label>
            <div className="flex items-center gap-6 font-medium text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-[#09254A] border border-gray-300 rounded" />
                <span>Call</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-[#09254A] border border-gray-300 rounded" />
                <span>Whatsapp</span>
              </label>
            </div>
          </div>
          <button type="submit"
            className="w-full bg-[#09254A] text-white font-semibold rounded-md py-3 text-base hover:bg-[#183864] transition">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUs;
