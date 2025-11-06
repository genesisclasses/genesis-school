'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navyDark = '#001f3f';
  const amberButton = '#ffb833';
  const pathname = usePathname();
  const router = useRouter();

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.3 } },
    exit: { x: '100%', transition: { type: 'tween', ease: 'easeIn', duration: 0.3 } },
  };

  // ---------- Helpers to eliminate delay ----------
  const scrollToIdWithOffset = (id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const yOffset = -96;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(id);
    return true;
  };

  // Wait until #id exists in DOM, then scroll immediately (no arbitrary timeout)
  const waitAndScrollToId = (id) => {
    // try right away (covers most cases)
    if (scrollToIdWithOffset(id)) return;

    let rafId = null;
    const deadline = performance.now() + 2000; // give up after ~2s (safety)

    const tryScroll = () => {
      if (scrollToIdWithOffset(id)) {
        if (observer) observer.disconnect();
        return;
      }
      if (performance.now() > deadline) {
        if (observer) observer.disconnect();
        return; // give up quietly
      }
      rafId = requestAnimationFrame(tryScroll);
    };

    // Observe DOM mutations to detect when the section mounts
    const observer = new MutationObserver(() => {
      // queue a frame so layout is stable before measuring
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tryScroll);
    });

    observer.observe(document.body, { childList: true, subtree: true });
    // also kick off a frame loop in case observer misses (rare)
    rafId = requestAnimationFrame(tryScroll);
  };
  // ------------------------------------------------

  // Track active section on home scroll
  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section[id], div[id]');
        const scrollPos = window.scrollY + 120;
        let current = '';
        sections.forEach((section) => {
          if (
            section instanceof HTMLElement &&
            section.offsetTop <= scrollPos &&
            section.offsetTop + section.offsetHeight > scrollPos
          ) {
            current = section.getAttribute('id') || '';
          }
        });
        setActiveSection(current);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  // Smooth scroll on direct hash visits
  useEffect(() => {
    if (pathname !== '/') return;

    const scrollWithOffset = (hash) => {
      const id = hash.replace('#', '');
      if (!id) return;
      // use the fast wait+scroll so it works even if section mounts slightly later
      waitAndScrollToId(id);
    };

    if (typeof window !== 'undefined' && window.location.hash) {
      scrollWithOffset(window.location.hash);
    }

    const onHashChange = () => {
      if (typeof window !== 'undefined') {
        scrollWithOffset(window.location.hash);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [pathname]);

  // Unified navigation for Desktop + Mobile
  const handleNavigateToSection = (id) => {
    // If not on home, navigate first and remember target
    if (pathname !== '/') {
      setMobileOpen(false);
      sessionStorage.setItem('scrollTarget', id);
      router.push(`/#${id}`);
      return;
    }

    // Already on home
    setMobileOpen(false);
    waitAndScrollToId(id);
  };

  // Scroll after route change completes (desktop fix without delay)
  useEffect(() => {
    if (pathname === '/') {
      const target = sessionStorage.getItem('scrollTarget');
      if (target) {
        sessionStorage.removeItem('scrollTarget');
        // try immediately; if not present yet, observer will catch it
        waitAndScrollToId(target);
      }
    }
  }, [pathname]);

  const isActive = (linkPath, sectionId = '') => {
    if (pathname === '/' && sectionId) return activeSection === sectionId;
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

              {/* Academics (desktop) */}
              <li>
                <a
                  href="/#academics-section"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigateToSection('academics-section');
                  }}
                  className={`cursor-pointer hover:text-amber-400 transition duration-150 ${
                    activeSection === 'academics-section' ? 'border-b-2 border-amber-400' : ''
                  }`}
                >
                  Academics
                </a>
              </li>

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

        {/* Mobile Drawer */}
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

                {/* Academics (mobile) */}
                <li>
                  <a
                    href="/#academics-section"
                    className={`w-full py-1 transition-all duration-200 ${
                      activeSection === 'academics-section' ? 'border-b-2 border-amber-400 ' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigateToSection('academics-section');
                    }}
                  >
                    Academics
                  </a>
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
                    className={`w-full py-1 transition-all duration-200 ${
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
                    className="w-full bg-black text-white font-semibold py-[20px] px-[30px] text-center"
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
