import React from 'react';
import { ArrowUpRight, Sparkles, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Subtle luxury ambient texture overlay */}
      <div className="absolute inset-0 bg-radial from-[#FAF6F0] via-[#FAF8F5] to-[#F5EFE6] -z-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#F5E5EC]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Trust and brand micro-header */}
            <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] font-medium text-[#78716C] border-b border-[#E7E2DA] pb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9D3D62]" />
              <span>{SALON_DATA.salonName} • PARK STREET, KOLKATA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light tracking-tight text-[#1C1917] leading-[1.08] text-balance">
              Beauty, <span className="italic font-normal text-[#9D3D62]">Refined.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#57534E] font-normal leading-relaxed max-w-xl">
              {SALON_DATA.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1917] hover:bg-[#9D3D62] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#9D3D62]/10 cursor-pointer"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-[#EFECE6]/50 text-[#1C1917] hover:text-[#9D3D62] border border-[#D6CCC2] hover:border-[#9D3D62] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                <span>EXPLORE SERVICES</span>
              </a>
            </div>

            {/* Subtle Trust Line */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#78716C] tracking-wide">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#44403C]">
                <ShieldCheck className="w-4 h-4 text-[#9D3D62]" />
                Professional beauty services
              </span>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#44403C]">
                <Clock className="w-4 h-4 text-[#9D3D62]" />
                By appointment
              </span>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#44403C]">
                <Sparkles className="w-4 h-4 text-[#9D3D62]" />
                Certified Master Stylists
              </span>
            </div>
          </div>

          {/* Right Hero Image / Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Luxury Frame */}
              <div className="relative aspect-[4/5] overflow-hidden border border-[#E7E2DA] shadow-2xl bg-[#EBE7DF]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
                  alt="Pink Salon Luxury Interior"
                  className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Warm gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                {/* Bottom caption in image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">
                    Flagship Studio
                  </p>
                  <p className="font-serif text-lg tracking-wide">
                    Park Street, Kolkata
                  </p>
                </div>
              </div>

              {/* Offset Decorative Floating Accent Card */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-[#FAF8F5] border border-[#E7E2DA] p-4 sm:p-5 shadow-xl max-w-[210px] sm:max-w-[240px]">
                <div className="flex items-center gap-2 text-[#9D3D62] text-xs font-serif font-bold italic">
                  <span>★ ★ ★ ★ ★</span>
                </div>
                <p className="text-xs font-semibold text-[#1C1917] mt-1.5">
                  4.9 / 5 Guest Rating
                </p>
                <p className="text-[11px] text-[#78716C] mt-0.5 leading-snug">
                  Over 2,500+ personalized transformations created.
                </p>
              </div>

              {/* Subtle architectural border accent */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[#9D3D62]/40 -z-1 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
