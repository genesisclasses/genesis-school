'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navyDark = '#001f3f';
  const amberButton = '#ffb833';

  // Animation for mobile drawer
  const menuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 18,
      },
    },
    exit: {
      x: '100%',
      transition: { duration: 0.35, ease: 'easeInOut' },
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Info Bar */}
      <div
        className="text-white flex justify-end items-center text-xs h-8"
        style={{ backgroundColor: navyDark }}
      >
        <div className="max-w-7xl mx-auto flex lg:justify-end justify-center  items-center w-full px-4 sm:px-6 lg:px-8">
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
              <li><Link href="/" className="hover:text-amber-400 transition duration-150">Home</Link></li>
              <li><Link href="/academics" className="hover:text-amber-400 transition duration-150">Academics</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition duration-150">About</Link></li>
              <li><Link href="/project-darpan" className="hover:text-amber-400 transition duration-150">Project DARPAN</Link></li>
              <li><Link href="/co-curricular" className="hover:text-amber-400 transition duration-150">Co-Curricular</Link></li>
              <li><Link href="/blogs" className="hover:text-amber-400 transition duration-150">Blogs</Link></li>
            </ul>
            <div className="flex text-sm font-semibold ml-4">
              <Link
                href="/visit"
                className="text-black px-4 py-2"
                style={{
                  backgroundColor: amberButton,
                  borderTopLeftRadius: '1.25rem',
                  borderBottomLeftRadius: '1.25rem',
                }}
              >
                Schedule a Visit
              </Link>
              <Link
                href="/contact"
                className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-all duration-150"
                style={{
                  borderTopRightRadius: '1.25rem',
                  borderBottomRightRadius: '1.25rem',
                }}
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
              className="lg:hidden fixed top-[96px] right-0 h-[calc(100vh-96px)] w-3/4 max-w-[329px] bg-white shadow-2xl flex flex-col justify-start  items-center px-6 py-8"
            >
              {/* Centered, full-width clickable links */}
              <ul className="flex flex-col w-full text-gray-900 text-[16px] font-medium text-center space-y-[10px]">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Academics', href: '/academics' },
                  { name: 'Project DARPAN', href: '/project-darpan' },
                  { name: 'Co-Curricular', href: '/co-curricular' },
                  { name: 'Blogs', href: '/blogs' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="block w-full py-3 hover:bg-gray-100 rounded-md transition-all duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                <li className="w-full h-12 mb-7 mt-[15px]">
                  <Link
                    href="/visit"
                    className="px-[30px] w-full text-black font-semibold py-[20px]  rounded-full text-center"
                    style={{ backgroundColor: '#F8B535' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Schedule a Visit
                  </Link>
                </li>

                <li className="w-full h-12">
                  <Link
                    href="/contact"
                    className=" w-full bg-black text-white font-semibold py-[20px] px-[30px] text-center rounded-full"
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
