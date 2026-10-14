import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { MapPin, Navigation, Phone, Clock, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';

export const LocationAndDirections: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Karimnagar Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Studio Location & Easy Directions
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Come visit us in Ashoknagar, Karimnagar to review sample albums, discuss your muhurtham dates, and plan your wedding coverage in person.
          </p>
        </div>

        {/* Map & Studio Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Studio Info Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#12141c] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-medium mt-0.5">
                    {BUSINESS_INFO.altName}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                    Open All 7 Days
                  </span>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Studio Address</p>
                    <p className="text-sm font-medium text-white leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address.line1}<br />
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} – {BUSINESS_INFO.address.pincode}
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-[#f6e27a] mt-2 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Visiting Hours</p>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {BUSINESS_INFO.operatingHours}
                    </p>
                    <p className="text-xs text-neutral-400">Available on appointment for evening discussions</p>
                  </div>
                </div>

                {/* Direct Phone / Call */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Phone / WhatsApp</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-sm font-bold text-white hover:text-[#d4af37] transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.formattedPhone}
                    </a>
                    <p className="text-xs text-neutral-400">Srinu Chary (Lead Photographer)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              {/* Working Directions Button */}
              <a
                href={BUSINESS_INFO.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn w-full py-3.5 px-4 rounded-xl text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.links.googleMapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open Maps Pin</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                </a>

                <a
                  href={BUSINESS_INFO.links.whatsappChat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Studio</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Google Map Embed (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#12141c] flex flex-col">
            <div className="p-3 bg-[#171a26] border-b border-white/10 flex items-center justify-between text-xs text-neutral-300 px-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Karimnagar, Ashoknagar Studio Location
              </span>
              <a
                href={BUSINESS_INFO.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Navigate Now</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full min-h-[380px] relative">
              <iframe
                title="Anjani Wedding Photography Google Maps Location"
                src="https://maps.google.com/maps?q=Anjani+Wedding+Photography+MJS+COMPLEX+Gandhi+Rd+Karimnagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', filter: 'grayscale(20%) contrast(105%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-[#12141c] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
              <p>Landmark: Gandhi Road, near Ashoknagar & Islampura junction, Karimnagar</p>
              <a
                href={BUSINESS_INFO.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline font-semibold"
              >
                Click for Turn-by-Turn GPS Directions →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
