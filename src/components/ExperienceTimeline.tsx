import React from 'react';
import { WORKFLOW_STEPS } from '../data/businessInfo';
import { Sparkles, CalendarCheck, Camera, Film, BookOpen } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const icons = [CalendarCheck, Camera, Film, BookOpen];

  return (
    <section id="experience" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Process</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How We Document Your Celebration
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            A stress-free, professional journey from your very first conversation to holding your handcrafted wedding album.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={step.step}
                className="relative bg-[#13151f] border border-white/5 hover:border-[#d4af37]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-white/20 group-hover:text-[#d4af37]/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
