
"use client";
import Image from "next/image";

export default function DarpanCards() {
  const items = [
    {
      icon: "/assets/projectdarpan/1.svg",
      title: "Emotional Support",
      desc: "Trained counsellors and mentors guide students through challenges with empathy and understanding, ensuring every learner feels safe, valued, and emotionally balanced while navigating academic and personal growth within a supportive environment.",
    },
    {
      icon: "/assets/projectdarpan/2.svg",
      title: "Open up without fear",
      desc: "We create a culture of trust where students can speak freely about their thoughts, worries, and emotions. Every conversation is met with compassion, confidentiality, and respect — building courage to express themselves without hesitation or judgment.",
    },
    {
      icon: "/assets/projectdarpan/3.svg",
      title: "Overcome challenges",
      desc: "Through personalised guidance and resilience-building sessions, students learn to face difficulties with confidence. They develop problem-solving skills, adaptability, and emotional strength to transform setbacks into opportunities for growth and self-discovery.",
    },
    {
      icon: "/assets/projectdarpan/4.svg",
      title: "Rise with confidence",
      desc: "By nurturing self-belief and a positive mindset, we empower students to recognise their strengths, celebrate progress, and embrace challenges fearlessly — preparing them to step into the world with assurance and purpose.",
    },
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center bg-[#FDFBF8]">
      <div className="max-w-[1417px] w-full px-10 ">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-semibold text-[#0C2738] mb-10 text-left">
          The Support System Behind Every Student
        </h2>

        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 
          "
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="
                bg-white hover:bg-gradient-to-b hover:from-[#F5F9FF] hover:to-[#EAF3FF]
                
                border border-[#E8E4DB] rounded-3xl shadow-sm
                p-6 lg:p-3  xl:p-6 sm:p-8
                flex flex-col items-start justify-start
                transition-all duration-300 ease-in-out
                text-left
                min-h-[280px] sm:min-h-[320px] lg:min-h-[200px]   lg:w-[230.5px] xl:w-[336.25px] xl:min-h-[371px]
              "
            >
              {/* ICON */}
              <div className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] rounded-full border border-[#E8E4DB] flex items-center justify-center mb-4">
                <Image src={item.icon} alt={item.title} width={30} height={30} />
              </div>

              {/* TITLE */}
              <h3 className="flex flex-col justify-between  mt-auto text-[20px] md:text-[22px] lg:text-[12px] xl:text-[24px] font-semibold text-[#0C2738] mb-0">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#444444] flex flex-col justify-between  mt-1 text-[14px] md:text-[15px] lg:text-[12px] xl:text-[16px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
