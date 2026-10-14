import React from 'react';
import { SERVICES, type ServiceItem } from '../data/businessInfo';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-[#0e1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Curated Services For Your Sacred Day
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            From Telugu traditional rituals to modern candid cinematics, we offer comprehensive packages tailored to weddings across Karimnagar & Telangana.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative bg-[#131620] border border-white/5 hover:border-[#d4af37]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col shadow-xl"
            >
              {/* Image Preview with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131620] via-[#131620]/30 to-transparent" />
                
                {service.popular && (
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    Most Requested
                  </span>
                )}

                <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#f6e27a] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  {service.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[#d4af37] italic mb-3">
                  "{service.tagline}"
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2 mb-6 mt-auto">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#d4af37] text-white hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-[#d4af37]"
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tailoring Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171a24] to-[#12141c] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              Have specific dates, multi-day ceremonies or destination venues?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              We customize combinations including Pellikuthuru, Engagement, Sangeet, Muhurtham, and Reception with transparent deliverables.
            </p>
          </div>
          <button
            onClick={() => onSelectService("Custom Bespoke Package")}
            className="shimmer-btn shrink-0 text-black font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg"
          >
            Get Custom Package Quote
          </button>
        </div>

      </div>
    </section>
  );
};
