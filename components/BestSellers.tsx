'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProductCard, { Product } from './ProductCard';

const bestSellers: Product[] = [
  { id: 1, badge: 'BEST SELLER', brand: 'Tesla', name: 'ISO ZERO 100', price: '830 MAD', reviews: 1042, imageFallback: 'WHEY', image: '/iso tesla.avif' },
  { id: 2, brand: 'APPLIED NUTRITION', name: 'CREAM OF RICE', price: '450 MAD', reviews: 856, imageFallback: 'PUMP', image: '/cream-of-rice-1.webp' },
  { id: 3, badge: 'NEW', brand: 'TESLA', name: 'CREATINE MONOHYDRATE', price: '470 MAD', reviews: 420, imageFallback: 'CREATINE', image: '/creatine.webp' },
  { id: 4, brand: 'RED REX', name: 'BEEF MASS', price: '970 MAD', reviews: 630, imageFallback: 'WHEY', image: '/beef mass.jpg' },
];

export default function BestSellers() {
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
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white py-10 texture-scanlines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
