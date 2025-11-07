import "./globals.css";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

export const metadata = {
  title: "Genesis School",
  description: "Genesis School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Combined font families (Kameron and Lato): */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kameron:wght@400..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
