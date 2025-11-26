'use client';
import { useState, useEffect } from 'react';

function useScreenRange(min, max) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth;
      setMatch(w >= min && w <= max);
    };
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [min, max]);

  return match;
}

export default useScreenRange;
