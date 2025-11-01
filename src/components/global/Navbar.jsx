'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navyDark = '#001f3f';
  const amberButton = '#ffb833';

  return (
    <header className="sticky top-0 z-50">
      {/* 1. Top Info Bar */}
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
            <a href="mailto:info@genesisclasses.com" className="hover:underline">
              info@genesisclasses.com
            </a>
          </span>
        </div>
      </div>

      {/* 2. Main Navbar with Glass Effect */}
      <nav className="
        bg-white/30
        backdrop-blur-lg
        shadow-lg
        border-b
        border-white/20
        transition-all
      ">
        <div className="max-w-7xl mx-auto flex items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo: always visible */}
          <div className="flex items-center mr-auto">
            <Link href="/" className="flex-shrink-0">
              <Image
                className="h-12 w-auto"
                src='/assets/logo.svg'
                alt="Genesis School Logo"
                width={48}
                height={48}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation: Only show on lg+ (>= 1024px) */}
          <div className="hidden lg:flex items-center space-x-7">
            <ul className="flex space-x-7 text-gray-900 text-sm font-medium">
              <li><Link href="/" className="hover:text-amber-400 transition duration-150">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition duration-150">About</Link></li>
              <li><Link href="/academics" className="hover:text-amber-400 transition duration-150">Academics</Link></li>
              <li><Link href="/darpan" className="hover:text-amber-400 transition duration-150">Project DARPAN</Link></li>
              <li><Link href="/campus" className="hover:text-amber-400 transition duration-150">Campus Life</Link></li>
            </ul>
            <div className="flex text-sm font-semibold space-x-0 ml-4">
              <Link
                href="/visit"
                className="text-black px-4 py-2 transition-all duration-150 whitespace-nowrap"
                style={{
                  backgroundColor: amberButton,
                  borderTopLeftRadius: '1.25rem',
                  borderBottomLeftRadius: '1.25rem'
                }}
              >
                Schedule a Visit
              </Link>
              <Link
                href="/contact"
                className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-all duration-150 whitespace-nowrap"
                style={{
                  borderTopRightRadius: '1.25rem',
                  borderBottomRightRadius: '1.25rem'
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Hamburger (Mobile & Tablet only) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-900 focus:outline-none"
              aria-label="Open navigation menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu (only on lg-) */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white/80 backdrop-blur-xl shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-900 text-base font-medium">
              <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
              <li><Link href="/academics" onClick={() => setMobileOpen(false)}>Academics</Link></li>
              <li><Link href="/darpan" onClick={() => setMobileOpen(false)}>Project DARPAN</Link></li>
              <li><Link href="/campus" onClick={() => setMobileOpen(false)}>Campus Life</Link></li>
              <li>
                <Link
                  href="/visit"
                  className="block w-10/12 mx-auto text-black font-semibold px-4 py-2"
                  style={{
                    backgroundColor: amberButton,
                    borderRadius: '1.25rem',
                    marginBottom: '10px'
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Schedule a Visit
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="block w-10/12 mx-auto bg-black text-white font-semibold px-4 py-2"
                  style={{ borderRadius: '1.25rem' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
