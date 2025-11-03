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
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-8 overflow-hidden">
      {/* Left Side Heading */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left md:w-1/4"
      >
        <h2 className="text-3xl md:text-[40px] font-semibold leading-snug">
          <span className="text-[#002650]">Pillars of</span>
          <br />
          <span className="text-[#F8B535]">Genesis</span>
        </h2>
      </motion.div>

      {/* Right Side Circles */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.4,
                ease: "easeOut",
              }}
              className={`
                relative flex flex-col items-center justify-center
                w-40 h-40 md:w-[280px] md:h-[280px]
                rounded-full border border-black bg-white/20 text-center shadow-md
                mb-6 md:mb-0
                ${index > 0 ? "md:-ml-8" : ""}
                z-[${10 - index}]
              `}
            >
              <span className="text-sm text-[#333333] mb-1 font-bold">
                {pillar.number}
              </span>
              <p className="text-sm md:text-[16px] font-bold text-[#333333] px-4 leading-snug">
                {pillar.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
