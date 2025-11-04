const ContactForm = () => {
    return (
      <form className="w-[343px] h-[770px] md:w-[728px] md:h-[726px] lg:w-[853px] lg:h-[726px] bg-white border border-gray-100 shadow-xl rounded-2xl px-5 sm:px-7 py-8 sm:py-9 flex-1">
  
        {/* Row inputs */}
        
          <div className="mb-3">
            <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
              Parent’s Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
            />
          </div>
          <div className="mb-3">
            <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
              Child’s Name
            </label>
            <input
              type="text"
              placeholder="Enter your child's name"
              className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
            />
          </div>
        {/* </div> */}
  
        {/* Class input */}
        <div className="mb-3">
          <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
            Class Interested For
          </label>
          <input
            type="text"
            placeholder="e.g., Pre-school, Class 5, Class 12"
            className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
          />
        </div>
  
        {/* Phone & Email */}
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex-1">
            <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
              Email Address <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
            />
          </div>
        </div>
  
        {/* Message */}
        <div className="mb-4">
          <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
            Your Message
          </label>
          <textarea
            rows={3}
            placeholder="Write your question or admission enquiry here"
            className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
          />
        </div>
  
        {/* Checkbox */}
        <div className="mb-5">
          <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-2 block">
            Preferred Contact Method
          </label>
          <div className="flex gap-6 text-sm sm:text-base">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
              <span>Call</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
              <span>Whatsapp</span>
            </label>
          </div>
        </div>
  
        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-[#09254A] text-white font-semibold rounded-md py-3 text-sm sm:text-base hover:bg-[#183864] transition"
        >
          Submit Enquiry
        </button>
      </form>
    );
  };
  
  export default ContactForm;
  