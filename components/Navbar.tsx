'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Protein', 'Pre-Workout', 'Creatine', 'Vitamins', 'Apparel'];

  return (
    <motion.nav
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 w-full z-[1000] h-[64px] bg-white transition-colors duration-300 ${
        scrolled || mobileMenuOpen ? 'border-b-2 border-yellow' : 'border-b-2 border-black'
      }`}
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative z-[1001] bg-white">
        {/* Left: Logo Area */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-full border-[1.5px] border-ink-red shrink-0">
            <span className="font-oswald text-[7px] font-bold text-ink-red leading-none text-center uppercase">
              EST.<br/>24
            </span>
          </div>
          <Link href="/" className="font-bebas text-2xl font-black tracking-tighter text-black uppercase leading-none">
            THE SUPPLEMENT STORE
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-oswald text-[12px] font-bold text-black uppercase tracking-[0.1em] hover:text-ink-red transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <button className="text-black hover:text-ink-red transition-colors" aria-label="Search">
              <Search size={20} strokeWidth={2} />
            </button>
            <button className="text-black hover:text-ink-red transition-colors" aria-label="User Account">
              <User size={20} strokeWidth={2} />
            </button>
            <button className="text-black hover:text-ink-red transition-colors" aria-label="Cart">
              <ShoppingCart size={20} strokeWidth={2} />
            </button>
          </div>
          
          <button className="hidden sm:block bg-yellow text-black font-oswald text-[12px] font-bold uppercase tracking-widest px-6 py-2.5 border-2 border-black rounded-none shadow-[3px_3px_0px_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all hover:bg-black hover:text-yellow">
            SHOP NOW
          </button>
          
          <button className="md:hidden text-black" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-white border-b-2 border-black flex flex-col z-[1000] px-6 py-8 shadow-2xl overflow-y-auto"
          >
            {/* Texture background wrapper */}
            <div className="absolute inset-0 texture-scanlines opacity-50 pointer-events-none z-[-1]"></div>
            
            <div className="flex flex-col gap-6 relative z-10 w-full max-w-sm mx-auto">
              {links.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bebas text-[40px] text-black hover:text-ink-red transition-colors border-b-[1.5px] border-gray-m pb-2 uppercase"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 relative z-10 w-full max-w-sm mx-auto">
               <button className="bg-yellow text-black font-oswald text-[14px] font-bold uppercase tracking-widest px-6 py-4 border-2 border-black rounded-none shadow-[3px_3px_0px_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all w-full text-center hover:bg-black hover:text-yellow">
                 SHOP NOW
               </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-m flex items-center justify-center gap-10 relative z-10 w-full max-w-sm mx-auto">
              <button className="text-black hover:text-ink-red transition-colors" aria-label="Search" title="Search">
                 <Search size={22} strokeWidth={2} />
              </button>
              <button className="text-black hover:text-ink-red transition-colors" aria-label="User" title="User">
                 <User size={22} strokeWidth={2} />
              </button>
              <button className="text-black hover:text-ink-red transition-colors" aria-label="Cart" title="Cart">
                 <ShoppingCart size={22} strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
