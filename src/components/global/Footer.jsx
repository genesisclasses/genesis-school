// import Image from "next/image";
// import Link from "next/link";
// import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="w-full">
//       {/* GREY RECTANGLE (400px height) */}
//       <div className="w-full bg-[#eeeeee] h-[400px] justify-items-center pt-[60px] ">
//         {/* Center container with 194px margins on left & right */}
//         <div className="xl:mx-[194px] lg:mr-[40px] lg:ml-[70px] h-full mt-[20px]">
//           {/* Flex row, items pushed to corners */}
//           <div className="h-full flex flex-col md:flex-row md:items-start items-center justify-center md:justify-between gap-10 md:gap-16 py-10">
            
//             {/* LEFT: Logo */}
//             <div className="flex items-center md:items-start">
//               <Link href="/" aria-label="Genesis School Home">
                // <Image
                //   src="/assets/logo.svg"
                //   alt="Genesis School Logo"
                //   width={120}
                //   height={120}
                //   className="w-[120px] h-auto"
                //   priority
                // />
//               </Link>
//             </div>

//             {/* RIGHT: 3 lists */}
//             <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-neutral-800">
//               {/* Quick Links */}
//               <nav aria-label="Quick Links" >
//                 <h4 className="mb-3 text-[20px] font-semibold text-neutral-700">Quick Links</h4>
//                 <ul className="space-y-2">
//                   <li><Link href="/" className="hover:opacity-80">Home</Link></li>
//                   <li><Link href="/about" className="hover:opacity-80">About Us</Link></li>
//                   <li><Link href="/admissions" className="hover:opacity-80">Admissions</Link></li>
//                   <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
//                 </ul>
//               </nav>

//               {/* Contact Us */}
//               <div>
//                 <h4 className="mb-3 text-[20px] font-semibold text-neutral-700">Contact Us</h4>
//                 <ul className="space-y-3">
//                   <li className="flex items-start leading-5">
//                     <MapPin size={16} className="mr-2 mt-0.5 text-neutral-600 shrink-0" />
//                     <span>
//                       Genesis School, Sector 45,<br />Karnal, Haryana – 132003
//                     </span>
//                   </li>
//                   <li className="flex items-center">
//                     <Phone size={16} className="mr-2 text-neutral-600 shrink-0" />
//                     <a href="tel:+919876543210" className="hover:opacity-80">+91 98765 43210</a>
//                   </li>
//                   <li className="flex items-center">
//                     <Mail size={16} className="mr-2 text-neutral-600 shrink-0" />
//                     <a href="mailto:info@genesisschool.in" className="hover:opacity-80">
//                       info@genesisschool.in
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Social Links */}
//               <div>
//                 <h4 className="mb-3 text-[20px] font-semibold text-neutral-700">Social Links</h4>
//                 <ul className="space-y-3">
//                   <li>
//                     <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
//                       className="flex items-center gap-2 hover:opacity-80">
//                       <Instagram size={18} /> 
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
//                       className="flex items-center gap-2 hover:opacity-80">
//                       <Facebook size={18} /> 
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="https://youtube.com/" target="_blank" rel="noopener noreferrer"
//                       className="flex items-center gap-2 hover:opacity-80">
//                       <Youtube size={18} /> 
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* BLUE RECTANGLE (50px height) */}
//       <div className="w-full h-[75px] bg-[#09254a]" />
//     </footer>
//   );
// };

// export default Footer;
import Image from "next/image";

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
      <div className="max-w-[1729px] mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Logo */}
        <div className="flex justify-center md:block">
        <Image
                  src="/assets/logo.svg"
                  alt="Genesis School Logo"
                  width={120}
                  height={120}
                  className="w-[120px] h-auto"
                  priority
                />
        </div>

       {/* Right Side Content */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-10 md:mt-0 w-full md:w-auto text-center md:text-left">
  
  {/* Quick Links */}
  <div>
    <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
    <ul className="space-y-2 text-sm text-center md:text-left">
      <li>Home</li>
      <li>Academics</li>
      <li>About</li>
      <li>Project DARPAN</li>
      <li>Co-Curricular</li>
      <li>Blogs</li>
    </ul>
  </div>

  {/* Contact Us */}
  <div>
    <h4 className="font-semibold mb-4 text-sm md:text-base">Contact Us</h4>
    <ul className="space-y-2 text-sm text-center md:text-left">
      <li className="flex md:justify-start justify-center gap-2 items-start">
        <MapPin size={16} />
        Genesis School, Sector 45,<br />Karnal, Haryana – 122003
      </li>

      <li className="flex md:justify-start justify-center gap-2 items-center">
        <Phone size={16} /> +91 98765 43210
      </li>

      <li className="flex md:justify-start justify-center gap-2 items-center">
        <Mail size={16} /> info@genesisschool.in
      </li>
    </ul>
  </div>

  {/* Social Links */}
  <div>
    <h4 className="font-semibold mb-4 text-sm md:text-base">Social Links</h4>
    <ul className="space-y-3">
      <li className="flex md:justify-start justify-center gap-2 items-center">
        <Instagram size={16} /> Instagram
      </li>
      <li className="flex md:justify-start justify-center gap-2 items-center">
        <Facebook size={16} /> Facebook
      </li>
      <li className="flex md:justify-start justify-center gap-2 items-center">
        <Youtube size={16} /> YouTube
      </li>
    </ul>
  </div>

</div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#09254a] h-[70px] w-full" />
    </footer>
  );
}
