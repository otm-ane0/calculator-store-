'use client';

import Image from 'next/image';

export default function Marquee() {
  const brands = [
    { name: "7 NUTRITIONS",   logo: "/7nutritions.webp" },
    { name: "14 SUP",         logo: "/14-sup.jpg" },
    { name: "BIOTECH USA",    logo: "/BioTechUSA.png" },
    { name: "CORE",           logo: "/core.png" },
    { name: "ML",             logo: "/ml.jpg" },
    { name: "NOW",            logo: "/now.jpg" },
    { name: "RED REX",        logo: "/red-rex.png" },
    { name: "TESLA",          logo: "/tesla.png" },
    { name: "YAVA",           logo: "/yava.jpg" },
    { name: "ZUMUB",          logo: "/zumub.webp" },
  ];

  // Triplicate for seamless infinite scroll
  const items = [...brands, ...brands, ...brands];

  return (
    <div className="w-full h-16 bg-black border-y border-yellow flex items-center overflow-hidden z-30 relative">
      <div className="flex whitespace-nowrap animate-[scroll_35s_linear_infinite]">
        <div className="flex items-center gap-10 px-6">
          {items.map((brand, index) => (
            <div key={index} className="flex items-center gap-10 shrink-0">
              {/* Logo */}
              <div className="flex items-center justify-center h-10 w-28 relative bg-white rounded px-2 py-1">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-1"
                  sizes="112px"
                />
              </div>
              {/* Separator */}
              <span className="text-yellow text-xl opacity-40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
