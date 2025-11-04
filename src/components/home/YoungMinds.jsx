'use client';
import React from "react";
import YoungMinds768 from '@/components/home/YoungMinds768'; // your special layout (same as you posted)
import YoungMindsDefault from '@/components/home/YoungMindsDefault'; // desktop/mobile layout
import useScreenRange from '@/Utility Hook/useScreenRange';

const YoungMinds = () => {
  const show768UI = useScreenRange(700, 1023); // shows YoungMinds768 when width is 700-1023px
  return show768UI ? <YoungMinds768 /> : <YoungMindsDefault />;
};

export default YoungMinds;
