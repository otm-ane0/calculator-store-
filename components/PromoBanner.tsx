'use client';

export default function PromoBanner() {
  return (
    <section className="relative w-full bg-yellow py-20 overflow-hidden section-wrapper registration-marks border-y-[2px] border-black">
      {/* Ink scratch element over yellow bg */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(10,10,10,1) 10px, rgba(10,10,10,1) 12px)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Large Decorative Text */}
        <div className="absolute -left-10 lg:left-10 top-1/2 -translate-y-1/2 font-bebas text-[200px] text-black opacity-[0.08] pointer-events-none select-none z-0">
          20%
        </div>

        {/* Content */}
        <div className="relative z-10 w-full md:w-3/5 text-center md:text-left mb-8 md:mb-0 lg:pl-32">
          <h2 className="font-bebas text-[56px] md:text-[80px] leading-[0.95] text-black uppercase mb-4">
            GET 20% OFF YOUR <br /> FIRST ORDER
          </h2>
          <p className="font-special text-[16px] text-black/80 max-w-md mx-auto md:mx-0">
            Join the elite club. Sign up today and fuel your gains with premium, clinically tested supplements.
          </p>
        </div>

        {/* Button */}
        <div className="relative z-10 w-full md:w-2/5 flex justify-center md:justify-end lg:pr-16">
          <button className="bg-black text-yellow font-oswald text-[14px] font-bold uppercase tracking-[0.08em] px-[40px] py-[16px] border-2 border-black rounded-none shadow-[3px_3px_0px_#FFFFFF] hover:bg-white hover:text-black hover:border-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all group relative overflow-hidden">
            <span className="relative z-10">SHOP DEALS</span>
          </button>
        </div>
      </div>
    </section>
  );
}
