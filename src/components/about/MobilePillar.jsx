"use client";
import React from "react";
import Image from "next/image";
import elipseSrc from "../../../public/assets/about/elipse-mobile.svg"; // Adjust path if needed

const pillars = [
  { number: "01", title: "Enhancement of life skills" },
  { number: "02", title: "Creative self-expression" },
  { number: "03", title: "E-Projects and audio–visual interactions" },
  { number: "04", title: "Soft Skills and Effective Communication" },
];

export default function PillarsMobile() {
  return (
    <div className="w-full flex flex-col items-center relative -mt-16">
      {pillars.map((pillar, idx) => (
        <div
          key={pillar.number}
          className="w-[90vw] max-w-[343px] relative"
          style={{
            aspectRatio: "343/230",
            marginTop: idx === 0 ? 0 : "-36px", // overlap
            zIndex: 10 - idx,
          }}
        >
          {/* Overlapping SVG image with next/image */}
          <Image
            src={elipseSrc}
            alt=""
            fill
            className="object-contain"
            priority={idx === 0}
            sizes="(max-width: 343px) 90vw, 343px"
            draggable={false}
            style={{ pointerEvents: "none" }}
          />

          {/* Pillar content overlay */}
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="ml-9">
              <div className="text-[16px] text-[#333] mb-1">{pillar.number}</div>
              <div className="text-[18px] text-[#333] tracking-wide font-bold text-left max-w-[220px]">
                {pillar.title}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
