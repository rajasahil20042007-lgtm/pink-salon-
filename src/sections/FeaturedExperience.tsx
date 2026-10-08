import React from 'react';
import { Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FeaturedExperienceProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F5EFE6]/50 border-y border-[#E7E2DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Treatment Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#DCD5C9] bg-[#E8E2D8] shadow-2xl">
              <img
                src="/images/featured-experience.webp"
                width={800}
                height={1000}
                alt="The Pink Signature Experience treatment at Pink Salon"
                className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">
                  The Pink Signature Ritual
                </span>
                <p className="font-serif text-2xl font-normal mt-1">
                  Complete Restoration for Hair & Mind
                </p>
              </div>
            </div>

            {/* Decorative Offset badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#FAF8F5] border border-[#E7E2DA] p-4 sm:p-5 shadow-xl max-w-[220px] text-left">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#9D3D62] font-semibold">
                Duration
              </div>
              <div className="font-serif text-2xl font-medium text-[#1C1917] mt-1">
                90 Minutes
              </div>
              <div className="text-[11px] text-[#78716C] mt-0.5">
                Full-service personalized journey
              </div>
            </div>
          </div>

          {/* Copy & Treatment Details */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
                EXCLUSIVE APPOINTMENT
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
                THE PINK SIGNATURE
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
              A personalized beauty experience designed to leave you feeling confident, refreshed and completely yourself.
            </p>

            {/* Included Steps Checklist */}
            <div className="space-y-3.5 pt-2 pb-2">
              {[
                'Comprehensive scalp & follicle moisture diagnosis',
                'Deep peptide & botanical hair repair infusion',
                'Precision haircut & framing blowout styling',
                'Luminous facial hydra-revival with jade roller drainage',
                'Soothing head, shoulder & neck acupressure relaxation'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#9D3D62] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#44403C] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Price & Duration Meta Box */}
            <div className="p-5 bg-[#FAF8F5] border border-[#E7E2DA] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#A8A29E] block">
                  Starting Price
                </span>
                <span className="font-serif text-3xl font-medium text-[#1C1917] tabular-nums">
                  ₹2,999
                </span>
              </div>

              <div className="border-l border-[#E7E2DA] pl-4 sm:pl-6">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#A8A29E] block">
                  Experience Time
                </span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1C1917] mt-1">
                  <Clock className="w-4 h-4 text-[#9D3D62]" />
                  <span>90 Minutes</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('The Pink Signature Experience')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] hover:bg-[#9D3D62] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer ml-auto sm:ml-0"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
