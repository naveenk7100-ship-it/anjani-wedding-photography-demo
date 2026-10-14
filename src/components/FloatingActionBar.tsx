import React from 'react';
import { Phone, MessageCircle, Navigation, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0c0e15]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        {/* Call Studio */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 rounded-lg bg-white/5 active:bg-white/10 text-neutral-300 active:text-white transition-colors"
        >
          <Phone className="w-4 h-4 text-[#d4af37]" />
          <span className="text-[10px] font-medium mt-1">Call</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={BUSINESS_INFO.links.whatsappChat}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 rounded-lg bg-emerald-600/20 active:bg-emerald-600/30 text-emerald-400 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-1">WhatsApp</span>
        </a>

        {/* Google Maps Directions */}
        <a
          href={BUSINESS_INFO.links.googleMapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 rounded-lg bg-white/5 active:bg-white/10 text-neutral-300 active:text-white transition-colors"
        >
          <Navigation className="w-4 h-4 text-[#d4af37]" />
          <span className="text-[10px] font-medium mt-1">Directions</span>
        </a>

        {/* Check Dates */}
        <button
          onClick={onOpenBooking}
          className="shimmer-btn flex flex-col items-center justify-center py-1.5 rounded-lg text-black font-semibold shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-1">Book</span>
        </button>
      </div>
    </div>
  );
};
