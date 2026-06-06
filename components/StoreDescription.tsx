'use client';

import { useEffect, useRef, useState } from 'react';

const LINES = [
  'The Calculator Store is a trusted destination for students, teachers, engineers, and professionals across Morocco, offering a wide selection of scientific, graphing, financial, and educational calculators.',
  'Our catalog includes authentic and high-quality calculators from leading brands, designed for mathematics, engineering, finance, science, and academic success.',
  'We are committed to offering the best quality at competitive prices, combined with fast and secure delivery throughout Morocco.',
];

const SUBTITLE = 'YOUR TRUSTED DESTINATION';

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function StoreDescription() {
  const { ref, inView } = useInView(0.3);

  const [subtitleDisplayed, setSubtitleDisplayed] = useState('');
  const [lineTexts, setLineTexts] = useState(['', '', '']);
  const [currentLine, setCurrentLine] = useState(-1);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);
  const subIndexRef = useRef(0);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    // First type subtitle
    const subInterval = setInterval(() => {
      if (subIndexRef.current < SUBTITLE.length) {
        setSubtitleDisplayed(SUBTITLE.slice(0, subIndexRef.current + 1));
        subIndexRef.current++;
      } else {
        clearInterval(subInterval);
        // Then start body lines
        setTimeout(() => setCurrentLine(0), 400);
      }
    }, 40);

    return () => clearInterval(subInterval);
  }, [inView]);

  useEffect(() => {
    if (currentLine < 0 || currentLine >= LINES.length) return;

    const fullLine = LINES[currentLine];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < fullLine.length) {
        charIndex++;
        setLineTexts(prev => {
          const next = [...prev];
          next[currentLine] = fullLine.slice(0, charIndex);
          return next;
        });
      } else {
        clearInterval(interval);
        if (currentLine < LINES.length - 1) {
          setTimeout(() => setCurrentLine(c => c + 1), 200);
        } else {
          setDone(true);
        }
      }
    }, 12);

    return () => clearInterval(interval);
  }, [currentLine]);

  return (
    <section ref={ref} className="relative w-full bg-black py-24 section-wrapper overflow-hidden">

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        backgroundSize: '200px'
      }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <div className="inline-block border-[2px] border-yellow px-3 py-1 mb-8">
          <span className="font-oswald text-[11px] font-bold tracking-[0.25em] uppercase text-yellow">
            {subtitleDisplayed}
            {inView && currentLine < 0 && <span className="animate-pulse">|</span>}
          </span>
        </div>

        {/* Main Heading — smaller */}
        <h2 className="font-bebas leading-[0.9] uppercase mb-10">
          <div className="text-[40px] md:text-[56px] text-white block">
            THE CALCULATOR
          </div>
          <div className="inline-block bg-yellow px-2">
            <span className="text-[40px] md:text-[56px] text-black">
              STORE
            </span>
          </div>
        </h2>

        {/* Divider */}
        <div className="w-16 h-[3px] bg-yellow mb-8" />

        {/* Body lines — typewriter */}
        <div className="font-special text-[15px] text-white/70 space-y-4 max-w-2xl leading-relaxed">
          {LINES.map((_, i) => (
            <p key={i} className={`transition-opacity duration-300 ${currentLine >= i ? 'opacity-100' : 'opacity-0'}`}>
              {lineTexts[i]}
              {currentLine === i && !done && (
                <span className="animate-pulse text-yellow">|</span>
              )}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}