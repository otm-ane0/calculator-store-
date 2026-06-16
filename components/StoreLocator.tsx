'use client';

import { useState } from 'react';
import { Navigation, Clock, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const stores = [
  {
    id: 1,
    city: 'FÈS',
    area: 'BOURAMANA',
    address: '34 Avenue Hassan II, Ville Nouvelle, Fès',
    phone: '+212 535 00 00 01',
    hours: 'Mon-Sat: 10:00 - 22:00',
    top: '28%',
    left: '66%',
  },
  {
    id: 2,
    city: 'FÈS',
    area: 'ROUTE AIN CHKAF',
    address: '7 Rue Talaa Kebira, Médina, Fès',
    phone: '+212 535 00 00 02',
    hours: 'Mon-Sat: 10:00 - 22:00',
    top: '33%',
    left: '69%',
  },
  {
    id: 3,
    city: 'CASABLANCA',
    area: 'MAARIF',
    address: '12 Rue des Sports, Maarif, Casablanca',
    phone: '+212 522 00 00 00',
    hours: 'Mon-Sat: 10:00 - 22:00',
    top: '28%',
    left: '38%',
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
          <div className="w-full lg:w-[45%] flex flex-col gap-4 overflow-y-auto">
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
                      <span className="font-special text-[14px]">{store.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} className={isActive ? 'text-black' : 'text-gray-t'} />
                      <span className="font-special text-[14px]">{store.hours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={14} className={isActive ? 'text-black' : 'text-gray-t'} />
                      <span className="font-special text-[14px]">{store.phone}</span>
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

            {/* OpenStreetMap iframe */}
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-13.2%2C27.7%2C-1.2%2C35.9&layer=mapnik"
              className="absolute inset-0 w-full h-full border-0 z-0"
              style={{ filter: 'grayscale(80%) contrast(110%) brightness(1.05) sepia(15%) hue-rotate(50deg)' }}
              title="Morocco Map"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 z-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0,0,0,0.1) 40px, rgba(0,0,0,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.1) 40px, rgba(0,0,0,0.1) 41px)' }} />

            {/* Scanlines */}
            <div className="absolute inset-0 texture-scanlines-dark z-10 pointer-events-none opacity-50" />

            {/* Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-black/10 z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[1px] bg-black/10 z-10 pointer-events-none" />

            {/* Radar Sweep */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-yellow/20 z-10 pointer-events-none">
              <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-tr from-transparent to-yellow/10 animate-[spin_4s_linear_infinite]" />
            </div>

            {/* Markers */}
            {stores.map((store) => {
              const isActive = activeStore === store.id;

              return (
                <div
                  key={`marker-${store.id}`}
                  className="absolute z-20 flex flex-col items-center cursor-pointer"
                  style={{ top: store.top, left: store.left }}
                  onClick={() => setActiveStore(store.id)}
                >
                  <motion.div
                    animate={isActive ? { y: [0, -10, 0] } : { y: 0 }}
                    transition={isActive ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : {}}
                    className="relative"
                  >
                    {/* Logo pin */}
                    <div className={`w-10 h-10 rounded-full border-[2.5px] flex items-center justify-center bg-white overflow-hidden transition-all duration-300 ${
                      isActive
                        ? 'border-yellow shadow-[0_0_0_3px_rgba(234,179,8,0.3)]'
                        : 'border-black'
                    }`}>
                      <Image
                        src="/logo1.png"
                        alt={store.city}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>

                    {/* Active pulse */}
                    {isActive && (
                      <div className="absolute -inset-2 bg-yellow rounded-full opacity-30 animate-ping -z-10" />
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

            {/* Map Info Box */}
            <div className="absolute bottom-4 right-4 bg-white border-[2px] border-black p-3 z-30 shadow-[4px_4px_0px_#0A0A0A]">
              <div className="flex flex-col gap-1">
                <span className="font-oswald text-[10px] text-gray-t tracking-widest uppercase">Coordinates</span>
                <span className="font-space text-[12px] font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow rounded-full border border-black animate-pulse" />
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