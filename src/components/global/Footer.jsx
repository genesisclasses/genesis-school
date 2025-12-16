'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Helper to check active state
  const isActive = (href) => {
    // Exact page match
    if (pathname === href) return true;
    // Section anchor on homepage, using hash state
    if (href.startsWith('/#') && pathname === '/') {
      const hashId = href.split('#')[1];
      if (hash === `#${hashId}`) {
        return true;
      }
    }
    return false;
  };

  // Navbar-like logic for section navigation
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -96;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleNavigateToSection = (id) => {
    if (pathname !== '/') {
      sessionStorage.setItem('scrollTarget', id);
      window.location.href = `/#${id}`;
      return;
    }
    scrollToId(id);
  };

  return (
    <footer className="w-full bg-[#ECECEC]">
      {/* Top Section */}
      <div className="max-w-[1729px] xl:pl-12 mx-auto px-4 xl:px-6 py-[100px] flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo */}
        <div className="flex justify-center lg:ml-[50px] mb-2  md:block">
          <Image
            src="/assets/logo.svg"
            alt="Genesis School Logo"
            width={1}
            height={120}
            className="w-[120px] h-auto"
            priority
          />
          <p className="hidden lg:block lg:text-[12px] xl:text-[15px] lg:w-[280px] xl:w-[450px] mt-3 lg:mr-7 xl:mr-0">
            From the first step in pre-primary to the final years of senior secondary, Genesis School guides each pupil with a world-class curriculum, expert faculty, focused enrichment and exam-readiness programmes, and pastoral support that secures success in higher education beyond.
          </p>
        </div>
        {/* Right Side Content */}
        <div className="
          grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-6 lg:gap-8 xl:gap-12
          mt-10 md:mt-0
          w-full md:w-auto
          text-center md:text-left
          md:max-w-[500px] lg:max-w-[1000px]
          font-lato
        ">
          <ul className="space-y-[15px] text-sm text-center md:text-left">
            <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
            <li>
              <Link href="/">
                <p className={`border-b-2 text-16px md:text-[14px] xl:text-[16px]  w-fit mx-auto md:mx-0 transition-all duration-200
                  ${isActive('/') ? 'border-[#F8B535] ' : 'border-transparent hover:border-[#F8B535]'}`}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <a
                href="/#academics-section"
                className={` mx-auto  md:mx-0 transition-all duration-200 cursor-pointer
                  `}
                onClick={e => {
                  e.preventDefault();
                  handleNavigateToSection('academics-section');
                }}
              >
                <p className='text-16px md:text-[14px] xl:text-[16px]'>Academics</p>
              </a>
            </li>
            <li>
              <Link href="/about">
                <p className={`border-b-2 text-16px md:text-[14px] xl:text-[16px] w-fit mx-auto md:mx-0 transition-all duration-200
                  ${isActive('/about') ? 'border-[#F8B535] ' : 'border-transparent hover:border-[#F8B535]'}`}>
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="/project-darpan">
                <p className={`border-b-2 w-fit text-16px md:text-[14px] xl:text-[16px] mx-auto md:mx-0 transition-all duration-200
                  ${isActive('/project-darpan') ? 'border-[#F8B535] ' : 'border-transparent hover:border-[#F8B535]'}`}>
                  Project DARPAN
                </p>
              </Link>
            </li>
            <li>
              <Link href="/co-curricular">
                <p className={`border-b-2 w-fit text-16px md:text-[14px] xl:text-[16px] mx-auto md:mx-0 transition-all duration-200
                  ${isActive('/co-curricular') ? 'border-[#F8B535] ' : 'border-transparent hover:border-[#F8B535]'}`}>
                  Co-Curricular
                </p>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <p className={`border-b-2 w-fit text-16px md:text-[14px] xl:text-[16px] mx-auto md:mx-0 transition-all duration-200
                  ${isActive('/blogs') ? 'border-[#F8B535] ' : 'border-transparent hover:border-[#F8B535]'}`}>
                  Blogs
                </p>
              </Link>
            </li>
            <li>
              <Link href="/mandate-disclosure">
                <p className={`border-b-2 w-fit text-16px md:text-[14px] xl:text-[16px] mx-auto md:mx-0 transition-all duration-200
                  ${isActive('/mandate-disclosure') ? 'border-[#F8B535] ' : 'border-transparent hover:border-[#F8B535]'}`}>
                  Mandate Disclosure
                </p>
              </Link>
            </li>
          </ul>
          {/* Contact Us */}
          <div >
            <h4 className="font-semibold mb-4 text-base">Contact Us</h4>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li className="flex md:justify-start justify-center gap-2 items-start">
                <MapPin size={16} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Genesis+School,+Sector+45,+Karnal,+Haryana+122003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2  border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit  md:mx-0 text-16px md:text-[14px] xl:text-[16px]"
                >
                  <p>Genesis School, Sector 45,<br />Karnal, Haryana – 122003</p>
                </a>
              </li>
              <li className="flex md:justify-start  justify-center gap-2 items-center">
                <Phone size={16} />
                <Link href="tel:+919876543210" className="border-b-2 text-16px md:text-[14px] xl:text-[16px] border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit  md:mx-0">
                  <p className=''>+91 98765 43210</p>
                </Link>
              </li>
              <li className="flex md:justify-start justify-center gap-2 items-center">
                <Mail size={19} />
                <Link href="mailto:info@genesisschool.in" >
                  <p className="border-b-2 border-transparent hover:border-[#F8B535] transition-all duration-200 w-fit mx-auto md:mx-0 text-16px md:text-[14px] xl:text-[16px]">info@genesisschool.in</p>
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          {/* Social Links */}
<div>
  <h4 className="font-semibold mb-4 text-base">Social Links</h4>
  <ul className="space-y-6">
    <li className="flex md:justify-start justify-center items-center">
      <Link
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4"  // increased gap
      >
        <Instagram size={20} />
      </Link>
    </li>

    <li className="flex md:justify-start justify-center items-center">
      <Link
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4"  // increased gap
      >
        <Facebook size={20} />
      </Link>
    </li>

    <li className="flex md:justify-start justify-center items-center">
      <Link
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4"  // increased gap
      >
        <Youtube size={20} />
      </Link>
    </li>
  </ul>
</div>

        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-[#09254a] h-[70px] w-full text-white flex items-center px-4 font-lato italic ">
  <div className="w-full max-w-[1729px] mx-auto flex justify-between items-center text-[12px] md:text-[16px] xl:px-[75px] 2xl:px-[91px]">

    {/* Left */}
    <p>Copyright ©The Genesis School 2025.</p>

    {/* Right */}
    <p className='text-[12px] md:text-[16px]'>
      Maintained by{" "}
      <Link href="https://indiefluence.in/" className="underline">
        Indiefluence
      </Link>
    </p>

  </div>
</div>

    </footer>
  );
}
