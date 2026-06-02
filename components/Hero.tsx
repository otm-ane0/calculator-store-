'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const h1LinesRef = useRef<HTMLDivElement[]>([]);
  const topBarRef = useRef<HTMLDivElement>(null);
  const subDeckRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Top bar slides down
      tl.from(topBarRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, 0.2);

      // Hero text lines clip path reveal
      tl.from(h1LinesRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
        duration: 0.7,
        ease: 'power3.inOut',
        stagger: 0.15,
      }, 0.4);

      // Sub deck fade in up
      tl.from(subDeckRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, 1.0);

      // Buttons scale in
      tl.from(buttonsRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.5)',
      }, 1.1);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToH1Refs = (el: HTMLDivElement | null) => {
    if (el && !h1LinesRef.current.includes(el)) {
      h1LinesRef.current.push(el);
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[100vh] w-full bg-white pt-[64px] overflow-hidden worn-edge-vignette section-wrapper"
      style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 11px)' }}
    >
      {/* Magazine Content Safe Area */}
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 xl:px-8 relative z-10 flex flex-col">
        
        {/* Magazine Cover Header Band */}
        <div 
          ref={topBarRef}
          className="flex justify-between items-center py-3 border-b border-gray-m w-full mb-8 lg:mb-16 mt-4"
        >
          <span className="font-oswald text-[11px] text-gray-t uppercase tracking-[0.2em]">
            THE SUPPLEMENT STORE — VOL.24 ISSUE.06
          </span>
          <span className="font-oswald text-[11px] text-gray-t uppercase tracking-[0.2em] hidden sm:block">
            OFFICIAL PERFORMANCE NUTRITION
          </span>
        </div>

        <div className="flex flex-col lg:flex-row flex-grow items-center relative w-full border-b-[2px] border-black pb-0">
          
          {/* Left Column - 60% */}
          <div className="w-full lg:w-[60%] flex flex-col items-start relative z-20 pb-16 lg:pb-24 lg:pr-10 pt-10">
            {/* Outline bg number */}
            <div className="absolute -top-[20px] -left-[20px] font-bebas text-[180px] md:text-[260px] text-black font-black opacity-[0.04] leading-none pointer-events-none z-[-1]">
              01
            </div>

            {/* Tape Element */}
            <div className="absolute top-10 -left-6 w-24 h-6 bg-[rgba(255,214,0,0.7)] rotate-[-3deg] mix-blend-multiply z-10 hidden md:flex items-center justify-center">
              <span className="text-[8px] font-bold tracking-tighter uppercase text-black font-oswald">MAX GAINS ONLY</span>
            </div>

            {/* Eyebrow badge */}
            <div className="bg-yellow text-black font-oswald text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1 border border-black mb-6 self-start">
              ELITE GRADE SUPPLEMENTS
            </div>

            {/* Stacked H1 */}
            <h1 className="flex flex-col font-bebas uppercase leading-[0.85] mb-8 select-none">
              <div ref={addToH1Refs} className="text-[70px] sm:text-[90px] md:text-[100px] text-black tracking-tight">
                PREMIUM
              </div>
              <div 
                ref={addToH1Refs} 
                className="text-[80px] sm:text-[100px] md:text-[120px] tracking-tight mb-2 !text-transparent origin-left"
                style={{ WebkitTextStroke: '3px #0A0A0A' }}
              >
                NUTRITION
              </div>
              <div ref={addToH1Refs} className="text-[70px] sm:text-[90px] md:text-[100px] text-black tracking-tight">
                FOR ELITE
              </div>
              <div ref={addToH1Refs} className="text-[55px] sm:text-[70px] md:text-[80px] bg-yellow text-black self-start px-4 mt-2">
                PERFORMANCE
              </div>
            </h1>

            {/* Sub-deck */}
            <p ref={subDeckRef} className="font-special text-[15px] text-[#444] leading-relaxed mb-10 max-w-sm mt-8">
              * Engineering the next generation of athletic dominance. 100% Raw. Laboratory proven results for the Casablanca elite. NO FILLERS. JUST POWER.
            </p>

            {/* Buttons Row */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <button className="bg-yellow text-black font-oswald text-[14px] font-bold uppercase tracking-widest px-8 py-3 border-2 border-black rounded-none shadow-[3px_3px_0px_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all hover:bg-black hover:text-yellow">
                <span className="relative z-10">ADD TO CART — MAD 499.00</span>
              </button>
              <button className="bg-white text-black font-oswald text-[14px] font-bold uppercase tracking-widest px-8 py-3 border-2 border-black rounded-none shadow-[3px_3px_0px_transparent] hover:shadow-[3px_3px_0px_#0A0A0A] transition-all">
                VIEW CATALOG
              </button>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="w-full lg:w-[40%] flex justify-center items-center relative lg:border-l-[2px] lg:border-black bg-cream overflow-hidden py-16 lg:py-0 self-stretch">
            {/* Scanlines bg */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 4px)' }}></div>
            
            {/* Visual Container representing a product box */}
            <div className="relative w-72 sm:w-80 h-[400px] sm:h-[480px] bg-gray-l shadow-[10px_10px_0px_rgba(0,0,0,0.05)] border border-gray-m flex items-center justify-center animate-[float_3s_ease-in-out_infinite] group">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)' }}></div>
              
              <div className="w-48 h-80 bg-black relative flex flex-col items-center pt-8">
                <div className="w-full h-2 bg-yellow mb-4"></div>
                <span className="text-[40px] text-white font-black leading-none font-bebas">WHEY</span>
                <span className="text-[12px] text-white tracking-[0.4em] mb-4 font-oswald">ISOLATE</span>
                <div className="absolute bottom-4 left-4 right-4 h-16 border border-white/20 flex flex-col justify-center px-2">
                  <span className="text-[8px] text-yellow uppercase font-oswald">Protein content</span>
                  <span className="text-[18px] text-white font-bold font-oswald">25G / SERVING</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-[2px] border-ink-red flex items-center justify-center bg-white/80 backdrop-blur-sm -rotate-12 z-20">
                <span className="text-[9px] font-black text-ink-red uppercase tracking-tighter text-center leading-none font-oswald">NO.01<br/>RATED</span>
              </div>
              <div className="absolute bottom-8 -left-8 bg-ink-red text-white px-3 py-1 rotate-90 text-[10px] tracking-widest font-bold font-oswald">
                APPROVED
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
