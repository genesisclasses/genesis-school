"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SchoolLife() {
  const cards = [
    { id: 1, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/kgrefuq5resjhmk8n77q_emawtn.webp" },
    { id: 2, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401156/ovpnth6zb8aa7sp0ts1a_jplclm.webp" },
    { id: 3, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/uw2ij1pbxyelcq2gwo9a_iqernb.webp" },
    {
      id: 4,
      img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/uackkd1d0n8olymp7dgi_c6ukhs.webp",
      text: "Our spacious, digitally equipped classrooms and state-of-the-art labs provide a comfortable and enriching academic environment.",
    },
    { id: 5, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762425943/5c_qs640h.webp" },
    { id: 6, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762425749/b9tq2ehdqjs28ngbji0t_roorcq.webp" },
    {
      id: 7,
      img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/uackkd1d0n8olymp7dgi_c6ukhs.webp",
      text: "The Genesis campus is thoughtfully designed to inspire curiosity, collaboration, and confidence in every learner.",
    },
    { id: 8, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762426628/lltrnolwzot84zdsu6qh_a9hqcy.webp" },
    { id: 9, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401155/vmv02rli8su7dh9g0eqt_tt0t1t.webp" },
    { id: 10, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401155/ubqb5nl7bovgzvkhd6mj_xp7gfa.webp" },
    {
      id: 11,
      img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/uackkd1d0n8olymp7dgi_c6ukhs.webp",
      text: "Smart classrooms and advanced laboratories create an engaging environment that promotes practical understanding daily.",
    },
    { id: 12, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/lnfdo4sr47pmy5bqbas0_mbgnlu.webp" },
    { id: 13, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/ugtjzql1rli0glzhyhrd_dxusyc.webp" },
    { id: 14, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762427203/14c_lnq8os.webp" },
    {
      id: 15,
      img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/uackkd1d0n8olymp7dgi_c6ukhs.webp",
      text: "Expansive playgrounds encourage teamwork, physical fitness, and the spirit of healthy competition among young minds.",
    },
    { id: 16, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401156/vu1cr1jyc5g6wxceo2aj_mrgbst.webp" },
    { id: 17, img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/uackkd1d0n8olymp7dgi_c6ukhs.webp" },
    {
      id: 18,
      img: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762401154/uackkd1d0n8olymp7dgi_c6ukhs.webp",
      text: "Music and art rooms nurture creativity, self-expression, and emotional growth through diverse cultural and artistic experiences.",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="text-left mb-12 px-4 max-w-[1417px] mx-auto">
        <h2 className="text-[32px] md:text-[40px] xl:text-[48px] font-semibold text-[#09254A]">
          A Glimpse Into Our School Life
        </h2>
      </div>

      <div className="max-w-[1417px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {cards.map((card) => {
          const hasText = !!card.text;
          // ✅ Default: text side visible (rotate 180)
          // ✅ Hover: flip back to image side (rotate 0)
          const isFlipped = !isMobile && hasText && hoveredId === card.id;

          return (
            <div
              key={card.id}
              className="relative w-full aspect-square rounded-3xl overflow-hidden cursor-pointer border border-[#DADADA]"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => !isMobile && hasText && setHoveredId(card.id)}
              onMouseLeave={() => !isMobile && setHoveredId(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 ${
                  hasText ? (isFlipped ? "rotate-y-0" : "rotate-y-180") : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: isMobile ? "none" : "transform 0.6s ease",
                }}
              >
                {/* Front (Image) */}
                <div className="absolute inset-0 rounded-3xl flip-face">
                  <Image
                    src={card.img}
                    alt="School Image"
                    fill
                    className="object-cover w-full h-full rounded-3xl"
                    priority
                  />
                </div>

                {/* Back (Text) */}
                {hasText && (
                  <div className="absolute inset-0 flex items-start justify-start p-4 md:p-5 bg-white text-[#09254A] text-left rounded-3xl rotate-y-180 flip-face leading-snug">
                    <p className="text-[14px] sm:text-[14px] md:text-[12px] lg:text-[15px]  xl:text-[15px] italic text-[#777777]">
                      {card.text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .flip-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </section>
  );
}
