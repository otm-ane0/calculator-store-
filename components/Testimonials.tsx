'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "I've tried every pre-workout on the market. ABE from this store is the only one that gives me clean energy without the crash.",
    name: "YOUSSEF .A",
    stars: 5,
    city: "CASABLANCA",
  },
  {
    id: 2,
    quote: "Delivery to Marrakech was under 48 hours. The Optimum Nutrition Gold Standard is 100% authentic. Found my new GO-TO store.",
    name: "AMINE .B",
    stars: 5,
    city: "MARRAKECH",
  },
  {
    id: 3,
    quote: "Customer service is elite. They helped me pick the right creatine for my bulk phase. Gained 4kg of solid mass in two months.",
    name: "KARIM .M",
    stars: 5,
    city: "RABAT",
  },
  {
    id: 4,
    quote: "Best whey protein I've ever tasted. Mixes perfectly and the chocolate flavor is insane. Will definitely reorder.",
    name: "HAMZA .R",
    stars: 5,
    city: "FÈS",
  },
  {
    id: 5,
    quote: "Ordered creatine monohydrate and it arrived the next day. Quality is unmatched and price is very competitive.",
    name: "MEHDI .O",
    stars: 5,
    city: "TANGER",
  },
  {
    id: 6,
    quote: "Finally a Moroccan supplement store I can trust. No fake products, fast delivery, and great customer support.",
    name: "IBRAHIM .K",
    stars: 5,
    city: "AGADIR",
  },
  {
    id: 7,
    quote: "The mass gainer helped me break my plateau. Up 6kg in 6 weeks while keeping body fat low. Incredible results.",
    name: "OMAR .T",
    stars: 5,
    city: "CASABLANCA",
  },
  {
    id: 8,
    quote: "Packaging was perfect, products sealed and authentic. The free shaker with my order was a nice touch.",
    name: "SAAD .L",
    stars: 5,
    city: "MEKNÈS",
  },
  {
    id: 9,
    quote: "Pre-workout hits different. Training intensity went through the roof. My gym buddies all asked where I get my supplements.",
    name: "BILAL .H",
    stars: 5,
    city: "OUJDA",
  },
  {
    id: 10,
    quote: "Responsive team, honest advice, and top-tier products. This is the only supplement store I recommend to everyone.",
    name: "NASSIM .F",
    stars: 5,
    city: "RABAT",
  },
];

const topRow    = testimonials.slice(0, 5);
const bottomRow = testimonials.slice(5, 10);

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-[280px] bg-cream border-[1.5px] border-gray-m p-6 flex flex-col cursor-pointer"
      whileHover={{ y: -6, borderColor: '#0A0A0A', zIndex: 40 }}
      transition={{ duration: 0.2 }}
    >
      {/* Tape */}
      <div
        className="absolute -top-[8px] left-[50%] -translate-x-[50%] w-[52px] h-[14px] bg-yellow/60 rounded-none mix-blend-multiply z-10"
        style={{ transform: `rotate(${index % 2 === 0 ? '-3deg' : '4deg'})` }}
      />

      <div className="flex gap-1 mb-3">
        {[...Array(t.stars)].map((_, i) => (
          <Star key={i} size={12} className="fill-yellow text-yellow" />
        ))}
      </div>

      <p className="font-special italic text-[14px] text-black leading-[1.6] mb-6 flex-grow">
        "{t.quote}"
      </p>

      <div className="mt-auto flex justify-between items-end border-t border-gray-m pt-3">
        <span className="font-oswald text-[11px] font-bold uppercase tracking-[0.15em] text-ink-red">
          {t.name}
        </span>
        <span className="font-oswald text-[10px] text-gray-t tracking-[0.1em] uppercase">
          {t.city}
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full bg-cream py-24 section-wrapper border-y border-gray-m overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">

        {/* Header */}
        <div className="relative flex justify-center mb-16 w-full opacity-60">
          <h2 className="font-bebas text-[48px] md:text-[64px] text-black leading-[1.0] text-center">
            ATHLETE REVIEWS
          </h2>
        </div>

        <div className="w-full overflow-hidden flex flex-col gap-6">

          {/* Top row — scrolls left */}
          <div className="flex w-max gap-6 animate-marquee">
            {[...topRow, ...topRow].map((t, i) => (
              <TestimonialCard key={`top-${i}`} t={t} index={i} />
            ))}
          </div>

          {/* Bottom row — scrolls right */}
          <div className="flex w-max gap-6 animate-marquee-reverse">
            {[...bottomRow, ...bottomRow].map((t, i) => (
              <TestimonialCard key={`bot-${i}`} t={t} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}