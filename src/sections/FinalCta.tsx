import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#1C1917] text-[#FAF8F5] relative overflow-hidden text-center">
      {/* Background luxury overlay imagery */}
      <div className="absolute inset-0 opacity-20 -z-1">
        <img
          src="/images/hero-desktop.webp"
          width={1000}
          height={600}
          alt="Pink Salon Ambiance"
          className="w-full h-full object-cover filter blur-xs"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1917] via-[#1C1917]/90 to-[#1C1917] -z-1" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        <div className="inline-block text-xs uppercase tracking-[0.3em] font-semibold text-[#E8B4C8]">
          ELEVATE YOUR RITUAL
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08]">
          Your Best Look Starts Here.
        </h2>

        <p className="text-base sm:text-xl text-white/70 max-w-xl mx-auto font-normal leading-relaxed">
          Discover your signature look at Pink Salon.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#FAF8F5] hover:bg-[#9D3D62] text-[#1C1917] hover:text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-2xl cursor-pointer"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-white/50 tracking-wider">
          Park Street, Kolkata • By Appointment • Direct Valet Service
        </p>

      </div>
    </section>
  );
};
