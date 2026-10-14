import React from 'react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Camera, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0e1017] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase Side */}
          <div className="relative">
            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
                alt="Srinu Chary - Anjani Wedding Photography"
                className="w-full h-[480px] object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Founder & Lead Cinematographer
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mt-1">
                  {BUSINESS_INFO.founder}
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Crafting visual heirlooms for Telugu weddings since 2002.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#1b1e2a] to-[#0f1118] border border-[#d4af37]/40 p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#996f0b] flex items-center justify-center text-black font-bold text-xl shadow-lg">
                22+
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Years of Legacy</p>
                <p className="text-sm font-bold text-white">Karimnagar, TS</p>
              </div>
            </div>

            {/* Floating Verified Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-gradient-to-br from-[#1b1e2a] to-[#0f1118] border border-white/10 p-3 sm:p-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div>
                <p className="text-xs font-bold text-white">5.0 Star Rated</p>
                <p className="text-[11px] text-neutral-400">320+ Client Testimonials</p>
              </div>
            </div>
          </div>

          {/* Text & Credentials Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>About Our Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Honoring Telugu Traditions With Cinematic Artistry
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              Located at the heart of Karimnagar in MJS Complex (Gandhi Road, Ashoknagar), 
              <strong className="text-white"> {BUSINESS_INFO.name}</strong> was founded by 
              <strong className="text-[#f6e27a]"> Srinivas Chary</strong> with a single dedicated mission: 
              to preserve the solemn sanctity, spontaneous joy, and vibrant colors of marriage ceremonies.
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              Whether it is the emotional farewell during Vidaai, the laughter during the ring-hunting ritual, 
              or golden hour frames with close family, our team blends discreet candid observation with high-end 
              mirrorless prime glass and drone cameras.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Discreet candid photojournalism",
                "Ultra-wide and aerial drone angles",
                "Color-accurate skin tones",
                "Multi-generational family portraits",
                "Punctual delivery timeline commitment",
                "Direct communication with Srinu garu"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Direct Studio Call CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="shimmer-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl text-black font-semibold text-xs uppercase tracking-wider shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call Srinu Directly: {BUSINESS_INFO.formattedPhone}</span>
              </a>
              <span className="text-xs text-neutral-400">
                Mon – Sun: 9:30 AM – 9:00 PM
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
