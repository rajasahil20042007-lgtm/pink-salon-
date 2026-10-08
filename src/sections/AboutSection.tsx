import React from 'react';
import { ArrowRight, Compass, Sparkles, Feather } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5EFE6]/40 border-y border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Editorial Element */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden border border-[#DCD5C9] bg-[#E8E2D8] shadow-lg">
                <img
                  src="/images/about-stylist.webp"
                  width={600}
                  height={800}
                  alt="Thoughtful styling consultation at Pink Salon"
                  className="w-full h-full object-cover object-center filter saturate-[0.95] hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Offset quote block */}
              <div className="absolute -bottom-6 -right-6 bg-[#FAF8F5] p-5 border border-[#E7E2DA] shadow-md max-w-xs hidden sm:block">
                <p className="font-serif italic text-sm text-[#44403C] leading-snug">
                  "Every appointment starts with listening before scissors or color ever touch hair."
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#9D3D62] font-semibold mt-2">
                  — The Pink Salon Creed
                </p>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            {/* Small Label */}
            <div className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
              THE PINK SALON EXPERIENCE
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917] leading-[1.12]">
              More Than A Salon.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
              At Pink Salon, beauty is personal. Our experienced artists combine modern techniques, thoughtful consultation and a refined salon experience to create looks that feel uniquely yours.
            </p>

            <p className="text-sm sm:text-base text-[#78716C] leading-relaxed font-normal">
              Located on iconic Park Street in Kolkata, we created an architectural sanctuary away from the city's pulse. Here, precision cutting, ammonia-free dimensional color, and therapeutic botanical spa rituals unfold in tranquility.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 pb-2 border-t border-[#E7E2DA]">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#1C1917]">
                  Consultation First
                </div>
                <p className="text-xs text-[#78716C] mt-1">
                  Hair health diagnosis & tailored scalp analysis.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#1C1917]">
                  Master Artists
                </div>
                <p className="text-xs text-[#78716C] mt-1">
                  Decades of combined editorial and bridal mastery.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#1C1917]">
                  Curated Products
                </div>
                <p className="text-xs text-[#78716C] mt-1">
                  Ammonia-free dyes, clean actives & luxury botanicals.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#1C1917] hover:text-[#9D3D62] transition-colors group"
              >
                <span>DISCOVER OUR STORY</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
