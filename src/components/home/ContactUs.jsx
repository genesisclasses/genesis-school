
// import Image from 'next/image';

// const ContactUs = () => (
//   <section
//     className="relative w-full bg-[#fafbfb] py-12 sm:py-16 px-3 sm:px-6 flex justify-center items-center"
//     style={{
//       backgroundImage: 'url(/assets/home/contactbg.svg)',
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}
//   >
//     <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//     {/* Left side */}
// <div className="flex flex-col items-start lg:items-start justify-center text-left lg:text-left px-2 sm:px-10">
//   <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-1 text-gray-900">
//     Have Questions?
//   </h2>
//   <h2 className="font-bold text-[30px] sm:text-[34px] lg:text-[40px] leading-tight mb-4 text-gray-900">
//     We’re Here to Help!
//   </h2>

//   <p className="text-gray-600 text-base sm:text-lg mt-2 font-medium mb-4 max-w-[350px]">
//     Enquire about admissions or get answers to your doubts in one step.
//   </p>

//   {/* Image center on mobile, left on desktop */}
//   <div className="w-full flex justify-start mt-2">
//     <Image
//       src="/assets/home/contactform.svg"
//       alt="Contact Illustration"
//       width={700}
//       height={700}
//       className="w-[260px] h-[230px] sm:w-[350px] sm:h-[300px]  lg:w-[400px] lg:h-[350px]"
//       priority
//     />
//   </div>
// </div>

//       {/* Right side: Form */}
//       <div className="flex flex-col items-center justify-center w-full">
//         <form className="w-full bg-white border border-gray-100 shadow-xl rounded-2xl px-5 sm:px-7 py-7 sm:py-8">

//           {/* Row inputs */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
//             <div>
//               <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">Parent’s Name</label>
//               <input type="text" placeholder="Enter your full name"
//                 className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent" />
//             </div>
//             <div>
//               <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">Child’s Name</label>
//               <input type="text" placeholder="Enter your child's name"
//                 className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent" />
//             </div>
//           </div>

//           {/* Single input */}
//           <div className="mb-3">
//             <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">Class Interested For</label>
//             <input type="text" placeholder="e.g., Pre-school, Class 5, Class 12"
//               className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent" />
//           </div>

//           {/* Row inputs */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
//             <div>
//               <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">Phone Number</label>
//               <input type="tel" placeholder="Enter your mobile number"
//                 className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent" />
//             </div>
//             <div>
//               <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">Email Address <span className="text-gray-400">(optional)</span></label>
//               <input type="email" placeholder="Enter your email address"
//                 className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent" />
//             </div>
//           </div>

//           {/* Message */}
//           <div className="mb-4">
//             <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">Your Message</label>
//             <textarea rows={3} placeholder="Write your question or admission enquiry here"
//               className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent" />
//           </div>

//           {/* Checkbox */}
//           <div className="mb-5">
//             <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-2 block">Preferred Contact Method</label>
//             <div className="flex gap-6 text-sm sm:text-base">
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
//                 <span>Call</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
//                 <span>Whatsapp</span>
//               </label>
//             </div>
//           </div>

//           {/* Button */}
//           <button type="submit"
//             className="w-full bg-[#09254A] text-white font-semibold rounded-md py-3 text-sm sm:text-base hover:bg-[#183864] transition">
//             Submit Enquiry
//           </button>
//         </form>
//       </div>
//     </div>
//   </section>
// );

// export default ContactUs;
import ContactLeft from "@/components/contactus/ContactLeft";
import ContactForm from "@/components/contactus/ContactForm";

const ContactUs = () => (
  <section
    className="relative w-full bg-[#fafbfb] py-12 sm:py-16 pl-20 sm:px-6 flex justify-center items-center"
    style={{
      backgroundImage: 'url(/assets/home/contactbg.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-8xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-0">
      <ContactLeft />
      <ContactForm />
    </div>
  </section>
);

export default ContactUs;
