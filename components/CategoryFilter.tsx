'use client';

import { useState } from 'react';

const categories = [
  { id: 1, name: 'ALL PRODUCTS' },
  { id: 2, name: 'WHEY PROTEIN' },
  { id: 3, name: 'PRE-WORKOUT' },
  { id: 4, name: 'AMINO ACIDS' },
  { id: 5, name: 'VITAMINS' },
];

export default function CategoryFilter() {
  const [active, setActive] = useState('ALL PRODUCTS');

  return (
    <section className="relative w-full bg-white pt-24 pb-8 texture-scanlines registration-marks section-wrapper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="relative flex justify-center mb-10 w-full">
          <div className="absolute top-[-40px] font-bebas text-[120px] text-black opacity-5 pointer-events-none select-none z-[0] transform -translate-y-4">
            02
          </div>
          <h2 className="font-bebas text-[56px] md:text-[72px] text-black leading-[1.0] text-center z-10 relative">
            SHOP BY CATEGORY
          </h2>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap justify-center gap-3 relative z-20">
          {categories.map((cat, index) => {
            const isActive = active === cat.name;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.name)}
                className={`relative font-oswald text-[12px] font-bold uppercase tracking-[0.1em] px-6 py-2.5 transition-all border-[2px] rounded-none ${
                  isActive 
                    ? 'bg-yellow border-black text-black shadow-[3px_3px_0px_#0A0A0A]' 
                    : 'bg-white border-black text-black hover:bg-cream hover:shadow-[3px_3px_0px_#0A0A0A]'
                } active:translate-x-0.5 active:translate-y-0.5 active:shadow-none`}
              >
                {cat.name}
                <span className="absolute top-1 right-1 font-oswald text-[8px] text-ink-red leading-none font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
