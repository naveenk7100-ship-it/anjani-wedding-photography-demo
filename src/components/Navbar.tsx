import React, { useState, useEffect } from 'react';
import { Camera, MapPin, Phone, Calendar, Menu, X, Star, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About Studio', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Studio & Location', href: '#location' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#22242f] py-3 shadow-xl' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa7c11] flex items-center justify-center text-black font-bold shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform">
              <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-[#d4af37] transition-colors">
                  ANJANI
                </span>
                <span className="text-[10px] tracking-widest text-[#d4af37] uppercase font-semibold px-1.5 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                  EST. 2002
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-400 font-medium tracking-wider uppercase">
                Wedding Photography & Films
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.links.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37]/40 transition-all"
              title="Open Google Maps directions to our studio in Ashoknagar, Karimnagar"
            >
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Karimnagar Studio</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>

            <button
              onClick={onOpenBooking}
              className="shimmer-btn flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black px-4 py-2.5 rounded-lg shadow-md hover:scale-105 active:scale-95 transition-transform"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check Dates</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1017] border-b border-[#22242f] px-5 py-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs text-[#d4af37]">
            <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
            <span>5.0 Star Rated • Karimnagar, Telangana</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-200 hover:text-[#d4af37] py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call: {BUSINESS_INFO.formattedPhone}</span>
            </a>
            
            <a
              href={BUSINESS_INFO.links.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-800 text-sm font-medium text-neutral-200"
            >
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Get Directions to Studio</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="shimmer-btn w-full py-3 rounded-lg text-black font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Wedding Date Availability</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
