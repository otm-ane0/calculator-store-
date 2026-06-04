'use client';

import Image from 'next/image';

export default function CollabMarquee() {
  const brands = [
    { name: "TESLA",       image: "/tesla.png" },
    { name: "14 SUPERIOR", image: "/14-sup.jpg" },
    { name: "RED REX",     image: "/red-rex.png" },
    { name: "YAVA LABS",   image: "/yava.jpg" },
  ];

  return (
    <section className="w-full bg-cream border-y-[2px] border-black py-12 overflow-hidden z-30 relative texture-scanlines section-wrapper">

      {/* Section Header */}
      <div className="relative flex justify-center mb-8 w-full">
        <h2 className="font-bebas text-[48px] md:text-[56px] text-black leading-[1.0] text-center z-10 relative uppercase tracking-tight">
          OFFICIAL PARTNERS
        </h2>
      </div>

      <div className="flex w-max animate-marquee">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="relative w-32 h-16 flex-shrink-0 mx-8"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}