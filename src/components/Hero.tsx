import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  StarDoodle,
  ScratchDoodle,
  ArrowDoodle,
  SmileyDoodle,
  StarburstBadge,
  FivePointStarDoodle
} from './Doodles';

export const Hero: React.FC = () => {
  // Fixed permanent editorial portrait photo
  const userPhoto = '/profile.svg';

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Streetwear Texture Elements */}
      <div className="absolute top-10 right-1/4 pointer-events-none opacity-20 hidden md:block">
        <ScratchDoodle size={48} color="#FF6418" />
      </div>
      <div className="absolute bottom-12 left-8 pointer-events-none opacity-25 hidden md:block">
        <FivePointStarDoodle size={36} color="#3467FF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Hero Typography & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Small outlined badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-[#111111] bg-white font-mono text-xs font-bold uppercase tracking-wider text-[#111111] shadow-[2px_2px_0px_#111111] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6418]" />
              <span>{PERSONAL_INFO.heroBadge}</span>
            </div>

            {/* Massive Bold Headline: CHAITANYA in black, DEOKAR in streetwear pop graffiti orange */}
            <div className="relative w-full">
              <h1 className="font-display font-black tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl select-none">
                <span className="block text-[#111111]">CHAITANYA</span>
                
                {/* Surname with streetwear bubble pop art treatment inspired by the reference image */}
                <span className="relative inline-block mt-1">
                  <span className="streetwear-bubble-orange font-black italic tracking-tighter inline-block transform -rotate-1">
                    DEOKAR.
                  </span>
                  
                  {/* Surrounding Hand-Drawn Doodle Accents */}
                  <div className="absolute -top-4 -right-10 hidden sm:block animate-pulse">
                    <StarDoodle size={38} fill="#FFD329" />
                  </div>
                  <div className="absolute -bottom-5 right-20 hidden sm:block">
                    <ScratchDoodle size={34} color="#111111" />
                  </div>
                </span>
              </h1>
            </div>

            {/* Secondary Headline */}
            <h2 className="mt-6 text-2xl sm:text-3xl font-display font-bold text-[#111111] flex items-center gap-3">
              <span>{PERSONAL_INFO.heroSecondary}</span>
              <div className="inline-block transform rotate-12">
                <SmileyDoodle size={28} color="#FF6418" />
              </div>
            </h2>

            {/* Description Copy */}
            <p className="mt-4 text-base sm:text-lg text-[#111111]/80 max-w-xl leading-relaxed font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-[#111111] text-white hover:bg-[#FF6418] px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider sticker-btn border-2 border-[#111111] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-white text-[#111111] hover:bg-[#FFD329] px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider sticker-btn border-2 border-[#111111] transition-all"
              >
                <span>About Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Streetwear Accents Bar */}
            <div className="mt-10 pt-6 border-t-2 border-[#111111]/15 w-full flex flex-wrap items-center gap-6 text-xs font-mono font-semibold text-[#111111]/70">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FF6418] rounded-full border border-black" />
                <span>Creative Direction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#3467FF] rounded-full border border-black" />
                <span>Video Editing & Motion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FFD329] rounded-full border border-black" />
                <span>AI & Data Strategy</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Large Portrait Cutout Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Blue fluid abstract backdrop blob inspired by reference image */}
            <div className="absolute -inset-4 sm:-inset-6 z-0 pointer-events-none">
              <svg
                viewBox="0 0 450 450"
                className="w-full h-full text-[#3467FF] opacity-90 drop-shadow-[5px_6px_0px_#111111]"
                fill="currentColor"
              >
                <path d="M380,180 C410,250 390,360 310,400 C230,440 120,410 70,340 C20,270 30,160 90,90 C150,20 280,30 340,90 C370,120 370,150 380,180 Z" />
              </svg>
            </div>

            {/* Yellow Starburst Sticker (Top Right) */}
            <div className="absolute -top-6 -right-4 sm:-right-8 z-30 transform rotate-12">
              <StarburstBadge
                textTop="GOOD IDEAS."
                textBottom="BETTER CONTENT."
                className="scale-90 sm:scale-100"
              />
            </div>

            {/* Main Editorial Card Container */}
            <div className="relative z-10 w-full max-w-md bg-[#F5F3EE] rounded-3xl border-3 border-[#111111] p-5 shadow-[8px_10px_0px_#111111] overflow-hidden">
              
              {/* Inner Cutout Canvas */}
              <div className="relative aspect-[4/5] w-full rounded-2xl bg-gradient-to-b from-[#EAE8E3] to-[#DDD9CE] border-2 border-[#111111] overflow-hidden flex flex-col justify-between">
                
                {/* Background graphic elements inside photo card */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-[#111111] text-white px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6418]" />
                  <span>CHAITANYA DEOKAR</span>
                </div>

                {/* Hand-drawn scribble tag on card */}
                <div className="absolute top-14 right-4 z-20 font-marker text-xs text-[#111111] transform rotate-6 bg-[#FFD329] px-2 py-0.5 rounded border border-black shadow-[2px_2px_0px_#111111]">
                  CREATE.
                </div>

                {/* Fixed Portrait Content: Full-Bleed High Quality Photo */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={userPhoto}
                    alt="Chaitanya Deokar"
                    className="w-full h-full object-cover filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle soft gradient vignette overlay at the bottom for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Sticker Elements: INSPIRE & GROW */}
                <div className="relative z-20 w-full flex items-center justify-between p-4 mt-auto">
                  <div className="font-marker text-xs text-white bg-[#3467FF] px-2.5 py-1 rounded border border-black shadow-[2px_2px_0px_#111111] transform -rotate-3">
                    INSPIRE.
                  </div>
                  <div className="font-marker text-xs text-[#111111] bg-[#FFD329] px-2.5 py-1 rounded border border-black shadow-[2px_2px_0px_#111111] transform rotate-3">
                    GROW.
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer Strip */}
              <div className="mt-3 flex items-center justify-between text-xs font-mono font-bold text-[#111111]">
                <div className="flex items-center gap-1">
                  <span>AI CREATIVE</span>
                  <span className="text-[#FF6418]">★</span>
                  <span>STRATEGY</span>
                </div>
                <div className="text-[10px] text-gray-500 font-mono">
                  CH-2026
                </div>
              </div>
            </div>

            {/* Floating Doodled Arrow pointing to hero text */}
            <div className="absolute -bottom-6 -left-8 z-30 hidden sm:block">
              <ArrowDoodle color="#FF6418" direction="curved" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
