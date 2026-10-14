import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle, Calendar, MapPin, Phone, User, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, SERVICES } from '../data/businessInfo';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    venueLocation: 'Karimnagar / Telangana',
    selectedServices: initialService ? [initialService] : ['Candid Wedding Photography', 'Cinematic Wedding Films & Teasers'],
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        selectedServices: prev.selectedServices.includes(initialService)
          ? prev.selectedServices
          : [...prev.selectedServices, initialService]
      }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(title)
        ? prev.selectedServices.filter(s => s !== title)
        : [...prev.selectedServices, title]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback safe
    }

    // Format WhatsApp message
    const msg = `*Wedding Photography Inquiry*%0A%0A` +
      `*Client:* ${encodeURIComponent(formData.name || 'Client')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A` +
      `*Event Date:* ${encodeURIComponent(formData.eventDate || 'To be finalized')}%0A` +
      `*Venue / City:* ${encodeURIComponent(formData.venueLocation)}%0A` +
      `*Services Requested:* ${encodeURIComponent(formData.selectedServices.join(', ') || 'Custom Wedding Package')}%0A` +
      (formData.notes ? `*Notes:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `%0A_Sent via Anjani Wedding Photography Online Portal_`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${msg}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#12141c] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Direct Studio Inquiry</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Check Date Availability
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Share your wedding dates and location. Srinu garu will verify team availability and send a customized quote directly to your WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Your Name / Family Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>WhatsApp / Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98498 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Event Date / Muhurtham</span>
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Venue Location / City</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Karimnagar, Hyderabad, Jagtial"
                    value={formData.venueLocation}
                    onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection Chips */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Select Desired Services (Click to toggle):
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const isSelected = formData.selectedServices.includes(s.title);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggleService(s.title)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f6e27a] font-medium'
                            : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-[#d4af37]" />}
                        <span>{s.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Special Notes or Ritual Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 2-day wedding with Haldi and Sangeet, drone requirement..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] text-white text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="shimmer-btn w-full py-3.5 rounded-xl text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Open WhatsApp Inquiry</span>
              </button>

              <p className="text-[11px] text-center text-neutral-500">
                Direct studio connection • Instant reply from Srinu Chary • No obligation
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-white mb-2">
              Inquiry Prepared!
            </h3>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto mb-6">
              Opening WhatsApp with your inquiry details for <strong className="text-[#d4af37]">{BUSINESS_INFO.name}</strong>.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-left text-xs space-y-1 mb-6 text-neutral-300">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Date:</strong> {formData.eventDate || 'TBD'}</p>
              <p><strong>Location:</strong> {formData.venueLocation}</p>
              <p><strong>Services:</strong> {formData.selectedServices.join(', ')}</p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="py-2.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Done / Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
