'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProductCard, { Product } from './ProductCard';

const creatinePicks: Product[] = [
  { id: 1, badge: 'TOP PICK', brand: 'TESLA', name: 'CREATINE MONOHYDRATE', price: '470 MAD', reviews: 420, imageFallback: 'CREATINE', image: '/creatine.webp' },
  { id: 2, brand: 'RED REX', name: 'CREATINE HCL', price: '300 MAD', reviews: 215, imageFallback: 'CREATINE', image: '/hcl.jpg' },
  { id: 3, badge: 'NEW', brand: 'BIOTECH', name: 'CREATINE MONOHYDRATE', price: '350 MAD', reviews: 310, imageFallback: 'CREATINE', image: '/biotech.webp' },
  { id: 4, brand: '7 NUTRITIONS', name: 'CREATINE PURE', price: '420 MAD', reviews: 198, imageFallback: 'CREATINE', image: '/7NUTRITION.webp' },
];

export default function CreatineShowcase() {
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
              04
            </div>
            <h2 className="font-bebas text-[56px] md:text-[72px] text-black leading-[1.0] text-center z-10 relative">
              CREATINES
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-special text-[16px] text-gray-t text-center md:text-left">
              Strength, power and performance
            </p>
            <button className="bg-yellow border-2 border-black text-black font-oswald text-[12px] font-bold uppercase tracking-[0.15em] px-6 py-3 shadow-[3px_3px_0px_#0A0A0A] hover:bg-black hover:text-yellow transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
              See all &rarr;
            </button>
          </div>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {creatinePicks.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
