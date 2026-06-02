'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';
import gsap from 'gsap';

export type Product = {
  id: string | number;
  badge?: string;
  brand: string;
  name: string;
  price: string;
  reviews: number;
  imageFallback: string;
};

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const imageRef = useRef<HTMLDivElement>(null);
  
  const handleMouseEnter = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        keyframes: [
          { filter: 'none', duration: 0.02 },
          { filter: 'drop-shadow(2px 0 0 rgba(255,0,0,0.5)) drop-shadow(-2px 0 0 rgba(0,255,255,0.5))', duration: 0.04 },
          { filter: 'none', duration: 0.02 }
        ],
      });
    }
  };

  return (
    <motion.div 
      className="product-card bg-cream border-[1.5px] border-gray-m rounded-none flex flex-col group relative overflow-hidden"
      whileHover={{ 
        y: -6, 
        borderColor: '#0A0A0A',
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      }}
      onMouseEnter={handleMouseEnter}
    >
      {/* Ink detail frame on hover */}
      <div className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-100 mix-blend-multiply pointer-events-none transition-opacity duration-150 z-20"></div>

      {/* Image Area */}
      <div 
        ref={imageRef}
        className="relative w-full h-[220px] bg-gray-l flex items-center justify-center texture-scanlines-dark border-b-[1.5px] border-gray-m"
        style={{ filter: 'url(#grain)' }}
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-0 left-0 bg-yellow text-black font-oswald text-[9px] font-bold uppercase px-[8px] py-[3px] border-r border-b border-black z-10">
            {product.badge}
          </div>
        )}
        
        {/* Stamp Mark */}
        <div className="absolute top-3 right-3 w-[40px] h-[40px] rounded-full border-[1.5px] border-ink-red flex items-center justify-center rotate-[8deg] opacity-70 z-10 pointer-events-none">
          <span className="font-oswald text-[8px] font-bold text-ink-red leading-none pt-0.5">
            NO.{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Product Visual Mockup */}
        <div className="text-black font-bebas text-[40px] opacity-10 drop-shadow-xl select-none rotate-[-5deg]">
          {product.imageFallback}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow bg-opacity-50">
        <span className="font-oswald text-[11px] uppercase tracking-[0.15em] text-gray-t mt-[6px]">
          {product.brand}
        </span>
        <h3 className="font-bebas text-[28px] text-black leading-tight mt-1 truncate">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-1 mb-3 shrink-0">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow text-yellow" />
            ))}
          </div>
          <span className="font-oswald text-[11px] text-gray-t ml-1 pt-[2px]">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-auto mb-4">
          <span className="font-space text-[26px] font-extrabold text-black">
            {product.price}
          </span>
        </div>
      </div>

      {/* CTA Layer */}
      <button className="w-full bg-yellow border-t-2 border-black text-black font-oswald text-[13px] font-bold uppercase tracking-widest py-3 hover:bg-black hover:text-yellow transition-all active:translate-x-0.5 active:translate-y-0.5 z-30 shadow-[0_0_0_transparent] hover:shadow-[0_0_0_transparent]">
        ADD TO CART
      </button>
    </motion.div>
  );
}
