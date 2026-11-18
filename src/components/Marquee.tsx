import React from 'react';

const ITEMS = ['VIDEO EDITING', 'YOUTUBE', 'REELS & SHORTS', 'MOTION GRAPHICS', 'THUMBNAILS', 'BRANDING', 'SOCIAL MEDIA'];

export const Marquee: React.FC = () => (
  <div className="bg-[#111111] text-white border-y-3 border-[#111111] overflow-hidden py-3 -rotate-1 scale-[1.02]" aria-hidden="true">
    <div className="marquee-track flex w-max gap-10 font-display font-black text-lg sm:text-2xl tracking-wider">
      {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          {t}
          <span className="text-[#FF6418]">✳</span>
        </span>
      ))}
    </div>
  </div>
);
