"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Swal from "sweetalert2";
import "../css/contact-checkbox.css";

const SERVICE_ID = "service_uxzjpaa";
const TEMPLATE_ID = "template_78nd7xs";
const PUBLIC_KEY = "Epjd72O0QhPwgDlQx";

const TIME_SLOTS = [
  "", // placeholder
  "(8:30am - 9:30am)",
  "(9:30am - 10:30am)",
  "(10:30am - 11:30am)",
  "(11:00am - 12:00pm)",
  "(12:30pm - 1:30pm)",
  "(2:00pm - 3:00pm)",
  "(3:00pm - 4:00pm)",
  "(4:00pm - 5:00pm)",
  "(5:00pm - 6:00pm)",
];

const ContactUs = () => {
  const formRef = useRef();
  const dateInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [time, setTime] = useState("");
  const [dateValue, setDateValue] = useState(""); // yyyy-mm-dd

  const formatDateToDDMMYYYY = (isoDate) => {
    if (!isoDate) return "";
    const [y, m, d] = isoDate.split("-");
    if (!y || !m || !d) return isoDate;
    return `${d}/${m}/${y}`;
  };

  const validate = (data) => {
    const errs = {};
    if (!data.user_parentname || data.user_parentname.trim().length < 2) {
      errs.user_parentname = "Please enter a valid name";
    }
    if (!data.user_childname || data.user_childname.trim().length < 2) {
      errs.user_childname = "Please enter a valid name";
    }
    if (!data.user_phone || !/^[6-9]\d{9}$/.test(data.user_phone.trim())) {
      errs.user_phone = "Enter valid 10 digit phone number";
    }
    if (data.user_email && data.user_email.trim().length > 0) {
      if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
          data.user_email.trim()
        )
      ) {
        errs.user_email = "Enter valid email";
      }
    }
    if (!data.user_visiting) {
      errs.user_visiting = "Choose if you will visit the school";
    }
    if (data.user_visiting === "Yes") {
      if (
        !data.user_visit_date ||
        !/^\d{4}-\d{2}-\d{2}$/.test(data.user_visit_date)
      ) {
        errs.user_visit_date = "Please choose a valid date";
      }
      if (!data.user_visit_time || data.user_visit_time.trim().length === 0) {
        errs.user_visit_time = "Please choose a preferred time slot";
      } else if (!TIME_SLOTS.includes(data.user_visit_time)) {
        errs.user_visit_time = "Selected time slot is invalid";
      }
    }
    if (!data.user_message || data.user_message.trim().length < 5) {
      errs.user_message = "Message must be at least 5 characters";
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
        icon: "error",
        title: "Oops...",
        text: "Please fix the errors in the form!",
      });
      return;
    }

    // Remove any previous formatted date hidden input
    const existing = formRef.current.querySelector(
      'input[name="user_visit_date_formatted"]'
    );
    if (existing) existing.remove();

    // Add hidden input with dd/mm/yyyy formatted date (useful for email templates)
    const hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "user_visit_date_formatted";
    hidden.value = formatDateToDDMMYYYY(dateValue);
    formRef.current.appendChild(hidden);

    // Show immediate "Sending..." feedback (appears instantly)
    Swal.fire({
      title: "Sending...",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Send the form
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        // replace the "Sending..." toast with success
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
        });

        // Reset form & state after success
        if (formRef.current) formRef.current.reset();
        setErrors({});
        setTime("");
        setDateValue("");
        // remove the hidden field after sending
        if (formRef.current) {
          const h = formRef.current.querySelector(
            'input[name="user_visit_date_formatted"]'
          );
          if (h) h.remove();
        }
      })
      .catch(() => {
        // replace the "Sending..." toast with error
        Swal.fire({
          icon: "error",
          title: "Failed to send!",
          text: "Please try again.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  // open native date picker where supported
  const openDatePicker = () => {
    const input = dateInputRef.current;
    if (!input) return;
    if (typeof input.showPicker === "function") {
      try {
        input.showPicker();
      } catch {
        input.focus();
      }
    } else {
      input.focus();
    }
  };

  return (
    <section
      className="relative w-full bg-[#fafbfb] py-12 sm:py-16 px-3 sm:px-6 flex justify-center items-center"
      style={{
        backgroundImage: "url(/assets/contact/contactbg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
                  className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic placeholder:text-gray-300 focus:border-[#09254A] bg-transparent"
                  required
                />
                {errors.user_parentname && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.user_parentname}
                  </div>
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
                  className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic placeholder:text-gray-300 focus:border-[#09254A] bg-transparent"
                  required
                />
                {errors.user_childname && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.user_childname}
                  </div>
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
                className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic placeholder:text-gray-300 focus:border-[#09254A] bg-transparent"
                required
              />
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
                  className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic placeholder:text-gray-300 focus:border-[#09254A] bg-transparent"
                  required
                />
                {errors.user_phone && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.user_phone}
                  </div>
                )}
              </div>
              <div>
                <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-1 block">
                  Email Address{" "}
                  <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic placeholder:text-gray-300 focus:border-[#09254A] bg-transparent"
                />
                {errors.user_email && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.user_email}
                  </div>
                )}
              </div>
            </div>

            {/* Visiting question + Date & Time */}
            <div className="mb-4">
              <label className="text-sm sm:text-[16px] font-semibold text-gray-800 mb-2 block">
                Are You Visiting Our School?
              </label>
              <div className="flex items-center gap-6 mb-3">
                <label className="flex items-center space-x-2">
                  <input
                    name="user_visiting"
                    type="radio"
                    value="Yes"
                    className="h-4 w-4 border-gray-300 rounded bg-transparent radio-button"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    name="user_visiting"
                    type="radio"
                    value="No"
                    className="h-4 w-4 border-gray-300 rounded bg-transparent radio-button"
                  />
                  <span>No</span>
                </label>
              </div>
              {errors.user_visiting && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.user_visiting}
                </div>
              )}

              {/* Date & Time row */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                {/* DATE */}
                <div>
                  <label className="text-sm sm:text-[16px] font-semibold text-gray-800 block mb-1">
                    If Yes, Preferred Visit Date
                  </label>

                  <div
                    id="dateWrapper"
                    className="relative cursor-pointer"
                    onClick={() => {
                      if (dateInputRef.current) {
                        if (
                          typeof dateInputRef.current.showPicker === "function"
                        ) {
                          dateInputRef.current.showPicker();
                        } else {
                          dateInputRef.current.focus();
                        }
                      }
                    }}
                  >
                    <input
                      ref={dateInputRef}
                      name="user_visit_date"
                      type="date"
                      value={dateValue}
                      onChange={(e) => setDateValue(e.target.value)}
                      className={`w-full border-0 border-b border-gray-200 px-0 py-2 text-sm sm:text-base outline-none bg-transparent cursor-pointer focus:border-[#09254A] ${
                        dateValue ? "text-[#0f1724] not-italic" : "text-gray-300 italic"
                      }`}
                    />
                  </div>

                  {errors.user_visit_date && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.user_visit_date}
                    </div>
                  )}
                </div>

                {/* TIME SELECT */}
                <div>
                  <label className="text-sm sm:text-[16px] font-semibold text-gray-800 block mb-1">
                    Preferred Time Slot
                  </label>

                  <div className="select-slot">
                    <select
                      name="user_visit_time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={`w-full border-0 border-b border-gray-200 px-0 py-2 text-[14px] outline-none bg-transparent focus:border-[#09254A] ${
                        time ? "text-[#0f1724] not-italic" : "text-gray-300 italic"
                      }`}
                    >
                      <option value="" disabled>
                        Select a time slot
                      </option>
                      {TIME_SLOTS.slice(1).map((slot, idx) => (
                        <option key={idx} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {errors.user_visit_time && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.user_visit_time}
                    </div>
                  )}
                </div>
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
                className="w-full border-0 border-b border-gray-200 px-0 py-2 sm:py-3 text-sm sm:text-base outline-none placeholder:text-sm italic placeholder:text-gray-300 focus:border-[#09254A] bg-transparent"
                required
              />
              {errors.user_message && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.user_message}
                </div>
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
                    className="h-4 w-4 border-gray-300 rounded custom-checkbox"
                  />
                  <span>Call</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    name="user_contactmethod"
                    type="checkbox"
                    value="Whatsapp"
                    className="h-4 w-4 border-gray-300 rounded custom-checkbox"
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
