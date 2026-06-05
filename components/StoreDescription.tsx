'use client';

import { useEffect, useRef, useState } from 'react';

const FULL_TEXT = 'THE CALCULATOR STORE';
const SUBTITLE = 'YOUR TRUSTED DESTINATION';

function useInView(threshold = 0.4) {
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
  const { ref, inView } = useInView(0.4);

  const [displayed, setDisplayed] = useState('');
  const [subtitleDisplayed, setSubtitleDisplayed] = useState('');
  const [showBody, setShowBody] = useState(false);
  const indexRef = useRef(0);
  const subIndexRef = useRef(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const interval = setInterval(() => {
      if (indexRef.current < FULL_TEXT.length) {
        setDisplayed(FULL_TEXT.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        const subInterval = setInterval(() => {
          if (subIndexRef.current < SUBTITLE.length) {
            setSubtitleDisplayed(SUBTITLE.slice(0, subIndexRef.current + 1));
            subIndexRef.current++;
          } else {
            clearInterval(subInterval);
            setTimeout(() => setShowBody(true), 300);
          }
        }, 40);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [inView]);

  const words = displayed.trim().split(' ');
  const lastWord = words.pop();
  const restWords = words.join(' ');

  return (
    <section
      ref={ref}
      className="relative w-full bg-black py-24 section-wrapper overflow-hidden"
    >
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
            {inView && subtitleDisplayed.length < SUBTITLE.length && (
              <span className="animate-pulse">|</span>
            )}
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-bebas leading-[0.9] uppercase mb-10">
          <div className="text-[72px] md:text-[100px] text-white block">
            {restWords.length > 0 ? restWords : <span className="opacity-0">_</span>}
          </div>
          {lastWord && (
            <div className="inline-block bg-yellow px-2">
              <span className="text-[72px] md:text-[100px] text-black">
                {lastWord}
              </span>
            </div>
          )}
          {displayed.length < FULL_TEXT.length && inView && (
            <span className="text-yellow text-[72px] md:text-[100px] animate-pulse">|</span>
          )}
        </h2>

        {/* Body */}
        <div className={`transition-all duration-700 ${showBody ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-16 h-[3px] bg-yellow mb-8" />
          <div className="font-special text-[15px] text-white/60 space-y-4 max-w-2xl leading-relaxed">
            <p>
              The Calculator Store is a trusted destination for students, teachers, engineers, and
              professionals across Morocco, offering a wide selection of scientific, graphing,
              financial, and educational calculators.
            </p>
            <p>
              Our catalog includes authentic and high-quality calculators from leading brands,
              designed for mathematics, engineering, finance, science, and academic success.
            </p>
            <p>
              We are committed to offering the best quality at competitive prices, combined with fast
              and secure delivery throughout Morocco.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}