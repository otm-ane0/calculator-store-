'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProductCard, { Product } from './ProductCard';

const massGainerPicks: Product[] = [
  { id: 1, badge: 'BEST SELLER', brand: 'RED REX', name: 'BEEF MASS', price: '970 MAD', reviews: 630, imageFallback: 'GAINER', image: '/beef mass.jpg' },
  { id: 2, brand: '14 SUPERIOR', name: ' PLATINUM MASS ', price: '700 MAD', reviews: 312, imageFallback: 'GAINER', image: '/PLATINUM MASS.jpg' },
  { id: 3, badge: 'NEW', brand: 'ARMY 1', name: 'MASS SQUAD', price: '450 MAD', reviews: 188, imageFallback: 'GAINER', image: '/MASS SQUAD.webp' },
  { id: 4, brand: 'TESLA', name: 'MASS CHARGER', price: '700 MAD', reviews: 255, imageFallback: 'GAINER', image: '/MASS CHARGER.jpeg' },
];

export default function MassGainerShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll('.product-card');

      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white py-10 texture-scanlines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col gap-6 mb-8 w-full">
          <div className="relative flex justify-center w-full">
            <div className="absolute top-[-40px] font-bebas text-[120px] text-black opacity-5 pointer-events-none select-none z-[0] transform -translate-y-4">
              07
            </div>
            <h2 className="font-bebas text-[56px] md:text-[72px] text-black leading-[1.0] text-center z-10 relative">
              MASS GAINER
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-special text-[16px] text-gray-t text-center md:text-left">
              Heavy calories for serious size
            </p>
            <button className="bg-yellow border-2 border-black text-black font-oswald text-[12px] font-bold uppercase tracking-[0.15em] px-6 py-3 shadow-[3px_3px_0px_#0A0A0A] hover:bg-black hover:text-yellow transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
              See all &rarr;
            </button>
          </div>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {massGainerPicks.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
