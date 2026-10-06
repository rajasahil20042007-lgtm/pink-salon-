import React from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { SALON_DATA, ServiceItem } from '../data/salonConfig';

interface SignatureServicesProps {
  onBookService: (serviceName: string) => void;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({ onBookService }) => {
  // Only signature 6 services
  const signatureList = SALON_DATA.services.filter((s) => s.isSignature);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
            CURATED RITUALS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
            SIGNATURE SERVICES
          </h2>
          <p className="text-sm sm:text-base text-[#78716C] font-normal max-w-lg mx-auto">
            Crafted for restorative elegance with transparent Indian Rupee pricing and dedicated one-on-one appointments.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureList.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#FAF8F5] border border-[#E7E2DA] hover:border-[#9D3D62]/40 p-0 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#9D3D62]/5 hover:-translate-y-1 relative"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE8E0] border-b border-[#E7E2DA]">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center filter saturate-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-[#EBE6DD] flex items-center justify-center text-[#78716C] text-xs">
                    Pink Salon
                  </div>
                )}
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium tracking-wider text-[#44403C] flex items-center gap-1 border border-[#E7E2DA]">
                  <Clock className="w-3 h-3 text-[#9D3D62]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Service Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  {/* Category and Index */}
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#78716C]">
                    <span>{service.category}</span>
                    <span className="font-serif italic text-[#A8A29E]">0{index + 1}</span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-2xl font-medium text-[#1C1917] group-hover:text-[#9D3D62] transition-colors">
                    {service.name}
                  </h3>

                  {/* Included line */}
                  <p className="text-xs font-medium text-[#9D3D62] tracking-wide">
                    {service.included}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Pricing & Book CTA */}
                <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#A8A29E] block">
                      Price
                    </span>
                    <span className="font-serif text-2xl font-medium text-[#1C1917] tabular-nums">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => onBookService(service.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1C1917] group-hover:bg-[#9D3D62] text-[#FAF8F5] text-[11px] uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Link */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1917] hover:text-[#9D3D62] border-b border-[#1C1917] hover:border-[#9D3D62] pb-1 transition-all"
          >
            <span>VIEW COMPLETE SALON MENU & PRICING</span>
            <span>↓</span>
          </a>
        </div>

      </div>
    </section>
  );
};
