'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navyDark = '#001f3f';
  const amberButton = '#ffb833';
  const pathname = usePathname();

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 70, damping: 18 } },
    exit: { x: '100%', transition: { duration: 0.35, ease: 'easeInOut' } },
  };

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 120;
        let current = '';
        sections.forEach((section) => {
          if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            current = section.getAttribute('id');
          }
        });
        setActiveSection(current);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  const handleMobileScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setMobileOpen(false);
      setTimeout(() => {
        const yOffset = -96;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(id);
      }, 300);
    } else {
      window.location.href = '/';
    }
  };

  const isActive = (linkPath, sectionId = '') => {
    if (pathname === '/' && sectionId) {
      return activeSection === sectionId;
    }
    return pathname === linkPath;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Info Bar */}
      <div className="text-white flex justify-end items-center text-xs h-8" style={{ backgroundColor: navyDark }}>
        <div className="max-w-7xl mx-auto flex lg:justify-end justify-center items-center w-full px-4 sm:px-6 lg:px-8">
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

      {/* Main Navbar */}
      <nav className="bg-white shadow-md border-b border-gray-200 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              className="h-12 w-auto"
              src="/assets/logo.svg"
              alt="Genesis School Logo"
              width={48}
              height={48}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            <ul className="flex space-x-7 text-gray-900 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className={`hover:text-amber-400 transition duration-150 ${
                    isActive('/') ? 'border-b-2 border-amber-400' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              {pathname === '/' ? (
                <li>
                  <ScrollLink
                    to="academics-section"
                    smooth={true}
                    duration={700}
                    offset={-96}
                    className={`cursor-pointer hover:text-amber-400 transition duration-150 ${
                      activeSection === 'academics-section' ? 'border-b-2 border-amber-400' : ''
                    }`}
                  >
                    Academics
                  </ScrollLink>
                </li>
              ) : (
                <li>
                  <Link
                    href="/#academics-section"
                    className={`hover:text-amber-400 transition duration-150 ${
                      pathname === '/#academics-section' || activeSection === 'academics-section'
                        ? 'border-b-2 border-amber-400'
                        : ''
                    }`}
                  >
                    Academics
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/about"
                  className={`hover:text-amber-400 transition duration-150 ${
                    isActive('/about') ? 'border-b-2 border-amber-400' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/project-darpan"
                  className={`hover:text-amber-400 transition duration-150 ${
                    isActive('/project-darpan') ? 'border-b-2 border-amber-400' : ''
                  }`}
                >
                  Project DARPAN
                </Link>
              </li>
              <li>
                <Link
                  href="/co-curricular"
                  className={`hover:text-amber-400 transition duration-150 ${
                    isActive('/co-curricular') ? 'border-b-2 border-amber-400' : ''
                  }`}
                >
                  Co-Curricular
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`hover:text-amber-400 transition duration-150 ${
                    isActive('/blogs') ? 'border-b-2 border-amber-400' : ''
                  }`}
                >
                  Blogs
                </Link>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex text-sm font-semibold ml-4">
              <Link
                href="/visit"
                className="text-black px-4 py-2"
                style={{ backgroundColor: amberButton, borderTopLeftRadius: '1.25rem', borderBottomLeftRadius: '1.25rem' }}
              >
                Schedule a Visit
              </Link>
              <Link
                href="/contact"
                className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-all duration-150"
                style={{ borderTopRightRadius: '1.25rem', borderBottomRightRadius: '1.25rem' }}
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-900 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <X size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <Menu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="lg:hidden fixed top-[96px] right-0 h-[calc(100vh-96px)] w-3/4 max-w-[329px] bg-white shadow-2xl flex flex-col justify-start items-center px-6 py-8"
            >
              <ul className="flex flex-col w-full text-gray-900 text-[16px] font-medium text-center space-y-[16px]">
                <li>
                  <Link
                    href="/"
                    className={`w-full py-1 transition-all duration-200 ${
                      isActive('/') ? 'border-b-2 border-amber-400 ' : ''
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <button
                    className={`w-full py-1 transition-all duration-200 ${
                      activeSection === 'academics-section' ? 'border-b-2 border-amber-400 ' : ''
                    }`}
                    onClick={() => handleMobileScroll('academics-section')}
                  >
                    Academics
                  </button>
                </li>

                <li>
                  <Link
                    href="/about"
                    className={`w-full py-1 transition-all duration-200 ${
                      isActive('/about') ? 'border-b-2 border-amber-400' : ''
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project-darpan"
                    className={`w-full py-1 transition-all duration-200 ${
                      isActive('/project-darpan') ? 'border-b-2 border-amber-400 ' : ''
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Project DARPAN
                  </Link>
                </li>
                <li>
                  <Link
                    href="/co-curricular"
                    className={`w-full py-1 transition-all duration-200  ${
                      isActive('/co-curricular') ? 'border-b-2 border-amber-400 ' : ''
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Co-Curricular
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className={`w-full py-1 transition-all duration-200 ${
                      isActive('/blogs') ? 'border-b-2 border-amber-400  ' : ''
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Blogs
                  </Link>
                </li>
                <li className="w-full h-12 mb-7 mt-[15px]">
                  <Link
                    href="/visit"
                    className="px-[30px] w-full text-black font-semibold py-[20px] rounded-full text-center"
                    style={{ backgroundColor: '#F8B535' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Schedule a Visit
                  </Link>
                </li>
                <li className="w-full h-12">
                  <Link
                    href="/contact"
                    className="w-full bg-black text-white font-semibold py-[20px] px-[30px] text-center rounded-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get in touch
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
