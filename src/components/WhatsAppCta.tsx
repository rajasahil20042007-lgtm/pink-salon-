import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';

interface WhatsAppCtaProps {
  onOpenBooking: () => void;
}

export const WhatsAppCta: React.FC<WhatsAppCtaProps> = ({ onOpenBooking }) => {
  const defaultMessage = encodeURIComponent("Hi, I'd like to book an appointment at Pink Salon.");
  const whatsappUrl = `https://wa.me/${SALON_DATA.whatsappRaw}?text=${defaultMessage}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom right) */}
      <aside aria-label="WhatsApp quick chat" className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="text-xs font-semibold tracking-wider pr-1">
            Book on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Fixed Bottom Sticky Action Bar */}
      <aside aria-label="Mobile quick booking" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E7E2DA] p-2.5 px-3 flex items-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        {/* Quick Booking Button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 px-3 bg-[#1C1917] text-white text-[11px] uppercase tracking-[0.14em] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Slot</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3 px-3 bg-[#25D366] text-white text-[11px] uppercase tracking-[0.14em] font-medium flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </>
  );
};
