import React, { useState } from 'react';
import { PORTFOLIO_GALLERY, type PortfolioItem } from '../data/businessInfo';
import { MapPin, ZoomIn, X, MessageCircle, Sparkles } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Weddings', 'Candid', 'Pre-Wedding', 'Rituals & Haldi', 'Films'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_GALLERY
    : PORTFOLIO_GALLERY.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Stories Captured</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              The Wedding Gallery
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400">
            A glimpse into the heartfelt emotions, ceremonies, and cinematic stories documented by Anjani Wedding Photography.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 uppercase ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b38728] text-black shadow-lg shadow-[#d4af37]/20 scale-105'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#151722] border border-white/5 hover:border-[#d4af37]/50 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Zoom pill badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:text-[#d4af37] group-hover:scale-110 transition-all border border-white/10">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Category pill */}
              <div className="absolute top-3 left-3 text-[10px] font-semibold text-[#f6e27a] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                {item.category}
              </div>

              {/* Caption Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                <h4 className="font-serif text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mb-2">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  <span>{item.location}</span>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#12141c] rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview */}
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 bg-[#12141c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                  {activePhoto.category} • {activePhoto.location}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 max-w-lg">
                  {activePhoto.description}
                </p>
              </div>

              <a
                href={`https://wa.me/919849843723?text=Hi%20Anjani%20Wedding%20Photography!%20I%20love%20the%20shot%20"${encodeURIComponent(activePhoto.title)}"%20from%20your%20portfolio.%20I'd%20love%20to%20know%20more%20about%20similar%20photography%20for%20our%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn shrink-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black px-4 py-2.5 rounded-xl shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire About This Style</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
