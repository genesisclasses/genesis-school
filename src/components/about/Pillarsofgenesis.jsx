"use client";
import React from "react";
import { motion } from "framer-motion";

const pillars = [
  { number: "01", title: "Enhancement of life skills" },
  { number: "02", title: "Creative self-expression" },
  { number: "03", title: "E-Projects and audio–visual interactions" },
  { number: "04", title: "Soft Skills and Effective Communication" },
];

export default function PillarsOfGenesis() {
  return (
    <section
      id="pillars"
      className="max-w-[1340px] mx-auto px-4 py-8 md:py-16 flex flex-col items-center justify-center gap-10 overflow-hidden"
    >
      {/* MOBILE+MD+LG — Always on Top, Centered */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="block xl:hidden text-center w-full"
      >
        <h2 className="text-[32px] md:text-[42px] lg:text-[42px] xl:text-[48px] font-semibold leading-snug mb-12">
          <span className="text-[#002650]">Pillars of</span>
          <br />
          <span className="text-[#F8B535]">Genesis</span>
        </h2>
      </motion.div>

      {/* MOBILE ONLY */}
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

      {/* iPad MD — 2x2 grid */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-10 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10 xl:hidden justify-center items-center">
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
      {/* XL — Heading left, pillars center */}
      <div className="hidden xl:grid xl:grid-cols-5 xl:gap-x-0 xl:items-center xl:w-full xl:mx-auto">
        {/* Heading in Left column, center vertically */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col justify-center items-start xl:h-full xl:col-span-1 xl:pr-6"
        >
          <h2 className="text-[40px] font-semibold leading-snug">
            <span className="text-[#002650]">Pillars of</span>
            <br />
            <span className="text-[#F8B535]">Genesis</span>
          </h2>
        </motion.div>
        {/* Pillars in columns 2-5, centered */}
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col items-center xl:-mx-3 justify-center w-[280px] h-[280px] rounded-full border border-black bg-white/20 text-center shadow-md"
            style={{
              marginTop: index >= 2 ? "0" : "0",
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
