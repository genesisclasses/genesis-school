'use client';
import useScreenRange from '@/Utility Hook/useScreenRange';
import GenesisPathDesktop from '@/components/home/GenesisPathDesktop';
import GenesisPathResponsive from '@/components/home/GenesisPathResponsive'; // Covers both mobile and tablet (0–1023px)

const GenesisPath = () => {
  const isDesktop = useScreenRange(1024, 9999);
  // All screens below 1024px use the responsive component with flex-row (tab) or flex-col (mobile)
  if (isDesktop) return <GenesisPathDesktop />;
  return <GenesisPathResponsive />;
};

export default GenesisPath;
