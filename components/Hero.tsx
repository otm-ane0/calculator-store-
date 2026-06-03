'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
      className="relative min-h-[100vh] w-full pt-[64px] overflow-hidden"
    >
      {/* Full-section Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/vd.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 xl:px-8 relative z-10 flex flex-col">

        {/* Header Band */}
        <div
          ref={topBarRef}
          className="flex justify-between items-center py-3 border-b border-white/30 w-full mb-8 lg:mb-16 mt-4"
        >
          <span className="font-oswald text-[11px] text-white/70 uppercase tracking-[0.2em]">
            THE SUPPLEMENT STORE — VOL.24 ISSUE.06
          </span>
          <span className="font-oswald text-[11px] text-white/70 uppercase tracking-[0.2em] hidden sm:block">
            OFFICIAL PERFORMANCE NUTRITION
          </span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start relative z-20 pb-16 lg:pb-24 pt-10 max-w-3xl">

          {/* Eyebrow badge */}
          <div className="bg-yellow text-black font-oswald text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1 border border-black mb-6 self-start">
            ELITE GRADE SUPPLEMENTS
          </div>

          {/* Stacked H1 */}
          <h1 className="flex flex-col font-bebas uppercase leading-[0.85] mb-8 select-none">
            <div ref={addToH1Refs} className="text-[70px] sm:text-[90px] md:text-[100px] text-white tracking-tight">
              PREMIUM
            </div>
            <div
              ref={addToH1Refs}
              className="text-[80px] sm:text-[100px] md:text-[120px] tracking-tight mb-2 !text-transparent origin-left"
              style={{ WebkitTextStroke: '3px #ffffff' }}
            >
              NUTRITION
            </div>
            <div ref={addToH1Refs} className="text-[70px] sm:text-[90px] md:text-[100px] text-white tracking-tight">
              FOR ELITE
            </div>
            <div ref={addToH1Refs} className="text-[55px] sm:text-[70px] md:text-[80px] bg-yellow text-black self-start px-4 mt-2">
              PERFORMANCE
            </div>
          </h1>

          {/* Sub-deck */}
          <p ref={subDeckRef} className="font-special text-[15px] text-white/80 leading-relaxed mb-10 max-w-sm mt-8">
            * Engineering the next generation of athletic dominance. 100% Raw. Laboratory proven results for the Casablanca elite. NO FILLERS. JUST POWER.
          </p>

          {/* Buttons Row */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <button className="bg-yellow text-black font-oswald text-[14px] font-bold uppercase tracking-widest px-8 py-3 border-2 border-black rounded-none shadow-[3px_3px_0px_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all hover:bg-black hover:text-yellow">
              <span className="relative z-10">ADD TO CART — MAD 499.00</span>
            </button>
            <button className="bg-transparent text-white font-oswald text-[14px] font-bold uppercase tracking-widest px-8 py-3 border-2 border-white rounded-none hover:bg-white hover:text-black transition-all">
              VIEW CATALOG
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
