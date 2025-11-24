'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_uxzjpaa';
const TEMPLATE_ID = 'template_78nd7xs';
const PUBLIC_KEY = 'Epjd72O0QhPwgDlQx';

const ContactUs = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errs = {};
    // Parent name: 2-42 characters, alpha only
    if (!data.user_parentname || data.user_parentname.trim().length < 2) {
      errs.user_parentname = "Please enter a valid name";
    }
    // Child name: 2-42 characters, alpha only
    if (!data.user_childname || data.user_childname.trim().length < 2) {
      errs.user_childname = "Please enter a valid name";
    }
    
    // Phone: 10 digits, Indian, can use regex for mobile
    if (
      !data.user_phone ||
      !/^[6-9]\d{9}$/.test(data.user_phone.trim())
    ) {
      errs.user_phone = "Enter valid 10 digit phone number";
    }

    // Email:
    if (data.user_email && data.user_email.trim().length > 0) {
  if (
    !/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(data.user_email.trim())
  ) {
    errs.user_email = "Please enter a valid Gmail address";
  }
}

    // Message: 5-200 chars
    if (!data.user_message || data.user_message.trim().length < 5) {
      errs.user_message = "Message must be at least 5 characters";
    }
    // Email: if present, must be valid
    if (data.user_email && data.user_email.trim().length > 0) {
      if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
          data.user_email.trim()
        )
      ) {
        errs.user_email = "Enter valid email";
      }
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validate(data);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fix the errors in the form!',
      });
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for your enquiry 🙂',
          confirmButtonColor: "#09254A"
        });
        formRef.current.reset();
        setErrors({});
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to send!',
          text: 'Please try again.',
        });
      });
  };

  return (
    <section
      className="relative w-full bg-[#fafbfb] py-12 sm:py-16 px-3 sm:px-6 flex justify-center items-center"
      style={{
        backgroundImage: 'url(/assets/contact/contactbg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[0.80fr_1.2fr] gap-4 lg:gap-6 items-center">
        {/* Left side */}
        <div
          className="
            flex flex-col 
            items-start text-left 
            md:items-center md:text-center 
            lg:items-start lg:text-left 
            justify-center 
            px-2 sm:px-8 lg:px-4
          "
        >
          <h2 className="font-bold text-[38px] md:text-5xl lg:text-[42px] xl:text-5xl leading-tight mb-1 text-gray-900">
            Have Questions?
          </h2>
          <h2 className="font-bold text-[30px]  sm:text-[34px] lg:text-[35px] xl:text-[40px] leading-tight mb-4 text-gray-900 md:mb-0 ">
            We’re Here to Help!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2 font-medium mb-4 max-w-[350px] md:max-w-[400px] ">
            Enquire about admissions or get answers to your doubts in one step.
          </p>
          <div className="w-full flex justify-start md:justify-center lg:justify-start mt-2">
            <Image
              src="/assets/contact/contactform.svg"
              alt="Contact Illustration"
              width={780}
              height={700}
              className="w-[280px] h-[230px] sm:w-[350px] sm:h-[300px] lg:w-[400px] lg:h-[350px]"
              priority
            />
          </div>
        </div>
        {/* Right side: Form */}
        <div className="flex flex-col items-center justify-center w-full">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full bg-white border border-gray-100 shadow-xl rounded-2xl px-5 sm:px-7 py-7 sm:py-8"
            autoComplete="off"
            noValidate
          >
            {/* Row inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              <div>
                <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
                  Parent’s Name
                </label>
                <input
                  name="user_parentname"
                  type="text"
                  minLength={2}
                  maxLength={42}
                  placeholder="Enter your full name"
                  className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
                  required
                />
                {errors.user_parentname && (
                  <div className="text-red-500 text-xs mt-1">{errors.user_parentname}</div>
                )}
              </div>
              <div>
                <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
                  Child’s Name
                </label>
                <input
                  name="user_childname"
                  type="text"
                  minLength={2}
                  maxLength={42}
                  placeholder="Enter your child's name"
                  className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
                  required
                />
                {errors.user_childname && (
                  <div className="text-red-500 text-xs mt-1">{errors.user_childname}</div>
                )}
              </div>
            </div>
            {/* Class Interested For */}
            <div className="mb-3">
              <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
                Class Interested For
              </label>
              <input
                name="user_interested"
                type="text"
                minLength={2}
                maxLength={40}
                placeholder="e.g., Pre-school, Class 5, Class 12"
                className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
                required
              />
              {errors.user_interested && (
                <div className="text-red-500 text-xs mt-1">{errors.user_interested}</div>
              )}
            </div>
            {/* Phone/Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              <div>
                <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
                  Phone Number
                </label>
                <input
                  name="user_phone"
                  type="tel"
                  pattern="[6-9]{1}[0-9]{9}"
                  minLength={10}
                  maxLength={10}
                  placeholder="Enter your 10 digit mobile number"
                  className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
                  required
                />
                {errors.user_phone && (
                  <div className="text-red-500 text-xs mt-1">{errors.user_phone}</div>
                )}
              </div>
              <div>
                <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
                  Email Address <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
                />
                {errors.user_email && (
                  <div className="text-red-500 text-xs mt-1">{errors.user_email}</div>
                )}
              </div>
            </div>
            {/* Your Message */}
            <div className="mb-4">
              <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
                Your Message
              </label>
              <textarea
                name="user_message"
                minLength={5}
                maxLength={200}
                rows={3}
                placeholder="Write your question or admission enquiry here"
                className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic focus:border-[#09254A] bg-transparent"
                required
              />
              {errors.user_message && (
                <div className="text-red-500 text-xs mt-1">{errors.user_message}</div>
              )}
            </div>
            {/* Preferred Contact Method */}
            <div className="mb-5">
              <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-2 block">
                Preferred Contact Method
              </label>
              <div className="flex gap-6 text-sm sm:text-base">
                <label className="flex items-center space-x-2">
                  <input
                    name="user_contactmethod"
                    type="checkbox"
                    value="Call"
                    className="h-4 w-4 border-gray-300 rounded"
                  />
                  <span>Call</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    name="user_contactmethod"
                    type="checkbox"
                    value="Whatsapp"
                    className="h-4 w-4 border-gray-300 rounded"
                  />
                  <span>Whatsapp</span>
                </label>
              </div>
            </div>
            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#09254A] text-white font-semibold rounded-md py-3 text-sm sm:text-base hover:bg-[#F8B535] hover:text-black active:bg-[#FBC253] cursor-pointer transition duration-300 "
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
