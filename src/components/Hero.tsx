import React from 'react';
import { Star, MapPin, Navigation, MessageCircle, Sparkles, Award, Video, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Cinematic Visual with Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85"
          alt="Traditional and Candid Wedding Moments"
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Verified Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#d4af37]/40 mb-6 shadow-lg shadow-black/50 animate-fade-in">
          <div className="flex items-center text-[#d4af37]">
            <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
            <span className="text-xs font-bold ml-1">5.0</span>
          </div>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-xs font-medium text-neutral-200">
            320+ Reviews on Justdial & Google
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-xs text-[#d4af37] font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Studio
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          Timeless Moments.{' '}
          <span className="gold-gradient-text block mt-1">
            Unspoken Emotions.
          </span>
        </h1>

        {/* Subtitle with Verified Details */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-8">
          Welcome to <strong className="text-white font-semibold">{BUSINESS_INFO.name}</strong> (Anjani Srinu Photography). 
          Under the artistry of lead cinematographer <strong className="text-[#f6e27a] font-semibold">{BUSINESS_INFO.founder}</strong>, 
          we turn weddings, rituals, and romantic beginnings into heirloom cinematic films & candid memories across Karimnagar and Telangana.
        </p>

        {/* Studio Location Pill */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-300 bg-black/40 px-4 py-2 rounded-lg border border-white/10 mb-10 backdrop-blur-sm">
          <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}</span>
          <span className="text-neutral-500">•</span>
          <span className="text-emerald-400 font-medium">Open Today until 9:00 PM</span>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Working Google Maps Directions Button */}
          <a
            href={BUSINESS_INFO.links.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#d4af37]/60 text-white font-medium text-sm transition-all shadow-lg hover:shadow-[#d4af37]/10 group"
          >
            <Navigation className="w-4 h-4 text-[#d4af37] group-hover:rotate-45 transition-transform" />
            <span>Get Google Maps Directions</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={BUSINESS_INFO.links.whatsappChat}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-900/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Check Availability Modal */}
          <button
            onClick={onOpenBooking}
            className="shimmer-btn w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-black font-semibold text-sm uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Check Wedding Dates</span>
          </button>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto border-t border-white/10 pt-10 text-left">
          {BUSINESS_INFO.highlights.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm hover:border-[#d4af37]/30 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                {idx === 0 && <Award className="w-4 h-4 text-[#d4af37]" />}
                {idx === 1 && <Star className="w-4 h-4 text-[#d4af37]" />}
                {idx === 2 && <Video className="w-4 h-4 text-[#d4af37]" />}
                {idx === 3 && <Sparkles className="w-4 h-4 text-[#d4af37]" />}
                <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-neutral-400 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
