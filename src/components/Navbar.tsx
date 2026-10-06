import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Artists', href: '#artists' },
    { name: 'Contact', href: '#location' },
    { name: 'Admin Desk', href: '#admin' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-[#E7E2DA] py-3.5'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9D3D62]"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.18em] text-[#1C1917] uppercase transition-colors group-hover:text-[#9D3D62]">
              {SALON_DATA.salonName}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9D3D62] inline-block mb-1"></span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase font-medium text-[#44403C] hover:text-[#9D3D62] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9D3D62] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] hover:bg-[#9D3D62] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 hover:shadow-md cursor-pointer rounded-none border border-[#1C1917] hover:border-[#9D3D62]"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C1917] hover:text-[#9D3D62] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E7E2DA] shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-5 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm uppercase tracking-[0.15em] font-medium text-[#1C1917] hover:text-[#9D3D62] border-b border-[#EFECE6]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#9D3D62] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
