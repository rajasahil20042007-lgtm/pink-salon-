import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F5EFE6]/40 border-t border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
            OUR SANCTUARY
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
            VISIT PINK SALON
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Experience luxury hospitality in the heart of Kolkata's cultural avenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E7E2DA] p-8 sm:p-10 text-left space-y-8 shadow-sm">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F3E8EE] flex items-center justify-center shrink-0 text-[#9D3D62]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1C1917]">
                  Address
                </h3>
                <p className="font-serif text-lg text-[#1C1917] leading-snug">
                  {SALON_DATA.address}
                </p>
                <p className="text-xs text-[#78716C]">
                  Near Camac Street Crossing • Valet Parking Available
                </p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F3E8EE] flex items-center justify-center shrink-0 text-[#9D3D62]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1C1917]">
                  Direct Inquiries
                </h3>
                <a
                  href={`tel:${SALON_DATA.phone.replace(/\s+/g, '')}`}
                  className="font-serif text-lg text-[#1C1917] hover:text-[#9D3D62] transition-colors block"
                >
                  {SALON_DATA.phone}
                </a>
                <a
                  href={`mailto:${SALON_DATA.email}`}
                  className="text-xs text-[#78716C] hover:text-[#9D3D62] transition-colors block"
                >
                  {SALON_DATA.email}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F3E8EE] flex items-center justify-center shrink-0 text-[#9D3D62]">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1C1917]">
                  Opening Hours
                </h3>
                <p className="text-[#44403C] font-medium pt-0.5">
                  {SALON_DATA.openingHours.weekdays}
                </p>
                <p className="text-[#78716C]">
                  {SALON_DATA.openingHours.sunday}
                </p>
              </div>
            </div>

            {/* Direction CTA Button */}
            <div className="pt-2 border-t border-[#EFECE6]">
              <a
                href={SALON_DATA.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#1C1917] hover:bg-[#9D3D62] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

          </div>

          {/* Aesthetic Map Card Container */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden border border-[#DCD5C9] bg-[#E8E2D8] shadow-xl group">
              {/* Stylized Architectural Location Image simulating luxury map overlay */}
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                alt="Pink Salon Studio entrance, Park Street"
                className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] group-hover:scale-103 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Map-style luxury pinpoint badge */}
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center pointer-events-none">
                <div className="bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E7E2DA] p-6 text-center shadow-2xl max-w-xs animate-in zoom-in-95 duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#9D3D62] text-white flex items-center justify-center mx-auto mb-2.5 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-[#1C1917]">
                    PINK SALON
                  </h4>
                  <p className="text-xs text-[#78716C] mt-1">
                    Park Street • Kolkata
                  </p>
                  <p className="text-[10px] text-[#9D3D62] uppercase tracking-[0.15em] font-semibold mt-2.5">
                    Open Today until 8:00 PM
                  </p>
                </div>
              </div>

              {/* Bottom bar overlay */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={SALON_DATA.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-black/80 hover:bg-black text-white text-xs uppercase tracking-widest font-medium rounded-none shadow-md backdrop-blur-xs transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
