import { Kameron, Lato } from 'next/font/google';
import "./globals.css";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const kameron = Kameron({
  weight: ['400', '700'],
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
