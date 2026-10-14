import React from 'react';
import { Camera, Star, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080b] border-t border-white/5 pt-16 pb-24 md:pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa7c11] flex items-center justify-center text-black font-bold">
                <Camera className="w-5 h-5 text-black" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                ANJANI WEDDINGS
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Premised on authentic storytelling, emotion, and cinematic finesse. Serving couples across Karimnagar, Hyderabad, and Telangana since 2002.
            </p>
            <div className="flex items-center gap-1.5 text-[#d4af37]">
              <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
              <span className="font-bold">5.0 Star Rating</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">320+ Public Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider font-bold text-white">Explore</p>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Wedding Portfolio</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Candid & Cinematic Services</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Srinu Chary</a></li>
              <li><a href="#experience" className="hover:text-[#d4af37] transition-colors">Wedding Day Timeline</a></li>
              <li><a href="#reviews" className="hover:text-[#d4af37] transition-colors">Client Testimonials</a></li>
              <li><a href="#location" className="hover:text-[#d4af37] transition-colors">Karimnagar Studio Map</a></li>
            </ul>
          </div>

          {/* Verified Business Details */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider font-bold text-white">Studio Location</p>
            <p className="text-neutral-300 leading-relaxed">
              {BUSINESS_INFO.address.line1}<br />
              {BUSINESS_INFO.address.street}<br />
              {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
            </p>
            <a
              href={BUSINESS_INFO.links.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#d4af37] hover:underline font-medium"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions to Studio</span>
            </a>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider font-bold text-white">Contact & Timings</p>
            <p className="text-neutral-300">
              <strong className="text-white block font-medium">Phone / WhatsApp:</strong>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#d4af37] transition-colors">
                {BUSINESS_INFO.formattedPhone}
              </a>
            </p>
            <p className="text-neutral-300">
              <strong className="text-white block font-medium">Visiting Hours:</strong>
              {BUSINESS_INFO.operatingHours}
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.links.googleMapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white"
              >
                <span>View Official Google Maps Listing</span>
                <ExternalLink className="w-3 h-3 text-[#d4af37]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All verified public business information represented accurately.</p>
          <div className="flex items-center gap-1">
            <span>Demo presentation prepared for {BUSINESS_INFO.name}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
