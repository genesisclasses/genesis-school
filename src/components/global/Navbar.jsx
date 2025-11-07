'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // ✅ Detect Hero + HeroCards visibility (Glassmorphism ON)
  useEffect(() => {
    const hero = document.getElementById('hero-section');
    const herocards = document.getElementById('herocards-section');

    if (!hero && !herocards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        setIsHeroVisible(visible);
      },
      { threshold: 0.35 }
    );

    if (hero) observer.observe(hero);
    if (herocards) observer.observe(herocards);

    return () => observer.disconnect();
  }, []);

  // ✅ Smooth scroll with offset
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -96;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // ✅ Handles navigation from other pages
  const handleNavigateToSection = (id) => {
    setMobileOpen(false);

    if (pathname !== '/') {
      sessionStorage.setItem('scrollTarget', id);
      router.push(`/#${id}`);
      return;
    }
    scrollToId(id);
  };

  // ✅ After route loads on home, scroll to stored target
  useEffect(() => {
    if (pathname === '/') {
      const target = sessionStorage.getItem('scrollTarget');
      if (target) {
        sessionStorage.removeItem('scrollTarget');
        setTimeout(() => scrollToId(target), 50);
      }
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ✅ Top Info Bar */}
      <div className="bg-[#001f3f] text-white flex justify-end items-center text-xs h-8">
        <div className="max-w-7xl w-full flex justify-end px-6">
          <span className="flex items-center mr-6 font-light">
            <Phone size={14} className="mr-2" /> +91 98123 98123
          </span>
          <span className="flex items-center font-light">
            <Mail size={14} className="mr-2" />
            <a href="mailto:info@genesisclasses.com">info@genesisclasses.com</a>
          </span>
        </div>
      </div>

      {/* ✅ NAVBAR WITH GLASS EFFECT */}
      <nav
        className={`
          transition-all duration-300 border-b
          ${isHeroVisible
            ? "bg-white/8 backdrop-blur-sm border-transparent shadow-none" // ✅ Glass Mode
            : "bg-white border-gray-200 shadow-md"}                         // ✅ Normal
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">

          {/* ✅ Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dluulfzrc/image/upload/v1762494438/logo_offgkb.svg"
              alt="Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            <ul className="flex space-x-7 text-gray-900 text-sm font-medium">
              <li><Link href="/" className="hover:text-amber-400">Home</Link></li>

              <li>
                <a
                  href="/#academics-section"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigateToSection('academics-section');
                  }}
                  className="hover:text-amber-400 cursor-pointer"
                >
                  Academics
                </a>
              </li>

              <li><Link href="/about" className="hover:text-amber-400">About</Link></li>
              <li><Link href="/project-darpan" className="hover:text-amber-400">Project DARPAN</Link></li>
              <li><Link href="/co-curricular" className="hover:text-amber-400">Co-Curricular</Link></li>
              <li><Link href="/blogs" className="hover:text-amber-400">Blogs</Link></li>
            </ul>

            {/* ✅ Buttons */}
            <div className="flex text-sm font-semibold ml-4">
              <Link
                href="/contact"
                className="text-black bg-[#ffb833] px-4 py-2 rounded-l-full"
              >
                Schedule a Visit
              </Link>
              <Link
                href="/contact"
                className="bg-black text-white px-4 py-2 rounded-r-full"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* ✅ Mobile Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed top-[96px] right-0 w-3/4 max-w-[329px] h-[calc(100vh-96px)] bg-white shadow-2xl p-8"
            >
              <ul className="flex flex-col items-center space-y-6 text-base font-medium">
                <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>

                <li>
                  <a
                    href="/#academics-section"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigateToSection("academics-section");
                    }}
                  >
                    Academics
                  </a>
                </li>

                <li><Link href="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
                <li><Link href="/project-darpan" onClick={() => setMobileOpen(false)}>Project DARPAN</Link></li>
                <li><Link href="/co-curricular" onClick={() => setMobileOpen(false)}>Co-Curricular</Link></li>
                <li><Link href="/blogs" onClick={() => setMobileOpen(false)}>Blogs</Link></li>

                <li className="w-full">
                  <Link href="/contact" className="block bg-[#ffb833] py-3 rounded-full text-center">
                    Schedule a Visit
                  </Link>
                </li>

                <li className="w-full">
                  <Link href="/contact" className="block bg-black text-white py-3 rounded-full text-center">
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
}
