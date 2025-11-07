// import Image from "next/image";
// import Link from 'next/link';
// import {
//   Instagram,
//   Facebook,
//   Youtube,
//   Phone,
//   Mail,
//   MapPin
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#ECECEC]">
      
//       {/* Top Section */}
//       <div className="max-w-[1729px] md:pl-12 mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row justify-between items-center md:items-start">
        
//         {/* Logo */}
//         <div className="flex justify-center md:block">
//         <Image
//                   src="/assets/logo.svg"
//                   alt="Genesis School Logo"
//                   width={1}
//                   height={120}
//                   className="w-[120px] h-auto"
//                   priority
//                 />
//         </div>

//        {/* Right Side Content */}
// <div className="
//   grid grid-cols-1 sm:grid-cols-3 gap-12 
//   mt-10 md:mt-0 
//   w-full md:w-auto
//   text-center md:text-left
//   md:max-w-[500px] lg:max-w-[1000px]
// ">
  
//   {/* Quick Links */}
//   <div>
//     <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
//     <ul className="space-y-2 text-sm text-center md:text-left">
//       <li>Home</li>
//       <li>Academics</li>
//       <li>About</li>
//       <li>Project DARPAN</li>
//       <li>Co-Curricular</li>
//       <li>Blogs</li>
//     </ul>
//   </div>

//   {/* Contact Us */}
//   <div>
//     <h4 className="font-semibold mb-4 text-sm md:text-base">Contact Us</h4>
//     <ul className="space-y-2 text-sm text-center md:text-left">
//       <li className="flex md:justify-start justify-center gap-2 items-start">
//         <MapPin size={16} />
//         Genesis School, Sector 45,<br />Karnal, Haryana – 122003
//       </li>

//       <li className="flex md:justify-start  justify-center gap-2 items-center">
//         <Phone size={16} /> +91 98765 43210
//       </li>

//       <li className="flex md:justify-start justify-center gap-2 items-center">
//         <Mail size={16} /> info@genesisschool.in
//       </li>
//     </ul>
//   </div>

//   {/* Social Links */}
//   <div>
//     <h4 className="font-semibold mb-4 text-sm md:text-base">Social Links</h4>
//     <ul className="space-y-3">
//       <li className="flex md:justify-start justify-center gap-2 items-center">
//         <Instagram size={16} /> Instagram
//       </li>
//       <li className="flex md:justify-start justify-center gap-2 items-center">
//         <Facebook size={16} /> Facebook
//       </li>
//       <li className="flex md:justify-start justify-center gap-2 items-center">
//         <Youtube size={16} /> YouTube
//       </li>
//     </ul>
//   </div>

// </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-[#09254a] h-[70px] w-full" />
//     </footer>
//   );
// }
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
      <div className="max-w-[1729px] md:pl-12 mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Logo */}
        <div className="flex justify-center  mb-2 mt-[-23px] md:block">
          <Image
            src="/assets/logo.svg"
            alt="Genesis School Logo"
            width={1}
            height={120}
            className="w-[120px] h-auto"
            priority
          />
          <p className=" hidden lg:block lg:text-[14px] xl:text-[15px] lg:w-[300px] xl:w-[450px] mt-3">From the first step in pre-primary to the final years of senior secondary, Genesis School guides each pupil with a world-class curriculum, expert faculty, focused enrichment and exam-readiness programmes, and pastoral support that secures success in higher education beyond.</p>
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
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/academics">
                  <p>Academics</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/project-darpan">
                  <p>Project DARPAN</p>
                </Link>
              </li>
              <li>
                <Link href="/co-curricular">
                  <p>Co-Curricular</p>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <p>Blogs</p>
                </Link>
              </li>
            </ul>
          </div>

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
                <a href="tel:+919876543210" className="hover:underline">
                  <p>+91 98765 43210</p>
                </a>
              </li>
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <Mail size={16} />
                <a href="mailto:info@genesisschool.in" className="hover:underline">
                  <p>info@genesisschool.in</p>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Social Links</h4>
            <ul className="space-y-3">
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                  <Instagram size={16} /> <p>Instagram</p>
                </a>
              </li>
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                  <Facebook size={16} /> <p>Facebook</p>
                </a>
              </li>
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                  <Youtube size={16} /> <p>YouTube</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#09254a] h-[70px] w-full text-white justify-center items-center flex font-lato italic" >
        <p>Copyright ©Genesis 2025. Maintained by Indiefluence</p>
      </div>
    </footer>
  );
}
