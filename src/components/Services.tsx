import React, { useState } from 'react';
import { ArrowUpRight, Share2, Compass, Film, Megaphone, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types/portfolio';
import { StarDoodle, ScratchDoodle } from './Doodles';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getServiceIcon = (type: ServiceItem['iconType'], color: string) => {
    const isDark = color === '#111111' || color === '#FFFFFF';
    const iconColor = isDark ? 'text-current' : 'text-current';

    switch (type) {
      case 'social':
        return <Share2 className={`w-8 h-8 ${iconColor}`} />;
      case 'strategy':
        return <Compass className={`w-8 h-8 ${iconColor}`} />;
      case 'video':
        return <Film className={`w-8 h-8 ${iconColor}`} />;
      case 'ads':
        return <Megaphone className={`w-8 h-8 ${iconColor}`} />;
      default:
        return <Share2 className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6418] mb-2">
              <span>SERVICES</span>
              <span>/</span>
              <span>CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              What I Bring to the Table.
            </h2>
            <p className="mt-2 text-lg sm:text-xl font-display font-medium text-[#111111]/70">
              Creative solutions for the digital world.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-hand text-xl font-bold text-[#111111] transform -rotate-2">
              Tailored execution for modern creators & brands
            </span>
            <StarDoodle size={28} fill="#FFD329" />
          </div>
        </div>

        {/* 4 Large Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const isOrange = service.colorName === 'Orange';
            const isBlue = service.colorName === 'Electric Blue';
            const isYellow = service.colorName === 'Bright Yellow';
            const isLavender = service.colorName === 'Light Lavender';

            let cardBg = 'bg-[#FF6418] text-white';
            let badgeBg = 'bg-black text-white';
            let hoverShadow = 'hover:shadow-[8px_10px_0px_#111111]';

            if (isBlue) {
              cardBg = 'bg-[#3467FF] text-white';
              badgeBg = 'bg-[#FFD329] text-black';
            } else if (isYellow) {
              cardBg = 'bg-[#FFD329] text-[#111111]';
              badgeBg = 'bg-black text-white';
            } else if (isLavender) {
              cardBg = 'bg-[#E2D9F3] text-[#111111]';
              badgeBg = 'bg-[#3467FF] text-white';
            }

            return (
              <div
                key={service.id}
                onMouseEnter={() => setSelectedService(service.id)}
                onMouseLeave={() => setSelectedService(null)}
                className={`group relative rounded-3xl border-3 border-[#111111] p-8 sm:p-10 transition-all duration-200 cursor-pointer ${cardBg} shadow-[6px_6px_0px_#111111] ${hoverShadow} hover:-translate-y-1.5`}
              >
                {/* Top Number + Icon Row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xs border-2 border-[#111111] flex items-center justify-center shadow-[3px_3px_0px_#111111] group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      {getServiceIcon(service.iconType, service.bgColor)}
                    </div>
                    <span className="font-mono text-sm font-black tracking-widest px-3 py-1 rounded-full border border-black/30 bg-black/10">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Interactive Arrow Button */}
                  <div className="w-12 h-12 rounded-full border-2 border-[#111111] bg-white text-[#111111] flex items-center justify-center shadow-[2px_2px_0px_#111111] group-hover:bg-[#111111] group-hover:text-white transition-all group-hover:rotate-45">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight leading-tight mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg leading-relaxed opacity-95 font-medium mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables Pill List */}
                <div className="pt-6 border-t border-black/15">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider mb-3 opacity-90">
                    What's Included:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 shrink-0 opacity-80" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner street scratch detail on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
                  <ScratchDoodle size={28} color="#111111" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
