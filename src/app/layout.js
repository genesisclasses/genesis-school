import { Kameron, Lato } from 'next/font/google';
import "./globals.css";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import ScrollToTop from '@/Utility Hook/ScrollToTop';
import ConditionalAnnouncementCarousel from '@/components/global/ConditionalAnnouncementCarousel';

const kameron = Kameron({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-kameron'
});

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lato'
});

export const metadata = {
  title: "Genesis School",
  description: "Genesis School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kameron.variable} ${lato.variable}`}>
      <body>
        <Navbar />
        <ConditionalAnnouncementCarousel />
        <ScrollToTop />
        <main className="pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
