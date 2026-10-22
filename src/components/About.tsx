import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { StarDoodle, ScratchDoodle, ArrowDoodle, SmileyDoodle } from './Doodles';
import { CheckCircle2, Sparkles, Terminal, Video, Target, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'Creative Strategy':
        return <Target className="w-4 h-4 text-[#FF6418]" />;
      case 'Social Media Marketing':
        return <TrendingUp className="w-4 h-4 text-[#3467FF]" />;
      case 'Video Editing':
        return <Video className="w-4 h-4 text-[#FFD329]" />;
      case 'AI & Technology':
        return <Terminal className="w-4 h-4 text-emerald-600" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#EAE8E3]/60 border-t-2 border-b-2 border-[#111111] relative overflow-hidden">
      
      {/* Decorative background doodles */}
      <div className="absolute top-8 right-12 hidden lg:block opacity-20 pointer-events-none">
        <StarDoodle size={44} fill="#FF6418" />
      </div>
      <div className="absolute bottom-6 left-12 hidden lg:block opacity-25 pointer-events-none">
        <ScratchDoodle size={40} color="#3467FF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6418] mb-2">
            <span>ABOUT ME</span>
            <span>/</span>
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
            {PERSONAL_INFO.aboutTitle}
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-display font-medium text-[#3467FF]">
            {PERSONAL_INFO.aboutSubtitle}
          </p>
        </div>

        {/* Two-Column Modern Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Large Editorial-Style Image Placeholder Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Orange background offset card layer */}
            <div className="absolute -inset-3 bg-[#FF6418] rounded-3xl border-3 border-[#111111] transform -rotate-1 z-0" />
            
            <div className="relative z-10 bg-white rounded-3xl border-3 border-[#111111] p-6 shadow-[6px_8px_0px_#111111] flex flex-col justify-between min-h-[420px]">
              
              {/* Card Header Strip */}
              <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF6418] border border-black" />
                  <span className="w-3 h-3 rounded-full bg-[#FFD329] border border-black" />
                  <span className="w-3 h-3 rounded-full bg-[#3467FF] border border-black" />
                </div>
                <span className="font-mono text-xs font-bold uppercase text-[#111111]">
                  EDITORIAL VISUAL // 2026
                </span>
              </div>

              {/* Graphic Showcase Center */}
              <div className="my-6 p-6 rounded-2xl bg-[#F5F3EE] border-2 border-dashed border-[#111111] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute -top-3 -right-3">
                  <StarDoodle size={32} fill="#FFD329" />
                </div>
                
                <div className="w-20 h-20 rounded-2xl bg-[#3467FF] border-2 border-black flex items-center justify-center text-white mb-4 shadow-[3px_3px_0px_#111111] transform -rotate-3">
                  <Sparkles className="w-10 h-10" />
                </div>

                <div className="font-display font-black text-xl text-[#111111] tracking-tight">
                  TECH × STORYTELLING
                </div>
                
                <p className="text-xs font-mono text-gray-600 mt-2 max-w-xs">
                  AI & Data Science Engineering Foundation with High-Retention Video & Digital Marketing Prowess
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#111111] bg-[#FFD329] px-3 py-1 rounded-full border border-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>Real Creator & Brand Collaborations</span>
                </div>
              </div>

              {/* Handwritten note & Doodles */}
              <div className="pt-2 flex items-center justify-between relative">
                <div className="flex items-center gap-2">
                  <ArrowDoodle color="#FF6418" direction="right" />
                  <span className="font-hand text-2xl font-bold text-[#FF6418] transform -rotate-2">
                    Creativity meets strategy!
                  </span>
                </div>
                <SmileyDoodle size={32} color="#111111" />
              </div>

            </div>
          </div>

          {/* RIGHT: About Description with bold typography & skill badges */}
          <div className="lg:col-span-7 flex flex-col">
            
            <div className="space-y-4 text-base sm:text-lg text-[#111111]/90 leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'font-semibold text-[#111111] text-lg sm:text-xl' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* 4 Skill Badges */}
            <div className="mt-8 pt-6 border-t-2 border-[#111111]/15">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block mb-4">
                CORE PILLARS OF EXPERTISE:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PERSONAL_INFO.aboutBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-3 bg-white p-3.5 rounded-xl border-2 border-[#111111] shadow-[3px_3px_0px_#111111] hover:translate-x-1 transition-transform"
                  >
                    <div className="p-2 rounded-lg bg-[#F5F3EE] border border-black/20">
                      {getBadgeIcon(badge)}
                    </div>
                    <span className="font-display font-bold text-sm text-[#111111]">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro quote strip */}
            <div className="mt-8 bg-[#3467FF] text-white p-4 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_#111111] flex items-center justify-between">
              <span className="font-marker text-sm tracking-wide">
                "NO FLUFF. PURE AUDIENCE RESONANCE."
              </span>
              <span className="font-mono text-xs font-bold text-[#FFD329] uppercase">
                EST. 2026
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
