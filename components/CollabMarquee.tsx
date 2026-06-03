'use client';

import Image from 'next/image';

export default function CollabMarquee() {
  const brands = [
    { name: "TESLA",       image: "/tesla.png" },
    { name: "14 SUPERIOR", image: "/14-sup.jpg" },
    { name: "RED REX",     image: "/red-rex.png" },
    { name: "YAVA LABS",   image: "/yava.jpg" },
  ];

  const items = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-cream border-y-[2px] border-black py-12 overflow-hidden z-30 relative texture-scanlines section-wrapper">

      {/* Section Header */}
      <div className="relative flex justify-center mb-8 w-full">
        <h2 className="font-bebas text-[48px] md:text-[56px] text-black leading-[1.0] text-center z-10 relative uppercase tracking-tight">
          OFFICIAL PARTNERS
        </h2>
      </div>

      <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
        <div className="flex items-center gap-6 px-3">
          {items.map((brand, index) => (
            <div
              key={index}
              className="group/card flex items-center justify-center w-72 h-48 border-[2px] border-black shadow-[3px_3px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_#0A0A0A] bg-black relative cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:z-10 overflow-hidden"
            >
              {/* Real Brand Image Background */}
              <div className="absolute inset-0 z-0 opacity-50 group-hover/card:opacity-90 transition-opacity duration-500">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  sizes="288px"
                />
              </div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-all duration-500 z-10 pointer-events-none" />

              {/* Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.3] mix-blend-multiply z-10 texture-scanlines-dark pointer-events-none"></div>

              {/* Brand Text */}
              <span className="font-bebas font-black text-5xl text-white tracking-widest uppercase relative z-20 group-hover/card:scale-110 group-hover/card:text-yellow transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {brand.name}
              </span>

              {/* Decorators */}
              <div className="absolute bottom-3 left-3 border-[1.5px] border-black px-2 py-0.5 bg-yellow z-20">
                <span className="font-oswald text-[11px] font-bold tracking-widest uppercase text-black">COLLAB</span>
              </div>
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full border-[1.5px] border-ink-red flex items-center justify-center bg-white/90 backdrop-blur-sm rotate-[12deg] group-hover/card:-rotate-12 transition-transform z-20">
                <span className="font-oswald text-[9px] font-black text-ink-red uppercase tracking-tighter text-center leading-[1.1]">ELITE<br/>CERT</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
