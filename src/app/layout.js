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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
