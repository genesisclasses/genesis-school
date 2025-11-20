'use client';

import { usePathname } from 'next/navigation';
import AnnouncementCarousel from './AnnouncementCarousel';

export default function ConditionalAnnouncementCarousel() {
  const pathname = usePathname();
  return pathname === '/' ? <AnnouncementCarousel /> : null;
}
