// import Image from "next/image";

// export default function DarpanCards() {
//   const items = [
//     { icon: "/assets/projectdarpan/1.svg", title: "Emotional Support" },
//     { icon: "/assets/projectdarpan/2.svg", title: "Open up without fear" },
//     { icon: "/assets/projectdarpan/3.svg", title: "Overcome challenges" },
//     { icon: "/assets/projectdarpan/4.svg", title: "Rise with confidence" },
//   ];

//   return (
//     <section className="w-full py-16 flex flex-col items-center">
//       <div className="max-w-7xl w-full px-4">
//         <h2 className="text-4xl md:text-4xl lg:text-[40px] xl:text-[48px] font-semibold text-[#0C2738] mb-10">
//           The Support System Behind Every Student
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="bg-linear-to-b from-[#0026500D] to-[#FFFFFF1A] rounded-2xl shadow-sm border border-[#E8E4DB] p-6 h-[260px] sm:h-[290px] lg:h-[240px] xl:h-[332px] flex flex-col justify-between"
//             >
//               <div className=" w-[60px] h-[60px] lg:w-[60px] lg:h-[60px]  xl:w-[80px] xl:h-[80px]  rounded-full flex items-center justify-center border border-[#E8E4DB]">
//                 <Image src={item.icon} alt={item.title} width={26} height={26} />
//               </div>

//               <p className="text-sm md:text-[24px] text-[24px] lg:text-[17px] xl:text-[24px] text-[#0C2738] font-medium">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function DarpanCards() {
  const items = [
    { 
      icon: "/assets/projectdarpan/1.svg", 
      title: "Emotional Support",
      desc: "We help students express emotions safely."
    },
    { 
      icon: "/assets/projectdarpan/2.svg", 
      title: "Open up without fear",
      desc: "A safe space to talk freely without judgement."
    },
    { 
      icon: "/assets/projectdarpan/3.svg", 
      title: "Overcome challenges",
      desc: "Guiding students to solve real-life problems."
    },
    { 
      icon: "/assets/projectdarpan/4.svg", 
      title: "Rise with confidence",
      desc: "Confidence-building through positive mentoring."
    },
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="max-w-7xl w-full px-4">
        <h2 className="text-4xl md:text-4xl lg:text-[40px] xl:text-[48px] font-semibold text-[#0C2738] mb-10">
          The Support System Behind Every Student
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-linear-to-b from-[#0026500D] to-[#FFFFFF1A] rounded-2xl shadow-sm border border-[#E8E4DB] p-6 h-[260px] sm:h-[290px] lg:h-[240px] xl:h-[332px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.03]"
            >
              {/* ICON — always visible */}
              <div className="w-[60px] h-[60px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] rounded-full flex items-center justify-center border border-[#E8E4DB]">
                <Image src={item.icon} alt={item.title} width={26} height={26} />
              </div>

              {/* Title (Desktop fades, Mobile stays) */}
              <p className="text-sm md:text-[24px] text-[24px] lg:text-[17px] xl:text-[24px] text-[#333333] font-medium
                lg:transition-all lg:duration-300 lg:group-hover:opacity-0">
                {item.title}
              </p>

              {/* DARK OVERLAY — only desktop */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-linear-to-t from-black/50 to-transparent 
              lg:transition-all lg:duration-500 lg:group-hover:h-full"></div>

              {/* Description & hover text */}
              <p 
                className="
                  text-[15px] md:text-base lg:text-[15px] xl:text-[18px] font-medium
                  text-[#0C2738] lg:text-white
                  
                  /* mobile/tablet — always visible below title */
                  block mt-[-58] sm:mt-[-96] lg:mt-1 leading-snug lg:hidden 
                "
              >
                {item.desc}
              </p>

              {/* Desktop animation content */}
              <p 
                className="hidden lg:block absolute bottom-0 left-0 w-full text-white text-[15px] xl:text-[18px] font-medium p-6 
                opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
              >
                <span className="font-bold block mb-1">{item.title}</span>
                <span className="opacity-90">{item.desc}</span>
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
