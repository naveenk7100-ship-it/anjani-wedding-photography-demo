import React from 'react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Phone, MessageCircle, MapPin, Clock, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 bg-[#0e1017] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#161924] via-[#12141c] to-[#0c0d12] border border-[#d4af37]/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Create Magic</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Secure Your Wedding Date Early
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                Peak Telugu wedding muhurtham dates fill up quickly. Get in touch directly with 
                <strong className="text-white"> Srinivas Chary (Srinu)</strong> to discuss your ceremony vision, 
                camera setups, and package preferences.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4af37]/50 transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#d4af37] text-[#d4af37] group-hover:text-black flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Direct Call</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors">{BUSINESS_INFO.formattedPhone}</p>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.links.whatsappChat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black flex items-center justify-center transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">WhatsApp Chat</p>
                    <p className="text-sm font-bold text-white">Instant Response</p>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Follow Our Reels:</span>
                
                {/* Instagram Icon */}
                <a
                  href={BUSINESS_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center border border-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook Icon */}
                <a
                  href={BUSINESS_INFO.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center border border-white/10 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
              </div>

            </div>

            {/* Right Action Box */}
            <div className="bg-[#0b0c10]/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Quick Consultation Request
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Receive our comprehensive brochure, gear list, and sample wedding teasers directly on WhatsApp.
              </p>

              <button
                onClick={onOpenBooking}
                className="shimmer-btn w-full py-4 rounded-xl text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mb-4"
              >
                <span>Launch Date & Quote Checker</span>
              </button>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>MJS Complex, Gandhi Rd, Ashoknagar, Karimnagar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Studio Hours: 9:30 AM – 9:00 PM (All 7 Days)</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
