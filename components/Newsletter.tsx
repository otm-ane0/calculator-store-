'use client';

export default function Newsletter() {
  return (
    <section className="relative w-full bg-white py-24 section-wrapper texture-scanlines">
      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="bg-yellow text-black font-oswald text-[11px] font-bold uppercase tracking-[0.15em] px-[16px] py-[6px] rounded-full mb-6">
          VIP ACCESS
        </div>

        {/* Headings */}
        <h2 className="font-bebas text-[56px] md:text-[72px] text-black leading-[0.95] uppercase mb-4">
          JOIN THE ELITE CLUB
        </h2>
        <p className="font-special text-[16px] text-gray-t mb-8">
          Sign up to get 10% off your first order, plus early access to new drops and exclusive editorial content. No spam, just gains.
        </p>

        {/* Form */}
        <form className="w-full flex flex-col sm:flex-row gap-0" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL..."
            className="flex-grow bg-white border-[1.5px] border-gray-m focus:border-black focus:border-b-2 font-special text-[15px] px-6 py-4 outline-none rounded-none w-full sm:w-auto mb-4 sm:mb-0 transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-yellow text-black font-oswald text-[14px] font-bold uppercase tracking-widest px-8 py-4 border-2 border-black rounded-none shadow-[3px_3px_0px_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all hover:bg-black hover:text-yellow shrink-0 w-full sm:w-auto"
          >
            GET 10% OFF
          </button>
        </form>

      </div>
    </section>
  );
}
