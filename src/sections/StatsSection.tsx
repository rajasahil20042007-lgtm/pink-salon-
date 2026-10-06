import React from 'react';
import { SALON_DATA } from '../data/salonConfig';

export const StatsSection: React.FC = () => {
  const stats = SALON_DATA.stats;

  return (
    <section className="py-16 bg-[#1C1917] text-[#FAF8F5] border-y border-[#292524] relative overflow-hidden">
      {/* Subtle luxury ambient accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-[#9D3D62]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center space-y-1.5 ${idx > 0 ? 'pt-6 sm:pt-0' : ''} ${
                idx > 0 ? 'sm:pl-6 lg:pl-10' : ''
              }`}
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-[#E8B4C8]">
                {stat.label}
              </div>
              <p className="text-[11px] text-white/50 tracking-wide font-normal">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
