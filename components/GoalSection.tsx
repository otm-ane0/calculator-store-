'use client';

import { motion } from 'motion/react';

const goals = [
  { id: 1, title: 'BUILD MUSCLE', desc: 'Protein, gainers & creatines', color: '#FFD600', emoji: '💪', link: 'SHOP →', target: '#build-muscle' },
  { id: 2, title: 'LOSE FAT', desc: 'Thermogenics & fat burners', color: '#D4611A', emoji: '🔥', link: 'SHOP →', target: '#lose-fat' },
  { id: 3, title: 'ENERGY', desc: 'Pre-workouts & stimulants', color: '#FFD600', emoji: '⚡', link: 'SHOP →', target: '#energy' },
  { id: 4, title: 'RECOVERY', desc: 'BCAAs & amino acids', color: '#8B1A1A', emoji: '🧬', link: 'SHOP →', target: '#recovery' },
];

export default function GoalSection() {
  return (
    <section className="relative w-full bg-white py-24 texture-scanlines section-wrapper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="relative flex justify-center mb-16 w-full">
          <div className="absolute top-[-30px] font-bebas text-[120px] text-black opacity-5 pointer-events-none select-none z-[0] transform -translate-y-4">
            03
          </div>
          <h2 className="font-bebas text-[56px] md:text-[72px] text-black leading-[1.0] text-center z-10 relative">
            TRAIN WITH PURPOSE
          </h2>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              className="bg-cream border-[1.5px] border-gray-m rounded-none flex flex-col relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                y: -4, 
                borderColor: '#0A0A0A',
              }}
            >
              {/* Colored Top Bar */}
              <div 
                className="w-full h-[4px] absolute top-0 left-0"
                style={{ backgroundColor: goal.color }}
              ></div>

              {/* Icon Number */}
              <div className="absolute top-4 right-4 font-bebas text-[80px] text-black opacity-[0.06] select-none pointer-events-none leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="p-6 pt-10 flex flex-col h-full z-10">
                <div className="text-[48px] mb-4 leading-none">{goal.emoji}</div>
                <h3 className="font-bebas text-[28px] text-black uppercase mb-2 leading-none">
                  {goal.title}
                </h3>
                <p className="font-special text-[14px] text-gray-t mb-8 flex-grow">
                  {goal.desc}
                </p>
                
                <a 
                  href={goal.target}
                  className="font-oswald text-[12px] uppercase font-bold text-black tracking-[0.1em] group-hover:text-ink-red transition-colors inline-block mt-auto"
                >
                  {goal.link}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
