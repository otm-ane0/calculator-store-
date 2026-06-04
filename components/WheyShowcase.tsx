'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProductCard, { Product } from './ProductCard';

const wheyPicks: Product[] = [
  { id: 1, badge: 'BEST SELLER', brand: 'TESLA', name: 'ISO ZERO 100', price: '830 MAD', reviews: 1042, imageFallback: 'WHEY', image: '/iso tesla.avif' },
  { id: 2, brand: '14 SUPERIOR', name: 'WHEY PROTEIN', price: '690 MAD', reviews: 420, imageFallback: 'WHEY', image: '/Wheycore.jpg' },
  { id: 3, badge: 'NEW', brand: 'RED REX', name: 'WHEY ISOLATE', price: '900 MAD', reviews: 266, imageFallback: 'WHEY', image: '/isoredrex.webp' },
  { id: 4, brand: 'YAVA LABS', name: 'ELITE WHEY', price: '780 MAD', reviews: 198, imageFallback: 'WHEY', image: '/elite.jpg' },
];

export default function WheyShowcase() {
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
              06
            </div>
            <h2 className="font-bebas text-[56px] md:text-[72px] text-black leading-[1.0] text-center z-10 relative">
              WHEY PROTEIN
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-special text-[16px] text-gray-t text-center md:text-left">
              Clean gains and fast recovery
            </p>
            <button className="bg-yellow border-2 border-black text-black font-oswald text-[12px] font-bold uppercase tracking-[0.15em] px-6 py-3 shadow-[3px_3px_0px_#0A0A0A] hover:bg-black hover:text-yellow transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
              See all &rarr;
            </button>
          </div>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {wheyPicks.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
