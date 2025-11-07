"use client";
import React from "react";
import { motion } from "framer-motion";
import useScreenRange from "@/Utility Hook/useScreenRange"; // Adjust path if needed
import PillarsMobile from "@/components/about/MobilePillar"; // Adjust path if needed

const pillars = [
  { number: "01", title: "Enhancement of life skills" },
  { number: "02", title: "Creative self-expression" },
  { number: "03", title: "E-Projects and audio–visual interactions" },
  { number: "04", title: "Soft Skills and Effective Communication" },
];

// PillarContent component (same as original)
function PillarContent({ number, title, numberClass, titleClass }) {
  return (
    <>
      <p className={`block text-left ml-4 lg:ml-9 xl:ml-13 ${numberClass}`}>{number}</p>
      <p className={`font-bold px-3 md:text-left tracking-wide leading-tight ${titleClass}`}>
        {title}
      </p>
    </>
  );
}

// iPad Grid Pillar with animation
function GridPillar({ pillar, index }) {
  return (
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
      className="relative flex flex-col items-start justify-center -mx-5 w-[359px] h-[359px] rounded-full border-2 border-black bg-white/20 text-center shadow-sm px-12"
      style={{ marginTop: index >= 2 ? "-40px" : "0" }}
    >
      <PillarContent
        number={pillar.number}
        title={pillar.title}
        numberClass="text-[16px] text-[#333333] mb-1"
        titleClass="text-[20px] text-[#333333] px-4 leading-snug"
      />
    </motion.div>
  );
}

// XL Large Screen Pillar for 5-column layout with animation
function XLPillar({ pillar, index }) {
  return (
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
      className="relative flex flex-col items-center md:items-start xl:-mx-3 justify-center lg:w-[210px] lg:h-[210px] xl:w-[280px] xl:h-[280px] rounded-full border-2 border-black bg-white/20 text-center"
      style={{ marginTop: "0" }}
    >
      <PillarContent
        number={pillar.number}
        title={pillar.title}
        numberClass="lg:text-[14px] xl:text-[16px] text-[#333333] mb-1"
        titleClass="lg:text-[16px] xl:text-[20px] text-[#333333] lg:px-8 xl:px-12 leading-snug"
      />
    </motion.div>
  );
}

export default function PillarsOfGenesis() {
  const isMobile = useScreenRange(0, 767);

  return (
    <section
      id="pillars"
      className="max-w-[1340px] mx-auto px-4 md:px-8 lg:px-4 py-10 md:py-16 flex flex-col items-center justify-center gap-10 overflow-hidden"
    >
      {/* Heading for MOBILE with no animation */}
      {isMobile ? (
        <div className="block lg:hidden text-left w-full">
          <h2 className="text-[32px] md:text-[42px] lg:text-[42px] xl:text-[48px] font-semibold mb-12">
            <span className="text-[#002650]">Pillars of</span>{" "}
            <span className="text-[#F8B535] ml-2"> The Genesis School</span>
          </h2>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="block lg:hidden text-left w-full"
        >
          <h2 className="text-[32px] md:text-[42px] lg:text-[42px] xl:text-[48px] font-semibold mb-12">
            <span className="text-[#002650]">Pillars of</span>{" "}
            <span className="text-[#F8B535] ml-2"> The Genesis School</span>
          </h2>
        </motion.div>
      )}

      {/* MOBILE ONLY - No animation */}
      {isMobile && <PillarsMobile pillars={pillars} />}

      {/* iPad MD — 2x2 grid with animations */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-10 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10 lg:hidden justify-center items-center -mt-10">
        {pillars.map((pillar, index) => (
          <GridPillar key={index} pillar={pillar} index={index} />
        ))}
      </div>

      {/* XL — Heading left, pillars center with animation */}
      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-x-0 xl:items-center xl:w-full xl:mx-auto">
        {/* Heading in Left column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col justify-center items-start xl:h-full xl:col-span-1 xl:pr-6"
        >
          <h2 className="text-[32px] md:text-[42px] xl:text-[48px] font-semibold leading-tight">
            <span className="text-[#002650]">Pillars of</span>
            <br />
            <span className="text-[#F8B535]">The</span>
            <br />
            <span className="text-[#F8B535]">Genesis</span>
            <br />
            <span className="text-[#F8B535]">School</span>
          </h2>
        </motion.div>

        {/* Pillars Columns 2-5 with animations */}
        {pillars.map((pillar, index) => (
          <XLPillar key={index} pillar={pillar} index={index} />
        ))}
      </div>
    </section>
  );
}
