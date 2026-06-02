'use client';

export default function Marquee() {
  const brands = [
    "OPTIMUM NUTRITION", "APPLIED NUTRITION", "MUSCLETECH", 
    "DYMATIZE", "BSN", "MYPROTEIN", "GHOST"
  ];
  
  // Duplicate array to ensure seamless infinite scroll
  const items = [...brands, ...brands, ...brands];

  return (
    <div className="w-full h-12 bg-black border-y border-yellow flex items-center overflow-hidden z-30 relative">
      <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-12 px-6">
          {items.map((brand, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="font-bebas font-black text-xl text-yellow tracking-widest uppercase">
                {brand}
              </span>
              <span className="text-ink-red text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
