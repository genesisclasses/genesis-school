"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PillarsOfGenesis() {
  const pillars = [
    { number: "01", title: "Enhancement of life skills" },
    { number: "02", title: "Creative self-expression" },
    { number: "03", title: "E-Projects and audio–visual interactions" },
    { number: "04", title: "Soft Skills and Effective Communication" },
  ];

  return (
    <section
      id="pillars"
      className="max-w-[1340px] mx-auto px-6 py-20 flex flex-col items-center justify-center gap-10 overflow-hidden"
    >
      {/* Heading — always top on all screens */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center w-full"
      >
        <h2 className="text-[32px] md:text-[36px] lg:text-[36px] xl:text-[40px] font-semibold leading-snug mb-12">
          <span className="text-[#002650]">Pillars of</span>
          <br />
          <span className="text-[#F8B535]">Genesis</span>
        </h2>
      </motion.div>

      {/* MOBILE ONLY — Animated vertical stack */}
      <div className="w-full sm:flex sm:flex-col justify-center items-center md:hidden block">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative w-[343px] h-[230px] -mt-18 mx-auto"
          >
            <svg width="343px" height="230px">
              <ellipse
                cx="171.5"
                cy="115"
                rx="150"
                ry="100"
                fill="none"
                stroke="black"
                strokeWidth={1.5}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col justify-center items-center py-4 pointer-events-none">
              <span className="text-[18px] text-[#333333] font-bold block text-center">
                {pillar.number}
              </span>
              <p className="text-[13px] font-bold text-[#333333] px-3 text-center leading-tight">
                {pillar.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* iPad layout — 2x2 overlapping circles */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-10 lg:hidden  justify-center items-center">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col items-center justify-center -mx-5 w-[270px] h-[270px] rounded-full border border-black bg-white/20 text-center shadow-sm"
            style={{
              marginTop: index >= 2 ? "-40px" : "0",
            }}
          >
            <span className="text-[18px] text-[#333333] mb-1 font-bold">
              {pillar.number}
            </span>
            <p className="text-[14px] font-bold text-[#333333] px-4 leading-snug">
              {pillar.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* LG layout — keep heading like iPad/mobile (top center) */}
      <div className="hidden lg:grid  lg:grid-cols-2  xl:grid xl:grid-cols-4  xl:px- mx-auto   justify-center items-center">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col items-center xl:-mx-3 justify-center w-[280px] h-[280px] rounded-full border border-black bg-white/20 text-center shadow-md"
            style={{
              marginTop: index >= 2 ? "-40px" : "0",
            }}
          >
            <span className="text-[18px] text-[#333333] mb-1 font-bold">
              {pillar.number}
            </span>
            <p className="text-[14px] font-bold text-[#333333] px-4 leading-snug">
              {pillar.title}
            </p>
          </motion.div>
        ))}
      </div>



    </section>
  );
}
