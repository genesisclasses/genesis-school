import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* GREY RECTANGLE (400px height) */}
      <div className="w-full bg-[#eeeeee] h-[400px] justify-items-center pt-[60px] ">
        {/* Center container with 194px margins on left & right */}
        <div className="xl:mx-[194px] lg:mr-[40px] lg:ml-[70px] h-full mt-[20px]">
          {/* Flex row, items pushed to corners */}
          <div className="h-full flex flex-col md:flex-row md:items-start items-center justify-center md:justify-between gap-10 md:gap-16 py-10">
            
            {/* LEFT: Logo */}
            <div className="flex items-center md:items-start">
              <Link href="/" aria-label="Genesis School Home">
                <Image
                  src="/assets/logo.svg"
                  alt="Genesis School Logo"
                  width={120}
                  height={120}
                  className="w-[120px] h-auto"
                  priority
                />
              </Link>
            </div>

            {/* RIGHT: 3 lists */}
            <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-neutral-800">
              {/* Quick Links */}
              <nav aria-label="Quick Links" >
                <h4 className="mb-3 text-[20px] font-semibold text-neutral-700">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:opacity-80">Home</Link></li>
                  <li><Link href="/about" className="hover:opacity-80">About Us</Link></li>
                  <li><Link href="/admissions" className="hover:opacity-80">Admissions</Link></li>
                  <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
                </ul>
              </nav>

              {/* Contact Us */}
              <div>
                <h4 className="mb-3 text-[20px] font-semibold text-neutral-700">Contact Us</h4>
                <ul className="space-y-3">
                  <li className="flex items-start leading-5">
                    <MapPin size={16} className="mr-2 mt-0.5 text-neutral-600 shrink-0" />
                    <span>
                      Genesis School, Sector 45,<br />Karnal, Haryana – 132003
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone size={16} className="mr-2 text-neutral-600 shrink-0" />
                    <a href="tel:+919876543210" className="hover:opacity-80">+91 98765 43210</a>
                  </li>
                  <li className="flex items-center">
                    <Mail size={16} className="mr-2 text-neutral-600 shrink-0" />
                    <a href="mailto:info@genesisschool.in" className="hover:opacity-80">
                      info@genesisschool.in
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="mb-3 text-[20px] font-semibold text-neutral-700">Social Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-80">
                      <Instagram size={18} /> 
                    </Link>
                  </li>
                  <li>
                    <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-80">
                      <Facebook size={18} /> 
                    </Link>
                  </li>
                  <li>
                    <Link href="https://youtube.com/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-80">
                      <Youtube size={18} /> 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BLUE RECTANGLE (50px height) */}
      <div className="w-full h-[75px] bg-[#09254a]" />
    </footer>
  );
};

export default Footer;