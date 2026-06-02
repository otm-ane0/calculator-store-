'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Truck, RotateCcw, Zap } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, text: "CLINICALLY TESTED" },
  { icon: Zap, text: "PREMIUM INGREDIENTS" },
  { icon: Truck, text: "FREE SHIPPING 500+ MAD" },
  { icon: RotateCcw, text: "30-DAY GUARANTEE" },
];

export default function TrustBar() {
  return (
    <section className="relative w-full bg-cream border-y-2 border-black py-6 texture-scanlines registration-marks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-between items-center gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-4 w-full sm:w-auto"
            >
              <div className="w-[40px] h-[40px] bg-yellow flex flex-shrink-0 items-center justify-center border-[1.5px] border-black">
                <item.icon size={18} className="text-black" strokeWidth={2.5} />
              </div>
              <span className="font-oswald text-[13px] font-bold uppercase tracking-[0.08em] text-black pr-4">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
