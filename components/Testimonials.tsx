'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  { 
    id: 1, 
    quote: "\"I've tried every pre-workout on the market. ABE from this store is the only one that gives me clean energy without the crash.\"", 
    name: "YOUSSEF .A", 
    stars: 5,
    city: "CASABLANCA",
    rotate: -2,
    y: 20
  },
  { 
    id: 2, 
    quote: "\"Delivery to Marrakech was under 48 hours. The Optimum Nutrition Gold Standard is 100% authentic. Found my new GO-TO store.\"", 
    name: "AMINE .B", 
    stars: 5,
    city: "MARRAKECH",
    rotate: 3,
    y: 0
  },
  { 
    id: 3, 
    quote: "\"Customer service is elite. They helped me pick the right creatine for my bulk phase. Gained 4kg of solid mass in two months.\"", 
    name: "KARIM .M", 
    stars: 5,
    city: "RABAT",
    rotate: -1,
    y: 30
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-cream py-24 section-wrapper border-y border-gray-m overflow-hidden">
      {/* Background with grain is handled globally by section-wrapper + svg filter */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="relative flex justify-center mb-16 w-full opacity-60">
           <h2 className="font-bebas text-[48px] md:text-[64px] text-black leading-[1.0] text-center">
            ATHLETE REVIEWS
          </h2>
        </div>

        {/* Scattered Clippings */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-4 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              className="relative w-full md:w-1/3 bg-cream border-[1.5px] border-gray-m p-8 flex flex-col cursor-pointer max-w-sm"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                y: t.y,
                rotate: t.rotate,
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                y: t.y - 8,
                rotate: t.rotate,
                borderColor: '#0A0A0A',
                zIndex: 40
              }}
              style={{ transformOrigin: 'center center' }}
            >
              {/* Tape Element */}
              <div 
                className="absolute -top-[8px] left-[50%] -translate-x-[50%] w-[60px] h-[16px] bg-yellow/60 rounded-none mix-blend-multiply z-10"
                style={{ transform: `rotate(${index % 2 === 0 ? '-3deg' : '4deg'})` }}
              ></div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow text-yellow" />
                ))}
              </div>

              <p className="font-special italic text-[16px] text-black leading-[1.6] mb-8 flex-grow">
                {t.quote}
              </p>

              <div className="mt-auto flex justify-between items-end border-t border-gray-m pt-4">
                <span className="font-oswald text-[12px] font-bold uppercase tracking-[0.15em] text-ink-red">
                  {t.name}
                </span>
                <span className="font-oswald text-[10px] text-gray-t tracking-[0.1em] uppercase">
                  {t.city}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
