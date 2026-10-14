import React from 'react';
import { CLIENT_REVIEWS, BUSINESS_INFO } from '../data/businessInfo';
import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#0e1017] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
            <span>Client Praise & Trust</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Loved By Families Across Telangana
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Real feedback from newlyweds and parents who trusted Anjani Wedding Photography with their most cherished celebrations.
          </p>
        </div>

        {/* Rating Score Banner */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#171a26] via-[#151722] to-[#171a26] border border-[#d4af37]/30 rounded-2xl p-6 mb-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#aa7c11] flex flex-col items-center justify-center text-black font-extrabold shadow-lg">
              <span className="text-2xl leading-none">5.0</span>
              <span className="text-[10px] uppercase font-bold tracking-wider">Rating</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#d4af37] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                ))}
              </div>
              <p className="text-sm font-semibold text-white">
                320+ Client Ratings Across Justdial & Google
              </p>
              <p className="text-xs text-neutral-400">
                Karimnagar's top rated wedding and candid studio
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.links.googleMapsListing}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white tracking-wider uppercase transition-colors shrink-0"
          >
            <span>View On Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#12141c] border border-white/5 hover:border-[#d4af37]/40 rounded-2xl p-6 transition-all duration-300 shadow-lg flex flex-col relative group"
            >
              <Quote className="w-8 h-8 text-[#d4af37]/20 absolute top-5 right-5 group-hover:text-[#d4af37]/40 transition-colors" />

              <div className="flex items-center gap-1 text-[#d4af37] mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6 flex-1">
                "{review.text}"
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-white">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-neutral-400">
                    {review.role}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3 h-3" />
                  <span>{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
