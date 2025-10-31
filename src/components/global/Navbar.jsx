// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Phone, Mail } from 'lucide-react';
// import logo from '../../assets/Logo.svg'; // Update this path

// const Navbar = () => (
//   <header className="sticky top-0 z-50">
//     {/* Top Info Bar */}
//     <div className="bg-blue-900 bg-opacity-100 text-white flex justify-end items-center px-8 py-2 text-sm">
//       <span className="flex items-center mr-6">
//         <Phone size={18} className="mr-2" />
//         +91 98123 98123
//       </span>
//       <span className="flex items-center">
//         <Mail size={18} className="mr-2" />
//         info@genesisclasses.com
//       </span>
//     </div>
//     {/* Transparent Navbar (glass effect) */}
//     <nav className="flex items-center justify-between px-12 py-3 backdrop-blur bg-white/30">
//       {/* Left: Logo */}
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-16" />
//       </div>
//       {/* Center: Navigation Links */}
//       <ul className="flex space-x-7 text-lg font-medium text-white">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/academics">Academics</Link></li>
//         <li><Link to="/darpan">Project DARPAN</Link></li>
//         <li><Link to="/campus">Campus Life</Link></li>
//       </ul>
//       {/* Right: Buttons */}
//       <div className="flex">
//         <Link to="/visit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-l-full transition-all">Schedule a Visit</Link>
//         <Link to="/contactus" className="bg-black hover:bg-gray-800 text-white font-bold px-6 py-2 rounded-r-full transition-all">Get in touch</Link>
//       </div>
//     </nav>
//   </header>
// );
// export default Navbar;
// src/components/Navbar.jsx
// src/components/Navbar.jsx
// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react'; 
// Assuming the logo is available at this path
import logo from '../../assets/Logo.svg'; 

const Navbar = () => {
  // Use the exact dark blue color from the image: #001f3f
  const navyDark = '#001f3f';
  // Use the exact yellow/orange color from the image for the button
  const amberButton = '#ffb833'; 

  return (
    <header className="sticky top-0 z-50">
      
      {/* 1. Top Info Bar (Dark Blue) */}
      <div 
        className="text-white flex justify-end items-center text-xs h-8"
        style={{ backgroundColor: navyDark }}
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center w-full px-4 sm:px-6 lg:px-8">
            <span className="flex items-center mr-6 font-light">
              <Phone size={14} className="mr-2" />
              +91 98123 98123
            </span>
            <span className="flex items-center font-light">
              <Mail size={14} className="mr-2" />
              info@genesisclasses.com
            </span>
        </div>
      </div>
      
      {/* 2. Main Navigation Bar (Transparent/Blurred) */}
      <nav className="backdrop-blur-sm bg-black/10"> 
        <div className="max-w-7xl mx-auto flex items-center h-16 px-4 sm:px-6 lg:px-8">
            
            {/* Left: Logo (Stays anchored to the far left) */}
            <div className="flex items-center mr-auto"> {/* mr-auto pushes everything else away */}
              <Link to="/" className="flex-shrink-0">
                <img 
                  className="h-12 w-auto" 
                  src={logo} 
                  alt="Genesis School Logo" 
                />
              </Link>
            </div>

            {/* Right Group: Navigation Links and Buttons (Stays grouped to the far right) */}
            <div className="flex items-center space-x-7">
                {/* Navigation Links */}
                <ul className="flex space-x-7 text-white text-sm font-medium">
                  <li><Link to="/" className="hover:text-amber-400 transition duration-150">Home</Link></li>
                  <li><Link to="/about" className="hover:text-amber-400 transition duration-150">About</Link></li>
                  <li><Link to="/academics" className="hover:text-amber-400 transition duration-150">Academics</Link></li>
                  <li><Link to="/darpan" className="hover:text-amber-400 transition duration-150">Project DARPAN</Link></li>
                  <li><Link to="/campus" className="hover:text-amber-400 transition duration-150">Campus Life</Link></li>
                </ul>

                {/* Buttons */}
                <div className="flex text-sm font-semibold space-x-0 ml-4"> {/* ml-4 for subtle gap from links */}
                  <Link 
                    to="/visit" 
                    className="text-black px-4 py-2 transition-all duration-150 whitespace-nowrap"
                    style={{ backgroundColor: amberButton, borderTopLeftRadius: '1.25rem', borderBottomLeftRadius: '1.25rem' }}
                  >
                    Schedule a Visit
                  </Link>
                  <Link 
                    to="/contactus" 
                    className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-all duration-150 whitespace-nowrap"
                    style={{ borderTopRightRadius: '1.25rem', borderBottomRightRadius: '1.25rem' }}
                  >
                    Get in touch
                  </Link>
                </div>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;