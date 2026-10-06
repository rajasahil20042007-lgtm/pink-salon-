import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-[#E7E2DA] border-t border-[#292524] pt-16 pb-24 lg:pb-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.2em] font-light text-white uppercase">
                {SALON_DATA.salonName}
              </span>
            </a>
            <p className="text-sm text-white/60 font-normal leading-relaxed max-w-sm">
              {SALON_DATA.tagline}
            </p>
            <p className="text-xs text-white/40 pt-2">
              Bespoke hairdressing, luxury skincare rituals, and couture bridal aesthetics on Park Street, Kolkata.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#artists" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#admin" className="hover:text-[#E8B4C8] text-[#E8B4C8]/90 font-medium transition-colors">Admin Portal</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#menu" className="hover:text-white transition-colors">Hair</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Color</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Skin</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Makeup</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Nails</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white">
              Contact & Hours
            </h4>
            <div className="space-y-2 text-xs text-white/60">
              <p><span className="text-white/80 font-medium">Address:</span> {SALON_DATA.address}</p>
              <p><span className="text-white/80 font-medium">Phone:</span> <a href={`tel:${SALON_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-white">{SALON_DATA.phone}</a></p>
              <p><span className="text-white/80 font-medium">Email:</span> <a href={`mailto:${SALON_DATA.email}`} className="hover:text-white">{SALON_DATA.email}</a></p>
              <div className="pt-2 text-[11px] text-white/50 space-y-0.5">
                <p>{SALON_DATA.openingHours.weekdays}</p>
                <p>{SALON_DATA.openingHours.sunday}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-5 text-xs text-white/60">
              <a
                href={SALON_DATA.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E8B4C8] transition-colors"
              >
                Instagram
              </a>
              <a
                href={SALON_DATA.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E8B4C8] transition-colors"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/${SALON_DATA.whatsappRaw}?text=${encodeURIComponent("Hi, I'd like to book an appointment at Pink Salon.")}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-4">
          <p>© 2026 Pink Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Park Street, Kolkata</span>
            <span>•</span>
            <span>Professional Beauty & Hair Care</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
