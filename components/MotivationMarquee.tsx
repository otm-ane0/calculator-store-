'use client';

const motivations = [
  'Fuel Your Ambition',
  'Where Strength Begins',
  'Nutrition That Works',
  'Built for Performance',
  'Your Fitness Partner',
];

const items = [...motivations, ...motivations, ...motivations];

export default function MotivationMarquee() {
  return (
    <section className="w-full overflow-hidden py-6 relative">

      {/* Top row — black bg, yellow text, tilted right */}
      <div
        className="w-[110%] -ml-[5%] bg-black py-3 mb-3 overflow-hidden"
        style={{ transform: 'rotate(-2deg)' }}
      >
        <div className="flex w-max animate-marquee">
          {items.map((text, index) => (
            <div key={`top-${text}-${index}`} className="flex items-center gap-6 mx-6">
              <span className="font-oswald text-[16px] md:text-[20px] font-bold uppercase tracking-[0.2em] text-yellow whitespace-nowrap">
                {text}
              </span>
              <span className="text-yellow text-[12px] md:text-[14px]" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row — yellow bg, black text, tilted left, reverse direction */}
      <div
        className="w-[110%] -ml-[5%] bg-yellow py-3 overflow-hidden"
        style={{ transform: 'rotate(2deg)' }}
      >
        <div className="flex w-max animate-marquee-reverse">
          {items.map((text, index) => (
            <div key={`bot-${text}-${index}`} className="flex items-center gap-6 mx-6">
              <span className="font-oswald text-[16px] md:text-[20px] font-bold uppercase tracking-[0.2em] text-black whitespace-nowrap">
                {text}
              </span>
              <span className="text-black text-[12px] md:text-[14px]" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}