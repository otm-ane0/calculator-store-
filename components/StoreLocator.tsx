'use client';

import { useState } from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const stores = [
  { 
    id: 1, 
    city: 'CASABLANCA', 
    area: 'MAARIF HQ', 
    address: '12 Rue des Sports, Casablanca', 
    phone: '+212 522 00 00 00', 
    hours: 'Mon-Sat: 10:00 - 21:00',
    top: '35%', 
    left: '25%' 
  },
  { 
    id: 2, 
    city: 'RABAT', 
    area: 'AGDAL', 
    address: '45 Avenue de France, Rabat', 
    phone: '+212 537 00 00 00', 
    hours: 'Mon-Sat: 10:00 - 20:00',
    top: '20%', 
    left: '40%' 
  },
  { 
    id: 3, 
    city: 'MARRAKECH', 
    area: 'GUELIZ', 
    address: '88 Boulevard Hassan II, Marrakech', 
    phone: '+212 524 00 00 00', 
    hours: 'Mon-Sun: 10:00 - 22:00',
    top: '65%', 
    left: '30%' 
  },
];

export default function StoreLocator() {
  const [activeStore, setActiveStore] = useState(stores[0].id);

  return (
    <section className="relative w-full bg-white py-24 section-wrapper texture-scanlines registration-marks border-t border-gray-m">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="relative flex justify-center mb-16 w-full">
          <div className="absolute top-[-30px] font-bebas text-[120px] text-black opacity-5 pointer-events-none select-none z-[0] transform -translate-y-4">
            04
          </div>
          <h2 className="font-bebas text-[56px] md:text-[72px] text-black leading-[1.0] text-center z-10 relative">
            OUR LOCATIONS
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full h-auto lg:h-[600px]">
          
          {/* Left: Store List */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4">
            {stores.map((store) => {
              const isActive = activeStore === store.id;
              
              return (
                <div 
                  key={store.id}
                  onClick={() => setActiveStore(store.id)}
                  className={`border-[2px] border-black p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                    isActive 
                      ? 'bg-yellow shadow-[4px_4px_0px_#0A0A0A] -translate-y-1 -translate-x-1' 
                      : 'bg-white hover:bg-cream'
                  }`}
                >
                  {/* Decorative corner */}
                  {isActive && (
                    <div className="absolute top-0 right-0 w-8 h-8 border-b-[2px] border-l-[2px] border-black bg-black flex items-center justify-center">
                      <MapPin size={14} className="text-yellow" />
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-2 pr-6">
                    <h3 className="font-bebas text-[32px] text-black leading-none tracking-tight">
                      {store.city} — <span className={isActive ? 'text-black/70' : 'text-ink-red'}>{store.area}</span>
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-3">
                      <Navigation size={14} className={isActive ? 'text-black' : 'text-gray-t'} />
                      <span className="font-special text-[14px]">
                        {store.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} className={isActive ? 'text-black' : 'text-gray-t'} />
                      <span className="font-special text-[14px]">
                        {store.hours}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={14} className={isActive ? 'text-black' : 'text-gray-t'} />
                      <span className="font-special text-[14px]">
                        {store.phone}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <button className="mt-6 bg-black text-yellow font-oswald text-[12px] font-bold uppercase tracking-widest px-6 py-2 border-2 border-black rounded-none shadow-[2px_2px_0px_#FFFFFF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                      GET DIRECTIONS
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Map Area */}
          <div className="w-full lg:w-[55%] h-[400px] lg:h-full bg-cream border-[2px] border-black relative overflow-hidden flex items-center justify-center p-2">
            
            {/* Map Background (Stylized) */}
            <div className="absolute inset-0 bg-gray-l opacity-80" 
                 style={{ 
                   backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   filter: 'grayscale(100%) contrast(120%) brightness(1.1) sepia(20%) hue-rotate(50deg)'
                 }}>
            </div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 z-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0,0,0,0.1) 40px, rgba(0,0,0,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.1) 40px, rgba(0,0,0,0.1) 41px)' }}></div>
            
            {/* Scanlines */}
            <div className="absolute inset-0 texture-scanlines-dark z-10 pointer-events-none opacity-50"></div>
            
            {/* Crosshair Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-black/10 z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[1px] bg-black/10 z-10 pointer-events-none"></div>

            {/* Radar Sweep Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-yellow/20 z-10 pointer-events-none">
              <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-tr from-transparent to-yellow/10 animate-[spin_4s_linear_infinite]"></div>
            </div>

            {/* Markers */}
            {stores.map((store) => {
              const isActive = activeStore === store.id;
              
              return (
                <div 
                  key={`marker-${store.id}`}
                  className="absolute z-20 flex flex-col items-center cursor-pointer transition-all duration-500"
                  style={{ top: store.top, left: store.left }}
                  onClick={() => setActiveStore(store.id)}
                >
                  <motion.div 
                    animate={isActive ? { y: [0, -10, 0] } : { y: 0 }}
                    transition={isActive ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : {}}
                    className="relative"
                  >
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white ${isActive ? 'border-yellow' : 'border-black'}`}>
                      <MapPin size={16} className={isActive ? 'text-black fill-yellow' : 'text-black'} strokeWidth={isActive ? 2 : 1.5} />
                    </div>
                    
                    {/* Active pulse */}
                    {isActive && (
                      <div className="absolute -inset-2 bg-yellow rounded-full opacity-30 animate-ping -z-10"></div>
                    )}
                  </motion.div>
                  
                  {/* Label */}
                  <div className={`mt-2 px-2 py-1 border-[1.5px] border-black transition-colors ${isActive ? 'bg-yellow' : 'bg-white'}`}>
                    <span className="font-oswald text-[10px] uppercase font-bold text-black tracking-widest whitespace-nowrap">
                      {store.city}
                    </span>
                  </div>
                </div>
              );
            })}
            
            {/* Map Info Box overlay */}
            <div className="absolute bottom-4 right-4 bg-white border-[2px] border-black p-3 z-30 shadow-[4px_4px_0px_#0A0A0A]">
              <div className="flex flex-col gap-1">
                <span className="font-oswald text-[10px] text-gray-t tracking-widest uppercase">Coordinates</span>
                <span className="font-space text-[12px] font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow rounded-full border border-black animate-pulse"></span>
                  RADAR ONLINE
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
