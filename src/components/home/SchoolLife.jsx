"use client";
import Image from "next/image";
import { useState } from "react";

export default function SchoolLife() {
  const cards = [
    { id: 1, img: "/assets/cardsimage/Rectangle 15.png" },
    { id: 2, img: "/assets/cardsimage/Rectangle 22.png" },
    { id: 3, img: "/assets/cardsimage/Rectangle 15.png" },
    {
      id: 4,
      img: "/assets/cardsimage/Rectangle 15.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    },
    { id: 5, img: "/assets/cardsimage/Rectangle 15.png" },
    { id: 6, img: "/assets/cardsimage/Rectangle 22.png" },
    {
      id: 7,
      img: "/assets/cardsimage/Rectangle 15.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    },
    { id: 8, img: "/assets/cardsimage/Rectangle 15.png" },
    {
      id: 9,
      img: "/assets/cardsimage/Rectangle 22.png",
    },
    { id: 10, img: "/assets/cardsimage/Rectangle 15.png" },
    { id: 11, img: "/assets/cardsimage/Rectangle 15.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    },
    {
      id: 12,
      img: "/assets/cardsimage/Rectangle 15.png",
    },
    { id: 13, img: "/assets/cardsimage/Rectangle 15.png" },
    { id: 14, img: "/assets/cardsimage/Rectangle 15.png" },
    {
      id: 15,
      img: "/assets/cardsimage/Rectangle 15.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    },
    { id: 16, img: "/assets/cardsimage/Rectangle 15.png" },
    { id: 17, img: "/assets/cardsimage/Rectangle 15.png" },
    {
      id: 18,
      img: "/assets/cardsimage/Rectangle 15.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full py-14 md:py-20 bg-white">
      <div className="text-left md:text-center mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#09254A]">
          A Glimpse Into Our School Life
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
        {cards.map((card) => {
          const flipped = card.text && hovered === card.id;

          return (
            <div
              key={card.id}
              className="relative w-full aspect-square rounded-3xl overflow-hidden cursor-pointer border border-[#DADADA]"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => card.text && setHovered(flipped ? null : card.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 ${
                  flipped ? "rotate-y-180" : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Image */}
                <div className="absolute inset-0 rounded-3xl flip-face">
                  <Image
                    src={card.img}
                    alt="School Image"
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                    className="object-cover w-full h-full rounded-3xl"
                  />
                </div>

                {/* Back Text */}
                {card.text && (
                  <div className="absolute inset-0 flex items-start justify-start p-4 md:p-5 bg-white text-[#09254A] text-left rounded-3xl rotate-y-180 flip-face leading-snug">
                    <p className="text-xs sm:text-sm md:text-base lg:text-[17px]">
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
      `}</style>
    </section>
  );
}
