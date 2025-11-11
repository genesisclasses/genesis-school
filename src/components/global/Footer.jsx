import Image from "next/image";
import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#ECECEC]">
      
      {/* Top Section */}
      <div className="max-w-[1729px] md:pl-12 mx-auto px-6 pt-[70px] pb-[30px] flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Logo */}
        <div className="flex justify-center  lg:ml-[50px]  mb-2 mt-[-23px] md:block">
          <Image
            src="/assets/logo.svg"
            alt="Genesis School Logo"
            width={1}
            height={120}
            className="w-[120px] h-auto"
            priority
          />
          <p className=" hidden lg:block lg:text-[12px] xl:text-[15px] lg:w-[280px] xl:w-[450px] mt-3 lg:mr-7 xl:mr-0">From the first step in pre-primary to the final years of senior secondary, Genesis School guides each pupil with a world-class curriculum, expert faculty, focused enrichment and exam-readiness programmes, and pastoral support that secures success in higher education beyond.</p>
        </div>

        {/* Right Side Content */}
        <div className="
          grid grid-cols-1 sm:grid-cols-3 gap-12 
          mt-10 md:mt-0 
          w-full md:w-auto
          text-center md:text-left
          md:max-w-[500px] lg:max-w-[1000px] 
          font-lato
        ">          
         <ul className="space-y-2 text-sm text-center md:text-left">
            <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>

  <li>
    <Link href="/">
      <p className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">
        Home
      </p>
    </Link>
  </li>
  <li>
    <Link href="/academics">
      <p className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">
        Academics
      </p>
    </Link>
  </li>
  <li>
    <Link href="/about">
      <p className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">
        About
      </p>
    </Link>
  </li>
  <li>
    <Link href="/project-darpan">
      <p className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">
        Project DARPAN
      </p>
    </Link>
  </li>
  <li>
    <Link href="/co-curricular">
      <p className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">
        Co-Curricular
      </p>
    </Link>
  </li>
  <li>
    <Link href="/blogs">
      <p className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">
        Blogs
      </p>
    </Link>
  </li>
</ul>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Contact Us</h4>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li className="flex md:justify-start justify-center gap-2 items-start">
                <MapPin size={16} />
                <p>Genesis School, Sector 45,<br />Karnal, Haryana – 122003</p>
              </li>
              <li className="flex md:justify-start  justify-center gap-2 items-center">
                <Phone size={16} />
                <Link href="tel:+919876543210" className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit  md:mx-0">
                  <p>+91 98765 43210</p>
                </Link>
              </li>
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <Mail size={16} />
                <Link href="mailto:info@genesisschool.in" className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">
                  <p >info@genesisschool.in</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Social Links</h4>
         

            <ul className="space-y-3">
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 ">
                  <Instagram size={16} /> <p  className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">Instagram</p>
                </Link>
              </li>
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Facebook size={16} /> <p  className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">Facebook</p>
                </Link>
              </li>
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <Link href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 ">
                  <Youtube size={16} /> <p  className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0">YouTube</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#09254a] h-[70px] w-full text-white justify-center items-center flex font-lato italic" >
        <p>Copyright ©Genesis 2025. Maintained by<span > <Link href={'https://indiefluence.in/'}>Indiefluence</Link> </span></p>
      </div>
    </footer>
  );
}
