import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';

export const TestimonialsSection: React.FC = () => {
  const testimonials = SALON_DATA.testimonials;

  return (
    <section className="py-20 lg:py-28 bg-[#F5EFE6]/30 border-t border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
            CLIENT EXPERIENCES
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
            LOVED BY OUR CLIENTS
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Genuine words from our regular guests and brides who trust Pink Salon.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] border border-[#E7E2DA] p-7 flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                {/* 5 subtle stars */}
                <div className="flex items-center gap-1 text-[#9D3D62]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#9D3D62]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif text-lg text-[#1C1917] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-6 mt-6 border-t border-[#EFECE6] space-y-1">
                <p className="font-semibold text-xs text-[#1C1917] tracking-wider uppercase">
                  — {item.name}
                </p>
                <p className="text-[11px] text-[#9D3D62] font-medium">
                  {item.service}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
