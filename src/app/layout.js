import { Kameron, Lato } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import ConditionalAnnouncementCarousel from "@/components/global/ConditionalAnnouncementCarousel";
import ScrollToTop from "@/Utility Hook/ScrollToTop"; // Import the client component
import ScrollToTop from "@/Utility Hook/ScrollToTop";
import Footer from "../components/global/Footer";

const kameron = Kameron({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-kameron",
});

export const metadata = {
  metadataBase: new URL("https://thegenesisschool.in"),

  title: {
    default: "The Genesis School – Where Learning Meets Excellence",
    template: "%s | The Genesis School",
  },

  description:
    "The Genesis School offers world-class education with expert faculty, holistic development, modern infrastructure, and a future-ready learning environment in Karnal.",

  keywords: [
    "Genesis School",
    "The Genesis School",
    "Best school in Karnal",
    "CBSE school Karnal",
    "Top school Haryana",
    "School admissions Karnal",
    "Project Darpan",
    "Genesis Classes",
  ],

  alternates: {
    canonical: "https://thegenesisschool.in",
  },

  openGraph: {
    title: "The Genesis School – Where Learning Meets Excellence",
    description:
      "A school built for future-ready learners with top-tier faculty, modern campus, and holistic education.",
    url: "https://thegenesisschool.in",
    siteName: "The Genesis School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://thegenesisschool.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Genesis School Karnal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Genesis School – Where Learning Meets Excellence",
    description: "A future-focused CBSE school providing academic excellence and holistic growth in Karnal.",
    images: ["https://thegenesisschool.in/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kameron.variable} ${lato.variable}`}>
      <GoogleTagManager gtmId="G-8S341V7KV6" />
      <body>
        <Navbar />
        <ConditionalAnnouncementCarousel />
        <ScrollToTop />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-8S341V7KV6" />
    </html>
  );
}
