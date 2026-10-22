import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { StarDoodle, ScratchDoodle, ArrowDoodle, SmileyDoodle, StarburstBadge } from './Doodles';

export const ShowcaseBanner: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#EAE8E3] border-t-3 border-b-3 border-[#111111] overflow-hidden">
      
      {/* Decorative street doodles and yellow shapes */}
      <div className="absolute -top-6 left-12 transform -rotate-12 pointer-events-none hidden md:block">
        <StarburstBadge
          textTop="GOOD IDEAS."
          textBottom="BETTER CONTENT."
          bg="#FFD329"
          className="scale-90"
        />
      </div>

      <div className="absolute top-8 right-20 pointer-events-none hidden lg:block">
        <ScratchDoodle size={48} color="#FF6418" />
      </div>

      <div className="absolute bottom-6 left-1/4 pointer-events-none hidden md:block">
        <StarDoodle size={36} fill="#FFD329" stroke="#111111" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle kicker badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border-2 border-[#111111] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#111111] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF6418]" />
          <span>CREATIVE SHOWCASE // 2026</span>
        </div>

        {/* Oversized Blue Bubble Typography: BIG IDEAS. BOLD CONTENT. REAL IMPACT. */}
        <div className="relative inline-block my-4">
          <h2 className="font-display font-black tracking-tight leading-[0.92] text-4xl sm:text-6xl md:text-7xl lg:text-8xl streetwear-bubble-blue select-none">
            <span className="block transform -rotate-1">BIG IDEAS.</span>
            <span className="block transform rotate-1 mt-2 text-[#3467FF]">BOLD CONTENT.</span>
            <span className="block transform -rotate-0.5 mt-2 text-[#111111]">REAL IMPACT.</span>
          </h2>

          {/* Hand-drawn decorations around typography */}
          <div className="absolute -top-4 -right-8 hidden sm:block">
            <StarDoodle size={42} fill="#FF6418" />
          </div>

          <div className="absolute -bottom-8 -left-12 hidden md:block">
            <ArrowDoodle color="#FF6418" direction="curved" />
          </div>
        </div>

        {/* Handwritten text decoration */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="font-hand text-2xl sm:text-3xl font-bold text-[#FF6418] transform -rotate-2">
            No cookie-cutter templates. Authentic storytelling only.
          </span>
          <SmileyDoodle size={32} color="#111111" />
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20%E2%80%94%20Let's%20Create%20Something%20Great`}
            className="inline-flex items-center gap-3 bg-[#111111] text-white hover:bg-[#FF6418] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-display font-black text-sm sm:text-base uppercase tracking-wider sticker-btn border-2 border-[#111111] transition-all shadow-[6px_6px_0px_#111111]"
          >
            <span>Let's Create Something Great</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
